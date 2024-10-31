#!/bin/bash

# Exit on error
set -e

# Configuration
IMAGE_NAME="bastienlaw-test"
CONTAINER_NAME="bastienlaw-test"
PORT=3000

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Ensure we're in the right directory
cd "$(dirname "$0")/.."

# Function to cleanup on exit
cleanup() {
    echo -e "\n${YELLOW}Cleaning up...${NC}"
    docker stop ${CONTAINER_NAME} 2>/dev/null || true
    docker rm ${CONTAINER_NAME} 2>/dev/null || true
    echo -e "${GREEN}Cleanup complete${NC}"
}

# Register cleanup function to run on script exit
trap cleanup EXIT

echo -e "${YELLOW}Starting local Docker test...${NC}"

# Check if docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${RED}Error: docker is not installed${NC}"
    exit 1
fi

# Stop and remove existing container if it exists
echo -e "${YELLOW}Removing any existing test containers...${NC}"
docker stop ${CONTAINER_NAME} 2>/dev/null || true
docker rm ${CONTAINER_NAME} 2>/dev/null || true

# Build the image
echo -e "${YELLOW}Building Docker image...${NC}"
docker build -t ${IMAGE_NAME}:latest .

# Run the container
echo -e "${YELLOW}Starting container...${NC}"
docker run -d \
    --name ${CONTAINER_NAME} \
    -p ${PORT}:${PORT} \
    -e NODE_ENV=production \
    ${IMAGE_NAME}:latest

# Wait for container to start
echo -e "${YELLOW}Waiting for container to start...${NC}"
sleep 5

# Check container status
if [ "$(docker inspect -f {{.State.Running}} ${CONTAINER_NAME})" != "true" ]; then
    echo -e "${RED}Container failed to start${NC}"
    echo -e "${YELLOW}Container logs:${NC}"
    docker logs ${CONTAINER_NAME}
    exit 1
fi

# Test health endpoint
echo -e "${YELLOW}Testing health endpoint...${NC}"
HEALTH_CHECK=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:${PORT}/_health)
if [ "$HEALTH_CHECK" == "200" ]; then
    echo -e "${GREEN}Health check passed${NC}"
else
    echo -e "${RED}Health check failed with status: ${HEALTH_CHECK}${NC}"
    echo -e "${YELLOW}Container logs:${NC}"
    docker logs ${CONTAINER_NAME}
    exit 1
fi

# Test main application endpoint
echo -e "${YELLOW}Testing main application endpoint...${NC}"
APP_CHECK=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:${PORT})
if [ "$APP_CHECK" == "200" ]; then
    echo -e "${GREEN}Application check passed${NC}"
else
    echo -e "${RED}Application check failed with status: ${APP_CHECK}${NC}"
    echo -e "${YELLOW}Container logs:${NC}"
    docker logs ${CONTAINER_NAME}
    exit 1
fi

# Show container resource usage
echo -e "${YELLOW}Container resource usage:${NC}"
docker stats ${CONTAINER_NAME} --no-stream

# Show container logs
echo -e "${YELLOW}Container logs:${NC}"
docker logs ${CONTAINER_NAME}

echo -e "${GREEN}All tests passed successfully!${NC}"
echo -e "${YELLOW}Container is still running for manual testing at http://localhost:${PORT}${NC}"
echo -e "${YELLOW}Run 'docker stop ${CONTAINER_NAME}' when finished testing${NC}"

# Keep the script running to maintain the container
echo -e "${YELLOW}Press Ctrl+C to stop the container and cleanup${NC}"
while true; do sleep 1; done 
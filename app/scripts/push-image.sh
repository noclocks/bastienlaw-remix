#!/bin/bash

# Exit on error
set -e

# Configuration
PROJECT_ID="sapient-terrain-419221"
ARTIFACT_REGION="us"  # Multi-region for Artifact Registry
REPOSITORY="bastienlaw"
IMAGE_NAME="bastienlaw-remix"
TAG="latest"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Ensure we're in the right directory
cd "$(dirname "$0")/.."

# Check if docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${RED}Error: docker is not installed${NC}"
    exit 1
fi

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}Error: gcloud CLI is not installed${NC}"
    exit 1
fi

# First, create the repository if it doesn't exist
echo -e "${YELLOW}Ensuring Artifact Registry repository exists...${NC}"
gcloud artifacts repositories create ${REPOSITORY} \
    --repository-format=docker \
    --location=${ARTIFACT_REGION} \
    --description="Repository for Bastien Law website" \
    --quiet || true

# Full image name for Artifact Registry
FULL_IMAGE_NAME="${ARTIFACT_REGION}-docker.pkg.dev/${PROJECT_ID}/${REPOSITORY}/${IMAGE_NAME}:${TAG}"

echo -e "${YELLOW}Configuring Docker authentication...${NC}"
gcloud auth configure-docker ${ARTIFACT_REGION}-docker.pkg.dev

echo -e "${YELLOW}Building Docker image...${NC}"
docker build -t ${IMAGE_NAME}:${TAG} .

echo -e "${YELLOW}Tagging image for Artifact Registry...${NC}"
docker tag ${IMAGE_NAME}:${TAG} ${FULL_IMAGE_NAME}

echo -e "${YELLOW}Pushing image to Artifact Registry...${NC}"
docker push ${FULL_IMAGE_NAME}

echo -e "${GREEN}Successfully pushed image to Artifact Registry:${NC}"
echo -e "${GREEN}${FULL_IMAGE_NAME}${NC}" 
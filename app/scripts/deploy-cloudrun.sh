#!/bin/bash

# Exit on error
set -e

# Configuration
PROJECT_ID="sapient-terrain-419221"
ARTIFACT_REGION="us"  # Multi-region for Artifact Registry
CLOUDRUN_REGION="us-central1"
SERVICE_NAME="bastienlaw-remix-prod"
ARTIFACT_REGISTRY="docker.pkg.dev"
REPOSITORY="bastienlaw"
HEALTH_CHECK_PATH="/_health"  # Define health check path separately

# Parse command line arguments
SKIP_BUILD=false
SKIP_PUSH=false
SKIP_DEPLOY=false

while [[ $# -gt 0 ]]; do
  case $1 in
    --skip-build)
      SKIP_BUILD=true
      shift
      ;;
    --skip-push)
      SKIP_PUSH=true
      shift
      ;;
    --skip-deploy)
      SKIP_DEPLOY=true
      shift
      ;;
    --help)
      echo "Usage: $0 [options]"
      echo "Options:"
      echo "  --skip-build    Skip Docker build step"
      echo "  --skip-push     Skip pushing to Artifact Registry"
      echo "  --skip-deploy   Skip Cloud Run deployment"
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done

# Ensure we're in the right directory
cd "$(dirname "$0")/.."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}Starting deployment process...${NC}"

# Check required tools only if needed
if [ "$SKIP_BUILD" = false ] || [ "$SKIP_PUSH" = false ]; then
    if ! command -v docker &> /dev/null; then
        echo -e "${RED}Error: docker is not installed${NC}"
        exit 1
    fi
fi

if [ "$SKIP_PUSH" = false ] || [ "$SKIP_DEPLOY" = false ]; then
    if ! command -v gcloud &> /dev/null; then
        echo -e "${RED}Error: gcloud CLI is not installed${NC}"
        exit 1
    fi
fi

# Authentication and configuration (only if needed)
if [ "$SKIP_PUSH" = false ] || [ "$SKIP_DEPLOY" = false ]; then
    echo -e "${YELLOW}Checking Google Cloud authentication...${NC}"

    # Check for existing credentials
    if ! gcloud auth print-identity-token &>/dev/null; then
        echo -e "${YELLOW}No valid credentials found. Logging in...${NC}"
        gcloud auth login --update-adc
        gcloud auth application-default set-quota-project ${PROJECT_ID}
    else
        echo -e "${GREEN}Using existing credentials${NC}"
    fi

    # Get and verify the current user
    CURRENT_USER=$(gcloud config get-value account)
    if [ -z "$CURRENT_USER" ]; then
        echo -e "${RED}Error: No active Google Cloud account${NC}"
        exit 1
    fi
    echo -e "${YELLOW}Current user: ${CURRENT_USER}${NC}"

    # Set the project
    gcloud config set project ${PROJECT_ID}
fi

# Docker authentication (only if needed)
if [ "$SKIP_PUSH" = false ]; then
    echo -e "${YELLOW}Checking Docker authentication...${NC}"
    # Check if Docker credentials exist
    if ! docker-credential-gcloud list | grep -q "${ARTIFACT_REGION}-docker.pkg.dev"; then
        echo -e "${YELLOW}Configuring Docker authentication...${NC}"
        gcloud auth configure-docker ${ARTIFACT_REGION}-${ARTIFACT_REGISTRY} --quiet
    else
        echo -e "${GREEN}Docker credentials already configured${NC}"
    fi
fi

# Set up image name
IMAGE_NAME="${ARTIFACT_REGION}-${ARTIFACT_REGISTRY}/${PROJECT_ID}/${REPOSITORY}/${SERVICE_NAME}:latest"

# Build Docker image if not skipped
if [ "$SKIP_BUILD" = false ]; then
    echo -e "${YELLOW}Building Docker image...${NC}"
    docker build -t ${IMAGE_NAME} .
fi

# Push to Artifact Registry if not skipped
if [ "$SKIP_PUSH" = false ]; then
    echo -e "${YELLOW}Pushing image to Artifact Registry...${NC}"
    docker push ${IMAGE_NAME}
fi

# Deploy to Cloud Run if not skipped
if [ "$SKIP_DEPLOY" = false ]; then
    echo -e "${YELLOW}Deploying to Cloud Run...${NC}"
    gcloud run deploy ${SERVICE_NAME} \
      --image ${IMAGE_NAME} \
      --project ${PROJECT_ID} \
      --region ${CLOUDRUN_REGION} \
      --platform managed \
      --allow-unauthenticated \
      --port 3000 \
      --set-env-vars="NODE_ENV=production" \
      --min-instances=0 \
      --max-instances=10 \
      --memory=512Mi \
      --cpu=1 \
      --timeout=300 \
      --concurrency=80 \
      --session-affinity \
      --cpu-throttling \
      --execution-environment=gen2 \
      --service-account="${SERVICE_NAME}-sa@${PROJECT_ID}.iam.gserviceaccount.com" \
      --tag=latest \
      --ingress=all \
      --labels="env=prod,app=bastienlaw" \
      --use-http2
fi

echo -e "${GREEN}Process completed successfully!${NC}"
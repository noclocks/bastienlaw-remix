#!/bin/bash

# Exit on error
set -e

# Configuration
PROJECT_ID="sapient-terrain-419221"
SERVICE_NAME="bastienlaw-remix-prod"
USER_EMAIL="jimmy.briggs@noclocks.dev"
ARTIFACT_REGION="us"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}Setting up service account and permissions...${NC}"

# Create service account if it doesn't exist
gcloud iam service-accounts create ${SERVICE_NAME}-sa \
    --display-name="Bastien Law Remix Production Service Account" \
    --project=${PROJECT_ID} || true

# Grant necessary roles to service account
echo -e "${YELLOW}Granting roles to service account...${NC}"

# Cloud Run roles
gcloud projects add-iam-policy-binding ${PROJECT_ID} \
    --member="serviceAccount:${SERVICE_NAME}-sa@${PROJECT_ID}.iam.gserviceaccount.com" \
    --role="roles/run.invoker"

gcloud projects add-iam-policy-binding ${PROJECT_ID} \
    --member="serviceAccount:${SERVICE_NAME}-sa@${PROJECT_ID}.iam.gserviceaccount.com" \
    --role="roles/run.developer"

# Artifact Registry roles
gcloud projects add-iam-policy-binding ${PROJECT_ID} \
    --member="serviceAccount:${SERVICE_NAME}-sa@${PROJECT_ID}.iam.gserviceaccount.com" \
    --role="roles/artifactregistry.reader"

gcloud projects add-iam-policy-binding ${PROJECT_ID} \
    --member="serviceAccount:${SERVICE_NAME}-sa@${PROJECT_ID}.iam.gserviceaccount.com" \
    --role="roles/artifactregistry.writer"

# Grant user permissions
echo -e "${YELLOW}Granting permissions to user...${NC}"

# Service Account User role
gcloud projects add-iam-policy-binding ${PROJECT_ID} \
    --member="user:${USER_EMAIL}" \
    --role="roles/iam.serviceAccountUser"

# Cloud Run Admin role
gcloud projects add-iam-policy-binding ${PROJECT_ID} \
    --member="user:${USER_EMAIL}" \
    --role="roles/run.admin"

# Artifact Registry Admin role
gcloud projects add-iam-policy-binding ${PROJECT_ID} \
    --member="user:${USER_EMAIL}" \
    --role="roles/artifactregistry.admin"

# Service Account Token Creator role
gcloud projects add-iam-policy-binding ${PROJECT_ID} \
    --member="user:${USER_EMAIL}" \
    --role="roles/iam.serviceAccountTokenCreator"

# Create Artifact Registry repository if it doesn't exist
echo -e "${YELLOW}Creating Artifact Registry repository...${NC}"
gcloud artifacts repositories create bastienlaw \
    --repository-format=docker \
    --location=${ARTIFACT_REGION} \
    --description="Repository for Bastien Law website" \
    --project=${PROJECT_ID} || true

# Configure Docker authentication
echo -e "${YELLOW}Configuring Docker authentication...${NC}"
gcloud auth configure-docker ${ARTIFACT_REGION}-docker.pkg.dev --quiet

echo -e "${GREEN}Setup completed successfully!${NC}"
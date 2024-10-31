#!/bin/bash

# Exit on error
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Check if project ID is provided
if [ -z "$1" ]; then
    echo -e "${RED}Error: Project ID is required${NC}"
    echo "Usage: $0 <project-id>"
    exit 1
fi

PROJECT_ID="$1"
BILLING_ACCOUNT=$(gcloud beta billing accounts list --format="value(ACCOUNT_ID)" --limit=1)

echo -e "${YELLOW}Creating new GCP project: ${PROJECT_ID}${NC}"

# Create new project
gcloud projects create ${PROJECT_ID} --name="Bastien Law Website"

# Link billing account
if [ -n "$BILLING_ACCOUNT" ]; then
    echo -e "${YELLOW}Linking billing account...${NC}"
    gcloud beta billing projects link ${PROJECT_ID} \
        --billing-account=${BILLING_ACCOUNT}
else
    echo -e "${RED}No billing account found. Please link billing account manually.${NC}"
    exit 1
fi

# Set as current project
gcloud config set project ${PROJECT_ID}

echo -e "${GREEN}Project setup completed successfully!${NC}"
echo -e "Next steps:"
echo -e "1. Run ./infrastructure/scripts/bootstrap-terraform.sh ${PROJECT_ID}"
echo -e "2. Run terraform init in the infrastructure/terraform directory"
echo -e "3. Run terraform apply to create the infrastructure" 
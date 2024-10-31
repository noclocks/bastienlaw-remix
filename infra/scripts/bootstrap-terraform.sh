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
REGION="us-central1"
TF_STATE_BUCKET="${PROJECT_ID}-terraform-state"

echo -e "${YELLOW}Setting up Terraform backend in GCS...${NC}"

# Create GCS bucket for Terraform state
gsutil mb -p ${PROJECT_ID} -l ${REGION} gs://${TF_STATE_BUCKET} || true

# Enable versioning
gsutil versioning set on gs://${TF_STATE_BUCKET}

# Create backend config
cat > infrastructure/terraform/backend.tf << EOF
terraform {
  backend "gcs" {
    bucket = "${TF_STATE_BUCKET}"
    prefix = "terraform/state"
  }
}
EOF

echo -e "${GREEN}Terraform backend configured successfully!${NC}"
echo -e "Next steps:"
echo -e "1. cd infrastructure/terraform"
echo -e "2. terraform init"
echo -e "3. terraform plan -var=\"project_id=${PROJECT_ID}\"" 
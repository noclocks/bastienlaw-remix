Here's a summary of all the necessary steps taken to set up and configure the GitHub Actions workflow for deploying to Google Cloud Run:

## 1. Google Cloud Setup

1. Create a Workload Identity Pool:
   ```
   gcloud iam workload-identity-pools create "github" \
     --project="client-bastienlaw" \
     --location="global" \
     --display-name="GitHub Actions Pool"
   ```

2. Create a Workload Identity Provider:
   ```
   gcloud iam workload-identity-pools providers create-oidc "bastienlaw-remix" \
     --project="client-bastienlaw" \
     --location="global" \
     --workload-identity-pool="github" \
     --display-name="My GitHub Repo Provider" \
     --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository,attribute.repository_owner=assertion.repository_owner" \
     --attribute-condition="assertion.repository_owner == 'noclocks'" \
     --issuer-uri="https://token.actions.githubusercontent.com"
   ```

3. Create a service account for GitHub Actions:
   ```
   gcloud iam service-accounts create "github-actions-sa" \
     --project="client-bastienlaw" \
     --display-name="GitHub Actions Service Account"
   ```

## 2. IAM Permissions Setup

1. Grant Artifact Registry Writer role:
   ```
   gcloud projects add-iam-policy-binding "client-bastienlaw" \
     --member="serviceAccount:github-actions-sa@client-bastienlaw.iam.gserviceaccount.com" \
     --role="roles/artifactregistry.writer"
   ```

2. Allow Workload Identity Provider to impersonate the service account:
   ```
   gcloud iam service-accounts add-iam-policy-binding github-actions-sa@client-bastienlaw.iam.gserviceaccount.com \
     --project="client-bastienlaw" \
     --role="roles/iam.workloadIdentityUser" \
     --member="principalSet://iam.googleapis.com/projects/122409892475/locations/global/workloadIdentityPools/github/attribute.repository/noclocks/bastienlaw-remix"
   ```

3. Grant Cloud Run Admin role:
   ```
   gcloud projects add-iam-policy-binding client-bastienlaw \
     --member="serviceAccount:github-actions-sa@client-bastienlaw.iam.gserviceaccount.com" \
     --role="roles/run.admin"
   ```

4. Grant Service Account User role on the Compute Engine default service account:
   ```
   gcloud iam service-accounts add-iam-policy-binding \
     122409892475-compute@developer.gserviceaccount.com \
     --member="serviceAccount:github-actions-sa@client-bastienlaw.iam.gserviceaccount.com" \
     --role="roles/iam.serviceAccountUser"
   ```

5. Grant Service Account Token Creator role to the Cloud Run service agent:
   ```
   gcloud iam service-accounts add-iam-policy-binding \
     122409892475-compute@developer.gserviceaccount.com \
     --member="serviceAccount:service-122409892475@serverless-robot-prod.iam.gserviceaccount.com" \
     --role="roles/iam.serviceAccountTokenCreator"
   ```

## 3. GitHub Actions Workflow Configuration

1. Set up environment variables in the workflow:
   ```yaml
   env:
     PROJECT_ID: 'client-bastienlaw'
     REGION: 'us-east1'
     SERVICE: 'bastienlaw-website'
     WORKLOAD_IDENTITY_PROVIDER: 'projects/122409892475/locations/global/workloadIdentityPools/github/providers/bastienlaw-remix'
   ```

2. Configure authentication step:
   ```yaml
   - id: 'auth'
     name: 'Authenticate to Google Cloud'
     uses: 'google-github-actions/auth@v2'
     with:
       workload_identity_provider: '${{ env.WORKLOAD_IDENTITY_PROVIDER }}'
       service_account: 'github-actions-sa@${{ env.PROJECT_ID }}.iam.gserviceaccount.com'
   ```

3. Set up Docker configuration:
   ```yaml
   - name: 'Configure Docker'
     run: |
       gcloud auth configure-docker ${{ env.REGION }}-docker.pkg.dev
   ```

4. Build and push Docker image:
   ```yaml
   - name: 'Build and Push Container'
     run: |-
       DOCKER_TAG="${{ env.REGION }}-docker.pkg.dev/${{ env.PROJECT_ID }}/${{ env.SERVICE }}/${{ env.SERVICE }}:${{ github.sha }}"
       docker build --tag "${DOCKER_TAG}" -f ./app/Dockerfile ./app 
       docker push "${DOCKER_TAG}"
   ```

5. Deploy to Cloud Run:
   ```yaml
   - name: 'Deploy to Cloud Run'
     id: deploy
     uses: 'google-github-actions/deploy-cloudrun@v2'
     with:
       service: '${{ env.SERVICE }}'
       region: '${{ env.REGION }}'
       image: '${{ env.REGION }}-docker.pkg.dev/${{ env.PROJECT_ID }}/${{ env.SERVICE }}/${{ env.SERVICE }}:${{ github.sha }}'
   ```

These steps cover the entire process of setting up the Google Cloud environment, configuring the necessary permissions, and creating a GitHub Actions workflow to build, push, and deploy a Docker container to Cloud Run.

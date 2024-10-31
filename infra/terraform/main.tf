terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }

  backend "gcs" {
    # Will be configured by bootstrap script
  }
}

# Enable required APIs
resource "google_project_service" "required_apis" {
  for_each = toset([
    "cloudrun.googleapis.com",
    "artifactregistry.googleapis.com",
    "iam.googleapis.com",
    "containerregistry.googleapis.com"
  ])

  project = var.project_id
  service = each.value

  disable_dependent_services = true
  disable_on_destroy        = false
}

# Artifact Registry Repository
resource "google_artifact_registry_repository" "app" {
  provider = google
  project  = var.project_id
  location = var.region
  
  repository_id = "bastienlaw"
  description   = "Docker repository for Bastien Law website"
  format        = "DOCKER"

  depends_on = [google_project_service.required_apis]
}

# Cloud Run Service Account
resource "google_service_account" "cloudrun_service_account" {
  project      = var.project_id
  account_id   = "bastienlaw-remix-sa"
  display_name = "Bastien Law Remix Service Account"
}

# IAM roles for the service account
resource "google_project_iam_member" "service_account_roles" {
  for_each = toset([
    "roles/run.invoker",
    "roles/run.developer",
    "roles/artifactregistry.reader"
  ])

  project = var.project_id
  role    = each.value
  member  = "serviceAccount:${google_service_account.cloudrun_service_account.email}"
}

# Cloud Run service
resource "google_cloud_run_v2_service" "app" {
  name     = "bastienlaw-remix"
  location = var.region
  project  = var.project_id

  template {
    containers {
      image = var.container_image

      ports {
        container_port = 3000
      }

      env {
        name  = "NODE_ENV"
        value = "production"
      }
    }

    service_account = google_service_account.cloudrun_service_account.email
  }

  depends_on = [google_project_service.required_apis]
}

# Make the service public
resource "google_cloud_run_service_iam_member" "public" {
  location = google_cloud_run_v2_service.app.location
  project  = google_cloud_run_v2_service.app.project
  service  = google_cloud_run_v2_service.app.name
  role     = "roles/run.invoker"
  member   = "allUsers"
} 
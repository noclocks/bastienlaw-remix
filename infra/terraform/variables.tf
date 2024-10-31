variable "project_id" {
  description = "The GCP project ID"
  type        = string
}

variable "region" {
  description = "The default GCP region"
  type        = string
  default     = "us-central1"
}

variable "container_image" {
  description = "The container image to deploy"
  type        = string
  default     = "us-docker.pkg.dev/project-id/bastienlaw/bastienlaw-remix:latest"
} 
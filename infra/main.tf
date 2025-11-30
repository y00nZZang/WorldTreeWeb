terraform {
  required_version = ">= 1.6.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Optional: Configure remote state backend
  # backend "s3" {
  #   bucket = "worldtreeweb-terraform-state"
  #   key    = "state/terraform.tfstate"
  #   region = "us-east-1"
  # }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = var.project_name
      ManagedBy   = "Terraform"
    }
  }
}

# TODO: Add infrastructure resources
# Examples:
# - VPC and networking
# - ECS/EC2 for compute
# - S3 for image storage
# - RDS/DocumentDB for database
# - CloudFront for CDN

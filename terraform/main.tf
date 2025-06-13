terraform {
  required_version = ">= 1.12.2, < 1.13.0"
}

provider "aws" {
  region = "us-west-2"

  default_tags {
    tags = var.default_tags
  }
}
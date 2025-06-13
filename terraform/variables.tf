variable "default_tags" {
  description = "Default tags applied to all resources"
  type        = map(string)
  default = {
    Project     = "boulderheights"
    Environment = "dev"
    Owner       = "gilford.tristan"
    ManagedBy   = "terraform"
    Purpose     = "community-mapping-site"
  }
}

# Infrastructure

This directory contains Terraform configurations for deploying WorldTreeWeb to the cloud.

## Structure

```
infra/
├── main.tf              # Main infrastructure configuration
├── variables.tf         # Variable definitions
├── outputs.tf           # Output values
├── terraform.tfvars.example  # Example configuration (copy to terraform.tfvars)
└── modules/             # Reusable modules (optional, for future use)
    ├── compute/
    ├── storage/
    ├── database/
    └── network/
```

## Usage

### Initialize Terraform

```bash
cd infra
terraform init
```

### Configure Variables

```bash
cp terraform.tfvars.example terraform.tfvars
# Edit terraform.tfvars with your actual values
```

### Plan Changes

```bash
terraform plan
```

### Apply Changes

```bash
terraform apply
```

### Destroy Resources

```bash
terraform destroy
```

## Configuration

Copy `terraform.tfvars.example` to `terraform.tfvars` and fill in actual values:

```hcl
aws_region   = "us-east-1"
project_name = "worldtreeweb"
```

## Notes

- Never commit `terraform.tfvars` or `*.tfstate` files to Git
- This is a single-server setup for MVP development
- Can be expanded to multiple environments (dev/staging/prod) later
- Follow principle of least privilege for IAM roles

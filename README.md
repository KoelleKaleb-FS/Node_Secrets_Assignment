# Node_Secrets_Assignment# Node Secrets Management Project

This project demonstrates three different approaches to managing secrets in a Node.js application. Each approach highlights specific risks and benefits, culminating in a secure and scalable method for local development.

## Parts Overview

### 1. Hardcoded Secrets

- Secrets are directly embedded in the code.
- **Branch**: [`part-1`](https://github.com/KoelleKaleb-FS/Node_Secrets_Assignment/tree/part-1)
- **Risks**:
  - Exposes secrets in the codebase.
  - Not scalable or secure.

### 2. Shared Secrets File

- Secrets are moved to a shared `secrets.json` file.
- **Branch**: [`part-2`](https://github.com/KoelleKaleb-FS/Node_Secrets_Assignment/tree/part-2)
- **Risks**:
  - Shared files are prone to accidental exposure.
  - Secrets are static and hard to rotate.

### 3. Non-Shared Secrets

- Secrets are managed using `.env` and `dotenv`.
- **Branch**: [`part-3`](https://github.com/KoelleKaleb-FS/Node_Secrets_Assignment/tree/part-3)
- **Benefits**:
  - Separates secrets from code.
  - Prevents secrets from being included in version control.

## Lessons Learned

1. Hardcoding secrets is insecure and should always be avoided.
2. Using shared files improves separation but still poses security risks.
3. Using environment variables with `.env` and `.gitignore` is a secure approach for local development.
4. For production, secrets should be managed using centralized secrets managers like AWS Secrets Manager, Azure Key Vault, or HashiCorp Vault.

## Repository Links

- **GitHub Repository**: [Node Secrets Assignment](https://github.com/KoelleKaleb-FS/Node_Secrets_Assignment)

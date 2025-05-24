# Node_Secrets_Assignment# Node Secrets Management - Part 3: Non-Shared Secrets

This is the third and final part of a project demonstrating secure secrets management in a Node.js application. In this part, secrets are stored in a `.env` file and managed using the `dotenv` package.

---

## Description

The application uses environment variables to securely manage sensitive information, such as API keys. The `.env` file containing secrets is excluded from the repository using `.gitignore`, ensuring they are not shared publicly.

---

## Getting Started

### Prerequisites

- Node.js installed on your system.
- Git installed.

---

### Installation

1. Clone the repository and switch to the `part-3` branch:

   ```bash
   git clone git@github.com:KoelleKaleb-FS/Node_Secrets_Assignment.git
   cd Node_Secrets_Assignment
   git checkout part-3
   ```

2. Install Dependencies:

   ```bash
   npm install
   ```

3. Create a .env file in the project root witht the following content:
   API_KEY=your_secret_key

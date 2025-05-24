# Node Secrets Management - Part 2: Shared Secrets File

This is the second part of a project demonstrating different approaches to managing secrets in a Node.js application. In this part, the application reads secrets from a shared `secrets.json` file. While this separates secrets from the codebase, it still has security risks.

---

## Description

The application uses a `secrets.json` file to manage sensitive information like API keys. This file is included in the repository, allowing the application to function without hardcoded secrets.

---

## Getting Started

### Prerequisites

- Node.js installed on your system.
- Git installed.

---

### Installation

1. Clone the repository and switch to the `part-2` branch:
   ```bash
   git clone git@github.com:KoelleKaleb-FS/Node_Secrets_Assignment.git
   cd Node_Secrets_Assignment
   git checkout part-2
    npm install

   ```

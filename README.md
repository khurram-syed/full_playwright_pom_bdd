# Full Playwright Cucumber BDD POM Framework

> A complete **Playwright + Cucumber (BDD) + Page Object Model (POM)** automation framework for scalable **UI, API, and Stub-based testing**.

---

## 🧪 Table of Contents

- About the Project
- Tech Stack
- Project Structure
- Getting Started
- Environment Configuration
- Scripts
- Running Tests
- BDD Workflow
- Reporting
- Debugging
- CI/CD Ready

---

## 📌 About the Project

This repository demonstrates a modern, maintainable automation framework using:

- Playwright for fast, reliable browser automation  
- Cucumber (Gherkin) for BDD-style, business-readable scenarios  
- Page Object Model (POM) for clean separation of concerns  
- Allure Reporting for rich execution insights  
- UI, API, and Stub-based testing  
- Tag-based execution and CI-ready setup  

---

## 🛠 Tech Stack

- Playwright (@playwright/test)
- Cucumber (@cucumber/cucumber)
- TypeScript
- Allure Reporter
- Node.js (LTS)
- dotenv

---

## 📁 Project Structure

```
.github/               CI workflows
.vscode/               VS Code debug config
pages/                 Page Objects
support/               Hooks & World
test-data/              Test data
tests/
  feature/              Feature files
  steps/                Step definitions
cucumber.js             cucumber config (paths, require, format etc.)
playwright.config.ts    mostly config is overwritten by cucumber.js (except expect wait)  
tsconfig.json
package.json
.env.example
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm
- Java (for Allure)

### Installation

```bash
npm install
```

---

## 🔐 Environment Configuration

Create `.env` file:

```env
TEST_USER_EMAIL=example@email.com
TEST_USER_PASS=password
HEADLESS=true
BROWSER=chromium
```

---

## 📜 Scripts

```bash
npm test
npm run test:smoke
npm run test:ci
```

---

## 🧠 Running Tests

```bash
npx cucumber-js
npx cucumber-js --tags "@smoke"
```

---

## 🧩 BDD Workflow

```
Feature → Steps → Page Objects → Playwright
```

---

## 📊 Reporting

```bash
npm run allure:report:open
```

---

## 🐞 Debugging

```bash
PWDEBUG=1 npx cucumber-js
```

---

## 🤖 CI/CD Ready

- GitHub Actions supported
- Secrets via CI environment variables
- Allure reports uploaded as artifacts

---

## 📌 Final Note

Ideal for enterprise projects, interviews, and CI/CD pipelines.

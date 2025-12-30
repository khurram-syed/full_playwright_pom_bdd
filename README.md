#Full Playwright Cucumber BDD POM Framework

A complete Playwright + Cucumber (BDD) + Page Object Model (POM) automation framework for scalable UI and API testing.

🧪 Table of Contents

About the Project

Tech Stack

Project Structure

Getting Started

Prerequisites

Installation

Environment Configuration

Scripts (from package.json)

Running Tests

BDD Workflow

Reporting

Debugging

CI/CD Ready

📌 About the Project

This repository demonstrates a modern, maintainable automation framework using:

Playwright for fast, reliable browser automation

Cucumber (Gherkin) for BDD-style, business-readable scenarios

Page Object Model (POM) for clean separation of concerns

Allure Reporting for rich execution insights

Support for UI, API, and Stub-based testing

Tag-based execution, parallel runs, and CI-ready setup

🛠 Tech Stack

Playwright (@playwright/test)

Cucumber (@cucumber/cucumber)

TypeScript

Allure Reporter

Node.js (LTS recommended)

dotenv (environment variables)

📁 Project Structure
/ (root)
│
├── .github/                  # CI workflows (GitHub Actions)
├── .vscode/                  # Debug configurations
│   └── launch.json
│
├── pages/                    # Page Object Model
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   └── PageManager.ts
│
├── support/                  # Framework setup & hooks
│   ├── CustomWorld.ts
│   ├── Hooks.ts
│   ├── setup.ts
│   └── user.ts               # Env-based user data
│
├── test-data/                # Test data (non-sensitive)
│   ├── articles.json
│   └── tags.json
│
├── tests/
│   ├── feature/
│   │   ├── ui_tests/
│   │   │   ├── 1ui_homePage.feature
│   │   │   └── 2ui_loginPage.feature
│   │   ├── api_tests/
│   │   └── stub_tests/
│   │
│   └── steps/
│       ├── ui_tests/
│       │   ├── 1ui_homePage.steps.ts
│       │   └── 2ui_loginPage.steps.ts
│       ├── api_tests/
│       └── stub_tests/
│
├── allure-results/            # Generated (ignored by git)
├── playwright-report/         # Generated (ignored by git)
├── test-results/              # Generated (ignored by git)
│
├── cucumber.js                # Cucumber configuration
├── playwright.config.ts       # Playwright configuration
├── tsconfig.json
├── package.json
├── .env.example               # Environment template
└── README.md

🚀 Getting Started
Prerequisites

Node.js (v18+ recommended)

npm

Java (required for Allure)

Installation
git clone https://github.com/your-org/playwright-cucumber-bdd.git
cd playwright-cucumber-bdd
npm install

🔐 Environment Configuration

Create a .env file at the project root:

TEST_USER_EMAIL=your_email@example.com
TEST_USER_PASS=your_password
HEADLESS=true
BROWSER=chromium


⚠️ .env is ignored by git.
Use .env.example as a reference.

📜 Scripts (from package.json)
▶ Run All Tests
npm test

🧪 Run Tagged Tests
npm run test:smoke

🖥 Run in Headed Mode
HEADLESS=false npm test

🌐 Browser-specific Runs
npm run test:chrome
npm run test:firefox
npm run test:webkit

🚀 CI Mode (Headless)
npm run test:ci

🧠 Running Tests Manually
Run all features
npx cucumber-js

Run by tag
npx cucumber-js --tags "@home11"

Run specific feature
npx cucumber-js tests/feature/ui_tests/1ui_homePage.feature

🧩 BDD Workflow
Feature File (.feature)
        ↓
Step Definitions (.steps.ts)
        ↓
Page Objects (pages/)
        ↓
Playwright Actions & Assertions

Example Feature
Feature: Login Page

  @login
  Scenario: Verify successful login
    Given user navigates to the "login" Page
    When user enters valid credentials
    Then user should be logged in successfully

📊 Reporting (Allure)
Generate & Open Report
npm run allure:report:open


Reports include:

Scenario & step status

Retries

Tags

Screenshots on failure

Execution time

Environment info

📂 Output:

allure-report/

🐞 Debugging
Debug via VS Code

Use the “Debug Cucumber Tests” launch config:

Supports debugger;

Uses PWDEBUG=1

Opens Playwright Inspector

Debug via CLI
PWDEBUG=1 npx cucumber-js

🔁 Retry & Stability

Scenario-level retries configured via cucumber.js

Recommended: retries enabled only in CI

Clean failure visibility in Allure

🤖 CI/CD Ready

GitHub Actions supported (.github/workflows)

Secrets managed via GitHub / Azure DevOps

Artifacts (Allure report) uploaded automatically

✅ Key Highlights

Clean BDD + POM architecture

UI, API, and Stub testing in one framework

Parallel execution

Environment-based configuration

Enterprise-ready CI setup

📌 Final Note

This framework is suitable for:

Enterprise QA teams

Contract / consulting projects

Interview showcases

CI/CD pipelines (GitHub Actions / Azure DevOps)
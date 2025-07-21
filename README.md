# BDDOrangeHRM

This project tests OrangeHRM for my final project on QA bootcamp using **Cypress** with the **Cucumber** BDD and **Page Object Model (POM)** pattern.
It is designed for OrangeHRM demo website automation, using feature files for scenarios and JavaScript classes for page interactions.

---

## 📁 Project Structure

```
BinusCypressBDD/
│
├── cypress/
│   ├── e2e/
│   │   └── features/                # BDD: Gherkin feature files
│   │       └── login.feature
|   |       └── logout.feature
|   |       └── viewInfo.feature
│   │
│   ├── pages/                       # POM: Page Object Model classes
│   │   ├── DashboardPage.js
│   │   └── LoginPage.js
│   │
│   ├── support/
│   │   ├── step_definitions/        # BDD: Step definitions (glue code)
│   │   │   └── loginSteps.js
|   |   |   └── logoutSteps.js
|   |   |   └── viewinfoSteps.js
│   │   └── e2e.js                   # Cypress support file (reporter registration, commands)
│   │
│   └── screenshots/                 # Cypress screenshots (auto-generated on failure)
│
├── cypress.config.js                # Cypress configuration (BDD, POM, reporter setup)
├── package.json
└── ...
```

---

## 🧩 Key Technologies

- **Cypress**: End-to-end test runner.
- **Cucumber (Gherkin)**: BDD syntax for writing test scenarios.
- **@badeball/cypress-cucumber-preprocessor**: Enables `.feature` files in Cypress.
- **Page Object Model (POM)**: Organizes page interactions in classes.

---

## 🚦 How It Works

- **Feature files** (`.feature`) describe scenarios in plain English (Gherkin).
- **Step definitions** (`step_definitions/*.js`) implement the steps using Cypress commands and POM classes.
- **Page Object Model** (`pages/*.js`) encapsulates UI interactions for each page.
- **Cypress config** sets up the BDD preprocessor and the Mochawesome reporter.

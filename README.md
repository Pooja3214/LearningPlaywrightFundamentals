# Learning Playwright Fundamentals

This repository contains source code for learning the fundamentals of [Playwright](https://playwright.dev/), a powerful end-to-end testing framework for modern web applications.

## Project Structure

```
LearningPlaywrightFundamentals/
├── tests/
│   └── example.spec.ts       # Sample Playwright tests
├── playwright.config.ts      # Playwright configuration
├── package.json              # Project dependencies
├── package-lock.json         # Lock file for dependencies
└── .gitignore                # Git ignore rules
```

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Pooja3214/LearningPlaywrightFundamentals.git
   cd LearningPlaywrightFundamentals
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

- Run all tests:
  ```bash
  npx playwright test
  ```

- Run tests in headed mode (visible browser):
  ```bash
  npx playwright test --headed
  ```

- Run tests in a specific browser:
  ```bash
  npx playwright test --project=chromium
  ```

- Show HTML report:
  ```bash
  npx playwright show-report
  ```

## Configuration

The project is configured to run tests on three browsers:
- Chromium (Google Chrome)
- Firefox
- WebKit (Safari)

Configuration can be modified in `playwright.config.ts`.

## What is Playwright?

Playwright enables reliable end-to-end testing for modern web apps. It supports multiple browsers, handles auto-waiting, and provides features like:
- Cross-browser testing
- Mobile emulation
- Headless and headed execution
- Trace viewer for debugging
- Codegen for test generation

## Learn More

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)

## License

ISC

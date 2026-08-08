# Learning Playwright Fundamentals

This repository contains source code for learning the fundamentals of [Playwright](https://playwright.dev/), a powerful end-to-end testing framework for modern web applications.

## Project Structure

```
LearningPlaywrightFundamentals/
├── tests/                          # Playwright test suites
│   ├── 01_Basics/
│   ├── 02_first_tests/
│   ├── 03_Locators_Commands/
│   ├── 04_Session_Storage/
│   ├── 05_Allure_Reporting/
│   ├── 06_Multiple_Element_/
│   ├── 07_WebTables/
│   ├── 08_Web_Select_Frames_Iframe/
│   ├── 09_Frame_Iframe/
│   ├── 10_Keyboard_Hover_Drag_Drop/
│   ├── 11_JS_Alerts/
│   ├── 12_Handle_SVG/
│   ├── 13_Shadow_DOM/
│   ├── 14_FileUpload/
│   ├── 15_File_Download/
│   ├── 16_Scroll_toElement/
│   ├── 17_Expect_Assertions/
│   ├── 18_Test_hooks/
│   ├── 19_Data_Driven_Testing/
│   ├── 20_Page_Object_Model/
│   ├── 21_Fixture/
│   ├── 22_Misc_Concepts/
│   ├── 23_Advance_Framework/
│   ├── Projects/
│   └── Tasks/
├── utils/                          # Utility scripts (e.g., CustomReporter.ts)
├── playwright.config.ts            # Playwright configuration
├── package.json                    # Project dependencies
├── package-lock.json               # Lock file for dependencies
├── .gitignore                      # Git ignore rules
└── user-session.json               # Session storage state
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

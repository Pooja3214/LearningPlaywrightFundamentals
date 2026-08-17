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
│       ├── 6_July_Task/
│       ├── 10_July/
│       ├── 17th_July/
│       ├── 19_July/
│       ├── 20_July/
│       ├── 22_July/
│       ├── 24_July/
│       ├── 27_July/
│       └── 29_July/
├── utils/                          # Utility scripts (e.g., CustomReporter.ts)
├── out/                            # Failure screenshots (auto-generated)
├── output/                         # Downloaded files from tests
├── playwright.config.ts            # Playwright configuration
├── package.json                    # Project dependencies
├── package-lock.json               # Lock file for dependencies
├── tsconfig.json                   # TypeScript configuration
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

> **Note:** The project uses `@faker-js/faker` for test data generation, `allure-playwright` for Allure reports, and a custom reporter (`utils/CustomReporter.ts`) for lightweight reporting.

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

- Run tests with specific tags:
  ```bash
  npx playwright test --grep "@smoke"
  ```

- Run tests by priority (via npm scripts):
  ```bash
  npm run test:p1   # Runs tests tagged @p1
  npm run test:p2   # Runs tests tagged @p2
  npm run test:p3   # Runs tests tagged @p3
  npm run test:priority  # Runs p1, p2, and p3 sequentially
  ```

## Session Storage & Reuse

The project demonstrates how to save and reuse browser session state to skip repeated logins:

- **Save session** — `tests/04_Session_Storage/247_SessionStorage.spec.ts` logs into a demo app and saves cookies/localStorage to `./user-session.json`.
- **Reuse session** — `tests/04_Session_Storage/249_TestVWODashboard_NoCustomReport.spec.ts` and `tests/05_Allure_Reporting/248_TestVWODashboard.spec.ts` load the saved session via `test.use({ storageState: "./user-session.json" })` to access authenticated pages directly.

## Dropdown & Select Handling

The project includes dedicated examples for handling various dropdown and select box patterns:

- **Basic Select** — `tests/08_Web_Select_Frames_Iframe/259_Select.spec.ts` demonstrates native HTML `<select>` element interaction using `page.selectOption()`.
- **Custom Dropdowns** — `tests/08_Web_Select_Frames_Iframe/260_Custom_DD_Select.spec.ts` shows how to interact with custom-built dropdowns (e.g., language and experience selectors) using locator clicks and `getByRole`/`getByText`.
- **Advanced Select Components** — `tests/08_Web_Select_Frames_Iframe/261_Advance_Select_Pro.spec.ts` covers complex React-Select-style components including:
  - Single searchable select
  - Multi-select with removable chips
  - Creatable multi-select (type & press Enter)
  - Grouped/categorised options
  - Async dropdowns with fetched results

## Frame & Iframe Handling

The project includes examples for interacting with single, multiple, and nested iframes:

- **Single Iframe** — `tests/09_Frame_Iframe/262_Iframe.spec.ts` demonstrates filling a vehicle registration form inside a single iframe using `page.frameLocator()`.
- **Multiple Frames** — `tests/09_Frame_Iframe/263_frameSet.spec.ts` shows how to handle pages with multiple `<frame>` elements, iterate over frames, and interact with each frame by name.
- **Nested Iframes** — `tests/09_Frame_Iframe/264_Iframe_part2.spec.ts` covers chaining `frameLocator()` calls to interact with deeply nested iframes.

## Keyboard, Hover, Drag & Drop

Examples for advanced mouse and keyboard interactions:

- **Keyboard Events** — `tests/10_Keyboard_Hover_Drag_Drop/265_Keyboard.spec.ts` demonstrates pressing individual keys, key combinations (`Shift+O`), and using `keyboard.up()` / `keyboard.down()`.
- **Hover Actions** — `tests/10_Keyboard_Hover_Drag_Drop/266_SpiceJet_Hover.spec.ts` shows hovering over menu items before clicking sub-options.
- **Drag and Drop** — `tests/10_Keyboard_Hover_Drag_Drop/267_Drag_Drop.spec.ts` performs basic element-to-element drag-and-drop.
- **Advanced Drag and Drop** — `tests/10_Keyboard_Hover_Drag_Drop/268_Advance_Drag_Drop.spec.ts` demonstrates dragging cards between columns (e.g., Kanban board) and includes commented manual mouse path logic for finicky DnD libraries.
- **Context Menu (Right Click)** — `tests/10_Keyboard_Hover_Drag_Drop/269_Context_Menu.spec.ts` shows right-clicking to open a context menu and selecting an option.
- **Reference Guide** — `tests/10_Keyboard_Hover_Drag_Drop/learning.md` is a quick-reference cheat-sheet covering the Keyboard API, Mouse API, hover, drag-and-drop, and key combinations.

## JavaScript Alerts & Dialogs

Examples for handling native browser dialogs (alerts, confirms, and prompts):

- **JS Alerts** — `tests/11_JS_Alerts/270_JS.spec.ts` demonstrates handling three dialog types on [The Internet](https://the-internet.herokuapp.com/javascript_alerts):
  - **Alert** — simple alert with `dialog.accept()`.
  - **Confirm** — confirmation dialog with `dialog.accept()` or `dialog.dismiss()`.
  - **Prompt** — input dialog where text is supplied via `dialog.accept(inputText)` and the page result is asserted.

> Dialog handlers must be registered **before** the action that triggers the dialog (using `page.once('dialog', ...)`).

## SVG Handling

Examples for locating, interacting with, and extracting data from SVG elements:

- **Basic SVG Search** — `tests/12_Handle_SVG/271_SVG.spec.ts` demonstrates searching on Flipkart using an SVG search icon (`page.locator('svg')`) and extracting product titles.
- **SVG Widget Interaction** — `tests/12_Handle_SVG/272_SVG_Practice.spec.ts` covers interacting with SVG shapes (clicking a circle, asserting output text), handling radio buttons within SVG widgets, and iterating over SVG bar elements to read `data-*` attributes.
- **Advanced SVG Maps** — `tests/12_Handle_SVG/273_Advance_SVG.spec.ts` demonstrates handling complex SVG maps (SimpleMaps) by locating `<path>` elements inside `<svg>`, iterating over states, filtering by class, and clicking specific regions (e.g., selecting Rajasthan).

## Shadow DOM Handling

Examples for locating and interacting with elements inside Shadow DOM:

- **Shadow DOM Form Interaction** — `tests/13_Shadow_DOM/274_Shadow_DOM.spec.ts` demonstrates handling elements encapsulated in shadow DOM:
  - Locating shadow host elements using `getByTestId()` and chaining locators inside the shadow tree.
  - Filling input fields (`email`, `password`) and clicking submit buttons within shadow DOM.
  - Asserting status text returned from the shadow form.
  - Interacting with a counter component (`Increment` buttons) and asserting the updated counter value.
  - Working with **nested shadow DOM** — locating deeply nested shadow elements and filling forms inside nested shadow hosts.

## File Upload

Examples for handling single and multiple file uploads using Playwright:

- **Single File Upload** — `tests/14_FileUpload/275_File_Upload.spec.ts` demonstrates uploading a local file to a standard HTML file input on [The Internet](https://the-internet.herokuapp.com/upload) using `page.setInputFiles()`. It asserts the upload success message and the uploaded filename displayed on the page.
- **Multiple File Upload** — `tests/14_FileUpload/276_Multiple_File_Upload.spec.ts` shows uploading multiple files (including generated in-memory buffers with custom filenames and MIME types) to a complex multi-file upload component. This pattern is useful when you need to test uploads without relying on physical files on disk.

## File Download

Examples for handling file downloads using Playwright:

- **File Download** — `tests/15_File_Download/277_File_Download.spec.ts` demonstrates handling multiple file downloads on [The Testing Academy Playground](https://app.thetestingacademy.com/playwright/widgets/upload-download). It uses `page.waitForEvent("download")` to intercept static, JSON, and text file downloads triggered by buttons, then saves them to the `./output/` directory using `download.saveAs()`.

## Scroll to Element

Examples for scrolling and interacting with elements that require viewport visibility:

- **Scroll to View & Lazy Loading** — `tests/16_Scroll_toElement/278_ScrollToView.spec.ts` demonstrates scrolling strategies on [The Testing Academy Playground](https://app.thetestingacademy.com/playwright/widgets/scroll). It uses `scrollIntoViewIfNeeded()` to bring elements into the viewport, JavaScript-based scrolling via `page.evaluate()`, and verifies lazy-loaded lists by polling the element count until it grows past the initial value.

## Expect Assertions

Examples for Playwright's `expect` assertion API covering basic and advanced validation patterns:

- **Basic Assertions** — `tests/17_Expect_Assertions/279_Expect.spec.ts` demonstrates core matchers such as `toBe`, `toBeFalsy`, `toBeTruthy`, `toBeNull`, `toBeGreaterThan`, and `toEqual` for both primitives and objects.
- **Page & Locator Assertions** — `tests/17_Expect_Assertions/280_Expect.spec.ts` and `281_Expect.spec.ts` cover web-first assertions like `toHaveTitle`, `toBeVisible`, `toHaveText`, and `toHaveValue`.
- **Project-Level Assertions** — `tests/17_Expect_Assertions/282_Project.spec.ts` shows assertion patterns applied across project configurations.
- **Cheatsheet** — `tests/17_Expect_Assertions/283_Expect.cheatsheet.md` is a quick-reference guide for commonly used expect matchers.

## Test Hooks

Examples for test lifecycle management, annotations, and organizing tests with hooks and describe blocks:

- **Test Annotations** — `tests/18_Test_hooks/284_Test_Hook.spec.ts` demonstrates built-in test annotations: `test.skip()` for unsupported browsers, `test.slow()` for slow tests, `test.fixme()` for known broken tests, and `test.fail()` for expected failures.
- **Grouping & Nesting** — `tests/18_Test_hooks/287_Group.spec.ts` and `289_TestDescribe.spec.ts` show how to group related tests using `test.describe()` and nested describe blocks.
- **Before/After Hooks** — `tests/18_Test_hooks/288_Befre_After.spec.ts` covers `test.beforeAll`, `test.beforeEach`, `test.afterAll`, and `test.afterEach` for setup and teardown logic.
- **Test Priority** — `tests/18_Test_hooks/290_TestPriority.spec.ts` demonstrates ordering and prioritizing test execution.
- **Reference Guides** — `tests/18_Test_hooks/285_Chrome_Arg_List.md` lists useful Chrome launch arguments, and `286_Test_Hook_Cheatsheet.md` provides a quick-reference for hooks and annotations.

## Tasks

The `tests/Tasks/` folder contains practical assignments that apply the learned concepts:

- **24 July — Flipkart Cheapest Price Finder** — `tests/Tasks/24_July/Flipkart_CheapPrice_svg.spec.ts` searches for "macmini" on Flipkart using an SVG search icon, extracts all product titles and prices, and programmatically determines the cheapest price by parsing and comparing numeric values.
- **29 July — File Upload & Download Tasks** — `tests/Tasks/29_July/` contains practical assignments for file interactions:
  - **Upload Photo** — `Upload_Photo.spec.ts` demonstrates uploading a profile photo to [The Testing Academy Student Settings](https://app.thetestingacademy.com/student/settings) using `page.setInputFiles()`.
  - **Download File** — `download_file.spec.ts` demonstrates file download handling on [QAJobFit Dashboard](https://qajobfit.com/dashboard?tab=builder).

## Reporting

The project supports multiple reporting mechanisms:

- **Allure Reporting** — `tests/05_Allure_Reporting/` contains tests instrumented with Allure-compatible steps and attachments (screenshots). Results are written to `allure-results/`.
- **Custom Reporter** — `utils/CustomReporter.ts` is a lightweight custom Playwright reporter that generates `tta-report/`.
- **Built-in HTML Report** — Run `npx playwright show-report` to view the default HTML report with traces and screenshots.

## Configuration

The project is configured to run tests on Chromium using Firefox device settings. Other browser projects (Firefox, WebKit, mobile, branded browsers) are currently commented out.

Key settings in `playwright.config.ts`:
- `headless: false` — Browser is visible during execution
- `screenshot: 'on'` — Captures screenshots for every test
- `video: 'on'` — Records video for every test
- `trace: 'on'` — Collects traces for debugging
- `fullyParallel: false` — Tests run sequentially
- Custom reporter: `utils/CustomReporter.ts`

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


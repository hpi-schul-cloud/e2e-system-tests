## BDD Testing for "*Schulcloud-Verbund-Software*" using Cypress & Cucumber

Frameworks:

- [Cypress v12.8.0](https://docs.cypress.io/guides/references/changelog#12-8-0)

- [Cypress cucumber pre-processor v16.0.2](https://github.com/badeball/cypress-cucumber-preprocessor)

### Prepare development environment

Install or make sure Chrome browser (at least) have it in your development machine
1) Install [Node v18](https://nodejs.org/dist/)
2) Install [Git](https://git-scm.com/downloads)
3) Install [Github Desktop App](https://desktop.github.com/) (Optional)
3) Install IDE of your choice e.g. [VS code](https://code.visualstudio.com/download)
4) Install VS code extensions:
    - [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)
    -  [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

### How to setup/run Cypress tests locally

1) Clone the project via SSH `git clone git@github.com:hpi-schul-cloud/e2e-system-tests.git`
2) Add `cypress.env.json` in the root folder with credentials and environment settings.
3) Execute the following command in terminal `npm install` or `npm i` for installing the required packages
4) Execute the following command in terminal to run the tests in Cypress runner (UI) `npm run cy:open`
5) Execute the following command in terminal to run the tests in headless mode `npm run cy:run`
6) For running specific scenario: Run `npm run tag:only` and set tag `@only` above the scenario you want to run

### Framework Structure

```
(root)
|
|---- .github (containing github workflows)
|   |____ automatic-trigger.yml
|   |____ manual-trigger.yml
|   |____ scheduled-trigger.yml
|---- .vscode (setting for VS code extensions)
|---- cypress
|   |___ downloads
|   |___ fixtures
|   |___ e2e (containing feature files)
|   |___ screenshots
|   |___ support
|   |    |___ custom_commands (used in our tests)
|   |    |___ pages (containing methods)
|   |    |___ step_definitions (step hooks for feature files)
|   |    |___ command.js
|   |    |___ e2e.js
|   |___ videos
|---- reports (containing html report & assets)
|---- logs(contains logs of the test run)
|---- node_modules
|---- .editorconfig
|---- .gitattributes
|---- .gitignore
|---- reporter.js (for generating html reports)
|---- cypress.env.json (credentials & environment variables)
|---- cypress.config.json (cypress related settings)
|---- LICENSE
|---- package-lock.json
|---- package.json
|---- README.md
```

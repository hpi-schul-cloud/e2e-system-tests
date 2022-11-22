## BDD Testing for "*Schulcloud-Verbund-Software*" using Cypress & Cucumber

Frameworks:

- [Cypress v9.6.0](https://docs.cypress.io/guides/references/changelog#9-6-0) ( <span style="color:red">  *We use this version as from Cypress v10 onwards there are some structural changes, which we want to address in future* </span> )

- [Cypress cucumber pre-processor v4.3.1](https://github.com/TheBrainFamily/cypress-cucumber-example)

### Prepare development environment

Install or make sure Chrome browser (at least) have it in your development machine
1) Install [Node v17.9.0](https://nodejs.org/dist/)
2) Install [Git](https://git-scm.com/downloads)
3) Install [Github Desktop App](https://desktop.github.com/) (Optional)
3) Install IDE of your choice e.g. [VS code](https://code.visualstudio.com/download)
4) Install VS code extensions:
    - [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)
    -  [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

### How to setup/run Cypress tests locally

1) Clone the project `git clone https://github.com/hpi-schul-cloud/e2e-system-tests.git`
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
|   |___ .run (generated after running, used for html report)
|   |___ cucumber-json (generated after running scenarios, used by .run)
|   |___ downloads
|   |___ fixtures
|   |___ integration
|       |___ features (containing feature files)
|   |___ plugins
|   |___ reports (containing html report & assets)
|   |___ screenshots
|   |___ support
|   |    |___ custom_commands (used in our tests)
|   |    |___ pages (containing methods)
|   |    |___ step_definitions (step hooks for feature files)
|   |    |___ command.js
|   |    |___ index.js
|   |___ videos
|---- node_modules
|---- .editorconfig
|---- .gitattributes
|---- .gitignore
|---- cypress-html-report.js (for generating html reports)
|---- cypress.env.json (credentials & environment variables)
|---- cypress.json (cypress related setting)
|---- LICENSE
|---- package-lock.json
|---- package.json
|---- README.md
```

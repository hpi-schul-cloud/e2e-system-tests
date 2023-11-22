## BDD Testing for "*Schulcloud-Verbund-Software*" using Cypress & Cucumber

Frameworks:

- [Cypress v13.2.0](https://docs.cypress.io/guides/references/changelog#12-8-0)

- [Cypress cucumber pre-processor v18.0.6](https://github.com/badeball/cypress-cucumber-preprocessor)

### Prepare development environment

Install or make sure Chrome browser (at least) have it in your development machine

1) Install [Node v18](https://nodejs.org/dist/)
2) Install [Git](https://git-scm.com/downloads)
3) Install [Github Desktop App](https://desktop.github.com/) (Optional)
4) Install IDE of your choice e.g. [VS code](https://code.visualstudio.com/download)
5) Install VS code extensions:
    - [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)
    - [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

### How to setup/run Cypress tests locally

1) Clone the project
2) Duplicate [`template.env.json`](env_variables/template.env.json) file and rename the duplicated file to `local.env.json` in the env_variables folder with credentials available in 1Password. (Remember add all instances as in 1Password we have different vaults available)
3) Execute the following command in terminal `npm install` or `npm i` for installing the required packages
4) Execute the following command in terminal to run all stable tests in Cypress runner (UI): `npm run cy:open:local`
5) Execute the following command in terminal to run all stable tests in headless mode: `npm run tag:stable:local`
6) For running tests which are stable and running in PR's: Run `npm run tag:stable:pr:local`
7) For running tests which are stable and running in releases: Run `npm run tag:stable:release:local`
8) For running specific scenario: Run `npm run tag:only:local` and set tag `@only` above the scenario you want to run
9) For running all unstable tests: Run `npm run tag:unstable:local`

### Framework Structure

```text
(root)
|
|---- .github (containing github workflows)
|   |____ automatic-trigger.yml
|   |____ manual-trigger.yml
|   |____ scheduled-trigger.yml
|---- .vscode (setting for VS code extensions)
|---- env_variables
|   |____ template.env.json (credentials & environment variables - rename the file as mentioned above)
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
|---- scripts
|   |____ aggregate-json-files.sh (Aggregate all json file into one json file in CI)
|---- .editorconfig
|---- .gitattributes
|---- .gitignore
|---- reporter.js (for generating html reports)
|---- cypress.config.json (cypress related settings)
|---- LICENSE
|---- package-lock.json
|---- package.json
|---- README.md
```

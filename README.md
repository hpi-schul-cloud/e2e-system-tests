# BDD Testing for "Schulcloud-Verbund-Software" with Cypress

Framework we use: Cypress (<https://www.cypress.io/>)

## Prepare development environment

Install or make sure Chrome browser (at least) have it in your development machine
1) Install `node.js`
2) Install `Git`
3) Install IDE (e.g. Visual Studio Code)
4) Install in IDE (Visual Studio Code), Extention called --> `Cucumber (Gherkin) Full Support`
5) Install in IDE (Visual Studio Code), Extention called --> `EditorConfig`

## How to setup/run Cypress tests locally

1) Clone the project
2) Add "cypress.env.json" with the login tests data.
3) Execute the following command in terminal → `npm install --save-dev`
4) Execute the following command in terminal to run the tests in Cypress runner (UI) → `npm run cy:open`
5) Execute the following command in terminal to run the tests in headless mode → `npm run cy:run`

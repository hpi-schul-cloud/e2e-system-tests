# BDD Testing for dBildungscloud with Cypress

Framework we use: Cypress (<https://www.cypress.io/>)

## Prepare development environment

Install or make sure Chrome browser (at least) have it in your development machine
1) Install `node.js`
2) Install `Git`
3) Install IDE (e.g. Visual Studio Code)

## How to install Cypress

1) Check out E2E test repository and be in the correct project folder
2) Run following command in the terminal:  `npm init`  (this will create `package.json` file in the project)
3) Next, run the following command in the terminal: `npm install cypress --save-dev` ( this will create `node-module` folder and `package-lock.json` file inside the project)
4) Next, run the next following command in the terminal: `npx cypress open` (this will open the cypress UI when you execute it first time and will create the `cypress` folder and `cypress.json` file in the project)
5) Now cypress is installed in your machine.

## How to Configure Cucumber (BDD) plugin with Cypress

1) Make sure to be in the correct project/path
2) Run following command in the terminal:  `npm install --save-dev cypress-cucumber-preprocessor`
3) Add following script to the following file: cypress/plugins/index.js

```js
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
on('file:preprocessor', cucumber())
}
```

4) Add following script to the following file: /cypress.json

```js
{
 "testFiles": "**/*.feature"
}
```

5) Add following script to the following file: /package.json

```js
"cypress-cucumber-preprocessor": {
 "nonGlobalStepDefinitions": true
}
```

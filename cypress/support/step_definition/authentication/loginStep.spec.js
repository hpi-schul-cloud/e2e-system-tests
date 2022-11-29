const {
  Before,
  After,
  Given,
  Then
} = require('cypress-cucumber-preprocessor/steps')

Before(() => {
  cy.intercept('**/alerts', req => {
    delete req.headers['if-none-match']
  }).as('alerts_api')
})

Given('I am logged in as a {string} at {string}', (username, environment) => {
  cy.login(username, environment)
})

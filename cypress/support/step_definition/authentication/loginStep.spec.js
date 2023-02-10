const {
  Before,
  After,
  Given,
  Then
} = require('cypress-cucumber-preprocessor/steps')

Given('I am logged in as a {string} at {string}', (username, environment) => {
    cy.login(username, environment)
  })
const {
  Before,
  After,
  Given,
  Then
} = require('cypress-cucumber-preprocessor/steps')

Before(() => {
  cy.intercept('**/public').as('public_api')
  cy.intercept('**/me').as('me_api')
  cy.intercept('**/user/**').as('roles_api')
  cy.intercept('**/schools/**').as('schools_api')
  cy.intercept('**/dashboard').as('dashboard_api')
  cy.intercept('**/userPermissions?**').as('userPermissions_api')
  cy.intercept('**/classes?**').as('classes_api')
  cy.intercept('**/students?**').as('students_api')
  cy.intercept('**/locales/**').as('locales_api')
  cy.intercept('**/alerts').as('alerts_api')
})

Given('I am logged in as a {string} at {string}', (username, environment) => {
    cy.login(username, environment)
  })
const {
  Before,
  After,
  Given,
  Then
} = require('cypress-cucumber-preprocessor/steps')

Before(() => {
  cy.wrap(
    Cypress.automation('remote:debugger:protocol', {
      command: 'Network.clearBrowserCache'
    })
  )
  cy.intercept('**/public', req => {
    delete req.headers['if-none-match']
  }).as('public_api')
  cy.intercept('**/me', req => {
    delete req.headers['if-none-match']
  }).as('me_api')
  cy.intercept('**/user/**', req => {
    delete req.headers['if-none-match']
  }).as('roles_api')
  cy.intercept('**/schools/**', req => {
    delete req.headers['if-none-match']
  }).as('schools_api')
  cy.intercept('**/dashboard', req => {
    delete req.headers['if-none-match']
  }).as('dashboard_api')
  cy.intercept('**/userPermissions?**', req => {
    delete req.headers['if-none-match']
  }).as('userPermissions_api')
  cy.intercept('**/classes?**', req => {
    delete req.headers['if-none-match']
  }).as('classes_api')
  cy.intercept('**/students?**', req => {
    delete req.headers['if-none-match']
  }).as('students_api')
  cy.intercept('**/locales/**', req => {
    delete req.headers['if-none-match']
  }).as('locales_api')
  cy.intercept('**/alerts', req => {
    delete req.headers['if-none-match']
  }).as('alerts_api')
})

Given('I am logged in as a {string} at {string}', (username, environment) => {
  cy.login(username, environment)
})

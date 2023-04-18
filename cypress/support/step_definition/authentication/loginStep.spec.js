const {
  Before,
  After,
  Given
} = require('@badeball/cypress-cucumber-preprocessor')

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
  cy.intercept('**/alert').as('alert_api')
  cy.intercept('**/tasks**').as('tasks_api')
  cy.intercept('**/runtime.config.json').as('runtime_config_api')
  cy.intercept('**/board').as('board_api')
  cy.intercept('**/courses?**').as('courses_api')
  cy.intercept('**/homework/**').as('homework_api')
  cy.intercept('**/rooms/**').as('rooms_api')
  cy.intercept('**/delete/**').as('delete_api')
})

Given('I am logged in as a {string} at {string}', (username, environment) => {
  cy.login(username, environment)
  cy.wait('@dashboard_api')
})

// After(() => {
//   cy.readFile('test-run-details.json').then(data => {
//     const env = Cypress.env()
//     data.env.BRB = env['BRB']
//     data.env.NBC = env['NBC']
//     data.env.DEFAULT = env['DEFAULT']
//     data.browser = Cypress.browser
//     data.platform = Cypress.platform
//     data.endTime = new Array()
//     data.endTime.push(new Date().toLocaleString())
//     cy.writeFile('test-run-details.json', data)
//   })
// })

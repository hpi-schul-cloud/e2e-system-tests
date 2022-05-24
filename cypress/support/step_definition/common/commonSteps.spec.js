/*Given('I am logged in as a {string} at {string}', (username, environment) => {
  cy.login(username, environment)
})*/

Given('I am logged in as an teacher to brb', () => {
  cy.loginAsBRBTeacher()
})

Given('I am logged in as an admin to brb', () => {
  cy.loginAsBRBAdmin()
})

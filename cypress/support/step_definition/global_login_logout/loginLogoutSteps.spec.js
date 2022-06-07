Given('I am logged in as a {string} at {string}', (username, environment) => {
  cy.login(username, environment)
})

Then('I log out', () => {
  cy.logout().click({force: true})
})

Given('I am logged in as a {string} at {string}', (username, environment) => {
  cy.exec('npm cache clear --force')
  cy.login(username, environment)
})

Then('I log out', () => {
  cy.logout().click()
  cy.exec('npm cache clear --force')
})

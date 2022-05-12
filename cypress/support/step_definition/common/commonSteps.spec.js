Given('I am logged in as a {string} to {string}', (username, environment) => {
  cy.login(username, environment)
})

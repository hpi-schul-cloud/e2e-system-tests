Then('I log out', () => {
    cy.logout().click({ force: true })
  })
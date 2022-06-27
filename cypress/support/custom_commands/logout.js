Cypress.Commands.add('logout', () => {
    cy.get(initials).click()
    cy.get(logoutButton).click()
    cy.contains(/Herzlich willkommen|Login für registrierte Nutzer:innen/g)
  })
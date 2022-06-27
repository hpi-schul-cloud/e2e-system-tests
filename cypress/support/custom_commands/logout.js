const initials = '[data-testid="initials"]'
const logoutButton = '[data-testid="logout"]'

Cypress.Commands.add('logout', () => {
    cy.get(initials).click()
    cy.get(logoutButton).click()
    cy.contains(/Herzlich willkommen|Login für registrierte Nutzer:innen/g)
  })
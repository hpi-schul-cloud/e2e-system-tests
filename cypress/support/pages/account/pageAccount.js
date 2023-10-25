'use strict'

class Account {
  static #initialsButton = '[data-testid="initials"]'
  static #settingsButton = '[data-testid="settings"]'
  static #email = '[data-testid="user_email"]'
  static #emailReadOnly = '[data-testid="user_email_readonly"]'

  navigateToAccountSettingsSection () {
    cy.get(Account.#initialsButton).click()
    cy.get(Account.#settingsButton).click()
    cy.url().should('include', '/account')
  }

  verifyEmailEditable (isEditable) {
    if (isEditable) {
      cy.get(Account.#email).should('be.visible')
      cy.get(Account.#email).should('not.have.attr', 'readonly')
    } else {
      cy.get(Account.#emailReadOnly).should('be.visible')
      cy.get(Account.#emailReadOnly).should('have.attr', 'readonly')
    }
  }
}
export default Account

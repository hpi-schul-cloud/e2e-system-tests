'use strict'

class Account_Common {

  static #initialsButton = '[data-testid="initials"]';
  static #settingsButton = '[data-testid="settings"]'

  static #email = '[data-testid="user_email"]'
  static #emailReadOnly = '[data-testid="user_email_readonly"]'

  navigateToAccountSettingsSection() {
    cy.get(Account_Common.#initialsButton)
      .click()
    cy.get(Account_Common.#settingsButton)
      .click()
    cy.url()
      .should('include', '/account')
  }

  verifyEmailEditable(isEditable) {
    if (isEditable){
      cy.get(Account_Common.#email).should('be.visible');
      cy.get(Account_Common.#email).should('not.have.attr', 'readonly')
    } else {
      cy.get(Account_Common.#emailReadOnly).should('be.visible');
      cy.get(Account_Common.#emailReadOnly).should('have.attr', 'readonly')
    }
  }

}
export default Account_Common
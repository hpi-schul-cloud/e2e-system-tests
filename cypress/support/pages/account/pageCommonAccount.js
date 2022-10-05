'use strict'

class Account_Common {

  static #settingsButton = '[data-testid="settings"]'

  static #firstName = '[id="fName"]'
  static #lastName = '[id="lName"]'
  static #email = '[id="emailAddress"]'

  navigateToAccountSettingsSection() {
    cy.get(Account_Common.#settingsButton).click()
    cy.url().should('include', '/account')
  }

  verifyEmail(firstName) {
    cy.get(Tasks.#email).should('contain', firstname)
  }

}
export default Account_Common
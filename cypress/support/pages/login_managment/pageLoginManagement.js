'use strict'

class Login_Management {

  static #passwordRecoveryButton = '[data-testid="forgot-password"]'
  static #usernameLabel = '[data-testid="username-label"]'
  static #emailInputBox = '[id="username"]'
  static #infoMessage = '[data-testid="info-message"]'
  static #submitButton = '[data-testid="btn-submit"]'
  static #cancelButton = '[data-testid="btn-cancel"]'

  beingOnLoginPage() {
    cy.visit(Cypress.env('BRB'))
  }

  clickOnForgotPassword() {
    cy.get(Login_Management.#passwordRecoveryButton).eq(1).click()
  }

  showElementOnDailog() {
    cy.get(Login_Management.#usernameLabel).should('be.visible')
    cy.get(Login_Management.#emailInputBox).should('be.visible')
    cy.get(Login_Management.#infoMessage).should('be.visible')
    cy.get(Login_Management.#submitButton).should('be.visible')
    cy.get(Login_Management.#cancelButton).should('be.visible')
  }
}
export default Login_Management
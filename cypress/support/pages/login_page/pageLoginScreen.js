'use strict'

class Login_Screen{
  static #passwordRecoveryButton = '[data-testid="forgot-password"]'
  static #usernameLabel = '[data-testid="username-label"]'
  static #emailInputBox = '[id="username"]'
  static #infoMessage = '[data-testid="info-message"]'
  static #submitButton = '[data-testid="btn-submit"]'
  static #cancelButton = '[data-testid="btn-cancel"]'


  beingOnLoginPage(){
    cy.visit('https://brb-main.cd.dbildungscloud.dev/login')
  }

  clickOnForgotPassword () {
    cy.get(Login_Screen.#passwordRecoveryButton).click()
  }

  showElementOnDailog(){
    cy.get(Login_Screen.#usernameLabel).should('be.visible')
    cy.get(Login_Screen.#emailInputBox).should('be.visible')
    cy.get(Login_Screen.#infoMessage).should('be.visible')
    cy.get(Login_Screen.#submitButton).should('be.visible')
    cy.get(Login_Screen.#cancelButton).should('be.visible')
  }
}
export default Login_Screen

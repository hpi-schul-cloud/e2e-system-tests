'use strict'

class Login_Screen{
  static #passwordRecoveryButton = '[data-testid="forgot-password"]'
  static #usernameLabel = '[data-testid="username-label"]'
  static #emailInputBox = '[data-testid="username"]'
  static #infoMessage = '[data-testid="info-message"]'
  static #submitButton = '[data-testid="btn-submit"]'
  static #cancelButton = '[data-testid="btn-cancel"]'


  beingOnLoginPage(){
    cy.visit('https://default-main.cd.dbildungscloud.dev/login')  // this wil adapted once new cypress.env.json is merged
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

  enterEmailIsMandatory(){
    cy.get(Login_Screen.#emailInputBox).eq(1).clear()
    cy.get(Login_Screen.#submitButton).click()

  }

  seeDailogIsStillOpen(){
    cy.get(Login_Screen.#usernameLabel).should('be.visible')
  }
}
export default Login_Screen
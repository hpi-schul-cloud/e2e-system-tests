'use strict'

class Login_Screen{
  static #passwordRecoveryButton = '[data-testid="forgot-password"]'
  static #usernameLabel = '[data-testid="username-label"]'
  static #emailInputBox = '[data-testid="username"]'
  static #infoMessage = '[data-testid="info-message"]'
  static #submitButton = '[data-testid="btn-submit"]'
  static #cancelButton = '[data-testid="btn-cancel"]'


  beingOnLoginPage(){
    cy.visit(Cypress.env('DEAFULT'))
  }

  clickOnForgotPassword () {
    cy.contains(Login_Screen.#passwordRecoveryButton).click()
  }

  showElementOnDailog(){
    cy.get(Login_Screen.#dailogTitle).should('be.visible')
    cy.contains('Deine E-Mail-Adresse/Nutzername')
    cy.get(Login_Screen.#emailInputBox).should('be.visible')
    cy.contains('Wenn du zusätzliche Hilfe beim Passwort zurücksetzen benötigst, wende dich bitte an deine betreuende Lehrkraft (als Schüler:in) oder an deinen Admin (als Lehrkraft).Diese können dein Passwort über die Nutzerverwaltung mit sofortiger Wirkung zurücksetzen')
    cy.get(Login_Screen.#submitButton).should('be.visible')
    cy.get(Login_Screen.#cancelButton).should('be.visible')
  }

  enterEmailIsMandatory(){
    cy.get(Login_Screen.#submitButton).eq(1).click()
  }
}
export default Login_Screen
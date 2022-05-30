'use strict'

class Login_Screen{
  static #passwordRecovery = '[class="submit-pwrecovery"]'
  static #dailogTitle = '[class="h4 modal-title"]'
  static #emailInputBox = '[id="username"]'
  static #submitButton = '[type="Submit"]'
  static #cancelButton = '[type="button"]'



  clickOnForgotPassword () {
    cy.visit(Cypress.env('DEFAULT'))
    cy.get(Login_Screen.#passwordRecovery).click()
  }

  visibleElementOnDailog(){
    cy.contains('Your E-mail address / Username' || 'Deine E-Mail-Adresse/Nutzername')
    cy.get(Login_Screen.#dailogTitle).should('be.visible')
    cy.get(Login_Screen.#emailInputBox).should('be.visible')
    cy.get(Login_Screen.#submitButton).should('be.visible')
    cy.get(Login_Screen.#cancelButton).should('be.visible')

  }

  enterEmailIsMandatory(){
    cy.
  }


}
export default Login_Screen
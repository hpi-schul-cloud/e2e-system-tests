'use strict'

class Login_Screen{
  static #questionIcon = '.fa-question'


  clickOnForgotPassword () {
    cy.visit('/dashboard')
    cy.get(Help.#questionIcon).click()
  }
}
export default Login_Screen
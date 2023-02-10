'use strict'

class Login_Management {
  static #passwordRecoveryButton = '[data-testid="forgot-password"]'
  static #usernameLabel = '[data-testid="username-label"]'
  static #emailInput = '[data-testid="username"]'
  static #infoMessage = '[data-testid="info-message"]'
  static #submitButton = '[data-testid="btn-submit"]'
  static #cancelButton = '[data-testid="btn-cancel-"]'
  static #brokerButton = '[data-testid="submit-oauth-login"]'
  static #emailInputBox = '[data-testid="username-email"]'
  static #passwordField = '[data-testid = "password-email"]'
  static #notificationBannerField = '[data-testid="notification"]'
  static #loginFormSelector = 'form.login-form'
  static #inputFieldInvalidPseudoSelector = 'input:invalid'

  static #testData = {
    usernameText:
      'Fugiat consectetur deserunt officia velit. Dolore laboris incididunt consequat pariatur officia.',
    emailText: 'robot.test+.exe@@@@@@@gmx.de',
    invalidPassword:
      'sc9lwOX#Z!ImcKVp66SP9ag$RvEX00nhR&Vn@dIW@hhREU||Zhbhbhu&&&$)Uhbwhbdbb|||',
    errorMessageText: 'Login fehlgeschlagen.'
  }

  emailFieldIsVisibleAndEmpty () {
    cy.get(Login_Management.#loginFormSelector).within(() => {
      cy.get(Login_Management.#emailInputBox)
        .should('be.visible')
        .should('have.value', '')
        .then(el => {
          expect(el[0].checkValidity()).to.be.false
        })
      cy.get(Login_Management.#inputFieldInvalidPseudoSelector).should(
        'have.length',
        2
      )
    })
  }

  enterInvalidEmailOrUsername (usernameOrEmail) {
    let usernameOrEmailText
    /*
        @params: Boolean
        if parameter is TRUE ---> it types Email
        else -----> it type Username
    */
    if (usernameOrEmail) {
      console.log(usernameOrEmail)
      usernameOrEmailText = Login_Management.#testData.emailText    // value is email, since logic is true
    } else {
      usernameOrEmailText = Login_Management.#testData.usernameText // value is username, since logic is false
    }
    cy.get(Login_Management.#emailInputBox)
      .type(usernameOrEmailText, { log: false, timeout: 120000 })
      .should('have.value', usernameOrEmailText)
  }

  enterInvalidPassword () {
    cy.get(Login_Management.#passwordField)
      .type(Login_Management.#testData.invalidPassword, { log: false })
      .should('have.length', 1)
  }

  clickOnSubmitButton () {
    cy.get(Login_Management.#loginFormSelector).should('be.visible').submit()
  }

  errorMessageDisplay () {
    cy.get(Login_Management.#notificationBannerField)
      .should('be.visible')
      .and('have.class', 'notification-content')
      .contains(Login_Management.#testData.errorMessageText)
  }

  passwordFieldIsVisibleAndEmpty () {
    cy.get(Login_Management.#loginFormSelector).within(() => {
      cy.get(Login_Management.#passwordField)
        .should('be.visible')
        .should('have.value', '')
        .then(el => {
          expect(el[0].checkValidity()).to.be.false
        })
      cy.get(Login_Management.#inputFieldInvalidPseudoSelector).should(
        'have.length',
        1
      )
    })
  }

  formValidationMessageDisplay () {
    cy.get(Login_Management.#loginFormSelector).within(() => {
      cy.get(Login_Management.#inputFieldInvalidPseudoSelector).then(el => {
        expect(el[0].checkValidity()).to.be.false
      })
      cy.get(Login_Management.#inputFieldInvalidPseudoSelector).should(
        'have.length',
        2
      )
    })
  }

  visitLoginPage () {
    Cypress.config('baseUrl', Cypress.env('DEFAULT'))
    cy.visit('login')
  }

  clickOnForgotPassword () {
    cy.get(Login_Management.#passwordRecoveryButton).click()
  }

  brokerButtonIsVisible (brokerButtonName) {
    cy.get(Login_Management.#brokerButton).contains(brokerButtonName)
  }

  showUpElementsOnDialog () {
    cy.get(Login_Management.#usernameLabel).should('be.visible')
    cy.get(Login_Management.#emailInput).should('be.visible')
    cy.get(Login_Management.#infoMessage).should('be.visible')
    cy.get(Login_Management.#submitButton).should('be.visible')
    cy.get(Login_Management.#cancelButton).should('be.visible')
  }

  submitRequestWithoutEmail () {
    cy.get(Login_Management.#emailInput).clear()
    cy.get(Login_Management.#submitButton).click()
  }

  seeEmailInputOnSubmittingRequestWithoutEnteringEmail () {
    cy.get(Login_Management.#emailInput).should('be.visible')
  }
}
export default Login_Management

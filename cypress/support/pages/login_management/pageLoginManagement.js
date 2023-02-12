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
  static #userSettingsCurrentPasswordField =
    '[data-testid="settings_password_current"]'
  static #userSettingsNewPasswordField = '[data-testid="settings_password_new"]'
  static #userSettingsNewPasswordRepeatField =
    '[data-testid="settings_password_control"]'
  static #userSettingsSubmitBtn = '[data-testid="submit_new_password_btn"]'
  static #pageTitle = '#page-title'
  static #userSettingsNameInitials = '[data-testid="initials"]'
  static #logoutBtn = '[data-testid="logout"]'
  static #loginSubmitBtn = '[data-testid="submit-login-email"]'

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
      usernameOrEmailText = Login_Management.#testData.emailText // value is email, since logic is true
    } else {
      usernameOrEmailText = Login_Management.#testData.usernameText // value is username, since logic is false
    }
    this.typeEmailIntoField(
      Login_Management.#emailInputBox,
      usernameOrEmailText
    )
  }

  enterInvalidPassword () {
    this.typePasswordIntoField(
      Login_Management.#passwordField,
      Login_Management.#testData.invalidPassword
    )
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
      .wait(['@alerts_api', '@locales_api'])
      .then(interceptions => {
        expect(interceptions[0].response.statusCode).to.equal(200)
        expect(interceptions[1].response.statusCode).to.equal(200)
      })
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

  typeEmailIntoField (sel, email) {
    cy.get(sel)
      .type(email, { log: false, timeout: 120000 })
      .should('have.value', email)
  }

  typePasswordIntoField (sel, password) {
    cy.get(sel).type(password, { log: false }).should('have.length', 1)
  }

  assertEmptyAndVisibleField (sel) {
    cy.get(sel).should(fieldIsVisibleAndEmpty => {
      expect(fieldIsVisibleAndEmpty).to.be.empty
      expect(fieldIsVisibleAndEmpty).to.be.visible
    })
  }

  enterEmail () {
    let userEmail = Cypress.env('STUDENT_PASSWORD_CHANGE_EMAIL')
    this.typeEmailIntoField(Login_Management.#emailInputBox, userEmail)
  }

  enterPassword () {
    let userPwd = Cypress.env('STUDENT_PASSWORD_CHANGE_OLD_PWD')
    this.typePasswordIntoField(Login_Management.#passwordField, userPwd)
  }

  currentPwdFieldVisibleAndEmpty () {
    this.assertEmptyAndVisibleField(
      Login_Management.#userSettingsCurrentPasswordField
    )
  }

  newAndRepeatPasswordFieldVisibleAndEmpty () {
    this.assertEmptyAndVisibleField(
      Login_Management.#userSettingsNewPasswordField
    )
    this.assertEmptyAndVisibleField(
      Login_Management.#userSettingsNewPasswordRepeatField
    )
  }

  enterCurrentPassword () {
    let userPwd = Cypress.env('STUDENT_PASSWORD_CHANGE_OLD_PWD')
    this.typePasswordIntoField(
      Login_Management.#userSettingsCurrentPasswordField,
      userPwd
    )
  }

  enterNewPasswordInAllFields () {
    let userPwd = Cypress.env('STUDENT_PASSWORD_CHANGE_NEW_PWD')
    this.typePasswordIntoField(
      Login_Management.#userSettingsNewPasswordField,
      userPwd
    )
    this.typePasswordIntoField(
      Login_Management.#userSettingsNewPasswordRepeatField,
      userPwd
    )
  }

  clickOnSubmitButtonInUserSetting () {
    cy.get(Login_Management.#userSettingsSubmitBtn)
      .should('be.visible')
      .click()
      .wait(500)
      .then(() => {
        cy.get(Login_Management.#notificationBannerField).should('be.visible')
        cy.get(Login_Management.#pageTitle).should('be.visible')
      })
  }

  clickOnInitials () {
    cy.get(Login_Management.#userSettingsNameInitials)
      .should('be.visible')
      .click()
      .wait(500)
  }

  clickOnLogoutBtn () {
    cy.get(Login_Management.#logoutBtn).should('be.visible').click().wait(500)
  }

  enterNewPassword () {
    let userPwd = Cypress.env('STUDENT_PASSWORD_CHANGE_NEW_PWD')
    this.typePasswordIntoField(Login_Management.#passwordField, userPwd)
  }

  enterNewPasswordInUserSetting () {
    let userPwd = Cypress.env('STUDENT_PASSWORD_CHANGE_NEW_PWD')
    this.typePasswordIntoField(
      Login_Management.#userSettingsCurrentPasswordField,
      userPwd
    )
  }

  enterOldPasswordInUserSetting () {
    let userPwd = Cypress.env('STUDENT_PASSWORD_CHANGE_OLD_PWD')
    this.typePasswordIntoField(
      Login_Management.#userSettingsNewPasswordField,
      userPwd
    )
    this.typePasswordIntoField(
      Login_Management.#userSettingsNewPasswordRepeatField,
      userPwd
    )
  }

  waitFor15Seconds () {
    cy.wait(15000)
    cy.get(Login_Management.#loginSubmitBtn).then($btn => {
      if ($btn.is(':disabled')) {
        cy.log('Button exists and is disabled!')
        return
      } else {
        cy.log('Button exists and is enabled!')
      }
    })
  }
}
export default Login_Management

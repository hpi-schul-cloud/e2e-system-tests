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
      usernameOrEmailText = Login_Management.#testData.emailText // value is email, since logic is true
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

  enterEmail () {
    let userEmail = Cypress.env('STUDENT_PASSWORD_CHANGE_EMAIL')
    cy.get(Login_Management.#emailInputBox)
      .type(userEmail, { log: false, timeout: 120000 })
      .should('have.value', userEmail)
  }

  enterPassword () {
    let userPwd = Cypress.env('STUDENT_PASSWORD_CHANGE_OLD_PWD')
    cy.get(Login_Management.#passwordField)
      .type(userPwd, { log: false })
      .should('have.length', 1)
  }

  currentPwdFieldVisibleAndEmpty () {
    cy.get('[data-testid="settings_password_current"]').should(
      currentPwdFieldVisibleAndEmpty => {
        expect(currentPwdFieldVisibleAndEmpty).to.be.empty
        expect(currentPwdFieldVisibleAndEmpty).to.be.visible
      }
    )
  }

  newAndRepeatPasswordFieldVisibleAndEmpty () {
    cy.get('[data-testid="settings_password_new"]').should(
      currentPwdFieldVisibleAndEmpty => {
        expect(currentPwdFieldVisibleAndEmpty).to.be.empty
        expect(currentPwdFieldVisibleAndEmpty).to.be.visible
      }
    )
    cy.get('[data-testid="settings_password_control"]').should(
      currentPwdFieldVisibleAndEmpty => {
        expect(currentPwdFieldVisibleAndEmpty).to.be.empty
        expect(currentPwdFieldVisibleAndEmpty).to.be.visible
      }
    )
  }

  enterCurrentPassword () {
    let userPwd = Cypress.env('STUDENT_PASSWORD_CHANGE_OLD_PWD')
    cy.get('[data-testid="settings_password_current"]')
      .type(userPwd, { log: false })
      .should('have.length', 1)
  }

  enterNewPasswordInAllFields () {
    let userPwd = Cypress.env('STUDENT_PASSWORD_CHANGE_NEW_PWD')
    cy.get('[data-testid="settings_password_new"]')
      .type(userPwd, { log: false })
      .should('have.length', 1)
    cy.get('[data-testid="settings_password_control"]')
      .type(userPwd, { log: false })
      .should('have.length', 1)
  }

  clickOnSubmitButtonInUserSetting () {
    cy.get('[data-testid="submit_new_password_btn"]')
      .should('be.visible')
      .click()
      .wait(500)
      .then(() => {
        cy.get('[data-testid="notification"]').should('be.visible')
        cy.get('#page-title').should('be.visible')
      })
  }

  clickOnInitials () {
    cy.get('[data-testid="initials"]').should('be.visible').click().wait(500)
  }

  clickOnLogoutBtn () {
    cy.get('[data-testid="logout"]').should('be.visible').click().wait(500)
  }

  enterNewPassword () {
    let userPwd = Cypress.env('STUDENT_PASSWORD_CHANGE_NEW_PWD')
    cy.get(Login_Management.#passwordField)
      .type(userPwd, { log: false })
      .should('have.length', 1)
  }

  enterNewPasswordInUserSetting () {
    let userPwd = Cypress.env('STUDENT_PASSWORD_CHANGE_NEW_PWD')
    cy.get('[data-testid="settings_password_current"]')
      .type(userPwd, { log: false })
      .should('have.length', 1)
  }

  enterOldPasswordInUserSetting () {
    let userPwd = Cypress.env('STUDENT_PASSWORD_CHANGE_OLD_PWD')
    cy.get('[data-testid="settings_password_new"]')
      .type(userPwd, { log: false })
      .should('have.length', 1)
    cy.get('[data-testid="settings_password_control"]')
      .type(userPwd, { log: false })
      .should('have.length', 1)
  }

  waitFor15Seconds () {
    cy.wait(15000)
    cy.get('[data-testid="submit-login-email"]').then($btn => {
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

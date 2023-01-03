'use strict'

class Invalid_Credentials {
  static #emailInputBox = '[data-testid="username-email"]'
  static #passwordField = '[data-testid = "password-email"]'
  static #submitBtn = '[data-testid="submit-login-email"]'
  static #notificationBannerField = '[data-testid="notification"]'
  static #loginFormSelector = 'form.login-form'
  static #inputFieldInvalidPseudoSelector = 'input:invalid'

  static #testData = {
    usernameText: [
      'Fugiat consectetur deserunt officia velit. Dolore laboris incididunt consequat pariatur officia. Lorem do id magna commodo ex quis aliquip veniam non ipsum.',
      'Id id fugiat sint consequat ipsum Lorem ut ut sit consectetur aute quis. Esse reprehenderit magna officia Lorem est.',
      'Esse ad irure voluptate veniam exercitation veniam amet ipsum cupidatat cupidatat excepteur ex enim.',
      '<script>alert("Hello-HiEr")</script>',
      '<script>alert("Hello")</script>',
      'Fugiat consectetur deserunt officia velit. Dolore laboris incididunt consequat pariatur officia. Lorem do id magna commodo ex quis aliquip veniam non ipsum.',
      'Id id fugiat sint consequat ipsum Lorem ut ut sit consectetur aute quis. Esse reprehenderit magna officia Lorem est.',
      'Esse ad irure voluptate veniam exercitation veniam amet ipsum cupidatat cupidatat excepteur ex enim.',
      'Et esse qui in sit nisi voluptate qui id anim cillum aliquip est aute. Pariatur laborum eiusmod consequat ullamco quis voluptate.'
    ],
    emailText: 'robot.test+.exe@@@@@@@gmx.de',
    invalidPassword:
      'sc9lwOX#Z!ImcKVp66SP9ag$RvEX00nhR&Vn@dIW@hhREU||Zhbhbhu&&&$)Uhbwhbdbb|||',
    errorMessageText: 'Login fehlgeschlagen.'
  }

  emailFieldIsVisibleAndEmpty () {
    cy.get(Invalid_Credentials.#loginFormSelector).within(() => {
      cy.get(Invalid_Credentials.#emailInputBox)
        .should('be.visible')
        .should('have.value', '')
        .then(el => {
          expect(el[0].checkValidity()).to.be.false
        })
      cy.get(Invalid_Credentials.#inputFieldInvalidPseudoSelector).should(
        'have.length',
        2
      )
    })
  }

  enterInvalidEmailOrUsername (usernameOrEmail) {
    let usernameOrEmailText
    if (!usernameOrEmail) {
      usernameOrEmailText = Invalid_Credentials.#testData.usernameText.join('')
    } else {
      usernameOrEmailText = Invalid_Credentials.#testData.emailText
    }
    cy.get(Invalid_Credentials.#emailInputBox)
      .type(usernameOrEmailText, { log: false, timeout: 120000 })
      .should('have.value', usernameOrEmailText)
  }

  enterInvalidPassword () {
    cy.get(Invalid_Credentials.#passwordField)
      .type(Invalid_Credentials.#testData.invalidPassword, { log: false })
      .should('have.length', 1)
  }

  clickOnSubmitButton () {
    cy.get(Invalid_Credentials.#submitBtn).should('be.visible').click()
  }

  errorMessageDisplay () {
    cy.get(Invalid_Credentials.#notificationBannerField)
      .should('be.visible')
      .and('have.class', 'notification-content')
      .contains(Invalid_Credentials.#testData.errorMessageText)
  }

  passwordFieldIsVisibleAndEmpty () {
    cy.get(Invalid_Credentials.#loginFormSelector).within(() => {
      cy.get(Invalid_Credentials.#passwordField)
        .should('be.visible')
        .should('have.value', '')
        .then(el => {
          expect(el[0].checkValidity()).to.be.false
        })
      cy.get(Invalid_Credentials.#inputFieldInvalidPseudoSelector).should(
        'have.length',
        1
      )
    })
  }

  formValidationMessageDisplay () {
    cy.get(Invalid_Credentials.#loginFormSelector).within(() => {
      cy.get(Invalid_Credentials.#inputFieldInvalidPseudoSelector).then(el => {
        expect(el[0].checkValidity()).to.be.false
      })
      cy.get(Invalid_Credentials.#inputFieldInvalidPseudoSelector).should(
        'have.length',
        2
      )
    })
  }
}
export default Invalid_Credentials

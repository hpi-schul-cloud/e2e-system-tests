const emailInputFieldElement = '[data-testid="username-email"]'
const passwordInputFieldElement = '[data-testid="password-email"]'
const submitButton = '[data-testid="submit-login-email"]'
const nbcLoginWithEmailOptionButton = '[data-testid="submit-cloud-site"]'
const defaultLoginViaExternalBroker =
  '[data-testid="submit-oauth-login"], [data-provider="oauth"]'
const initials = '[data-testid="initials"]'
const languageSelection = '[id="selected-language"]'
const languageDe = '[data-language="de"]'
const externalUsernameInputFieldElement = '[id="Username"]'
const externalPasswordInputFieldElement = '[id="Password"]'
const oauth_url =
  'https://idm-default-main.cd.dbildungscloud.dev/realms/default/protocol/openid-connect/auth?client_id=dbildungscloud-server&redirect_uri=https://default-main.cd.dbildungscloud.dev/api/v3/sso/oauth/62c7f233f35a554ba3ed42f1&response_type=code&scope=openid%20profile%20email&kc_idp_hint=oidcmock'

Cypress.Commands.add('login', (username, environment) => {
  cy.session([username, environment], () => {
    const env = Cypress.env()
    const environmentUpperCased = environment.toUpperCase()
    const link = Cypress.config('baseUrl', env[environmentUpperCased])
    cy.log(link)
    if (environmentUpperCased === 'NBC') {
      cy.visit('/login')
      cy.get(nbcLoginWithEmailOptionButton).click()
    } else if (environmentUpperCased === 'DEFAULT') {
      cy.visit('/login')
    } else {
      cy.visit('/login')
    }

    let userEmail
    let userPassword
    let doExternalLogin = false

    switch (username) {
      case 'teacher':
        userEmail = 'TEACHER_1_EMAIL'
        userPassword = 'TEACHER_1_PASSWORD'
        break
      case 'teacher1':
        userEmail = 'TEACHER_1_EMAIL'
        userPassword = 'TEACHER_1_PASSWORD'
        break
      case 'teacher2':
        userEmail = 'TEACHER_2_EMAIL'
        userPassword = 'TEACHER_2_PASSWORD'
        break
      case 'student':
        userEmail = 'STUDENT_1_EMAIL'
        userPassword = 'STUDENT_1_PASSWORD'
        break
      case 'student1':
        userEmail = 'STUDENT_1_EMAIL'
        userPassword = 'STUDENT_1_PASSWORD'
        break
      case 'student2':
        userEmail = 'STUDENT_2_EMAIL'
        userPassword = 'STUDENT_2_PASSWORD'
        break
      case 'admin':
        userEmail = 'ADMIN_1_EMAIL'
        userPassword = 'ADMIN_1_PASSWORD'
        break
      case 'expert':
        userEmail = 'EXPERT_1_EMAIL'
        userPassword = 'EXPERT_1_PASSWORD'
        break
      case 'student_extern':
        userEmail = 'STUDENT_EXTERN'
        userPassword = 'STUDENT_EXTERN_PASSWORD'
        doExternalLogin = true
        break
    }
    if (doExternalLogin) {
      cy.request('GET', oauth_url).then(resp => {
        cy.intercept(resp.requestHeaders.referer).as('oauth_url')
        cy.visit(resp.requestHeaders.referer).then(window => {
          expect(window.location.pathname).to.include('/Account/Login')
          cy.get('@oauth_url').then(resp => {
            expect(resp.response.statusCode).to.equal(308)
            cy.get(externalUsernameInputFieldElement).should('be.visible')
            cy.get(externalUsernameInputFieldElement).type(env[userEmail], {
              log: false
            })
            cy.get(externalPasswordInputFieldElement)
              .type(env[userPassword], { log: false })
              .type('{enter}')
          })
        })
      })
    } else {
      cy.get(emailInputFieldElement).type(env[userEmail], { log: false })
      cy.get(passwordInputFieldElement).type(env[userPassword], { log: false })
      cy.get(submitButton).click()
    }
    cy.url().should('contain', '/dashboard')
    cy.get(initials).click()
    cy.get(languageSelection).click()
    cy.get(languageDe).click()
  })
  cy.visit('/dashboard')
})

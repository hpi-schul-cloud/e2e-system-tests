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
const titleOnDashboardPage = '[id="page-title"]'

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
      case 'teacher1_brb':
        userEmail = 'TEACHER_1_BRB_EMAIL'
        userPassword = 'TEACHER_1_BRB_PASSWORD'
        break
      case 'teacher2_brb':
        userEmail = 'TEACHER_2_BRB_EMAIL'
        userPassword = 'TEACHER_2_BRB_PASSWORD'
        break
      case 'teacher1_dbc':
        userEmail = 'TEACHER_1_DBC_EMAIL'
        userPassword = 'TEACHER_1_DBC_PASSWORD'
        break
      case 'teacher2_dbc':
        userEmail = 'TEACHER_2_DBC_EMAIL'
        userPassword = 'TEACHER_2_DBC_PASSWORD'
        break
      case 'student1_brb':
        userEmail = 'STUDENT_1_BRB_EMAIL'
        userPassword = 'STUDENT_1_BRB_PASSWORD'
        break
      case 'student2_brb':
        userEmail = 'STUDENT_2_BRB_EMAIL'
        userPassword = 'STUDENT_2_BRB_PASSWORD'
        break
      case 'student1_dbc':
        userEmail = 'STUDENT_1_DBC_EMAIL'
        userPassword = 'STUDENT_1_DBC_PASSWORD'
        break
      case 'admin1_brb':
        userEmail = 'ADMIN_1_BRB_EMAIL'
        userPassword = 'ADMIN_1_BRB_PASSWORD'
        break
      case 'teacher1_nbc':
        userEmail = 'TEACHER_1_NBC_EMAIL'
        userPassword = 'TEACHER_1_NBC_PASSWORD'
        break
      case 'teacher2_nbc':
        userEmail = 'TEACHER_2_NBC_EMAIL'
        userPassword = 'TEACHER_2_NBC_PASSWORD'
        break
      case 'student2_nbc':
        userEmail = 'STUDENT_2_NBC_EMAIL'
        userPassword = 'STUDENT_2_NBC_PASSWORD'
        break
      case 'admin1_nbc':
        userEmail = 'ADMIN_1_NBC_EMAIL'
        userPassword = 'ADMIN_1_NBC_PASSWORD'
        break
      case 'admin1_dbc':
        userEmail = 'ADMIN_1_DBC_EMAIL'
        userPassword = 'ADMIN_1_DBC_PASSWORD'
        break
      case 'student_extern_dbc':
        userEmail = 'STUDENT_DBC_EXTERN'
        userPassword = 'STUDENT_DBC_EXTERN_PASSWORD'
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
      cy.get(passwordInputFieldElement).type(env[userPassword], {
        log: false
      })
      cy.get(submitButton).click()
    }
    cy.url().should('contain', '/dashboard')
    cy.get(initials).click()
    cy.get(languageSelection).click()
    cy.get(languageDe).click()
  })
  cy.visit('/dashboard')
  cy.get(titleOnDashboardPage).should('exist')
})

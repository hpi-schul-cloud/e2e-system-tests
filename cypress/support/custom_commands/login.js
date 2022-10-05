const emailInputFieldElement = '[data-testid="username-email"]'
const passwordInputFieldElement = '[data-testid="password-email"]'
const submitButton = '[data-testid="submit-login-email"]'
const nbcLoginWithEmailOptionButton = '[data-testid="submit-cloud-site"]'
const defaultLoginViaExternalBroker = '[data-testid="submit-oauth-login"], [data-provider="oauth"]'
const initials = '[data-testid="initials"]'
const languageSelection = '[id="selected-language"]'
const languageDe = '[data-language="de"]'

const externalUsernameInputFieldElement = '[id="Username"]'
const externalPasswordInputFieldElement = '[id="Password"]'

Cypress.Commands.add('login', (username, environment) => {
  cy.session([username, environment], () => {
    const env = Cypress.env()
    const link = Cypress.config('baseUrl', env[environmentUpperCased])
    const environmentUpperCased = environment.toUpperCase()
    console.log(link)
    cy.visit(link)
    if (environmentUpperCased === 'NBC') {
      cy.get(nbcLoginWithEmailOptionButton).eq(1).click()
    }

    let userEmail
    let userPassword
    let doExternalLogin = false

    switch (username) {

      case 'teacher':
        userEmail = 'TEACHER_1_EMAIL'
        userPassword = 'TEACHER_1_PASSWORD'
        break;

      case 'teacher1':
        userEmail = 'TEACHER_1_EMAIL'
        userPassword = 'TEACHER_1_PASSWORD'
        break;

      case 'teacher2':
        userEmail = 'TEACHER_2_EMAIL'
        userPassword = 'TEACHER_2_PASSWORD'
        break;

      case 'student':
        userEmail = 'STUDENT_1_EMAIL'
        userPassword = 'STUDENT_1_PASSWORD'
        break;

      case 'student1':
        userEmail = 'STUDENT_1_EMAIL'
        userPassword = 'STUDENT_1_PASSWORD'
        break;

      case 'student2':
        userEmail = 'STUDENT_2_EMAIL'
        userPassword = 'STUDENT_2_PASSWORD'
        break;

      case 'admin':
        userEmail = 'ADMIN_1_EMAIL'
        userPassword = 'ADMIN_1_PASSWORD'
        break;

      case 'expert':
        userEmail = 'EXPERT_1_EMAIL'
        userPassword = 'EXPERT_1_PASSWORD'
        break;
      case 'extern_student':
        userEmail = 'STUDENT_EXTERN'
        userPassword = 'STUDENT_EXTERN_PASSWORD'
        doExternalLogin = true
        break;
    }
    if (doExternalLogin){
      cy.get(defaultLoginViaExternalBroker).eq(1).click()
      cy.get(externalUsernameInputFieldElement).eq(1).type(env[userEmail], {log:false})
      cy.get(externalUsernameInputFieldElement).eq(1).type(env[userPassword], {log:false})
      cy.type('{enter}')
    } else {
      cy.get(emailInputFieldElement).eq(1).type(env[userEmail], {log:false})
      cy.get(passwordInputFieldElement).eq(1).type(env[userPassword], {log:false})
      cy.get(submitButton).eq(1).click()
    }
    cy.url().should('contain', '/dashboard')
    cy.get(initials).click()
    cy.get(languageSelection).click()
    cy.get(languageDe).click()
  })
  cy.visit('/dashboard')
})
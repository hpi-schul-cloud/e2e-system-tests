const emailInputFieldElement = '[data-testid="username"]'
const passwordInputFieldElement = '[data-testid="password"]'
const submitButton = '[data-testid="submit-login"]'
const initials = '[data-testid="initials"]'
const logoutButton = '[data-testid="logout"]'
const nbcLoginWithEmailOptionButton = '[data-testid="submit-cloud-site"]'

Cypress.Commands.add('login', (username, environment) => {
  cy.session([username, environment], () => {
    const env = Cypress.env()
    let link
    let environmentUpperCased = environment.toUpperCase()
    if (environmentUpperCased === 'BRB') {
      link = Cypress.config('baseUrl', env[environmentUpperCased])
      cy.visit(link)
    } else if (environmentUpperCased === 'NBC') {
      link = Cypress.config('baseUrl', env[environmentUpperCased])
      cy.visit(link)
      cy.get(nbcLoginWithEmailOptionButton).eq(1).click()
    } else if (environmentUpperCased === 'DEFAULT') {
      link = Cypress.config('baseUrl', env[environmentUpperCased])
      cy.visit(link)
    }

    let user_email
    let user_password

    switch (username) {
      case 'teacher':
        user_email = 'TEACHER_1_EMAIL'
        user_password = 'TEACHER_1_PASSWORD'
        break;

      case 'teacher1':
        user_email = 'TEACHER_1_EMAIL'
        user_password = 'TEACHER_1_PASSWORD'
        break;

      case 'teacher2':
        user_email = 'TEACHER_2_EMAIL'
        user_password = 'TEACHER_2_PASSWORD'
        break;

      case 'student':
        user_email = 'STUDENT_1_EMAIL'
        user_password = 'STUDENT_1_PASSWORD'
        break;

      case 'student1':
        user_email = 'STUDENT_1_EMAIL'
        user_password = 'STUDENT_1_PASSWORD'
        break;

      case 'student2':
        user_email = 'STUDENT_2_EMAIL'
        user_password = 'STUDENT_2_PASSWORD'
        break;

      case 'admin':
        user_email = 'ADMIN_1_EMAIL'
        user_password = 'ADMIN_1_PASSWORD'
        break;

      case 'expert':
        user_email = 'EXPERT_1_EMAIL'
        user_password = 'EXPERT_1_PASSWORD'
        break;
    }

    cy.get(emailInputFieldElement).eq(1).type(env[user_email])
    cy.get(passwordInputFieldElement).eq(1).type(env[user_password])
    cy.get(submitButton).eq(1).click()
    cy.url().should('contain', '/dashboard')
  })
  cy.visit('/dashboard')
})

Cypress.Commands.add('logout', () => {
  cy.get(initials).click()
  cy.get(logoutButton).click()
  cy.contains(/Herzlich willkommen|Login für registrierte Nutzer:innen/g)
})
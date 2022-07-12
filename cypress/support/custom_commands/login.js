const emailInputFieldElement = '[data-testid="username"]'
const passwordInputFieldElement = '[data-testid="password"]'
const submitButton = '[data-testid="submit-login"]'
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

    let userEmail
    let userPassword

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
    }
    cy.get(emailInputFieldElement).eq(1).type(env[userEmail],{force: true})
    cy.get(passwordInputFieldElement).eq(1).type(env[userPassword],{force: true})
    cy.get(submitButton).eq(1).click({force: true})
    cy.url().should('contain', '/dashboard')
  })
  cy.visit('/dashboard')
})
const emailInputFieldElement = '[data-testid="username"]'
const passwordInputFieldElement = '[data-testid="password"]'
const submitButton = '[data-testid="submit-login"]'
const initials = '[data-testid="initials"]'
const logoutButton = '[data-testid="logout"]'

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
    }

    if (username === 'teacher') {
      cy.get(emailInputFieldElement)
        .eq(1)
        .type(env['TEACHER_EMAIL'])
    } else if (username === 'student') {
      cy.get(emailInputFieldElement)
        .eq(1)
        .type(env['STUDENT_EMAIL'])
    } else {
      cy.get(emailInputFieldElement)
        .eq(1)
        .type(env['ADMIN_EMAIL'])
    }

    cy.get(passwordInputFieldElement)
      .eq(1)
      .type(env['PASSWORD'], { log: false })

    cy.get(submitButton)
      .eq(1)
      .click()
    cy.url().should('contain', '/dashboard')
  })
})

Cypress.Commands.add('logout', () => {
      cy.get(initials).click()
      cy.get(logoutButton).click()
      cy.contains(/Herzlich willkommen|Login für registrierte Nutzer:innen/g)
  })
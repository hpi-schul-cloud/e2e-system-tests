const emailInputFieldElement = '[data-testid="username"]'
const passwordInputFieldElement = '[data-testid="password"]'
const submitButton = '[data-testid="submit-login"]'
const initials = '[data-testid="initials"]'
const logoutButton = '[data-testid="logout"]'

Cypress.Commands.add('login', (username, environment) => {
  cy.session([username, environment], () => {
    const links = Cypress.env('instance')
    let environmentUpperCased = environment.toUpperCase()
    const link = links[environmentUpperCased]
    Cypress.config('baseUrl', link)

    cy.visit(link)

    const users = Cypress.env('users')

    const user = users[username]

    const password = users.password.DEFAULT_PASSWORD

    if (user === 'teacher') {
      cy.get(emailInputFieldElement)
        .eq(1)
        .type(user.EMAIL)
    } else if (user === 'student') {
      cy.get(emailInputFieldElement)
        .eq(1)
        .type(user.EMAIL)
    } else {
      cy.get(emailInputFieldElement)
        .eq(1)
        .type(user.EMAIL)
    }

    cy.get(passwordInputFieldElement)
      .eq(1)
      .type(password, { log: false })

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
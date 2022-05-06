Cypress.config('experimentalSessionSupport', true)

const emailInputFieldElement = '[data-testid="username"]'
const passwordInputFieldElement = '[data-testid="password"]'
const submitButton = '[data-testid="submit-login"]'

Cypress.Commands.add('login', (username, environment) => {
  cy.session([username, environment], () => {
    const links = Cypress.env('links')
    const link = links[environment]
    Cypress.config('baseUrl', link)

    cy.visit(link)

    const users = Cypress.env('users')
    const user = users[username]

    const password = users.password.default_password

    if (user === 'teacher') {
      cy.get(emailInputFieldElement)
        .eq(1)
        .type(user.email)
    } else if (user === 'student') {
      cy.get(emailInputFieldElement)
        .eq(1)
        .type(user.email)
    } else {
      cy.get(emailInputFieldElement)
        .eq(1)
        .type(user.email)
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

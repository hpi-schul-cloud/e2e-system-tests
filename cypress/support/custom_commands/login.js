const emailInputFieldElement = '[data-testid="username"]'
const passwordInputFieldElement = '[data-testid="password"]'
const submitButton = '[data-testid="submit-login"]'

/*Cypress.Commands.add('loginAsNBCTeacher',() => {
cy.visit(Cypress.env('NBC'))
cy.get(emailInputFieldElement).eq(1).type(Cypress.env('TEACHER_EMAIL'))
cy.get(passwordInputFieldElement).eq(1).type(Cypress.env('PASSWORD'))
cy.get(submitButton).eq(1).click()

})

Cypress.Commands.add('loginAsBRBAdmin',() => {
  cy.visit(Cypress.env('BRB'))
  cy.get(emailInputFieldElement).eq(1).type(Cypress.env('ADMIN_EMAIL'))
  cy.get(passwordInputFieldElement).eq(1).type(Cypress.env('PASSWORD'))
  cy.get(submitButton).eq(1).click()


})*/





Cypress.Commands.add('login', (username, environment) => {
  cy.session([username, environment], () => {
    let link
    let environmentUpperCased = environment.toUpperCase()
    if (environmentUpperCased === 'BRB'){
      link = Cypress.config('baseUrl', Cypress.env(environmentUpperCased))
      cy.visit(link)
    } else if (environmentUpperCased === 'NBC'){
      link = Cypress.config('baseUrl', Cypress.env(environmentUpperCased))
      cy.visit(link)
    }

    if (username === 'teacher') {
      cy.get(emailInputFieldElement)
        .eq(1)
        .type(Cypress.env('TEACHER_EMAIL'))
    } else if (user === 'student') {
      cy.get(emailInputFieldElement)
        .eq(1)
        .type(Cypress.env('STUDENT_EMAIL'))
    } else {
      cy.get(emailInputFieldElement)
        .eq(1)
        .type(Cypress.env('ADMIN_EMAIL'))
    }

    cy.get(passwordInputFieldElement)
      .eq(1)
      .type(Cypress.env('PASSWORD'), { log: false })

    cy.get(submitButton)
      .eq(1)
      .click()
    cy.url().should('contain', '/dashboard')
  })
})



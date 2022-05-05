class Commom_Logins {

    constructor() {
        this.emailInputFieldElement = '[data-testid="username"]'
        this.passwordInputFieldElement = '[data-testid="password"]'
        this.submitButton = '[data-testid="submit-login"]'

    }

    loginAsBrbTeacher() {
        cy.visit(Cypress.env("BRB_loginPage"))
        cy.get(this.emailInputFieldElement).eq(1).type(Cypress.env("teacher_email"))
        cy.get(this.passwordInputFieldElement).eq(1).type(Cypress.env("password"))
        cy.get(this.submitButton).eq(1).click()
    }

}
export default Commom_Logins


































Cypress.Commands.add('teacherLogin', () => {
    cy.visit('/')
    //cy.contains('Login').click()
    cy.get('[data-testid="username"]').eq(1).type('lehrer@schul-cloud.org')
    cy.get('[data-testid="password"]').eq(1).type('Schulcloud1!')
    cy.get('[data-testid="submit-login"]').eq(1).click()

})

Cypress.Commands.add('studentLogin', () => {
    cy.visit('/')
    cy.contains('Login').click()
    cy.get('[data-testid="username"]').eq(1).type('schueler@schul-cloud.org')
    cy.get('[data-testid="password"]').eq(1).type('Schulcloud1!')
    cy.get('[data-testid="submit-login"]').eq(1).click()
})

Cypress.Commands.add('adminLogin', () => {
    cy.visit('/')
    cy.contains('Login').click()
    cy.get('[data-testid="username"]').eq(1).type('admin@schul-cloud.org')
    cy.get('[data-testid="password"]').eq(1).type('Schulcloud1!')
    cy.get('[data-testid="submit-login"]').eq(1).click()
})
class Common_Logins {

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
export default Common_Logins
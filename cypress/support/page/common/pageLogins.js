class Common_Logins {

    constructor() {
        this.emailInputFieldElement = '[data-testid="username"]'
        this.passwordInputFieldElement = '[data-testid="password"]'
        this.submitButton = '[data-testid="submit-login"]'
        this.nbcLoginWithEmail ='[data-testid="submit-cloud-site"]'
    }

    loginAsBrbTeacher() {
        cy.visit(Cypress.env("BRB_loginPage"))
        cy.get(this.emailInputFieldElement).eq(1).type(Cypress.env("teacher_email"))
        cy.get(this.passwordInputFieldElement).eq(1).type(Cypress.env("password"))
        cy.get(this.submitButton).eq(1).click()
    }

    brbAdminLogin(){
    cy.visit(Cypress.env("BRB_loginPage"))
    cy.get(this.emailInputFieldElement).eq(1).type(Cypress.env("admin_email"))
    cy.get(this.passwordInputFieldElement).eq(1).type(Cypress.env("teacher_pwd"))
    cy.get(this.submitButton).eq(1).click()
    }

    nbcAdminLogin(){
    cy.visit(Cypress.env("NBC_loginPage"))
    cy.get(this.nbcLoginWithEmail).eq(1).click()
    cy.get(this.emailInputFieldElement).eq(1).type(Cypress.env("admin_email"))
    cy.get(this.passwordInputFieldElement).eq(1).type(Cypress.env("teacher_pwd"))
    cy.get(this.submitButton).eq(1).click()
    }

}
export default Common_Logins
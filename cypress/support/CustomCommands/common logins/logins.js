Cypress.Commands.add('teacherLogin',()=>{
    cy.visit('/')
    //cy.contains('Login').click()
    cy.get('[data-testid="username"]').eq(1).type('lehrer@schul-cloud.org')
    cy.get('[data-testid="password"]').eq(1).type('Schulcloud1!')
    cy.get('[data-testid="submit-login"]').eq(1).click()
   
})

Cypress.Commands.add('studentLogin',()=>{
    cy.visit('/')
    cy.contains('Login').click()
    cy.get('[data-testid="username"]').eq(1).type('schueler@schul-cloud.org')
    cy.get('[data-testid="password"]').eq(1).type('Schulcloud1!')
    cy.get('[data-testid="submit-login"]').eq(1).click()
})

Cypress.Commands.add('adminLogin',()=>{
    cy.visit('/')
    cy.contains('Login').click()
    cy.get('[data-testid="username"]').eq(1).type('admin@schul-cloud.org')
    cy.get('[data-testid="password"]').eq(1).type('Schulcloud1!')
    cy.get('[data-testid="submit-login"]').eq(1).click()
})

Cypress.Commands.add('teacherLogin',()=>{
    cy.visit('/')
    //cy.contains('Login').click()
    cy.get('[data-testid="username"]').type('lehrer@schul-cloud.org')
    cy.get('[data-testid="password"]').type('Schulcloud1!')
    cy.get('[data-testid="submit-login"]').click()
})

Cypress.Commands.add('studentLogin',()=>{
    cy.visit('/')
    cy.contains('Login').click()
    cy.get('[data-testid="username"]').type('schueler@schul-cloud.org')
    cy.get('[data-testid="password"]').type('Schulcloud1!')
    cy.get('[data-testid="submit-login"]').click()
})

Cypress.Commands.add('adminLogin',()=>{
    cy.visit('/')
    cy.contains('Login').click()
    cy.get('[data-testid="username"]').type('admin@schul-cloud.org')
    cy.get('[data-testid="password"]').type('Schulcloud1!')
    cy.get('[data-testid="submit-login"]').click()
})

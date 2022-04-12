Cypress.Commands.add('deleteTestRoom',()=>{
    cy.url().should('include','/rooms-overview')
    cy.contains('Te').click()
    cy.get('[data-toggle="dropdown"]').click()
    cy.get('[class="dropdown-item btn-course-edit"]').click()
    cy.get('[data-method="DELETE"]').click()
    cy.get('[type="submit"]').click()
    cy.url().should('include','/rooms-overview')

})

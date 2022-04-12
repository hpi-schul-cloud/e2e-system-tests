Cypress.Commands.add('deleteTestRoom',()=>{
    cy.url().should('include','/rooms-overview')
    cy.get('[aria-label="Course unique test course name"]').click()
    cy.get('[id="page-title"]').click()
    cy.get('[class="dropdown-item btn-course-edit"]').click()
    cy.get('[data-method="DELETE"]').click()
    cy.get('.btn-primary:nth-child(3)').click({force:true})
})

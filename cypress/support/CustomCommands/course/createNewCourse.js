

Cypress.Commands.add('visitRoomOverview',()=>{
    cy.get('[data-testid="Course-Overview"]').click()
    cy.url().should('include','/rooms-overview/')
})


Cypress.Commands.add('expectOldCourseCreationPageAndCreateNewCourse',()=>{
    cy.get('[name="fab-icon"]').click()
    cy.get('[data-testid="coursename"]').type('test course name')
    cy.get('[id="nextSection"]').click()
    cy.get('[data-submit-label="Create course and continue"]').click()
    cy.get('[data-testid="zur-uebersicht-btn"]').click()
    cy.url().should('include','/rooms-overview')
    cy.contains('test course name')
})



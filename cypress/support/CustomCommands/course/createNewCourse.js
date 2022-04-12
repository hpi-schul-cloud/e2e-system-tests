Cypress.Commands.add('visitRoomOverview',()=>{
    cy.get('[data-testid="Course-Overview"]').click()
})


Cypress.Commands.add('expectOldCourseCreationPageAndCreateNewCourse',()=>{
    cy.contains('Kurs anlegen')
    cy.get('[data-testid="coursename"]').type('test name')
    cy.get('.nextSection').click()
    cy.get('[data-submit-label="Kurs anlegen und Weiter"]').click()
    cy.get('[data-testid="zur-uebersicht-btn"]').click()
    cy.contains('test name')
    
})



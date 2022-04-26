class e2e_Common_Room {
    
    selectEndToEndTestRoom() {
        cy.url().should('include', '/rooms-overview/')
        cy.contains('E2').click()
    }



}
Cypress.Commands.add('expectOldTopicCreationPageAndCreateNewTopic',()=>{
    cy.contains('Neues Thema')
    cy.get('.topicTitleInput').type('test topic')
    cy.contains('Erstellen').click()
    cy.contains('test topic')
})

Cypress.Commands.add('expectOldTaskCreationPageAndCreateNewTask',()=>{
    cy.contains('Neue Aufgabe')
    cy.get('.name').type('test task')
    cy.contains('Erstellen').click()
    cy.contains('test task')


})

Cypress.Commands.add('expectNoCreateFABButton',()=>{
    cy.get('[data-testid="add-content-button"]').should('not.exist');
})
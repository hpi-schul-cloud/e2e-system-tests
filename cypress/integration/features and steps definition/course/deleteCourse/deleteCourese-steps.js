
Given('I am logged in as a teacher', () => {
    cy.teacherLogin()
})

When('I am in the rooms overview', () => {
    cy.visitRoomOverview()
})

Then('I should be able to delete the test room', () => {
    cy.deleteTestRoom()
})
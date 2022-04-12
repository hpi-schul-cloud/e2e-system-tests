
Given('I am logged in as a teacher',()=>{
    cy.teacherLogin()
})

When('I visit the rooms overview',()=>{
    cy.visitRoomOverview()
})

Then('I am able to create a course in the old course creation page',()=>{
    cy.expectOldCourseCreationPageAndCreateNewCourse()
})
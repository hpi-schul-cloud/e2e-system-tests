import Commom_Logins from '../../pageObjects/commonLogins/logins_page_object'

Given('I am logged in as a teacher',()=>{
    const loginAsTeacher = new Commom_Logins()
    loginAsTeacher.brbTeacherLogin()
})

When('I visit the room overview',()=>{
    cy.visitRoomOverview()
})

Then('I am able to create a course in the old course creation page',()=>{
    cy.expectOldCourseCreationPageAndCreateNewCourse()
})


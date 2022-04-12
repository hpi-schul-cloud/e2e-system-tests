//import{Given, When, Then} from "cypress-cucumber-preprocessor/steps"


Given('I am logged in as a teacher',()=>{
    cy.teacherLogin()
})

When('I visit the room overview',()=>{
    cy.visitRoomOverview()
})

Then('I am able to create a course in the old course creation page',()=>{
    cy.expectOldCourseCreationPageAndCreateNewCourse()
})
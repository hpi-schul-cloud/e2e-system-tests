const { When, Then } = require("@badeball/cypress-cucumber-preprocessor")
import Courses from '../../pages/course/pageCourses'

const courses = new Courses()

// EXTERNAL COMMON STEP DEFINITIONS
// =========================
// External defined steps can be found here:
// -----------------------------------------
// --> \step_definition\authentication\loginStep.spec.js
// --> \step_definition\courses\commonCourseSteps.spec.js


//Scenario: Adding a new course

When('I enter the course title {string}', (newCourseName) => {
  courses.fillCourseCreationForm(newCourseName)
})

When('I click on button Next Steps', () => {
  courses.clickOnNextStepsBtn()
})

When('I click on button To Course Overview', () => {
  courses.clickOnToCourseOverviewBtn()
})

Then('I edit the title of the room to {string} and the description', (editedRoomName) => {
  courses.editCourseTitleAndDescription(editedRoomName)
})

//Scenario: Deleting the test course/room created during executing the testing

Then('I should be able to delete the test room', () => {
  courses.performRoomDeletion()
})
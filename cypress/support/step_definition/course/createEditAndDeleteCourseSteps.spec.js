import Courses from '../../pages/course/pageCourses'

const courses = new Courses()

// EXTERNAL COMMON STEP DEFINITIONS
// =========================
// External defined steps can be found here:
// -----------------------------------------
// --> \step_definition\authentication\loginStep.spec.js
// --> \step_definition\courses\commonCourseSteps.spec.js


//Scenario: Adding a new course

And('I enter the course title {string}', (newCourseName) => {
  courses.fillCourseCreationForm(newCourseName)
})

And('I click on next steps', () => {
  courses.clickOnNextSteps()
})

Then('I edit the title of the room to {string} and the description', (editedRoomName) => {
  courses.editCourseTitleAndDescription(editedRoomName)
})

//Scenario: Deleting the test course/room created during executing the testing

Then('I should be able to delete the test room', () => {
  courses.performRoomDeletion()
})
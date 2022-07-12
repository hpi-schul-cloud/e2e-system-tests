import Courses from '../../pages/course/pageCourses'

const courses = new Courses()

//Scenario: Adding a new course

//Given ('I am logged in as a 'teacher' at 'brb'')
//step defined -->\step_definition\authentication\loginStep.spec.js

//When ('I go to rooms overview')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

And('I click on FAB to create the course', () => {
  courses.clickOnCreateFAB()
})

And('I fill out the course creation form for new course {string}', (newCourseName) => {
  courses.fillCourseCreationForm(newCourseName)
})

And('I click on next steps', () => {
  courses.clickOnNextSteps()
})

//Then ('I see the course 'Cypress Testkurs' on the room overview page')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

//Scenario: Editing the course

//Given ('I am logged in as a 'teacher' at 'brb'')
//step defined -->\step_definition\authentication\loginStep.spec.js

//When ('I go to rooms overview')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

//And ('I go to room 'Kurs Cypress Testkurs')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

//When I open course edit page
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

//Then I can see course edit page
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

Then('I edit the title of the room to {string} and the description', (editedRoomName) => {
  courses.editCourseTitleAndDescription(editedRoomName)
})

// And I click on save changes
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js


//Scenario: Deleting the test course/room created during executing the testing

//Given ('I am logged in as a 'teacher' at 'brb'')
//step defined -->\step_definition\authentication\loginStep.spec.js

//When ('I go to rooms overview')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

//And ('I go to room 'Kurs Cypress Testkurs Edit')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

//When I open course edit page
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

Then('I delete the test room', () => {
  courses.performDeletion()
})

  //Then ('I do not see the course 'Kurs Cypress Testkurs' on the room overview page')
  //step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js
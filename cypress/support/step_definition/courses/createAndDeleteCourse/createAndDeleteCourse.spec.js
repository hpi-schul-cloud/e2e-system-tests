import Course from '../../../pages/courses/pageCourse'

const course = new Course()

//Scenario: Adding a new course

//Given ('I am logged in as a 'teacher' at 'brb'')
//step defined --> \step_definition\commonGlobalSteps\loginSteps.spec.js

//When ('I go to rooms overview')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

And('I click on FAB to create the course', () => {
  course.clickOnCreateFAB()
})

And('I fill out the course creation form for new course {string}', (new_course_name) => {
  course.fillCourseCreationForm(new_course_name)
})

And('I click on next steps', () => {
  course.clickOnNextSteps()
})
//Then ('I see the course 'Cypress Testkurs' on the room overview page')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js



// Scenario: Deleting the test course/room created during executing the testing

//Given ('I am logged in as a 'teacher' at 'brb'')
//step defined --> \step_definition\commonGlobalSteps\loginSteps.spec.js

//When ('I go to rooms overview')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

//And ('I go to room 'Kurs Cypress Testkurs'')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

Then('I should be able to delete the test room', () => {
  course.performDeletion()
})

//Then ('I do not see the course 'Kurs Cypress Testkurs' on the room overview page')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js
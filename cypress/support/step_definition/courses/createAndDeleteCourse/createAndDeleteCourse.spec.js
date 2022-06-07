import Course from '../../../pages/courses/pageCourse'

const course = new Course()

//Scenario: Adding a new course

//Given ('I am logged in as a 'teacher' at 'brb'') is defined in the location --> '/step_definition/commonGlobalSteps/loginSteps.spec.js'

And('I click on FAB to create the course', () => {
  course.clickOnCreateFAB()
})

And('I fill out the course creation form for new course {string}', (new_course_name) => {
  course.fillCourseCreationForm(new_course_name)
})

And('I click on next steps', () => {
  course.clickOnNextSteps()
})


// Scenario: Deleting the course or room

//Given ('I am logged in as a 'teacher' at 'brb'') is defined in the location --> '/step_definition/commonGlobalSteps/loginSteps.spec.js'

Then('I should be able to delete the test room', () => {
  course.performDeletion()
})

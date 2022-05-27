import Create_Course from '../../../pages/course/pageCreateCourse'

const createCourse = new Create_Course()

And('I click on FAB to create the course', () => {
  createCourse.clickOnCreateFAB()
})

And('I fill out the course creation form', () => {
  createCourse.fillCourseCreationForm()
})

And('I click on next steps', () => {
  createCourse.clickOnNextSteps()
})
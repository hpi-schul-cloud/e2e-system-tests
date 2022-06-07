import Create_Course from '../../../pages/course/pageCreateCourse'

const createCourse = new Create_Course()

And('I click on FAB to create the course', () => {
  createCourse.clickOnCreateFAB()
})

And('I fill out the course creation form for new course {string}', (new_course_name) => {
  createCourse.fillCourseCreationForm(new_course_name)
})

And('I click on next steps', () => {
  createCourse.clickOnNextSteps()
})
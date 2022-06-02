import Create_Course from '../../../pages/course/pageCreateCourse'
import Navigation from '../../../pages/common_navigation/pageNavigation'
import Course from '../../../pages/course/pageCommonCourse'


const createCourse = new Create_Course()
const navigation = new Navigation()
const course = new Course()


//Scenario: Adding a new course
//Given I am logged in as a 'teacher' at 'brb'
When('I go to rooms overview', () => {
  navigation.goToRoomsOverview()
})
And('I click on FAB to create the course', () => {
  createCourse.clickOnCreateFAB()
})
And('I fill out the course creation form for new course {string}', (new_course_name) => {
  createCourse.fillCourseCreationForm(new_course_name)
})
And('I click on next steps', () => {
  createCourse.clickOnNextSteps()
})
Then('I see the course {string} on the room overview page', (course_name) => {
  course.courseIsVisibleOnOverviewPage(course_name)
})
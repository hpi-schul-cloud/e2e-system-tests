import Create_Delete_Course from '../../../pages/course/pageCreateAndDeleteCourse'
import Navigation from '../../../pages/common_global/pageNavigation'
import Common_Course from '../../../pages/course/pageCommonCourse'

const createAndDeleteCourse = new Create_Delete_Course()
const navigation = new Navigation()
const commonCourse = new Common_Course()

//Scenario: Adding a new course

//Given ('I am logged in as a 'teacher' at 'brb'') is defined in the location --> '/step_definition/commonGlobalSteps/loginSteps.spec.js'

When('I go to rooms overview', () => {
  navigation.goToRoomsOverview()
})

And('I click on FAB to create the course', () => {
  createAndDeleteCourse.clickOnCreateFAB()
})

And('I fill out the course creation form for new course', () => {
  createAndDeleteCourse.fillCourseCreationForm('Cypress Testkurs')
})

And('I click on next steps', () => {
  createAndDeleteCourse.clickOnNextSteps()
})

Then('I see the course on the room overview page', () => {
  commonCourse.courseIsVisibleOnOverviewPage('Cypress Testkurs')
})

// Scenario: Deleting the course or room

//Given ('I am logged in as a 'teacher' at 'brb'') is defined in the location --> '/step_definition/commonGlobalSteps/loginSteps.spec.js'

When('I go to rooms overview', () => {
  navigation.goToRoomsOverview()
})

And('I go to newly created room board', () => {
  commonCourse.goToRoomBoard('Kurs Cypress Testkurs')  //Pass 'Cy' as Avatar Intials of the room named 'Cypress Testkurs'
})

Then('I should be able to delete the room', () => {
  createAndDeleteCourse.performDeletion()
})

Then('I do not see the course on the room overview page', () => {
  commonCourse.courseIsNotVisibleOnOverviewPage('Cypress Testkurs')
})
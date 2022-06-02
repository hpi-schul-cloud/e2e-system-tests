import Delete_Course from '../../../pages/course/pageDeleteCourse'
import Course from '../../../pages/course/pageCommonCourse'
import Navigation from '../../../pages/common_navigation/pageNavigation'

const deleteCourse = new Delete_Course()
const course = new Course()
const navigation = new Navigation()

//Scenario: Deleting the test course/room created during executing the testing
//Given I am logged in as a 'teacher' at 'brb'
When('I go to rooms overview', () => {
  navigation.goToRoomsOverview()
})
//And I go to room 'Kurs Cypress Testkurs'
And('I go to room {string}', (room_name) => {
  const selectedRoom = `[aria-label='${room_name}']`
  cy.get(selectedRoom).click({
    multiple: true,
    force: true
  })
})
Then('I should be able to delete the test room', () => {
  deleteCourse.performDeletion()
})

Then('I do not see the course {string} on the room overview page', (course_name) => {
  course.courseIsNotVisibleOnOverviewPage(course_name)
})

import Courses_Common from '../../pages/course/pageCommonCourses'
import Courses from '../../pages/course/pageCourses'

const coursesCommon = new Courses_Common()
const courses = new Courses()

When('I go to rooms overview', () => {
  coursesCommon.navigateToRoomsOverview()
})

And('I go to room {string}', (room_name) => {
  const selectedRoom = `[aria-label='${room_name}']`
  cy.get(selectedRoom).click({ multiple: true, force: true })
})

Then('I can see room page {string}', (room_name) => {
  coursesCommon.showRoomPage(room_name)
})

Then('I see the course {string} on the room overview page', (course_name) => {
  coursesCommon.courseIsVisibleOnOverviewPage(course_name)
})

Then('I do not see the course {string} on the room overview page', (course_name) => {
  coursesCommon.courseIsNotVisibleOnOverviewPage(course_name)
})

When('I open course edit page', () => {
  courses.openCourseEditPage()
})

Then('I can see course edit page', () => {
  courses.showCourseEditPage()
})

And('I click on save changes', () => {
  courses.submitChanges()
})
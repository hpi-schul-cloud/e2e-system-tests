import Courses_Common from '../../pages/course/pageCommonCourses'
import Courses from '../../pages/course/pageCourses'

const coursesCommon = new Courses_Common()
const courses = new Courses()

When('I go to rooms overview', () => {
  coursesCommon.navigateToRoomsOverview()
})

And('I go to room {string}', (roomName) => {
  coursesCommon.navigateToRoomBoard(roomName)
})

Then('I can see room page {string}', (roomName) => {
  coursesCommon.showRoomPage(roomName)
})

Then('I see the course {string} on the room overview page', (courseName) => {
  coursesCommon.courseIsVisibleOnOverviewPage(courseName)
})

Then('I do not see the course {string} on the room overview page', (courseName) => {
  coursesCommon.courseIsNotVisibleOnOverviewPage(courseName)
})

When('I open course edit page', () => {
  coursesCommon.openCourseEditPage()
})

Then('I can see course edit page', () => {
  coursesCommon.showCourseEditPage()
})

And('I click on save changes', () => {
  courses.submitChanges()
})
import Common_Course from '../../pages/courses/pageCommonCourse'
import Course from '../../pages/courses/pageCourse'

const commonCourse = new Common_Course()
const course = new Course()



When('I go to rooms overview', () => {
  commonCourse.goToRoomsOverview()
})

And('I go to room {string}', (room_name) => {
  const selectedRoom = `[aria-label='${room_name}']`
  cy.get(selectedRoom).click({ multiple: true, force:true })
})

Then('I can see room page {string}', (room_name) => {
  commonCourse.showRoomPage(room_name)
})

Then('I see the course {string} on the room overview page', (course_name) => {
  commonCourse.courseIsVisibleOnOverviewPage(course_name)
})

Then('I do not see the course {string} on the room overview page', (course_name) => {
  commonCourse.courseIsNotVisibleOnOverviewPage(course_name)
})

When('I open course edit page', () => {
  course.openCourseEditPage()
})

Then('I can see course edit page', () => {
  course.showCourseEditPage()
})


And('I click on save changes', () => {
  course.submitChanges()
})


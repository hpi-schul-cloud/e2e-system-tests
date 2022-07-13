import Courses_Common from '../../pages/course/pageCommonCourses'
import Courses from '../../pages/course/pageCourses'

const coursesCommon = new Courses_Common()
const courses = new Courses()

When('I go to rooms overview', () => {
  coursesCommon.navigateToRoomsOverview()
})

And('I go to room {string}', (room_name) => {
  coursesCommon.navigateToRoomBoard(room_name)
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

And('I click on FAB to create the course', () => {
  coursesCommon.clickOnCreateCourseFAB()
})

And('I click on FAB to create new content', () => {
  coursesCommon.clickOnCreateContentFAB()
})

And('I click on New Task', () => {
  coursesCommon.clickOnNewTask()
})

And('I can see task {string}', (taskTitle) => {
  coursesCommon.taskIsVisibleOnCoursePage(taskTitle)
})

And('I can not see task {string}', (taskTitle) => {
  coursesCommon.taskIsNotVisibleOnCoursePage(taskTitle)
})

When ('I click on three dot menu of content {string}', (contentTitle) => {
  coursesCommon.openThreeDotMenuForContent(contentTitle)
})

And('I click on Delete in dot menu', () => {
  coursesCommon.clickDeleteInDotMenu()
})

And('I click on Cancel in confirmation window', () => {
  coursesCommon.clickCancelInConfirmationWindow()
})

And('I click on Delete in confirmation window', () => {
  coursesCommon.clickDeleteInConfirmationWindow()
})
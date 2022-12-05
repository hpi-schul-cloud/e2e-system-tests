import Courses_Common from '../../pages/course/pageCommonCourses'
import Courses from '../../pages/course/pageCourses'

const coursesCommon = new Courses_Common()
const courses = new Courses()

When('I go to rooms overview', () => {
  coursesCommon.navigateToRoomsOverview()
})

And('I go to room {string}', roomName => {
  coursesCommon.navigateToRoomBoard(roomName)
})

Then('I can see room page {string}', roomName => {
  coursesCommon.showRoomPage(roomName)
})

Then('I see the course {string} on the room overview page', courseName => {
  coursesCommon.courseIsVisiblAfterSearch(courseName)
})

Then('I do not see the course {string} on the room overview page', courseName => {
    coursesCommon.courseIsNotVisiblAfterSearch(courseName)
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

And('I click on FAB to create the course', () => {
  coursesCommon.clickOnCreateCourseFAB()
})

And('I click on FAB to create new content', () => {
  coursesCommon.clickOnCreateContentFAB()
})

And('I click on New Task FAB', () => {
  coursesCommon.clickOnNewTaskFAB()
})

And('I can see task {string} on course page', taskTitle => {
  coursesCommon.taskIsVisibleOnCoursePage(taskTitle)
})

And('I can not see task {string}', taskTitle => {
  coursesCommon.taskIsNotVisibleOnCoursePage(taskTitle)
})

When('I click on three dot menu of content {string}', contentTitle => {
  coursesCommon.openThreeDotMenuForContent(contentTitle)
})

And('I click on Delete in dot menu', () => {
  coursesCommon.clickDeleteInDotMenu()
})

And('I click on Edit in dot menu', () => {
  coursesCommon.clickEditInDotMenu()
})

And('I click on Cancel in confirmation window', () => {
  coursesCommon.clickOnCancelInConfirmationWindow()
})

And('I click on Delete in confirmation window', () => {
  coursesCommon.clickDeleteInConfirmationWindow()
})

When('I click on task {string}', taskTitle => {
  coursesCommon.openTask(taskTitle)
})

Then(
  'I see task card info submitted contains {string} for task {string}',
  (submittedTasks, taskTitle) => {
    coursesCommon.compareSubmittedTasksInformation(submittedTasks, taskTitle)
  }
)

And(
  'Task card info graded contains {string} for task {string}',
  (gradedTasks, taskTitle) => {
    coursesCommon.compareGradedTasksInformation(gradedTasks, taskTitle)
  }
)

And('I click on link finish for task {string}', taskTitle => {
  coursesCommon.clickOnFinishTask(taskTitle)
})

Then('I see task {string} does not contain any buttons', taskTitle => {
  coursesCommon.checkTaskCardDoesNotHaveButtons(taskTitle)
})

Then('I see task {string} contains buttons', taskTitle => {
  coursesCommon.checkTaskCardDoesHaveButtons(taskTitle)
})

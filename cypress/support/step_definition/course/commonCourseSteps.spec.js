const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
import Courses from '../../pages/course/pageCourses'

const courses = new Courses()

When('I go to rooms overview', () => {
  courses.navigateToRoomsOverview()
})

When('I go to room {string}', roomName => {
  courses.navigateToRoomBoard(roomName)
})

Then('I can see room page {string}', roomName => {
  courses.showRoomPage(roomName)
})

Then('I see the course {string} on the room overview page', courseName => {
  courses.courseIsVisiblOnOverviewPage(courseName)
})

Then(
  'I do not see the course {string} on the room overview page',
  courseName => {
    courses.courseIsNotVisiblOnOverviewPage(courseName)
  }
)

When('I click on save changes after editing the course details', () => {
  courses.submitChangesAfterEditingCourse()
})

When('I open course edit page', () => {
  courses.openCourseEditPage()
})

Then('I can see course edit page', () => {
  courses.showCourseEditPage()
})

When('I click on FAB to create the course', () => {
  courses.clickOnCreateCourseFAB()
})

When('I click on FAB to create new content', () => {
  courses.clickOnCreateContentFAB()
})

When('I click on New Task FAB', () => {
  courses.clickOnNewTaskFAB()
})

When('I click on New Topic FAB', () => {
  courses.clickOnNewTopicFAB()
})

When('I can see content {string} on course page', contentTitle => {
  courses.contentIsVisibleOnCoursePage(contentTitle)
})

When('I can not see content {string}', contentTitle => {
  courses.contentIsNotVisibleOnCoursePage(contentTitle)
})

// When('I can see task {string} on course page', taskTitle => {
//   courses.taskIsVisibleOnCoursePage(taskTitle)
// })

// When('I can not see task {string}', taskTitle => {
//   courses.taskIsNotVisibleOnCoursePage(taskTitle)
// })

When('I click on topic {string} on course page', contentTitle => {
  courses.openTopic(contentTitle)
})

When('I click on three dot menu of content {string}', contentTitle => {
  courses.openThreeDotMenuForContent(contentTitle)
})

When('I click on three dot menu of topic {string}', contentTitle => {
  courses.openThreeDotMenuForTopic(contentTitle)
})

When('I click on Delete in dot menu', () => {
  courses.clickDeleteInDotMenu()
})

When('I click on Delete in dot menu of topic', () => {
  courses.clickDeleteInDotMenuOfTopic()
})

When('I click on Edit in dot menu', () => {
  courses.clickEditInDotMenu()
})

When('I click on Edit in dot menu of topic', () => {
  courses.clickEditInDotMenuOfTopic()
})

When('I click on Cancel in confirmation window', () => {
  courses.clickOnCancelInConfirmationWindow()
})

When('I click on Delete in confirmation window', () => {
  courses.clickDeleteInConfirmationWindow()
})

When('I click on task {string}', taskTitle => {
  courses.openTask(taskTitle)
})

Then(
  'I see task card info submitted contains {string} for task {string}',
  (submittedTasks, taskTitle) => {
    courses.compareSubmittedTasksInformation(submittedTasks, taskTitle)
  }
)

When(
  'Task card info graded contains {string} for task {string}',
  (gradedTasks, taskTitle) => {
    courses.compareGradedTasksInformation(gradedTasks, taskTitle)
  }
)

When('I click on link finish for task {string}', taskTitle => {
  courses.clickOnFinishTask(taskTitle)
})

Then('I see task {string} does not contain any buttons', taskTitle => {
  courses.checkTaskCardDoesNotHaveButtons(taskTitle)
})

Then('I see task {string} contains buttons', taskTitle => {
  courses.checkTaskCardDoesHaveButtons(taskTitle)
})

Then('I can see topic {string} on course page', topicTitle => {
  courses.topicIsVisibleOnCoursePage(topicTitle)
})

When('I clear substitute teacher field', () => {
  courses.clearSubstituteTeacherField()
})

When('I add substitute teacher {string}', username => {
  courses.addSubstituteTeacher(username)
})

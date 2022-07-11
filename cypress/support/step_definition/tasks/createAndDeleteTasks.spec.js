import Task from '../../pages/tasks/pageTasks'

const task = new Task()

//Scenario: Teacher creates task as draft from room
//Given ('I am logged in as a 'teacher' at 'brb'')
//step defined -->\step_definition\authentication\loginStep.spec.js

//When I go to rooms overview
//step defined -->\step_definition\course\commonCourseSteps.spec.js

//And I go to room 'Course with subject and tasks'
//step defined -->\step_definition\course\commonCourseSteps.spec.js

//And('I click on FAB to create task')
//step defined -->\step_definition\course\commonCourseSteps.spec.js

Then('I can see create task page', () => {
  task.seeCreateTaskPage()
})

// And('file upload button is disabled', () => {
//   task.checkFileUploadButtonIsDisabled()
// })

When ('I enter title {string}', (taskTitle) => {
  task.enterTaskTitle(taskTitle)
})

And ('I click on Enable Group Submission', () => {
  task.clickOnGroupSubmissionCheckbox()
})

And ('I click on Draft', () => {
  task.clickOnDraftCheckbox()
})

And ('I set task-visibility-start-date to {string} at {string}', (visibilityStartDate, visibilityStartTime) => {
  task.setVisibilityStartDate(visibilityStartDate, visibilityStartTime)
})
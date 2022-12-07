import Tasks_Common from '../../pages/tasks/pageCommonTasks'

const tasksCommon = new Tasks_Common()

When('I go to tasks overview', () => {
  tasksCommon.navigateToTasksOverview()
})

And('I click on button Submit', () => {
  tasksCommon.clickOnSubmit()
})

When('I click on button Add Task', () => {
  tasksCommon.clickOnAddTask()
})

Then('I can see create task page {string}', (taskTitle) => {
  tasksCommon.seeCreateTaskPage(taskTitle)
})

When ('I enter title {string}', (taskTitle) => {
  tasksCommon.enterTaskTitle(taskTitle)
})

And ('I enter task description {string}', (taskDescription) => {
  tasksCommon.setTaskText(taskDescription)
})

And ('I enter text submission {string}', (submissionText) => {
  tasksCommon.setTaskText(submissionText)
})

And ('I enter comment {string}', (gradingText) => {
  tasksCommon.setTaskText(gradingText)
})

When('I click on draft tasks tab', () => {
  tasksCommon.clickOnTabDraftTasks()
})

Then('I can see task {string} on tasks overview page', taskTitle => {
  tasksCommon.taskIsVisibleOnTasksOverviewPage(taskTitle)
})

Then('I can not see task {string} on tasks overview page', taskTitle => {
  tasksCommon.taskIsNotVisibleOnTasksOverviewPage(taskTitle)
})

When('I click on three dot menu of task {string}', contentTitle => {
  tasksCommon.openThreeDotMenuForTask(contentTitle)
})

When('I click on Delete Task in dot menu', () => {
  tasksCommon.clickDeleteTaskInDotMenu()
})

When('I click on task {string} in tasks overview', contentTitle => {
  tasksCommon.openTaskFromTasksOverview(contentTitle)
})

When('I click on button Delete', () => {
  tasksCommon.clickButtonDeleteTask()
})


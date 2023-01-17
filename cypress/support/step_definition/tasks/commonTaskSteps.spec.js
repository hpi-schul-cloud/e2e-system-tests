import Tasks from '../../pages/tasks/pageTasks'

const tasks = new Tasks()

When('I go to tasks overview', () => {
  tasks.navigateToTasksOverview()
})

And('I click on button Submit', () => {
  tasks.clickOnSubmit()
})

When('I click on button Add Task', () => {
  tasks.clickOnAddTask()
})

Then('I can see create task page {string}', (taskTitle) => {
  tasks.seeCreateTaskPage(taskTitle)
})

When ('I enter title {string}', (taskTitle) => {
  tasks.enterTaskTitle(taskTitle)
})

And ('I enter task description {string}', (taskDescription) => {
  tasks.setTaskText(taskDescription)
})

And ('I enter text submission {string}', (submissionText) => {
  tasks.setTaskText(submissionText)
})

And ('I enter comment {string}', (gradingText) => {
  tasks.setTaskText(gradingText)
})

When('I click on draft tasks tab', () => {
  tasks.clickOnTabDraftTasks()
})

Then('I can see task {string} on tasks overview page', taskTitle => {
  tasks.taskIsVisibleOnTasksOverviewPage(taskTitle)
})

Then('I can not see task {string} on tasks overview page', taskTitle => {
  tasks.taskIsNotVisibleOnTasksOverviewPage(taskTitle)
})

When('I click on three dot menu of task {string}', contentTitle => {
  tasks.openThreeDotMenuForTask(contentTitle)
})

When('I click on Delete Task in dot menu', () => {
  tasks.clickDeleteTaskInDotMenu()
})

When('I click on task {string} in tasks overview', contentTitle => {
  tasks.openTaskFromTasksOverview(contentTitle)
})

When('I click on button Delete', () => {
  tasks.clickButtonDeleteTask()
})


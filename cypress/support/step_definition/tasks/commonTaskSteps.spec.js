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
import Tasks_Common from '../../pages/tasks/pageCommonTasks'

const tasksCommon = new Tasks_Common()

When('I go to tasks overview', () => {
    tasksCommon.goToTasksOverview()
  })
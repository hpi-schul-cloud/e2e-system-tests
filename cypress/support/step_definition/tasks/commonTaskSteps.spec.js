import Tasks from '../../pages/tasks/pageTasks'
import Courses from "../../pages/course/pageCourses";
import Dashboard from "../../pages/dashboard/pageDashboard";

const tasks = new Tasks()

before(() => {
  cy.intercept('**/public').as('public_api');
  cy.intercept('**/me').as('me_api');
  cy.intercept('**/user/**').as('roles_api');
  cy.intercept('**/schools/**').as('schools_api');
  cy.intercept('**/dashboard').as('dashboard_api');
  cy.intercept('**/userPermissions?**').as('userPermissions_api');
  cy.intercept('**/classes?**').as('classes_api');
  cy.intercept('**/students?**').as('students_api');
  cy.intercept('**/locales/**').as('locales_api');
  cy.intercept('**/alerts').as('alerts_api');
  cy.intercept('**/alert').as('alert_api');
  cy.intercept('**/tasks**').as('tasks_api');
  cy.intercept('**/runtime.config.json').as('runtime_config_api');
  cy.intercept('**/board').as('board_api');
  cy.intercept('**/courses?**').as('courses_api');
  cy.intercept('**/courses/**').as('course_api');
  cy.intercept('**/homework/**').as('homework_api');
  cy.intercept('**/rooms/**').as('rooms_api');
  cy.intercept('**/delete/**').as('delete_api');
  cy.intercept('**/teams**').as('teams_api');
  cy.intercept('**/rooms-overview**').as('rooms_overview_api');
  cy.login('teacher', 'brb');
  const courses = new Courses();
  const dashboard = new Dashboard();
  tasks.navigateToTasksOverview();
  tasks.clickOnTabDraftTasks();
  ['Cy Task Creating from Task Overview Test', 'Cy Task to be delete on task page'].forEach((taskName => {
    if (tasks.taskExists(taskName)) {
      tasks.openThreeDotMenuForTask(taskName);
      tasks.clickDeleteTaskInDotMenu();
      courses.clickDeleteInConfirmationWindow();
      dashboard.arriveOnDashboard();
      tasks.navigateToTasksOverview();
      tasks.clickOnTabDraftTasks();
      tasks.taskIsNotVisibleOnTasksOverviewPage(taskName);
    }
  }))
})

When('I go to tasks overview', () => {
  tasks.navigateToTasksOverview()
})

And('I click on button Submit', () => {
  tasks.clickOnSubmit()
})

And('I click on button Submit to save and stay on task page', () => {
  tasks.clickOnSubmitAndStayOnCreatePage()
})

When('I click on button Add Create Content', () => {
  tasks.clickOnAddCreateContent()
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


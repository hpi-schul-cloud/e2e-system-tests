const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Tasks from "../../pages/tasks/pageTasks";

const tasks = new Tasks();

Then("file {string} is saved in folder downloads", (fileName) => {
	tasks.seeFileIsSavedInDownloads(fileName);
});

When("I go to tasks overview", () => {
	tasks.navigateToTasksOverview();
});

When("I click on button Submit", () => {
	tasks.clickOnSubmit();
});

// When('I click on button Submit to save and stay on task page', () => {
//   tasks.clickOnSubmitAndStayOnCreatePage()
// })

When("I click on button Add Task", () => {
	tasks.clickOnAddTask();
});

Then("I can see create task page", () => {
	tasks.seeEditTaskPage("-");
});

Then("I can see edit task page {string}", (taskTitle) => {
	tasks.seeEditTaskPage(taskTitle);
});

Then("I see description of the edit task page", () => {
	tasks.seeEditTaskDescription();
});

Then("I see start date is set and visible", () => {
	tasks.seeEditTaskStartDateIsSet();
});

Then("I see end date is not set and not visible", () => {
	tasks.seeEditTaskEndDateIsNotSet();
});

Then("I see the draft check box is enabled by default", () => {
	tasks.seeDraftCheckboxIsEnabledByDefault();
});

When("I enter title {string}", (taskTitle) => {
	tasks.enterTaskTitle(taskTitle);
});

When("I enter task description {string}", (taskDescription) => {
	tasks.setTaskText(taskDescription);
});

When("I enter text submission {string}", (submissionText) => {
	tasks.setSubmissionText(submissionText);
});

When("I enter comment {string}", (gradingText) => {
	tasks.setSubmissionComment(gradingText);
});

When("I click on draft tasks tab", () => {
	tasks.clickOnTabDraftTasks();
});

Then("I see the draft tasks tab was activated", () => {
	tasks.seeDraftTaskButtonSelected();
});

Then("I can see task {string} on tasks overview page", (taskTitle) => {
	tasks.taskIsVisibleOnTasksOverviewPage(taskTitle);
});

Then("I can not see task {string} on tasks overview page", (taskTitle) => {
	tasks.taskIsNotVisibleOnTasksOverviewPage(taskTitle);
});

When("I click on three dot menu of task {string}", (contentTitle) => {
	tasks.openThreeDotMenuForTask(contentTitle);
});

When("I click on Delete Task in dot menu", () => {
	tasks.clickDeleteTaskInDotMenu();
});

When("I click on task {string} in tasks overview", (contentTitle) => {
	tasks.openTaskFromTasksOverview(contentTitle);
});

When("I click on button Delete", () => {
	tasks.clickButtonDeleteTask();
});

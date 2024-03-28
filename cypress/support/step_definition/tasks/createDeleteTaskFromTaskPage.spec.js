const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Tasks from "../../pages/tasks/pageTasks";

const tasks = new Tasks();

// EXTERNAL COMMON STEP DEFINITIONS
// =========================
// External defined steps can be found here:
// -----------------------------------------
// -->\step_definition\authentication\loginStep.spec.js
// -->\step_definition\course\commonCourseSteps.spec.js
// -->\step_definition\tasks\commonTaskSteps.spec.js

When("I click on button Cancel in confirmation window in edit task page", () => {
	tasks.clickCancelDeletionButtonInEditTask();
});

When("I click on button Delete in confirmation window in edit task page", () => {
	tasks.clickConfirmDeletionButtonInEditTask();
});

const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Courses from "../../pages/course/pageCourses";

const courses = new Courses();

// EXTERNAL COMMON STEP DEFINITIONS
// =========================
// External defined steps can be found here:
// -----------------------------------------
// --> \step_definition\authentication\loginStep.spec.js
// --> \step_definition\courses\commonCourseSteps.spec.js

Then("I see class selection box to select the class for the course", () => {
	courses.seeSelectionBoxToSelectClass();
});

Then("I see student selection box to select the class for the course", () => {
	courses.seeSelectionInBoxToSelectStudent();
});

When("I edit the course description to {string}", (editedCourseDescription) => {
	courses.editCourseDescription(editedCourseDescription);
});

When("I click on the button delete course", () => {
	courses.clickOnDeleteButtonOnCourseEditPage();
});

Then("I see the modal to confirm the deletion", () => {
	courses.seeModalToConfirmCourseDeletion();
});

When("I click on the button delete on the modal to confirm the course deletion", () => {
	courses.confirmCourseDeletionOnModal();
});

When("I click on the remove icon of group {string}", (groupName) => {
	courses.removeGroup(groupName);
});

Then("I do not see {string} in the group selection box", (groupName) => {
	courses.checkIfGroupIsNotVisible(groupName);
});

const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Courses from "../../pages/course/pageCourses";

const courses = new Courses();

// EXTERNAL COMMON STEP DEFINITIONS
// =========================
// External defined steps can be found here:
// -----------------------------------------
// --> \step_definition\authentication\loginStep.spec.js
// --> \step_definition\courses\commonCourseSteps.spec.js

When("I click on the selection box to add a new group with {string}", (groupName) => {
	courses.addGroup(groupName);
});

Then("I see {string} in the class selection box", (groupName) => {
	courses.checkIfGroupIsVisible(groupName);
});

Then("I do not see {string} in the student selection box", (studentName) => {
	courses.checkIfStudentIsNotVisible(studentName);
});

Then("I see {string} in the student selection box", (studentName) => {
	courses.checkIfStudentIsVisible(studentName);
});
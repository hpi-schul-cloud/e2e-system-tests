const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Courses from "../../pages/course/pageCourses";

const courses = new Courses();

// EXTERNAL COMMON STEP DEFINITIONS
// =========================
// External defined steps can be found here:
// -----------------------------------------
// --> \step_definition\authentication\loginStep.spec.js
//--> \step_definition\courses\commonCourseSteps.spec.js

//Scenario: teacher is able to search for a course and find it

When("I enter the course name {string} into the search field", (roomName) => {
	courses.searchForARoom(roomName);
});

When("I select {string} from field teacher", (userName) => {
	courses.selectTeacherFromTeacherField(userName);
	// cy.get('[data-testid="teachers_container"]').click();
	// cy.get(".chosen-results").contains(userName).click();
});

When("I select {string} from field student", (userName) => {
	courses.selectStudentFromStudentField(userName);
	// cy.get('[data-testid="students_container"]').click();
	// cy.get(".chosen-results").contains(userName).click();
});

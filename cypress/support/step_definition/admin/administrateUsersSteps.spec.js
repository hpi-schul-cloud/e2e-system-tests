const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Management from "../../pages/admin/pageAdministration";

const management = new Management();

// EXTERNAL COMMON STEP DEFINITIONS
// ================================
// External defined steps can be found here:
// -----------------------------------------
// -->\step_definition\authentication\loginStep.spec.js
// --> \step_definition\management\CommonManagementSteps.spec.js

//Scenario: Adding a new student

When(
	"I fill out the user creation form for {string} {string} with email {string}",
	(forename, surname, email) => {
		management.fillUserCreationForm(forename, surname, email);
	}
);

When("I click on add button to add {string}", (role) => {
	management.clickOnAddButton(role);
});

Then("I can see the user with email {string} in the table", (email) => {
	management.userIsVisibleInTable(email);
});

//Scenario: Editing a new student

When("I enter {string} email {string} in search input field", (role, keyword) => {
	management.enterNameForSearch(role, keyword);
});

When("I change username to {string} {string}", (firstname, surname) => {
	management.changeUsername(firstname, surname);
});

When("I change email to {string}", (newEmail) => {
	management.changeEmail(newEmail);
});

When("I click save changes button", () => {
	management.clickSaveButton();
});

// Scenario: Deleting a student

When("I click edit student button for {string}", (email) => {
	management.clickEditStudentButton(email);
});

When("I click delete user button to delete user with email {string}", (email) => {
	management.deleteUser(email);
});

When("I click on delete button in pop up", () => {
	management.clickUserDeleteButtonInModal();
});

Then("I can not see user {string} in the table", (email) => {
	management.userIsNotVisibleInTable(email);
});

//Scenario: Adding a new teacher

//Scenario: Editing a new teacher

When("I click edit teacher button for {string}", (email) => {
	management.clickEditTeacherButton(email);
});

Then("I can see the edited teacher in the table", () => {
	management.editedUserIsVisibleInTable();
});

//Scenario: Deleting a teacher

When("I click delete user button", () => {
	management.clickDeleteButton();
});

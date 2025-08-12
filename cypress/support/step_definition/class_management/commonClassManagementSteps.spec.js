const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Classes from "../../pages/class_management/pageClasses";

const classes = new Classes();

When("I navigate to class administration page via sub menu", () => {
	classes.clickOnClassInAdministrationSubMenu();
});

When("I click on the Add class button", () => {
	classes.clickCreateClassButtonOnNewClassPage();
});

When("I click on the button Save changes on the page manage class", () => {
	classes.clickOnSaveChangesOnManageClassPage();
});

Then("I see the new class administration page", () => {
	classes.isNewClassAdministrationPage();
});

Then("I see the group {string} with source {string}", (groupName, sourceName) => {
	classes.seeSourceOfClass(groupName, sourceName);
});

Then("I see the class {string} without source", (className) => {
	classes.doNotSeeSourceOfClass(className);
});

Then("I see 3 tabs", () => {
	classes.see3Tabs();
});

When("I click on the manage button of class {string}", (className) => {
	classes.clickOnManageClassButton(className);
});

When("I click on the edit button of class {string}", (className) => {
	classes.clickOnEditClassButton(className);
});

When("I click on the delete button of class {string}", (className) => {
	classes.clickOnDeleteClassButton(className);
});

When("I click on the upgrade button of class {string}", (className) => {
	classes.clickOnCreateSuccessorButton(className);
});

When("I click on the manage button of group {string}", (groupName) => {
	classes.clickOnManageGroupButton(groupName);
});

Then("I see the manage classes page", () => {
	classes.isManageClassPage();
});

Then("I see the edit classes page", () => {
	classes.isEditClassPage();
});

Then("I see the create successor page", () => {
	classes.isCreateSuccessorPage();
});

When("I click on the button confirm on the page create successor", () => {
	classes.clickConfirmSuccessor();
});

Then(
	"I see the disabled create successor button of the original class {string}",
	(className) => {
		classes.seeSuccessorButtonIsDisabled(className);
	}
);

Then(
	"I see the enabled create successor button of the original class {string}",
	(className) => {
		classes.seeSuccessorButtonIsEnabled(className);
	}
);

Then("I see the delete modal", () => {
	classes.isDeleteDialog();
});

When("I click the confirmation button on the delete modal", () => {
	classes.clickConfirmDeleteDialogButton();
});

When("I click on the next year tab", () => {
	classes.clickNextYearTab();
});

Then("I do not see class {string} in the table", (className) => {
	classes.doNotSeeClassInTable(className);
});

Then(
	"I see group {string} is synchronized with course {string}",
	(groupName, courseName) => {
		classes.seeGroupIsSyncedWithCourse(groupName, courseName);
	}
);

Then("I see group {string} without a synchronized course", (groupName) => {
	classes.seeGroupIsSyncedWithCourse(groupName, "");
});

When("I click on the stop synchronization button of group {string}", (groupName) => {
	classes.clickStopSyncButtonOfGroup(groupName);
});

When("I do not see stop synchronization button of group {string}", (groupName) => {
	classes.doNotSeeStopSyncButtonOfGroup(groupName);
});

Then("I see the create class page", () => {
	classes.isCreateClassPage();
});

Then("I see the class {string} has {string} students", (className, numberOfStudents) => {
	classes.seeNumberOfStudentsOfClass(className, numberOfStudents);
});

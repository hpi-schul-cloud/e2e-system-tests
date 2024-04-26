const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Courses from "../../pages/course/pageCourses";

const courses = new Courses();

When("I click on tab Tools old", () => {
	courses.clickOnOldToolsTabInCourse();
});

Then("I see tab Tools in course", () => {
	courses.seeToolsTabInCourse();
});

When("I click on button Add new tool", () => {
	courses.clickOnAddNewLtiToolButton();
});

Then("I see list of tools for course", () => {
	courses.seeToolsListForCourse();
});

When("I click on the BBB Video Conference BigBlueButton in DBC and BRB", () => {
	courses.clickOnBBBInToolTabInDBCBRB();
});

Then("I see the modal content appears for confirmation", () => {
	courses.appearsModalContentForConfirmation();
});

When("I click on button Add in modal content", () => {
	courses.clickOnButtonAdd();
});

Then("I see the BBB Video Conference BigBlueButton added in tools tab", () => {
	courses.seeBBBInToolTabDBCBRB();
});

When("I click on the BBB Video Conference BigBlueButton in course", () => {
	courses.clickOnBBBInCourse();
});

Then("I see the modal to start the BBB video conference in DBC and BRB", () => {
	courses.seeModalStartBBBVideoConference();
});

Then("I click on button Cancel in BBB modal", () => {
	courses.clickCancelButtonInBBB();
});

When("I click on icon Delete on the BBB Video Conference BigBlueButton", () => {
	courses.clickIconDeleteBBBVideoConference();
});

Then("I see the modal content for confirmation of deletion", () => {
	courses.seeModalDeletionBBBVideoConference();
});

When("I click on button Delete in BBB modal", () => {
	courses.clickDeleteButtonInBBB();
});

Then("I do not see the BBB Video Conference BigBlueButton in tools tab", () => {
	courses.doNotSeeBBBInToolTabDBCBRB();
});

Then("I do not see BBB Video Conference in DBC and BRB", () => {
	courses.doNotSeeBBBInDBCBRB();
});

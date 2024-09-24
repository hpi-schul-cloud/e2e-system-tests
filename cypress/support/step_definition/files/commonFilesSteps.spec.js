const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Files from "../../pages/files/pageFiles";

const files = new Files();

When("I click on Files in menu", () => {
	files.openFilesMenu();
});

Then("I go to personal files overview", () => {
	files.navigateToPersonalFilesOverview();
});

When("I go to course files overview", () => {
	files.navigateToCourseFilesOverview();
});

When("I go to team files overview", () => {
	files.navigateToTeamsFilesOverview();
});

When("I go to shared files overview", () => {
	files.navigateToSharedFilesOverview();
});

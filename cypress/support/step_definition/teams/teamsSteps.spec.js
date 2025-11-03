const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Teams from "../../pages/teams/pageTeams";

const teams = new Teams();

When("I select the team event start date and time", () => {
	teams.selectTeamEventStartDate();
});

When("I select the team event end date and time", () => {
	teams.selectTeamEventEndDate();
});

Then(
	"I am in calendar tab on team detail page and edited title is visible",
	(editedEventTitle) => {
		teams.editedTeamEventTitleIsVisible(editedEventTitle);
	}
);

When("I enable the video conference on the teams edit page", () => {
	teams.enableVideoConferenceOnTeamEditPage();
});

Then("I see the start video conference button", () => {
	teams.seeTeamVideoConferenceIsVisible();
});

When("I click on start video conference button as a moderator teacher", () => {
	teams.clickOnVideoStartButtonAsTeacherAndModerator();
});

Then("I see the modal and toggles are visible in the modal", () => {
	teams.seeModalAndToggles();
});

Then("I start the team video conference which has title {string}", (teamEventTitle) => {
	teams.startTeamVideoConferenceFromModal(teamEventTitle);
});

Then("I see URL is changed to {string}", (bbbExtURL) => {
	teams.seeBBBExternalURL(bbbExtURL);
});

Then(
	"I click on participate to video conference button as a participating student",
	() => {
		teams.clickOnVideoParticipantLinkButtonAsStudent();
	}
);

Then("I see video icon for team event", () => {
	teams.seeVideoPartcipationButtonInTeamEvents();
});

Then("I see team event with description {string}", (teamEventDescription) => {
	teams.seeTeamEventDescription(teamEventDescription);
});

Then("I see video conference check box is unchecked", () => {
	teams.seeUncheckedVideoConferenceCheckbox();
});

Then("I see video conference option is disabled", () => {
	teams.seeDisabledVideoConferenceOnTeamEditPage();
});

Then("I see the video conference participate button as student", () => {
	teams.seeVideoPartcipationButtonAsStudent();
});

When("I enable the video conference toggle on the modal", () => {
	teams.enableVideoConferenceToggleOnModal();
});

Then("I do not see the team {string}", (teamName) => {
	teams.doNotSeeTeam(teamName);
});

Then("I see dialog box and click on delete button to confirm the deletion", () => {
	teams.confirmDeleteOnDialogBox();
});

When("I click on delete option", () => {
	teams.clickOnDeleteOption();
});

When("I click on edit option", () => {
	teams.clickOnEditOption();
});

Then("I see team edit page", () => {
	teams.seeTeamEditPage();
});

When("I click on team settings", () => {
	teams.clickOnTeamSettings();
});

Then("I see new team creation page", () => {
	teams.seeTeamCreationPage();
});

When("I enter in the description {string}", (desc) => {
	teams.enterTeamDescription(desc);
});

When("I select the team colour black", () => {
	teams.selectTeamColour();
});

Then("I see team title {string} is visible", (teamName) => {
	teams.seeCreatedTeamName(teamName);
});

Then("I see the description {string} is visible", (desc) => {
	teams.seeCreatedTeamDescription(desc);
});

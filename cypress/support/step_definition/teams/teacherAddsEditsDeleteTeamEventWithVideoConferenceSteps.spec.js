const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Teams from "../../pages/teams/pageTeams";

const teams = new Teams();

//There are some repeating steps which are defined only once in this step definition file etc.

// Rest of the defined steps can be found here:
// -----------------------------------------
// -\step_definition\authentication\loginStep.spec.js
// -\step_definition\administration\commonAdministrationSteps.spec.js
// -\step_definition\teams\commonTeamsSteps.spec.js

When("I click on Add date", () => {
	teams.clickOnAddTeamsAppointment();
});

Then("I see event creation modal", () => {
	teams.seeTeamEventCreationModal();
});

When("I enter the title {string}", (eventTitle) => {
	teams.enterTeamEventTitle(eventTitle);
});

When("I select the team event start date and time", () => {
	teams.selectTeamEventStartDate();
});

When("I select the team event end date and time", () => {
	teams.selectTeamEventEndDate();
});

When("I enter the description {string}", (eventDescription) => {
	teams.enterTeamEventDescription(eventDescription);
});

When("I enter the event place {string}", (eventPlace) => {
	teams.enterTeamEventPlace(eventPlace);
});

When("I click on button Save team event changes", () => {
	teams.clickOnSaveTeamEvent();
});

When("I click on Save team event button", () => {
	teams.clickOnSaveToCreateNewTeamEvent();
});

Then(
	"I am in calendar tab on team detail page and title {string} is visible",
	(eventTitle) => {
		teams.seeTeamEventTitleIsVisible(eventTitle);
	}
);

When("I click on edit icon", () => {
	teams.clickOnTeamsEventEditOption();
});

When("I change the title to {string}", (editedEventTitle) => {
	teams.editTeamEventTitle(editedEventTitle);
});

When("I change the description to {string}", (editedEventDescription) => {
	teams.editTeamEventDescription(editedEventDescription);
});

When("I change the event place to {string}", (editedEventPlace) => {
	teams.editTeamEventPlace(editedEventPlace);
});

Then(
	"I am in calendar tab on team detail page and edited title is visible",
	(editedEventTitle) => {
		teams.editedTeamEventTitleIsVisible(editedEventTitle);
	}
);

When("I click on Delete team event in modal", () => {
	teams.deleteTeamEvent();
});

Then("I am in calendar tab on team detail page and title is NOT visible", () => {
	teams.doNotSeeTeamEventTitle();
});

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

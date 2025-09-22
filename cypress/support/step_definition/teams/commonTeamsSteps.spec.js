const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Teams from "../../pages/teams/pageTeams";

const teams = new Teams();

When("I click on teams save changes button", () => {
	teams.clickOnSaveChangeButton();
});

When("I go to teams overview", () => {
	teams.navigateToTeamsOverview();
});

When("I go to a team {string}", (teamName) => {
	teams.selectTeam(teamName);
});

Then("I can not see the chat in team", () => {
	teams.canNotSeeTeamChat();
});

When("I open team settings", () => {
	teams.openTeamSettings();
});

When("I choose edit team", () => {
	teams.editTeam();
});

Then("I can not see the checkbox for messenger in a team", () => {
	teams.canNotSeeTeamChatCheckbox();
});

Then("I can see the checkbox for messenger in a team", () => {
	teams.canSeeTeamChatCheckbox();
});

Then("I can see the chat in team", () => {
	teams.canSeeTeamChat();
});

Then("I see team participants overview page", () => {
	teams.seeTeamMembersOverviewPage();
});

When("I click on three dot menu on the team title", () => {
	teams.clickOnThreeDotToManageTeam();
});

When("I click on manage team members option", () => {
	teams.clickOnManageTeamMembersEditOption();
});

When("I click on add internal attendees button", () => {
	teams.clickOnAddInternalAttendees();
});

When(
	"new dialog opens to select student {string} from the drop down list",
	(studentName) => {
		teams.selectInternalTeamMember(studentName);
	}
);

When("I click on add user button", () => {
	teams.clickOnAddingNewTeamMemberButtonOnModal();
});

Then("I see the student named {string} on the team members table", (studentName) => {
	teams.seeNewlyAddedStudentAsInternalTeamMember(studentName);
});

When("I select the student {string} and click on delete icon", (studentName) => {
	teams.removeStudentInTeam(studentName);
});

Then("I see {string} is not visible on the table", (studentName) => {
	teams.doNotSeeDeletedStudentInTeam(studentName);
});

When("I click on news tab on the team detail page", () => {
	teams.clickOnNewsTabInTeamDetailPage();
});

When("I click on create news button", () => {
	teams.clickOnCreateNewsOnTeamDetailPage();
});

When("I click on button Create Team on the team creation page", () => {
	teams.clickOnAddButtonToCreateTeam();
});

When("I enter in the title {string}", (teamName) => {
	teams.enterTeamName(teamName);
});

When("I click on button Add Team on the teams overview page", () => {
	teams.clickOnAddTeam();
});

When("I go to tab Calendar", () => {
	teams.goToTeamsCalendarTab();
});

Then(
	"I am in calendar tab on team detail page and title {string} is visible",
	(eventTitle) => {
		teams.seeTeamEventTitleIsVisible(eventTitle);
	}
);

When("I click on icon Edit event", () => {
	teams.clickOnTeamsEventEditOption();
});

When("I click on Delete team event in modal", () => {
	teams.deleteTeamEvent();
});

Then("I am in calendar tab on team detail page and title is NOT visible", () => {
	teams.doNotSeeTeamEventTitle();
});

When("I click on button Save team event changes", () => {
	teams.clickOnSaveTeamEvent();
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

Then("I see event creation modal", () => {
	teams.seeTeamEventCreationModal();
});

When("I click on Save team event button", () => {
	teams.clickOnSaveToCreateNewTeamEvent();
});

When("I enter the description {string}", (eventDescription) => {
	teams.enterTeamEventDescription(eventDescription);
});

When("I enter the event place {string}", (eventPlace) => {
	teams.enterTeamEventPlace(eventPlace);
});

When("I enter the title {string}", (eventTitle) => {
	teams.enterTeamEventTitle(eventTitle);
});

When("I click on Add date", () => {
	teams.clickOnAddTeamsAppointment();
});

const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Rooms from "../../pages/rooms/pageRooms";
import RoomBoards from "../../pages/room_board/pageRoomBoards";

const rooms = new Rooms();

When("I select the colour for the room", () => {
	rooms.selectRoomColour();
});
When("I select the start date for the room", () => {
	rooms.selectTodayStartDateForRoom();
});

When("I select the end date for the room", () => {
	rooms.selectEndDateForRoom();
});

When("I go to room overview", () => {
	rooms.navigateToRoomsOverview();
});

When("I click on FAB to create new room", () => {
	rooms.clickOnCreateRoomFAB();
});

When("I click on FAB to add participants", () => {
	rooms.clickOnAddParticipantsFAB();
});

Then("I see room creation page", () => {
	rooms.showRoomCreationPage();
});

Then("I see edit page of room {string}", (roomName) => {
	rooms.showRoomEditPage(roomName);
});

When("I enter the room name {string}", (newRoomName) => {
	rooms.fillRoomFormName(newRoomName);
});

When("I click on the button to save the room", () => {
	rooms.submitRoom();
});

Then("I see the detail page of room {string}", (newRoomName) => {
	rooms.seeRoomDetailPage(newRoomName);
});

Then("I see the edit participants page of room {string}", () => {
	rooms.seeRoomEditParticipantsPage();
});

When("I go to room {string}", (roomName) => {
	rooms.navigateToRoom(roomName);
});

When("I click on three dot menu in room page", () => {
	rooms.openThreeDotMenuForRoom();
});

Then("I see confirmation modal for deleting the room", () => {
	rooms.seeConfirmationModalForRoomDeletion();
});

Then("I see add participants modal", () => {
	rooms.seeModalForAddParticipants();
});

When("I click on delete button in confirmation modal", () => {
	rooms.clickDeleteInConfirmationModal();
});

Then("I see {string} on room overview page", (roomName) => {
	rooms.roomIsVisibleOnOverviewPage(roomName);
});

Then("I do not see {string} on room overview page", (roomName) => {
	rooms.roomIsNotVisibleOnOverviewPage(roomName);
});

Then("I see school {string} in school dropdown", (participantSchool) => {
	rooms.seeSchoolOfParticipant(participantSchool);
});

Then("I see role {string} in role dropdown", (participantRole) => {
	rooms.seeRoleOfParticipant(participantRole);
});

When("I enter {string} in name dropdown", (participantName) => {
	rooms.fillParticipantFormName(participantName);
});

When("I select the first name from the dropdown", () => {
	rooms.selectParticipantName();
});

When("I click on the button to add the participant", () => {
	rooms.addParticipant();
});

Then("I see {string} in the room participants list", (participantName) => {
	rooms.seeParticipantInList(participantName);
});

When(
	"I click on {string} button in the participant list for participant {string}",
	(kebabMenuOption, participantName) => {
		rooms.performKebabMenuActionOnParticipantInRoomMembershipTable(
			kebabMenuOption,
			participantName
		);
	}
);

Then(
	"I see the participant {string} is removed from the room participants list",
	(participantName) => {
		rooms.notSeeParticipantInList(participantName);
	}
);

When("I click on the button add content", () => {
	rooms.clickOnAddContentButton();
});

Then("I see the button to add board", () => {
	rooms.seeFabButtonToAddBoard();
});

When("I click on the fab button to add a Board", () => {
	rooms.clickOnFabButtonToAddBoard();
});

When(
	"I click on button Three Dot Menu to add participant {string}",
	(participantName) => {
		rooms.clickOnThreeDotMenuToAddUser(participantName);
	}
);

Then("I see button Change Role Permission is visible", () => {
	rooms.isChangeRolePermissionButtonVisible();
});

When("I click on button {string} in the sub-menu", (buttonAction) => {
	rooms.clickOnButtonActionMenuInSubMenu(buttonAction);
});

Then("I see dialog box Change Role Permission is visible", () => {
	rooms.isChangeRolePermissionDialogVisible();
});

When("I change second user role to {string}", (role) => {
	rooms.changeRoleOfTheUser(role);
});

Then("I see Role changed to {string} for second user", (role) => {
	rooms.isChangedRoleVisible(role);
});

Then("I click on button {string} in the action menu", (buttonAction) => {
	rooms.confirmChangeRoleModalActions(buttonAction);
});

Then("I see dialog box to leave the room", () => {
	rooms.isRoomLeaveDialogBoxVisible();
});

Then("I click on button {string} to leave the room", (buttonAction) => {
	rooms.clickOnActionButtonForRoomLeave(buttonAction);
});

Then("I see teacher {string} not visible in the table", (participantName) => {
	rooms.isParticipantNotVisible(participantName);
});

Then("I don't see {string} options in the menu", (optionsString) => {
	rooms.doNotSeeOptionsInMenu(optionsString);
});

Then("I don't see button Fab Add Member", () => {
	rooms.doNotSeeFabAddMember();
});

Then("I don't see info text", () => {
	rooms.doNotSeeInfoTextBanner();
});

Then("I don't see first checkbox column in the table", () => {
	rooms.doNotSeeFirstColumnInRoomMembersTable();
});

Then("I don't see last actions column in the table", () => {
	rooms.doNotSeeLastColumnInRoomMembersTable();
});

Then("I see button Fab Create Room Board", () => {
	rooms.doNotSeeFabCreateRoomBoard();
});

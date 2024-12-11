const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Rooms from "../../pages/room/pageRooms";

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

When("I click on edit option in room menu", () => {
	rooms.openEditInThreeDotMenuForRoom();
});

When("I click on participants option in room menu", () => {
	rooms.openParticipantsInThreeDotMenuForRoom();
});

When("I click on delete option in room menu", () => {
	rooms.openDeleteInThreeDotMenuForRoom();
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
	"I click on delete button in the participant list for participant {string}",
	(participantName) => {
		rooms.removeParticipant(participantName);
	}
);

Then(
	"I see the participant {string} is removed from the room participants list",
	(participantName) => {
		rooms.notSeeParticipantInList(participantName);
	}
);

When("I click on the add content button to see the creation button", () => {
	rooms.clickOnAddContentButton();
});

Then("I see the button to add board", () => {
	rooms.seeFabButtonToAddBoard();
});

When ("I click on the fab button to add a Board", () => {
	rooms.clickOnFabButtonToAddBoard();
});

Then("I see the column board dialog box", () => {
	rooms.seeColumnBoardDialogBox();
});

When("I click on button to add multi column board", () => {
	rooms.clickOnButtonToAddMultiColumnBoard();
});

Then("I see the page room board details", () => {
	rooms.seeNewRoomBoardCreatePage();
});

When("I click on the button three dot menu in room board", () => {
	rooms.clickOnThreeDotMenuInRoomBoardTitle();
});

When("I click on edit in board menu", () => {
	rooms.clickOnEditInBoardMenu();
});

Then("I enter the room board title {string}", (boardTitle) => {
	rooms.enterRoomBoardTitle(boardTitle);
});

When("I click on the page outside of the title of the board", () => {
	rooms.clickOutsideTheTitleToSaveTheModifiedTitle();
});
Then("I see my room board is named {string}", (boardTitle) => {
	rooms.seeGivenRoomBoardTitle(boardTitle);
});
When("I click on delete in board menu", () => {
	rooms.clickOnDeleteInBoardMenu();
});
Then("I see the button to cancel the dialog", () => {
	rooms.seeBtnDialogCancel();
});
When("I click on the button to cancel the deletion", () => {
	rooms.clickOnBtnDialogCancel();
});
Then("I see the board {string} on the room overview page", (boardTitle) => {
	rooms.boardIsVisibleOnOverviewPage(boardTitle);
});
Then("I see the button to confirm the dialog", () => {
	rooms.seeBtnDialogConfirmDelete();
});
When("I click on the button to confirm the deletion", () => {
	rooms.clickBtnDialogConfirmDelete();
});
Then("I do not see the board {string} in the room", (boardTitle) => {
	rooms.boardIsNotVisibleOnOverviewPage(boardTitle);
});


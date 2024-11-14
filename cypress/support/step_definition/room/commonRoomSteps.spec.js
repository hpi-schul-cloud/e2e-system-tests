const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Rooms from "../../pages/room/pageRooms";

const rooms = new Rooms();

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

Then("I do not see {string} on room overview page", (roomName) => {
	rooms.roomIsNotVisiblOnOverviewPage(roomName);
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

When("I select the name {string} from the dropdown", (participantName) => {
	rooms.selectParticipantName(participantName);
});

When("I click on the button to add the participant", () => {
	rooms.addParticipant();
});

Then("I see {string} in the room participants list", (participantName) => {
	rooms.seeParticipantInList(participantName);
});

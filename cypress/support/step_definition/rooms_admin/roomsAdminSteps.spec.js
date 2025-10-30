const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import RoomsAdmin from "../../pages/rooms_admin/pageRoomsAdmin";

const roomsAdmin = new RoomsAdmin();

When("I navigate to rooms administration page via the submenu", () => {
	roomsAdmin.navigateToRoomsAdministrationPageViaSubmenu();
});

Then("I see the rooms administration page", () => {
	roomsAdmin.isRoomsAdministrationPage();
});

Then("I see {string} in the room members list", (participantName) => {
	roomsAdmin.seeParticipantInAdminList(participantName);
});

Then(
	"I see the icon Alert in the column Room owner for the room {string}",
	(roomName) => {
		roomsAdmin.seeAlertIconInRoomOwnerColumn(roomName);
	}
);

Then("I see the room {string} on the rooms administration page", (roomName) => {
	roomsAdmin.seeRoomInRoomsTable(roomName);
});

Then("I do not see the room {string} on the rooms administration page", (roomName) => {
	roomsAdmin.doNotSeeRoomInRoomsTable(roomName);
});

Then(
	"I see the room {string} has correct internal members count {string}",
	(roomName, internalMembersCount) => {
		roomsAdmin.seeInternalMemberCountOfRoom(roomName, internalMembersCount);
	}
);

Then(
	"I see the room {string} has correct external members count {string}",
	(roomName, externalMembersCount) => {
		roomsAdmin.seeExternalMemberCountOfRoom(roomName, externalMembersCount);
	}
);

Then(
	"I see the room {string} has correct total members count {string}",
	(roomName, totalMembersCount) => {
		roomsAdmin.seeTotalMemberCountOfRoom(roomName, totalMembersCount);
	}
);

When("I click on three dot menu in the room admin page for room {string}", (roomName) => {
	roomsAdmin.clickOnThreeDotMenuForRoom(roomName);
});

When("I click on delete in the three dot menu", () => {
	roomsAdmin.clickOnDeleteInThreeDotMenuForRoom();
});

When("I click on manage room members in the three dot menu", () => {
	roomsAdmin.clickOnManageRoomMembersInThreeDotMenuForRoom();
});

Then("I see the admin page Edit participants of room {string}", (roomName) => {
	roomsAdmin.seeAdminRoomEditParticipantsPage(roomName);
});

Then("I see {string} in the admin room participants list", (participantName) => {
	roomsAdmin.seeParticipantInAdminList(participantName);
});

Then("I see confirmation modal for deleting the room in admin page", () => {
	roomsAdmin.seeConfirmationModalForRoomDeletionInAdminPage();
});

When("I click on delete button in confirmation modal in room admin page", () => {
	roomsAdmin.clickDeleteInConfirmationModal();
});

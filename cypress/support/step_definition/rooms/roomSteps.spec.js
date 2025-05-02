const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Rooms from "../../pages/rooms/pageRooms";

const rooms = new Rooms();

//Then('I should be redirected to the duplicated room with name containing {string}', (suffix) => {
//verifyDuplicatedRoomNameContains(suffix);
//})

//Then('the duplicated room with name suffix {string} should not be visible on the overview', (suffix) => {
//verifyDuplicatedRoomIsDeleted(suffix);
//});

Then("I see the success message Alert", () => {
	rooms.seeDuplicateRoomSuccessAlert();
});

Then("I see the Modal to confirm the duplication", () => {
	rooms.seeDuplicationModal();
});

Then("I see the Title in the modal", () => {
	rooms.seeDuplicationModalModalTitle();
});

When("I click on the button Cancel", () => {
	rooms.clickCancelButtonOnDuplicationModal();
});

Then("I do not see the Modal to confirm the duplication", () => {
	rooms.duplicationModalShouldNotBeVisible();
});

When("I click on the button Duplicate in the modal", () => {
	rooms.clickDuplicateButtonInModal();
});

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

When("I click on the button Save room", () => {
	rooms.submitRoom();
});

Then("I see the detail page of room {string}", (newRoomName) => {
	rooms.seeRoomDetailPage(newRoomName);
});

Then("I see the page Edit participants of room {string}", () => {
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

Then("I see modal Add participants", () => {
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

Then("I see school {string} in dropdown School", (participantSchool) => {
	rooms.seeSchoolOfParticipant(participantSchool);
});

Then("I see role {string} in dropdown Role", (participantRole) => {
	rooms.seeRoleOfParticipant(participantRole);
});

When("I enter {string} in dropdown Name", (participantName) => {
	rooms.fillParticipantFormName(participantName);
});

When("I select the first name from the dropdown", () => {
	rooms.selectParticipantName();
});

When("I click on the button Add participant", () => {
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

Then("I see button Change role permission is visible", () => {
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

Then(
	"I click on button {string} in the {string} action menu",
	(buttonAction, roleType) => {
		rooms.confirmChangeRoleModalActions(buttonAction, roleType);
	}
);

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
	rooms.seeFabCreateRoomBoard();
});

Then("I see button Fab Add Member", () => {
	rooms.seeFabAddMember();
});

Then("I see the banner explaining member addition, including other schools", () => {
	rooms.seeInfoTextBannerForAddingMembersIncludingExternalTeachers();
});

Then("I see first checkbox column in the table", () => {
	rooms.seeFirstColumnInRoomMembersTable();
});

Then("I see last actions column in the table", () => {
	rooms.seeLastColumnInRoomMembersTable();
});

Then(
	"I see the banner explaining member addition, including other schools for admin before leaving the room",
	() => {
		rooms.seeInfoTextForAdmin();
	}
);

Then("I see teacher {string} is visible in the table", (participantName) => {
	rooms.isParticipantVisible(participantName);
});

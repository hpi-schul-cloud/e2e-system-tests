const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Rooms from "../../pages/rooms/pageRooms";

const rooms = new Rooms();

Then("I delete all rooms whose names start with {string}", (roomNamePrefix) => {
	rooms.deleteAllRoomsWithName(roomNamePrefix);
});

Then(
	"I see the icon Lock in the room {string} at position {string}",
	(roomName, position) => {
		rooms.seeLockIconInRoom(roomName, position);
	}
);

When(
	"I click on button Open to access the locked room {string} at position {string}",
	(roomName, position) => {
		rooms.clickLockedRoom(roomName, position);
	}
);

Then("I see a message that the room is not accessible", () => {
	rooms.seeRoomNotAccessibleMessage();
});

Then("I see the info box indicating that the content cannot be copied or shared", () => {
	rooms.seeContentRestrictionInfoBoxInModal();
});

When("I see the source room name in the modal room import", () => {
	rooms.seeRoomNameInImportModal();
});

Then("I enter a new room name {string}", (roomName) => {
	rooms.enterNewRoomNameInImportModal(roomName);
});

When("I check the video conference checkbox", () => {
	rooms.checkVideoConferenceCheckbox();
});

When("I uncheck the video conference checkbox", () => {
	rooms.uncheckVideoConferenceCheckbox();
});

Then("I see the video conference checkbox is checked", () => {
	rooms.seeVideoConferenceCheckboxIsChecked();
});

Then("I see the video conference checkbox is unchecked", () => {
	rooms.seeVideoConferenceCheckboxIsUnchecked();
});

When("I click on the button Import Confirm in the modal", () => {
	rooms.clickOnImportConfirmButtonInModal();
});

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

When("I click on the button Duplicate in the modal to confirm", () => {
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

When("I go to rooms overview", () => {
	rooms.navigateToRoomsOverview();
});

When("I click on FAB to create new room", () => {
	rooms.clickOnCreateRoomFAB();
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

When(
	"I click on button Open to go to room {string} at position {string}",
	(roomName, position) => {
		rooms.navigateToRoom(roomName, position);
	}
);

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

When("I enter {string} in dropdown School", (participantSchool) => {
	rooms.fillParticipantFormSchool(participantSchool);
});

When("I select the first school from the dropdown", () => {
	rooms.selectParticipantSchool();
});

Then("I see role {string} in dropdown Role", (participantRole) => {
	rooms.seeRoleOfParticipant(participantRole);
});

Then("I do not see role {string} in dropdown Role", (participantRole) => {
	rooms.notSeeRoleOfParticipant(participantRole);
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

Then("I do not see {string} in the room participants list", (participantName) => {
	rooms.notSeeParticipantInList(participantName);
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

When(
	"I click on button Three Dot Menu to edit participant {string}",
	(participantName) => {
		rooms.clickOnThreeDotMenuToEditUser(participantName);
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

When("I select {string} in dropdown Role", (participantRole) => {
	rooms.selectRoomRoleFromDropdownMenu(participantRole);
});

When("I click on tab Invitations", () => {
	rooms.clickOnTabRoomInvitations();
});

When("I click on the fab button to create an invitation link", () => {
	rooms.clickOnInviteParticipantsFAB();
});

Then("I see the modal Create Invitation Link", () => {
	rooms.seeCreateInvitationLinkModal();
});

When(
	"I enter {string} into the Invitation Link Description field",
	(invitationDescription) => {
		rooms.fillInvitationFormDescription(invitationDescription);
	}
);

When("I uncheck the Checkbox to require confirmation", () => {
	rooms.uncheckInvitationFormRequireConfirmation();
});

When("I check the Checkbox to require confirmation", () => {
	rooms.checkInvitationFormRequireConfirmation();
});

When("I save the invitation link", () => {
	rooms.clickInvitationFormSave();
});

Then("I see the Link URL in the Modal", () => {
	rooms.seeLinkUrlInInvitationForm();
});

When("I remember the invitation link URL in the Modal", () => {
	rooms.saveTheLinkUrlInInvitationForm();
});

When("I close the invitation modal", () => {
	rooms.clickInvitationFormClose();
});

Then("I see {string} in the list of invitation links", (invitationDescription) => {
	rooms.seeInvitationLinkInList(invitationDescription);
});

When("I use the remembered invitation link URL", () => {
	rooms.useSavedLinkUrl();
});

Then("I see a link invitation status message", () => {
	rooms.seeLinkInvitationStatusMessage();
});

When("I click on tab Confirmations", () => {
	rooms.clickOnTabRoomConfirmations();
});

When("I click on tab Members", () => {
	rooms.clickOnTabRoomMembers();
});

Then("I see user {string} in the confirmations table", (userName) => {
	rooms.seeUserInConfirmationsTable(userName);
});

Then("I do not see user {string} in the confirmations table", (userName) => {
	rooms.notSeeUserInConfirmationsTable(userName);
});

When(
	"I click on button Three Dot Menu in Confirmations table for user {string}",
	(userName) => {
		rooms.clickOnThreeDotMenuToEditUser(userName);
	}
);

When("I click on confirm button in the three dot menu", () => {
	rooms.clickConfirmButtonInThreeDotMenu();
});

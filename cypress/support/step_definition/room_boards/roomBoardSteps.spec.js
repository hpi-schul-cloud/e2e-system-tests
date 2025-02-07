const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import RoomBoards from "../../pages/room_board/pageRoomBoards";

const roomBoards = new RoomBoards();

Then("I click to uncheck Link valid for the same school", () => {
	roomBoards.uncheckLinkValidForSameSchool();
});

Then("I see an alert that importing the board is not allowed", () => {
	roomBoards.verifyImportBoardNotAllowedAlert();
});

Then("I see the result url text box in the modal", () => {
	roomBoards.verifySharedBoardResultUrlTextBox();
});

Then("I see the title in the share modal", () => {
	roomBoards.verifyShareModalTitle();
});

Then("I see the information box in share modal", () => {
	roomBoards.verifyShareInformationBox();
});

Then("I see the button Cancel in the share modal", () => {
	roomBoards.verifyCancelButtonInShareModal();
});

When("I open the shared URL", () => {
	roomBoards.openSharedBoardURL();
});

Then("I see the modal to import the shared board into the room", () => {
	roomBoards.verifyImportSharedBoardModal();
});

When("I select the target room from the room list in the modal", () => {
	roomBoards.selectRoomForImport();
});

When("I click on the Continue button in the modal", () => {
	roomBoards.clickContinueOnImportModal();
});

When(
	"I enter a new name for the imported board {string} in the modal",
	(importBoardName) => {
		roomBoards.enterNewBoardNameForImport(importBoardName);
	}
);

When("I click on the button Import in the modal", () => {
	roomBoards.clickImportOnModal();
});

Then("I see the Share settings dialog", () => {
	roomBoards.seeShareSettingsDialog();
});

Then("I see the checkbox Link valid for the same school is by default checked", () => {
	roomBoards.verifySameSchoolLinkCheckboxChecked();
});

Then("I see the checkbox Link valid for 21 days is checked", () => {
	roomBoards.verify21DaysLinkCheckboxChecked();
});

When("I click on the button Continue", () => {
	roomBoards.clickContinueButtonInShareSettingsDialog();
});

Then("I see the Share via modal", () => {
	roomBoards.verifyShareViaModal();
});

Then("I see the option Share via Email", () => {
	roomBoards.verifyShareViaEmailOption();
});

Then("I see the option Copy link", () => {
	roomBoards.verifyCopyLinkOption();
});

Then("I see the option Scan QR Code", () => {
	roomBoards.verifyScanQRCodeOption();
});

Then("I copy the board URL", () => {
	roomBoards.copyBoardURLInModal();
});

When("I click on the option edit in the three dot menu on the card", () => {
	roomBoards.clickEditOptionInCardThreeDot();
});

When("I click on the three dot on the card", () => {
	roomBoards.clickOnThreeDotInCard();
});

When("I click on the three-dot menu in the video conference element", () => {
	roomBoards.clickThreeDotMenuInVideoConferenceElement();
});

When("I click on the delete option in the three-dot menu", () => {
	roomBoards.clickDeleteOptionInThreeDotMenu();
});

Then("I see the delete confirmation dialog", () => {
	roomBoards.verifyDeleteConfirmationDialogVisible();
});

When("I click on the delete button in the confirmation dialog", () => {
	roomBoards.clickDeleteButtonInConfirmationDialog();
});

Then("I do not see the video conference element", () => {
	roomBoards.verifyVideoConferenceElementNotVisible();
});

Then(
	"I see the moderator approval checkbox is checked in the video conference start modal",
	() => {
		roomBoards.verifyModeratorApprovalCheckboxCheckedInBBBModal();
	}
);

Then("I see the dialog box for element selection", () => {
	roomBoards.seeElementSelectionDialog();
});

When("I click on the button Close on the element selection dialogue box", () => {
	roomBoards.clickCloseButtonOnElementSelectionDialog();
});

Then("I do not see the element selection dialogue box", () => {
	roomBoards.doNotSeeElementSelectionDialog();
});

Then("I see the dialog box to select element for the card", () => {
	roomBoards.seeElementSelectionDialog();
});

When("I enter the video conference title {string}", (videoConferenceTitle) => {
	roomBoards.enterVideoConferenceTitle(videoConferenceTitle);
});

When("I click on the save button or press the button enter key", () => {
	roomBoards.clickSaveButtonOrPressEnterToSaveVideoConferenceTitle();
});

Then("I see the video conference element added in the card", () => {
	roomBoards.verifyVideoConferenceElementAddedInCard();
});

When("I click on the video conference element in the card", () => {
	roomBoards.clickVideoConferenceElementInCard();
});

Then("I see the modal to start the video conference", () => {
	roomBoards.seeVideoConferenceStartDaialog();
});

Then(
	"I see the button create in the video conference creation modal to start the call",
	() => {
		roomBoards.seeCreateButtonInVideoConferenceDialog();
	}
);

Then(
	"I click on the button cancel in the video conference creation modal to go back to the card",
	() => {
		roomBoards.clickCancelButtonInVideoConferenceCreationModal();
	}
);

Then("I see copied multi-column board tile in the rooms details page", () => {
	roomBoards.verifyMultiColumnCopiedOrSharedBoardTileVisibleOnRoomDetailsPage();
});

Then("I see copied single-column board tile in the room details page", () => {
	roomBoards.verifySingleColumnCopiedBoardTileVisibleOnRoomDetailsPage();
});

When("I click on the single-column board in the room detail page", () => {
	roomBoards.clickSingleColumnBoardInRoomDetailPage();
});

When("I click on the multi-column board in the room detail page", () => {
	roomBoards.clickMultiColumnBoardInRoomDetailPage();
});

Then("I do not see the chip Draft", () => {
	roomBoards.verifyDraftChipNotVisible(); // Method to verify the Draft chip is not visible
});

Then("I see the chip Draft", () => {
	roomBoards.verifyChipDraftVisible();
});

When("I click on the breadcrumb to navigate to the room detail page", () => {
	roomBoards.clickOnBreadcrumbToNavigateToRoomDetail();
});

Then("I see the dialog box to select the Board type", () => {
	roomBoards.seeColumnBoardDialogBox();
});

When("I click on button to add multi-column board", () => {
	roomBoards.clickOnButtonToAddMultiColumnBoard();
});

When("I click on button to add single-column board", () => {
	roomBoards.clickOnButtonToAddSingleColumnBoard();
});

Then("I see the page board details", () => {
	roomBoards.seeNewRoomBoardCreatePage();
});

Then("I do not see the page board details", () => {
	roomBoards.doNotSeeNewRoomBoardCreatePage();
});

When("I click on the three dot menu in room board", () => {
	roomBoards.clickOnThreeDotMenuInRoomBoardTitle();
});

Then("I change the default room board title to {string}", (boardTitle) => {
	roomBoards.enterRoomBoardTitle(boardTitle);
});

When("I click on the page outside of the title of the board", () => {
	roomBoards.clickOutsideTheTitleToSaveTheModifiedTitle();
});
Then("I see my room board is named {string}", (boardTitle) => {
	roomBoards.seeUpdatedRoomBoardTitle(boardTitle);
});
When("I click on delete in board menu", () => {
	roomBoards.clickOnDeleteInBoardMenu();
});
Then("I see the button to cancel the dialog", () => {
	roomBoards.seeBtnDialogCancel();
});
When("I click on the button to cancel the deletion", () => {
	roomBoards.clickOnBtnDialogCancel();
});
Then("I see the board {string} on the room overview page", (boardTitle) => {
	roomBoards.seeBoardOnRoomDetailPage(boardTitle);
});
Then("I see the button to confirm the dialog", () => {
	roomBoards.seeBtnDialogConfirmDelete();
});
When("I click on the button to confirm the deletion", () => {
	roomBoards.clickBtnDialogConfirmDelete();
});
Then("I do not see the board {string} in the room", (boardTitle) => {
	roomBoards.doNotSeeBoardOnRoomDetailPage(boardTitle);
});

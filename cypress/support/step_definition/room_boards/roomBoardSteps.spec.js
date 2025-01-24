const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import RoomBoards from "../../pages/room_board/pageRoomBoards";

const roomBoards = new RoomBoards();

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

//***** id needed in UI
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
	"I click on the button cancel in the video conference creation modal to back to the card",
	() => {
		roomBoards.clickCancelButtonInVideoConferenceCreationModal();
	}
);

Then("I see multi-column copied board v-card on the room detail page", () => {
	roomBoards.verifyMultiColumnCopiedBoardVCardVisibleOnRoomDetailPage();
});

Then("I see single-column copied board v-card on the room detail page", () => {
	roomBoards.verifyListColumnCopiedBoardVCardVisibleOnRoomDetailPage();
});

When("I click on the single-column board in the room detail page", () => {
	roomBoards.clickSingleColumnBoardInRoomDetailPage();
});

When("I click on the multi-column board in the room detail page", () => {
	roomBoards.clickMulticolumnBoardInRoomDetailPage();
});

When("I click on the option Copy", () => {
	roomBoards.clickOptionCopy();
});

When("I click on the menu Publish", () => {
	roomBoards.clickMenuPublish(); // Method to click on the Publish menu
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

When("I click on button to add multi column board", () => {
	roomBoards.clickOnButtonToAddMultiColumnBoard();
});

When("I click on button to add single column board", () => {
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

When("I click on edit in board menu", () => {
	roomBoards.clickOnEditInBoardMenu();
});

Then("I change the default room board title to {string}", (boardTitle) => {
	roomBoards.enterRoomBoardTitle(boardTitle);
});

When("I click on the page outside of the title of the board", () => {
	roomBoards.clickOutsideTheTitleToSaveTheModifiedTitle();
});
Then("I see my room board is named {string}", (boardTitle) => {
	roomBoards.seeGivenRoomBoardTitle(boardTitle);
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

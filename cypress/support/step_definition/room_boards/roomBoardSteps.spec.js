const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import RoomBoards from "../../pages/room_board/pageRoomBoards";

const roomBoards = new RoomBoards();

When("I click on the multicolumn board in the room detail page", () => {
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

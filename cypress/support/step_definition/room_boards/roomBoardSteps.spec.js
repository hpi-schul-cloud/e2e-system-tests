const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import RoomBoards from "../../pages/room_board/pageRoomBoards";

const roomBoards = new RoomBoards();

Then("I see the dialog box to select the Board type", () => {
	roomBoards.seeColumnBoardDialogBox();
});

When("I click on button to add multi column board", () => {
	roomBoards.clickOnButtonToAddMultiColumnBoard();
});

Then("I see the page room board details", () => {
	roomBoards.seeNewRoomBoardCreatePage();
});

When("I click on the three dot menu in room board", () => {
	roomBoards.clickOnThreeDotMenuInRoomBoardTitle();
});

When("I click on edit in board menu", () => {
	roomBoards.clickOnEditInBoardMenu();
});

Then("I enter the room board title {string}", (boardTitle) => {
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


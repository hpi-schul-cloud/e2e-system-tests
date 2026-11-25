const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import BoardImport from "../../pages/board_import/pageBoardImport";
import Rooms from "../../pages/rooms/pageRooms";

const boardImport = new BoardImport();
const rooms = new Rooms();

Given("the board import API is available", () => {
	boardImport.waitForBoardImportApi();
});

When("I click on the button to import a board in the room", () => {
	rooms.openAddContentMenu();
	boardImport.clickOnImportBoardButtonInRoom();
});

Then("I see the dialog to import a board", () => {
	boardImport.seeBoardImportDialog();
});

When("I enter the link {string} in the board import dialog", (link) => {
	boardImport.enterLinkInBoardImportDialog(link);
});

When("I click on the button Import in the board import dialog", () => {
	boardImport.clickOnImportButtonInBoardImportDialog();
});

Then(
	"I see the board import job has the status {string} within {int} seconds",
	(status, timeoutInSeconds) => {
		boardImport.seeBoardImportJobHasStatus(status, timeoutInSeconds);
	}
);

When("I click on the button Close in the board import dialog", () => {
	boardImport.closeBoardImportDialog();
});

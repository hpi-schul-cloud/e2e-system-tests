const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import RoomBoards from "../../pages/rooms_board/pageRoomsBoard";

const roomBoards = new RoomBoards();

When("I click outside the BigBlueButton dialog box", () => {
	roomBoards.clickOutsideBBBDialogBox();
});

Then("I copy the URL from the modal", () => {
	roomBoards.copyBoardURLInModal();
});

When("I navigate to the shared URL", () => {
	roomBoards.navigateToSharedURL();
});

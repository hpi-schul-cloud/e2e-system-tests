const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import RoomBoards from "../../pages/rooms_board/pageRoomsBoard";

const roomBoards = new RoomBoards();

When("I click outside the BigBlueButton dialog box", () => {
	roomBoards.clickOutsideBBBDialogBox();
});

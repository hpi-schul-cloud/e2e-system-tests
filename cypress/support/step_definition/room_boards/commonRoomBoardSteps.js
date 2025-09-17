const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import RoomBoards from "../../pages/room_board/pageRoomBoards";

const roomBoards = new RoomBoards();

When("I click outside the BBB dialog box", () => {
	// this assumes the BBB dialog box is open and to click outside for closing it.
	roomBoards.clickOutsideBBBDialogBox();
});

const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import RoomBoards from "../../pages/room_board/pageRoomBoards";

const roomBoards = new RoomBoards();

When("I click outside the BBB dialog box", () => {
	roomBoards.clickOutsideBBBDialogBox();
});

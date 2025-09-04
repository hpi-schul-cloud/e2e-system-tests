const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import RoomsAdmin from "../../pages/rooms_administration/pageRoomsAdmin";

const roomsAdmin = new RoomsAdmin();

When("I navigate to rooms administration page via the submenu", () => {
	roomsAdmin.navigateToRoomsAdministrationPageViaSubmenu();
});

Then("I see the rooms administration page", () => {
	roomsAdmin.isRoomsAdministrationPage();
});

Then(
	"I see the icon Alert in the column Room owner for the room {string}",
	(roomName) => {
		roomsAdmin.seeAlertIconInRoomOwnerColumn(roomName);
	}
);

Then("I see the room {string} on the rooms administration page", (roomName) => {
	roomsAdmin.seeRoomInRoomsTable(roomName);
});

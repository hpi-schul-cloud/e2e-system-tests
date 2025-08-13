const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import RoomAdmin from "../../pages/room_administration/pageRoomAdmin";

const roomAdmin = new RoomAdmin();

When("I navigate to room administration page via the submenu", () => {
	roomAdmin.navigateToRoomAdministrationPageViaSubmenu();
});

Then("I see the room administration page", () => {
	roomAdmin.isRoomAdministrationPage();
});

Then(
	"I see the icon Alert in the column Room owner for the room {string}",
	(roomName) => {
		roomAdmin.seeAlertIconInRoomOwnerColumn(roomName);
	}
);

Then("I see the room {string} on the new room administration page", (roomName) => {
	roomAdmin.seeRoomInRoomTable(roomName);
});

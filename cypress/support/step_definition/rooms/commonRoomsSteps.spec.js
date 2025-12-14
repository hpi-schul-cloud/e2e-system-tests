const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Rooms from "../../pages/rooms/pageRooms";

const rooms = new Rooms();

When("I click on FAB to add participants", () => {
	rooms.clickOnAddParticipantsFAB();
});

Then(
	"I see speed dial options {string} and {string}",
	(selectFromDirectory, addExternalPerson) => {
		rooms.seeSpeedDialOptions(selectFromDirectory, addExternalPerson);
	}
);

When("I click on button {string} from speed dial option", (option) => {
	rooms.clickOnSpeedDialOption(option);
});

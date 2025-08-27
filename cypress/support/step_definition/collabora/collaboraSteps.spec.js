import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { Collabora } from "../../pages/collabora/pageCollabora";

const collabora = new Collabora();

Then("I see collabora text editor", () => {
	collabora.seeCollaboraTextEditor();
});

When("I click on the button cursive writer in Collabora docx file", () => {
	collabora.selectCursiveWriter();
});

When(
	"I type text {string} in collabora editor on position {string}, {string}",
	(text, posX, posY) => {
		collabora.typeCollaboraText(text, posX, posY);
	}
);

Then("I click on the button save in Collabora editor", () => {
	collabora.clickCollaboraSaveButton();
});

Then("I go back to the page room board", () => {
	collabora.goBackToRoomBoard();
});

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { Collabora } from "../../pages/collabora/pageCollabora";

const collabora = new Collabora();

When("I click on the button cursive writer in Collabora docx file", () => {
	collabora.selectCursiveWriter();
});

When("I type text {string} in Collabora editor", (text) => {
	collabora.typeCollaboraText(text, 200, 200);
});

Then("I click on the button save in Collabora editor", () => {
	collabora.clickCollaboraSaveButton();
});

Then("I go back to the page room board", () => {
	collabora.goBackToRoomBoard();
});

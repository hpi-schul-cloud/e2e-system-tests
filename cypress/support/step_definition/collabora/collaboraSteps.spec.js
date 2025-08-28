import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { Collabora } from "../../pages/collabora/pageCollabora";

const collabora = new Collabora();

Then("I see collabora text editor", () => {
	collabora.seeCollaboraTextEditor();
});

When(
	"I type text {string} in collabora editor on position {string}, {string}",
	(text, posX, posY) => {
		collabora.typeCollaboraText(text, posX, posY);
	}
);

When("I click on the button Save in Collabora editor", () => {
	collabora.clickCollaboraSaveButton();
});

Then(
	"I cannot type text {string} in collabora editor on position {string}, {string}",
	(text, posX, posY) => {
		collabora.cannotTypeCollaboraText(text, posX, posY);
	}
);

When("I click on the icon File in collabora editor top toolbar", () => {
	collabora.clickCollaboraFileIcon();
});

When("I click on the button Download in collabora editor", () => {
	collabora.clickCollaboraDownloadButton();
});

When("I download by clicking on the option PDF download in collabora editor", () => {
	collabora.clickCollaboraPDFDownloadOption();
});

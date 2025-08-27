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

Then("I click on the button save in Collabora editor", () => {
	collabora.clickCollaboraSaveButton();
});

Then("I go back to the page room board", () => {
	collabora.goBackToRoomBoard();
});

Then("I can download collabora docx file as pdf file from collabora editor", () => {
	collabora.downloadCollaboraTextFileasPDF;
});

Then(
	"I cannot type text {string} in collabora editor on position {string}, {string}",
	(text, posX, posY) => {
		collabora.cannotTypeCollaboraText(text, posX, posY);
	}
);

When("I click on the icon file in collabora editor top toolbar", () => {
	collabora.clickCollaboraFileIcon();
});

When("I click on the download button in collabora editor", () => {
	collabora.clickCollaboraDownloadButton();
});

Then("I download by clicking on the option PDF download in collabora editor", () => {
	collabora.clickCollaboraPDFDownloadOption();
});

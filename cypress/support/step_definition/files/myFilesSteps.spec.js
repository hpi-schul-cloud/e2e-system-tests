const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Files from "../../pages/files/pageFiles";

const files = new Files();

When("I click create a new file button", () => {
	files.clickOnCreateNewFile();
});

Then("I select filetype document", () => {
	files.selectFiletypeDocument();
});

When("I type in {string}", (fileName) => {
	files.typeFilename(fileName);
});

Then("I click create file button", () => {
	files.clickOnCreateFile();
});

When("I click file with {string}", (fileName) => {
	files.clickOnFileWithName(fileName);
});

Then("I click rename file button of file {string}", (fileName) => {
	files.clickOnRenameFile(fileName);
});

Then("I can see edit file popup box of file {string}", (fileName) => {
	files.renamePopupBoxVisible(fileName);
});

Then("I enter new file name {string}", (fileName) => {
	files.typeNewFilename(fileName);
});

Then("I click on button Save name", () => {
	files.clickOnSaveFilename();
});

Then("I click on button Delete file {string}", (fileName) => {
	files.clickOnDeleteFile(fileName);
});

Then("I click on button Confirm delete file on the modal", () => {
	files.clickOnConfirmDeleteFileOnModal();
});

Then("LibreOffice opens", () => {
	files.libreOfficeOpens();
});

Then("I can see file with name {string}", (fileName) => {
	files.fileNameIsShown(fileName);
});

Then("I can not see file with name {string}", (fileName) => {
	files.fileNameIsNotShown(fileName);
});

//doesn't work
Then("I can enter {string}", (text) => {
	files.enterTextIntoDocument(text);
});

//doesn't work
Then("I can see previously entered {string}", (text) => {
	files.textIsShownInDocument(text);
});

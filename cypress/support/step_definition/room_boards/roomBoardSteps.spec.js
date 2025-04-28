const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import RoomBoards from "../../pages/room_board/pageRoomBoards";

const roomBoards = new RoomBoards();

Then(
	"I enter the text {string} in the element Text with the visible inline CKEditor toolbar",
	(text) => {
		roomBoards.enterTextInTextElement(text);
	}
);

Then("I see the element Text {string} in the card", (text) => {
	roomBoards.verifyTextInCard(text);
});

Then("I re enter the text {string} in the element Text", (editedText) => {
	roomBoards.reEnterTextInTextElement(editedText);
});

When("I remove the text {string} in the element Text", (editedText) => {
	roomBoards.removeTextFromTextElement(editedText);
});

Then("I do not see the element Text in the card", (editedText) => {
	roomBoards.verifyTextElementNotInCard(editedText);
});

Then("I see the file type Video in the card", () => {
	roomBoards.verifyVideoFileInCard();
});

Then("I see the file type Audio in the card", () => {
	roomBoards.verifyAudioFileInCard();
});

When("I click outside of the card to save it", () => {
	roomBoards.clickOutsideToSaveCard();
});

When("I click on the icon Close on the fullscreen image", () => {
	roomBoards.clickCloseButtonOnFullScreenImage();
});

When("I click on icon Download in the fullscreen image", () => {
	roomBoards.clickDownloadIconOnFullScreenImage();
});

Then("I see the file type Image in the card", () => {
	roomBoards.verifyImageFileUploadedAsThumbnail();
});

When("I enter text in the textbox Alternative Text  {string}", (altText) => {
	roomBoards.enterImageAltTextInCard(altText);
});

Then("I see the file type DOCX is uploaded in the card", () => {
	roomBoards.verifyDocxFileUploaded();
});

When("I do not see the element File", () => {
	roomBoards.shouldNotSeeFileElement();
});

When("I click on the three-dot in the element File", () => {
	roomBoards.clickThreeDotMenuInFileElement();
});

When("I click on the icon Download file", () => {
	roomBoards.downloadFileIcon();
});

When("I upload a file {string}", (fileName) => {
	roomBoards.uploadFileInCard(fileName);
});

When("I enter text in the textbox Caption {string}", (captionText) => {
	roomBoards.enterCaption(captionText);
});

Then("I see the file type PDF is uploaded in the card", () => {
	roomBoards.verifyPdfUploaded();
});

When("I click on the thumbnail Image in the card", () => {
	roomBoards.clickOnImageThumbnailInCard();
});

Then("I see the fullscreen Image from the card", () => {
	roomBoards.verifyCardImageInFullScreen();
});

Then("I see the alert message", () => {
	roomBoards.verifyShareImportBoardAlert();
});

Then("I click to uncheck Link valid for the same school", () => {
	roomBoards.uncheckLinkValidForSameSchool();
});

Then("I see an alert that importing the board is not allowed", () => {
	roomBoards.verifyShareImportBoardAlert();
});

Then("I see the result url text box in the modal", () => {
	roomBoards.verifySharedBoardResultUrlTextBox();
});

Then("I see the title in the share modal", () => {
	roomBoards.verifyShareModalTitle();
});

Then("I see the information box in share modal", () => {
	roomBoards.verifyShareInformationBox();
});

Then("I see the button Cancel in the share modal", () => {
	roomBoards.verifyCancelButtonInShareModal();
});

When("I open the shared URL", () => {
	roomBoards.openSharedBoardURL();
});

Then("I see the modal to import the shared board into the room", () => {
	roomBoards.verifyImportSharedBoardModal();
});

When("I select the room from the room list in the modal", () => {
	roomBoards.selectRoomForImport();
});

When("I click on the Continue button in the modal", () => {
	roomBoards.clickContinueOnImportModal();
});

When(
	"I enter a new name for the imported board {string} in the modal",
	(importBoardName) => {
		roomBoards.enterNewBoardNameForImport(importBoardName);
	}
);

When("I click on the button Import in the modal", () => {
	roomBoards.clickImportOnModal();
});

Then("I see the Share settings dialog", () => {
	roomBoards.seeShareSettingsDialog();
});

Then("I see the checkbox Link valid for the same school is by default checked", () => {
	roomBoards.verifySameSchoolLinkCheckboxChecked();
});

Then("I see the checkbox Link valid for 21 days is by default checked", () => {
	roomBoards.verify21DaysLinkCheckboxChecked();
});

When("I click on the button Continue", () => {
	roomBoards.clickContinueButtonInShareSettingsDialog();
});

Then("I see the Share via modal", () => {
	roomBoards.verifyShareViaModal();
});

Then("I see the option Share via Email", () => {
	roomBoards.verifyShareViaEmailOption();
});

Then("I see the option Copy link", () => {
	roomBoards.verifyCopyLinkOption();
});

Then("I see the option Scan QR Code", () => {
	roomBoards.verifyScanQRCodeOption();
});

Then("I copy the board URL", () => {
	roomBoards.copyBoardURLInModal();
});

When("I click on the option Edit in the three dot menu on the card", () => {
	roomBoards.clickEditOptionInCardThreeDot();
});

When("I click on the three dot on the card", () => {
	roomBoards.clickOnThreeDotInCard();
});

When("I click on the three-dot menu in the video conference element", () => {
	roomBoards.clickThreeDotMenuInVideoConferenceElement();
});

When("I click on the option Delete in the three-dot menu", () => {
	roomBoards.clickDeleteOptionInThreeDotMenu();
});

Then("I see the dialog Confirm deletion", () => {
	roomBoards.verifyDeleteConfirmationDialogVisible();
});

When("I click on the button Delete in the confirmation dialog", () => {
	roomBoards.clickDeleteButtonInConfirmationDialog();
});

Then("I do not see the video conference element", () => {
	roomBoards.verifyVideoConferenceElementNotVisible();
});

Then(
	"I see the moderator approval checkbox is checked in the video conference start modal",
	() => {
		roomBoards.verifyModeratorApprovalCheckboxCheckedInBBBModal();
	}
);

Then("I see the dialog box for element selection", () => {
	roomBoards.seeElementSelectionDialog();
});

When("I click on the button Close in the dialog Add Element", () => {
	roomBoards.clickCloseButtonOnElementSelectionDialog();
});

Then("I do not see the dialog Add Element in the card", () => {
	roomBoards.doNotSeeElementSelectionDialog();
});

Then("I see the dialog Add Element in the card", () => {
	roomBoards.seeElementSelectionDialog();
});

When("I enter the video conference title {string}", (videoConferenceTitle) => {
	roomBoards.enterVideoConferenceTitle(videoConferenceTitle);
});

When("I click on the save button or press the button enter key", () => {
	roomBoards.clickSaveButtonOrPressEnterToSaveVideoConferenceTitle();
});

Then("I see the video conference element added in the card", () => {
	roomBoards.verifyVideoConferenceElementAddedInCard();
});

When("I click on the video conference element in the card", () => {
	roomBoards.clickVideoConferenceElementInCard();
});

Then("I see the modal to start the video conference", () => {
	roomBoards.seeVideoConferenceStartDaialog();
});

Then(
	"I see the button create in the video conference creation modal to start the call",
	() => {
		roomBoards.seeCreateButtonInVideoConferenceDialog();
	}
);

Then(
	"I click on the button cancel in the video conference creation modal to go back to the card",
	() => {
		roomBoards.clickCancelButtonInVideoConferenceCreationModal();
	}
);

Then("I see copied multi-column board tile in the rooms details page", () => {
	roomBoards.verifyMultiColumnCopiedOrSharedBoardTileVisibleOnRoomDetailsPage();
});

Then("I see copied single-column board tile in the room details page", () => {
	roomBoards.verifySingleColumnCopiedBoardTileVisibleOnRoomDetailsPage();
});

When("I click on the single-column board in the room detail page", () => {
	roomBoards.clickSingleColumnBoardInRoomDetailPage();
});

When("I click on the multi-column board in the room detail page", () => {
	roomBoards.clickMultiColumnBoardInRoomDetailPage();
});

Then("I do not see the chip Draft", () => {
	// Method to verify the Draft chip is not visible
	roomBoards.verifyDraftChipNotVisible();
});

Then("I see the chip Draft", () => {
	roomBoards.verifyChipDraftVisible();
});

When("I click on the breadcrumb to navigate to the room detail page", () => {
	roomBoards.clickOnBreadcrumbToNavigateToRoomDetail();
});

Then("I see the dialog box to select the Board type", () => {
	roomBoards.seeColumnBoardDialogBox();
});

When("I click on button to add multi-column board", () => {
	roomBoards.clickOnButtonToAddMultiColumnBoard();
});

When("I click on button to add single-column board", () => {
	roomBoards.clickOnButtonToAddSingleColumnBoard();
});

Then("I see the page board details", () => {
	roomBoards.seeNewRoomBoardCreatePage();
});

Then("I do not see the page board details", () => {
	roomBoards.doNotSeeNewRoomBoardCreatePage();
});

When("I click on the three dot menu in room board", () => {
	roomBoards.clickOnThreeDotMenuInRoomBoardTitle();
});

Then("I change the default room board title to {string}", (boardTitle) => {
	roomBoards.enterRoomBoardTitle(boardTitle);
});

When("I click on the page outside of the title of the board", () => {
	roomBoards.clickOutsideTheTitleToSaveTheModifiedTitle();
});

Then("I see my room board is named {string}", (boardTitle) => {
	roomBoards.seeUpdatedRoomBoardTitle(boardTitle);
});

When("I click on delete in board menu", () => {
	roomBoards.clickOnDeleteInBoardMenu();
});

Then("I see the button to cancel the dialog", () => {
	roomBoards.seeBtnDialogCancel();
});

When("I click on the button to cancel the deletion", () => {
	roomBoards.clickOnBtnDialogCancel();
});

Then("I see the board {string} on the room overview page", (boardTitle) => {
	roomBoards.seeBoardOnRoomDetailPage(boardTitle);
});

Then("I see the button to confirm the dialog", () => {
	roomBoards.seeBtnDialogConfirmDelete();
});

When("I click on the button to confirm the deletion", () => {
	roomBoards.clickBtnDialogConfirmDelete();
});

Then("I do not see the board {string} in the room", (boardTitle) => {
	roomBoards.doNotSeeBoardOnRoomDetailPage(boardTitle);
});

Then("I see a folder with name {string} in the card", (folderTitle) => {
	roomBoards.seeFolderElementWithTitle(folderTitle);
});
When("I click on the folder {string} in the card", (folderTitle) => {
	roomBoards.clickFolderElementWithTitle(folderTitle);
});

Then("I see page Folder content for {string}", (folderTitle) => {
	roomBoards.seeFolderPageWithTitle(folderTitle);
});

Then("I see message Empty folder", () => {
	roomBoards.seeMessageEmptyFolder();
});

Then("I see button Add file", () => {
	roomBoards.seeBtnAddFile();
});

When("I upload a file {string} to file folder", (fileName) => {
	roomBoards.uploadFileInFolder(fileName);
});

Then("I see file {string} with file size {string} in file list", (fileName, fileSize) => {
	roomBoards.seeFileInFolderList(fileName, fileSize);
});

Then("I see today as creation date of file {string}", (fileName) => {
	roomBoards.seeFileCreationDateToday(fileName);
});

Then("I see message Upload progress", () => {
	roomBoards.seeFileProgressMessage();
});

Then("I see links to change order for {string}", (headerLabels) => {
	roomBoards.seeHeaderLinksToChangeOrder(headerLabels);
});

When("I click on table header link {string}", (label) => {
	roomBoards.clickOnTableHeaderLink(label);
});

Then("I see {string} and {string} on the first two positions", (firstElement, secondElement) => {
	roomBoards.checkOrderOfFirstTwoElements(firstElement, secondElement);
});


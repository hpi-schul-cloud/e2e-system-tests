import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Board from "../../pages/courses_board/pageCoursesBoard";

const board = new Board();

When("I select the three dot menu action {string}", (kebabMenuAction) => {
	board.clickOnKebabMenuAction(kebabMenuAction);
});

When("I click on the board", () => {
	board.clickOnCourseBoardCardInCourseDetailPage();
});

When("I click on three dot menu in the card", () => {
	board.clickOnThreeDotOnCard();
});

When("I select the option Edit in three dot menu on the card", () => {
	board.selectEditInThreeDotMenu();
});

When("I select the option Copy link to card in three dot menu on the card", () => {
	board.selectCopyLinkToCardInThreeDotMenu();
});

When("I click the edit button in three dot menu on the element", () => {
	board.clickEditButtonInThreeDotMenu();
});

When("I click the delete button in three dot menu on the element", () => {
	board.clickDeleteButtonInThreeDotMenu();
});

When("I click on the button Remove on the Modal", () => {
	board.clickOnConfirmInModal();
});

When("I click on icon Plus to add card in column", () => {
	board.clickPlusIconToAddCardInColumn();
});

When("I click on the button three dot menu in course board", () => {
	board.clickOnThreeDotMenuInCourseBoardTitle();
});

When("I click on icon Plus to add content into card", () => {
	board.clickPlusIconToAddContentIntoCard();
});

When("I click on the option Publish in three dot menu in course board", () => {
	board.clickPublishOptionInThreeDotMenuInCourseBoard();
});

When("I click on the option Change layout in three dot menu in course board", () => {
	board.clickChangeLayoutOptionInThreeDotMenuInCourseBoard();
});

Then("I see the chip Draft in the course board", () => {
	board.seeDraftChipOnCourseBoard();
});

Then("I do not see the chip Draft in the course board", () => {
	board.doNotSeeDraftChipOnCourseBoard();
});

When("I click on three dot menu in the board header", () => {
	board.clickOnThreeDotMenuInBoardHeader();
});

When("I enter {string} to board card text element", (textContent) => {
	board.enterTextToTextFieldInCard(textContent);
});

Then("I see {string} in board card text element", (textContent) => {
	board.seeTextInTextFieldInCard(textContent);
});

Then("I see a whiteboard on the board", () => {
	board.seeWhiteboardOnPage();
});

When("I select {string} from the element selection dialog box", (cardElementName) => {
	board.selectCardElementFromMenu(cardElementName);
});

Then("I do not see {string} in the element selection dialog box", (cardElementName) => {
	board.doNotSeeCardElementFromMenu(cardElementName);
});

Then("I see a board card", () => {
	board.seeBoardCard();
});

When("I open the link to a board card", () => {
	board.openBoardCardLink();
});

When("I click on the page outside of the card", () => {
	board.clickOutsideTheCardToSaveTheCard();
});

Then("I see the focused board card", () => {
	board.seeFocusedBoardCard();
});

When("I enter the board card title {string}", (cardTitle) => {
	board.enterBoardCardTitle(cardTitle);
});

Then("I see a board card with title {string}", (cardTitle) => {
	board.seeBoardCardTitle(cardTitle);
});

Then("I enter the copied board card link in the link element", () => {
	board.enterBoardCardLinkInLinkElement();
});

Then("I see link element with title {string}", (linkElementTitle) => {
	board.seeLinkElementTitle(linkElementTitle);
});

When("I click on link element with title {string}", (linkElementTitle) => {
	board.clickOnLinkElement(linkElementTitle);
});

Then("I see that I am on a column board", () => {
	board.seeMultiColumnBoard();
});

Then("I see a column with title {string} at position {string}", (title, position) => {
	board.seeColumnWithTitle(title, position);
});

Then("I see a card with title {string}", (title) => {
	board.seeCardWithTitle(title);
});

Then(
	"I see a rich text element with pattern {string} at position {string} {string}",
	(patternText, row, column) => {
		board.seeRichTextWithPatternAtPosition(patternText, row, column);
	}
);

Then("I see a web link with title {string}", (title) => {
	board.seeWeblinkWithTitle(title);
});

Then("I see a file element with title {string}", (fileTitle) => {
	board.seeFileElementWithTitle(fileTitle);
});

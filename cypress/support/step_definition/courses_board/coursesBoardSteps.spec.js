const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Board from "../../pages/course_board/pageBoard";

const board = new Board();

Then("I see an external tool element with tool {string}", (toolName) => {
	board.seeExternalToolElementWithTool(toolName);
});

Then("I see the domain of external tool {string}", (toolName) => {
	board.seeExternalToolElementDomain(toolName);
});

When("I click on three dot menu of external tool element {string}", (toolName) => {
	board.clickThreeDotMenuOnExternalToolElementWithTool(toolName);
});

When("I select external tools from the element selection dialog box", () => {
	board.selectExternalToolsFromMenu();
});

Then("I see preferred tool {string} in the menu", (toolName) => {
	board.seePreferredExternalToolInMenu(toolName);
});

Then(
	"I select preferred tool {string} from the element selection dialog box",
	(toolName) => {
		board.selectPreferredExternalToolFromMenu(toolName);
	}
);

Then("I do not see preferred tool {string} in the menu", (toolName) => {
	board.preferredExternalToolIsNotVisibleInMenu(toolName);
});

Then(
	"I see external tool element with tool {string} is not marked as incomplete",
	(toolName) => {
		board.seeToolIsNotMarkedAsIncomplete(toolName);
	}
);

Then(
	"I see external tool element with tool {string} is not marked as incomplete operational",
	(toolName) => {
		board.seeToolIsNotMarkedAsIncompleteOperational(toolName);
	}
);

Then(
	"I see external tool element with tool {string} is marked as incomplete",
	(toolName) => {
		board.seeToolIsMarkedAsIncomplete(toolName);
	}
);

Then(
	"I see external tool element with tool {string} is marked as incomplete operational",
	(toolName) => {
		board.seeToolIsMarkedAsIncompleteOperational(toolName);
	}
);

When("I click on external tool element with tool {string}", (toolName) => {
	board.clickExternalToolElementWithTool(toolName);
});

Then(
	"I see an external tool element with tool {string} is marked as deactivated",
	(toolName) => {
		board.seeToolIsMarkedAsDeactivated(toolName);
	}
);

Then(
	"I see an external tool element with tool {string} is not marked as deactivated",
	(toolName) => {
		board.seeToolIsNotMarkedAsDeactivated(toolName);
	}
);

When(
	"I launch tool {string} on external tool element with given url {string}",
	(toolName, url) => {
		board.launchTool(toolName, url);
	}
);

Then("I see tool {string} on external tool element was launched", (toolName) => {
	board.toolWasLaunched(toolName);
});

When("I select preferred tool {string} from the menu", (toolName) => {
	board.selectPreferredExternalToolFromMenu(toolName);
});

When("I click on the button FAB New Column Board", () => {
	board.clickOnFABToCreateNewColumnBoard();
});

Then("I see the page Course Board details", () => {
	board.seeNewCourseBoardCreatePage();
});

When("I enter the course board title {string}", (boardTitle) => {
	board.enterCourseBoardTitle(boardTitle);
});

Then("I see the course Board name {string}", (boardName) => {
	board.seeCourseBoardName(boardName);
});

When("I go to the tab contents in course detail page", () => {
	board.clickOnCourseContentTab();
});

When("I click on card Course Board", () => {
	board.clickOnCourseBoardCardInCourseDetailPage();
});

Then("I see the page title in Course Board page", () => {
	board.seeCourseBoardTitle();
});

Then("I see the existing card with welcome message in the existing column", () => {
	board.seeByDefaultWelcomeCardInBoard();
});

When("I click on the button Add column in the course board", () => {
	board.clickOnAddNewColumnButton();
});

When("I enter the title name {string} in the column", (columnTitle) => {
	board.enterColumnTitleInCourseBoard(columnTitle);
});

When("I enter the edited title name {string} in the column", (editedColumnName) => {
	board.enterEditedColumnTitle(editedColumnName);
});

When("I click on the page outside of the column", () => {
	board.clickOutsideTheColumnToSaveTheColumn();
});

Then("I see my column named {string}", (newColumnName) => {
	board.seeNewlyCreatedColumn(newColumnName);
});

Then("I click on the button with the Icon Plus to add a new card in the column", () => {
	board.clickOnAddNewCardButton();
});

When("I click on three dot menu in the column", () => {
	board.clickOnThreeDotOnColumn();
});

When("I select the option Delete in three dot menu in the column", () => {
	board.selectDeleteInThreeDotMenu();
});

Then("I see the modal Confirmation", () => {
	board.seeDeleteConfirmationModal();
});

Then("I do not see the column", () => {
	board.doNotSeeColumnAfterDeletion();
});

Then("I see a dialog box for column board", () => {
	board.seeColumnBoardDialogBox();
});

Then("I see in dialog box option for multi-column board", () => {
	board.seeMultiColumnBoardOptionInDialogBox();
});

Then("I see in dialog box option for single-column board", () => {
	board.seeSingleColumnBoardOptionInDialogBox();
});

When("I choose multi-column board in the dialog box", () => {
	board.clickOnMultiColumnBoardOptionInDialogBox();
});

When("I choose single-column board in the dialog box", () => {
	board.clickOnSingleColumnBoardOptionInDialogBox();
});

When("I see the single-column board", () => {
	board.seeSingleColumnBoard();
});

When("I see the multi-column board", () => {
	board.seeMultiColumnBoard();
});

When("I click on three dot menu on the deleted element", () => {
	board.clickOnThreeDotOnDeletedElement();
});

When("I select the option Delete in three dot menu on the card", () => {
	board.selectDeleteInThreeDotMenu();
});

Then("I cannot see any deleted elements", () => {
	board.canNotSeeDeletedElements();
});

When("I click on open Drawing Element", () => {
	board.clickOnOpenTldrawDrawingElement();
});

When("I click on the whiteboard element", () => {
	board.clickOnWhiteboardElement();
});

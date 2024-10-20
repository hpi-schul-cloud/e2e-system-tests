"use strict";

class Board {
	static #courseContentTab = '[data-testid="learnContent-tab"]';
	static #cardCourseBoardInCourseContent = '[data-testid="room-board-card-0"]';
	static #courseBoardTitleOnPage = '[data-testid="board-title"]';
	static #welcomeDefaultCardInColumn = '[data-testid="event-handle"]';
	static #addNewColumnButton = '[data-testid="add-column"]';
	static #addColumnTitleInput = '[data-testid="column-title-0"]';
	static #addNewCardButtonInColumn = '[data-testid="column-0-add-card-btn"]';
	static #mainPageArea = '[id="main-content"]';
	static #editOptionThreeDot = '[data-testid="board-menu-action-edit"]';
	static #threeDotMenuInColumn = '[data-testid="column-menu-btn-0"]';
	static #threeDotMenuInCard = '[data-testid="card-menu-btn"]';
	static #threeDotMenuOnDeletedElement = '[data-testid="deleted-element-menu-btn"]';
	static #deleteOptionThreeDot = '[data-testid="board-menu-action-delete"]';
	static #confirmButtonInModal = '[data-testid="dialog-confirm"]';
	static #deleteDialogBox = '[data-testid="dialog-title"]';
	static #drawingElement = '[data-testid="drawing-element"]';
	static #columnPlaceholder = '[placeholder="Spalte 1"]';
	static #newColumnBoardFABInCourseDetail = '[data-testid="fab_button_add_board"]';
	static #threeDotInCourseBoardTitle = '[data-testid="board-menu-icon"]';
	static #editOptionInThreeDotCourseBoardTitle = '[data-testid="board-menu-action-edit"]';
	static #draftChipInCourseBoardName = '[data-testid="board-draft-chip"]';
	static #addCardInColumnButton = '[data-testid="column-0-add-card-btn"]';
	static #addContentIntoCardButton = '[data-testid="add-element-btn"]';
	static #selectWhiteboardFromMenu = '[data-testid="create-element-drawing-element"]';
	static #selectExternalToolsFromMenu =
		'[data-testid="create-element-external-tool-container"]';
	static #externalToolElement = '[data-testid="board-external-tool-element"]';
	static #deletedElement = '[data-testid="board-deleted-element"]';
	static #boardMenuActionPublish = '[data-testid="board-menu-action-publish"]';
	static #boardLayoutDialogBoxTitle = '[data-testid="board-layout-dialog-title"]';
	static #multiColumnBoardOptionInDialogBox =
		'[data-testid="dialog-add-multi-column-board"]';
	static #singleColumnBoardOptionInDialogBox =
		'[data-testid="dialog-add-single-column-board"]';
	static #editButtonInThreeDotMenu = '[data-testid="board-menu-action"]';
	static #externalToolElementAlert = '[data-testid="board-external-tool-element-alert"]';


	clickPlusIconToAddCardInColumn() {
		cy.get(Board.#addCardInColumnButton).click();
	}

	clickPlusIconToAddContentIntoCard() {
		cy.get(Board.#addContentIntoCardButton).click();
	}

	selectWhiteboardFromMenu() {
		cy.get(Board.#selectWhiteboardFromMenu).click();
	}

	selectExternalToolsFromMenu() {
		cy.get(Board.#selectExternalToolsFromMenu).click();
	}

	seeExternalToolElementWithTool(toolName) {
		cy.get(`[data-testid="board-external-tool-element-${toolName}"]`)
			.find(".content-element-title")
			.should("contain.text", toolName);
	}

	canNotSeeDeletedElements() {
		cy.get(Board.#deletedElement).should("not.be.visible");
	}

	clickPublishOptionInThreeDotMenuInCourseBoard() {
		cy.get(Board.#boardMenuActionPublish).click();
	}

	clickOnFABToCreateNewColumnBoard() {
		cy.get(Board.#newColumnBoardFABInCourseDetail).click();
	}

	seeNewCourseBoardCreatePage() {
		cy.url().should("include", "/board");
	}

	clickOnThreeDotMenuInCourseBoardTitle() {
		cy.get(Board.#threeDotInCourseBoardTitle).click();
	}

	clickOnEditInThreeDotCourseBoardTitle() {
		cy.get(Board.#editOptionInThreeDotCourseBoardTitle).click();
	}

	clearAndType(selector, newTitle) {
		cy.get(selector)
			.first()
			.then((element) => {
				const currentTitle = element.val();
				if (currentTitle) {
					cy.wrap(element).type("{backspace}".repeat(currentTitle.length));
				}
				cy.wrap(element).type(newTitle);
			});
	}

	enterCourseBoardTitle(boardTitle) {
		cy.get(Board.#courseBoardTitleOnPage).within(() => {
			this.clearAndType("input", boardTitle);
		});
	}

	seeCourseBoardName(boardName) {
		cy.get(Board.#courseBoardTitleOnPage).contains(boardName);
	}

	seeDraftChipOnCourseBoard() {
		cy.get(Board.#draftChipInCourseBoardName).should("exist");
	}

	doNotSeeDraftChipOnCourseBoard() {
		cy.get(Board.#draftChipInCourseBoardName).should("not.exist");
	}

	doNotSeeColumnAfterDeletion() {
		cy.get(Board.#addColumnTitleInput).should("not.exist");
	}

	clickOnOpenTldrawDrawingElement() {
		let clickSpy;

		cy.get(Board.#drawingElement)
			.should("exist")
			.then((el) => {
				clickSpy = cy.spy().as("clickSpy");
				el.on("click", (event) => {
					event.preventDefault();
					clickSpy();
					cy.log("The drawing element was clicked.");
				});
			});

		cy.get(Board.#drawingElement).click();

		cy.get("@clickSpy").should("have.been.called");

		cy.get("@clickSpy").should("have.callCount", 1);
	}

	clickOnConfirmInModal() {
		cy.get(Board.#confirmButtonInModal).click();
	}

	seeDeleteConfirmationModal() {
		cy.get(Board.#deleteDialogBox).should("exist");
	}

	selectDeleteInThreeDotMenu() {
		cy.get(Board.#deleteOptionThreeDot).click();
	}

	clickOnThreeDotOnColumn() {
		cy.get(Board.#threeDotMenuInColumn).click();
		cy.get(Board.#editOptionThreeDot).should("be.visible");
	}

	clickOnThreeDotOnCard() {
		cy.get(Board.#threeDotMenuInCard).click();
		cy.get(Board.#editOptionThreeDot).should("be.visible");
	}

	clickOnThreeDotOnDeletedElement() {
		cy.get(Board.#threeDotMenuOnDeletedElement).click();
		cy.get(Board.#deleteOptionThreeDot).should("be.visible");
	}

	selectEditInThreeDotMenu() {
		cy.get(Board.#editOptionThreeDot).click();
	}

	clickOnCourseContentTab() {
		cy.get(Board.#courseContentTab).click();
	}

	clickOnCourseBoardCardInCourseDetailPage() {
		cy.get(Board.#cardCourseBoardInCourseContent).click();
	}

	seeCourseBoardTitle() {
		cy.get(Board.#courseBoardTitleOnPage).should("exist");
	}

	seeByDefaultWelcomeCardInBoard() {
		cy.get(Board.#welcomeDefaultCardInColumn).should("exist");
	}

	clickOnAddNewColumnButton() {
		cy.get(Board.#addNewColumnButton).click();
		cy.get(Board.#addColumnTitleInput).should("be.visible").should("exist");
	}

	enterColumnTitleInCourseBoard(columnTitle) {
		cy.get(Board.#addColumnTitleInput).within(() => {
			this.clearAndType("textarea", columnTitle);
		});
	}

	clickOutsideTheColumnToSaveTheColumn() {
		cy.get(Board.#mainPageArea).click("center");
	}

	seeNewlyCreatedColumn(newColumnName) {
		cy.wait(1000);
		cy.get(Board.#addColumnTitleInput)
			.find("textarea")
			.should("be.visible")
			.should("have.attr", "value", newColumnName);
	}

	clickOnAddNewCardButton() {
		cy.get(Board.#addNewCardButtonInColumn).click();
	}

	seeColumnBoardDialogBox() {
		cy.get(Board.#boardLayoutDialogBoxTitle).should("be.visible");
	}

	seeMultiColumnBoardOptionInDialogBox() {
		cy.get(Board.#multiColumnBoardOptionInDialogBox).should("be.visible");
	}

	seeSingleColumnBoardOptionInDialogBox() {
		cy.get(Board.#singleColumnBoardOptionInDialogBox).should("be.visible");
	}

	clickOnMultiColumnBoardOptionInDialogBox() {
		cy.get(Board.#multiColumnBoardOptionInDialogBox).click();
	}

	seePreferredExternalToolInMenu(toolName) {
		cy.get(`[data-testid="create-element-preferred-element-${toolName}"]`)
			.should("be.visible");
	}

	selectPreferredExternalToolFromMenu(toolName) {
		cy.get(`[data-testid="create-element-preferred-element-${toolName}"]`)
			.click();
	}

	preferredExternalToolIsNotVisibleInMenu(toolName) {
		cy.get(`[data-testid="create-element-preferred-element-${toolName}"]`)
			.should("not.exist")
	}

	clickThreeDotMenuOnExternalToolElementWithTool(toolName) {
		cy.get(`[data-testid="board-external-tool-element-${toolName}"]`)
			.find('[data-testid="board-menu-button"]')
			.click();
	}

	clickEditButtonInThreeDotMenu(){
		cy.get(Board.#editButtonInThreeDotMenu).click();
	}

	clickDeleteButtonInThreeDotMenu(){
		cy.get(Board.#deleteOptionThreeDot).click();
	}

	seeToolIsNotMarkedAsIncomplete(toolName){
		cy.get(`[data-testid="board-external-tool-element-${toolName}"]`)
			.find(Board.#externalToolElementAlert)
			.children()
			.should('have.length', 0);
	}


	seeToolIsMarkedAsIncomplete(toolName){
		cy.get(`[data-testid="board-external-tool-element-${toolName}"]`)
			.within(() => {
				cy.get(Board.#externalToolElementAlert)
					.children(".v-alert.v-theme--light.text-warning")
					.should("have.class", "text-warning");
			});
	}

	seeToolIsMarkedAsIncompleteOperational(toolName){
		cy.get(`[data-testid="board-external-tool-element-${toolName}"]`)
			.within(() => {
				cy.get(Board.#externalToolElementAlert)
					.children(".v-alert.v-theme--light.text-info")
					.should("have.class", "text-info");
			});
	}

	seeToolIsNotMarkedAsIncompleteOperational(toolName){
		cy.get(`[data-testid="board-external-tool-element-${toolName}"]`)
			.find(Board.#externalToolElementAlert)
			.children()
			.should('have.length', 0);
	}

	clickExternalToolElementWithTool(toolName){
		cy.get(`[data-testid="board-external-tool-element-${toolName}"]`).click()
	}

	clickOnThreeDotMenuInBoardHeader(){
		cy.get(Board.#draftChipInCourseBoardName)
			.siblings()
			.find(Board.#threeDotInCourseBoardTitle)
			.click();
	}

	seeToolIsMarkedAsDeactivated(toolName){
		cy.get(`[data-testid="board-external-tool-element-${toolName}"]`)
			.within(() => {
				cy.get(Board.#externalToolElementAlert)
					.children(".v-alert.v-theme--light.text-warning")
					.should("have.class", "text-warning");
			});
	}

	seeToolIsNotMarkedAsDeactivated(toolName){
		cy.get(`[data-testid="board-external-tool-element-${toolName}"]`)
			.find(Board.#externalToolElementAlert)
			.children()
			.should('have.length', 0);
	}
}
export default Board;

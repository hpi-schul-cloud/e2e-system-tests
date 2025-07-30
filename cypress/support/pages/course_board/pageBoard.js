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
	static #editOptionThreeDot = '[data-testid="kebab-menu-action-edit"]';
	static #renameOptionThreeDot = '[data-testid="kebab-menu-action-rename"]';
	static #threeDotMenuInColumn = '[data-testid="column-menu-btn-0"]';
	static #threeDotMenuInCard = '[data-testid="card-menu-btn-0-0"]';
	static #threeDotMenuOnDeletedElement = '[data-testid="deleted-element-menu-btn"]';
	static #deleteOptionThreeDot = '[data-testid="kebab-menu-action-delete"]';
	static #confirmButtonInModal = '[data-testid="dialog-confirm"]';
	static #deleteDialogBox = '[data-testid="dialog-title"]';
	static #drawingElement = '[data-testid="drawing-element"]';
	static #newColumnBoardFABInCourseDetail = '[data-testid="fab_button_add_board"]';
	static #threeDotInCourseBoardTitle = '[data-testid="board-menu-icon"]';
	static #renameOptionInThreeDotCourseBoardTitle =
		'[data-testid="kebab-menu-action-rename"]';
	static #draftChipInCourseBoardName = '[data-testid="board-draft-chip"]';
	static #addCardInColumnButton = '[data-testid="column-0-add-card-btn"]';
	static #addContentIntoCardButton = '[data-testid="add-element-btn"]';
	static #selectExternalToolsFromMenu =
		'[data-testid="create-element-external-tool-container"]';
	static #deletedElement = '[data-testid="board-deleted-element"]';
	static #boardMenuActionPublish = '[data-testid="kebab-menu-action-publish"]';
	static #boardMenuActionChangeLayout =
		'[data-testid="board-menu-action-change-layout"]';
	static #boardLayoutDialogBoxTitle = '[data-testid="board-layout-dialog-title"]';
	static #multiColumnBoardOptionInDialogBox =
		'[data-testid="dialog-add-multi-column-board"]';
	static #singleColumnBoardOptionInDialogBox =
		'[data-testid="dialog-add-single-column-board"]';
	static #editButtonInThreeDotMenu = '[data-testid="kebab-menu-action"]';
	static #externalToolElementAlert =
		'[data-testid="board-external-tool-element-alert"]';
	static #externalToolElementDomain =
		'[data-testid="board-external-tool-element-domain"]';
	static #boardCard = '[data-testid="board-card-0-0"]';
	static #copyBoardCardLinkButton = '[data-testid="board-menu-action-share-link"]';
	static #firstBoardColumn = '[data-testid="board-column-0"]';
	static #boardCardTitle = '[data-testid="card-title"]';
	static #boardLinkElement = '[data-testid="board-link-element-create"]';
	static #contentElementTitle = '[data-testid="content-element-title-slot"]';
	static #contentElementTitleSlot = '[data-testid="content-element-title-slot"]';
	static #ckEditorText = '[data-testid="rich-text-edit-0-0"]';

	clickPlusIconToAddCardInColumn() {
		cy.get(Board.#addCardInColumnButton).click();
	}

	clickPlusIconToAddContentIntoCard() {
		cy.get(Board.#addContentIntoCardButton).click();
	}

	selectCardElementFromMenu(cardElementName) {
		cy.get(`[data-testid="create-element-${cardElementName}"]`).click();
	}

	doNotSeeCardElementFromMenu(cardElementName) {
		cy.get(`[data-testid="create-element-${cardElementName}"]`).should("not.exist");
	}

	seeWhiteboardOnPage() {
		cy.get(Board.#drawingElement).should("exist");
	}

	selectExternalToolsFromMenu() {
		cy.get(Board.#selectExternalToolsFromMenu).click();
	}

	seeExternalToolElementWithTool(toolName) {
		cy.get(`[data-testid="board-external-tool-element-${toolName}"]`)
			.find(".content-element-title")
			.should("contain.text", toolName)
			.should("be.visible");
	}

	seeExternalToolElementDomain(toolName) {
		cy.get(`[data-testid="board-external-tool-element-${toolName}"]`).within(() => {
			cy.get(Board.#externalToolElementDomain).should("be.visible");
		});
	}

	canNotSeeDeletedElements() {
		cy.get(Board.#deletedElement).should("not.be.visible");
	}

	clickPublishOptionInThreeDotMenuInCourseBoard() {
		cy.get(Board.#boardMenuActionPublish).click();
	}

	clickChangeLayoutOptionInThreeDotMenuInCourseBoard() {
		cy.get(Board.#boardMenuActionChangeLayout).click();
	}

	clickOnFABToCreateNewColumnBoard() {
		cy.get(Board.#newColumnBoardFABInCourseDetail).click();
	}

	seeNewCourseBoardCreatePage() {
		cy.url().should("include", "/board");
	}

	clickOnThreeDotMenuInCourseBoardTitle() {
		cy.get(Board.#threeDotInCourseBoardTitle).click();
		cy.get(Board.#renameOptionThreeDot).should("be.visible");
	}

	clickOnRenameInThreeDotCourseBoardTitle() {
		cy.get(Board.#renameOptionInThreeDotCourseBoardTitle).click();
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
			this.clearAndType("textarea", boardTitle);
		});
	}

	seeCourseBoardName(boardName) {
		cy.get(Board.#courseBoardTitleOnPage)
			.find("input")
			.should("be.visible")
			.should("have.value", boardName);
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

	clickOnWhiteboardElement() {
		cy.get(Board.#drawingElement).invoke("removeAttr", "target").click();
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

	clickOnKebabMenuAction(kebabMenuAction) {
		cy.get(
			`[data-testid="kebab-menu-action-${kebabMenuAction.toLowerCase()}"]`
		).click();
	}

	clickOnThreeDotOnColumn() {
		cy.get(Board.#threeDotMenuInColumn).click();
		cy.get(Board.#renameOptionThreeDot).should("be.visible");
	}

	clickOnThreeDotOnCard() {
		cy.get(Board.#threeDotMenuInCard).click();
		cy.get(Board.#editOptionThreeDot).should("be.visible");
	}

	clickOnThreeDotOnDeletedElement() {
		cy.get(Board.#threeDotMenuOnDeletedElement).click();
		cy.get(Board.#deleteOptionThreeDot).should("be.visible");
	}

	selectRenameInThreeDotMenu() {
		cy.get(Board.#renameOptionThreeDot).click();
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
		cy.wait(1000);
		cy.get(Board.#mainPageArea).click("bottom");
	}

	seeNewlyCreatedColumn(newColumnName) {
		cy.wait(1000);
		cy.get(Board.#addColumnTitleInput)
			.should("be.visible")
			.should("include.text", newColumnName);
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

	clickOnSingleColumnBoardOptionInDialogBox() {
		cy.get(Board.#singleColumnBoardOptionInDialogBox).click();
	}

	seePreferredExternalToolInMenu(toolName) {
		cy.get(`[data-testid="create-element-preferred-element-${toolName}"]`).should(
			"be.visible"
		);
	}

	selectPreferredExternalToolFromMenu(toolName) {
		cy.get(`[data-testid="create-element-preferred-element-${toolName}"]`).click();
	}

	preferredExternalToolIsNotVisibleInMenu(toolName) {
		cy.get(`[data-testid="create-element-preferred-element-${toolName}"]`).should(
			"not.exist"
		);
	}

	clickThreeDotMenuOnExternalToolElementWithTool(toolName) {
		cy.get(`[data-testid="board-external-tool-element-${toolName}"]`)
			.find('[data-testid*="element-menu-button"]')
			.click();
	}

	clickEditButtonInThreeDotMenu() {
		cy.get(Board.#editButtonInThreeDotMenu).click();
	}

	clickDeleteButtonInThreeDotMenu() {
		cy.get(Board.#deleteOptionThreeDot).click();
	}

	seeToolIsNotMarkedAsIncomplete(toolName) {
		cy.get(`[data-testid="board-external-tool-element-${toolName}"]`)
			.find(Board.#externalToolElementAlert)
			.children()
			.should("have.length", 0);
	}

	seeToolIsMarkedAsIncomplete(toolName) {
		cy.get(`[data-testid="board-external-tool-element-${toolName}"]`).within(() => {
			cy.get(Board.#externalToolElementAlert)
				.children(".v-alert.v-theme--light.text-warning")
				.should("have.class", "text-warning");
		});
	}

	seeToolIsMarkedAsIncompleteOperational(toolName) {
		cy.get(`[data-testid="board-external-tool-element-${toolName}"]`).within(() => {
			cy.get(Board.#externalToolElementAlert)
				.children(".v-alert.v-theme--light.text-info")
				.should("have.class", "text-info");
		});
	}

	seeToolIsNotMarkedAsIncompleteOperational(toolName) {
		cy.get(`[data-testid="board-external-tool-element-${toolName}"]`)
			.find(Board.#externalToolElementAlert)
			.children()
			.should("have.length", 0);
	}

	clickExternalToolElementWithTool(toolName) {
		cy.get(`[data-testid="board-external-tool-element-${toolName}"]`).click();
	}

	clickOnThreeDotMenuInBoardHeader() {
		cy.get(Board.#draftChipInCourseBoardName)
			.siblings()
			.find(Board.#threeDotInCourseBoardTitle)
			.click();
	}

	seeToolIsMarkedAsDeactivated(toolName) {
		cy.get(`[data-testid="board-external-tool-element-${toolName}"]`).within(() => {
			cy.get(Board.#externalToolElementAlert)
				.children(".v-alert.v-theme--light.text-warning")
				.should("have.class", "text-warning");
		});
	}

	seeToolIsNotMarkedAsDeactivated(toolName) {
		cy.get(`[data-testid="board-external-tool-element-${toolName}"]`)
			.find(Board.#externalToolElementAlert)
			.children()
			.should("have.length", 0);
	}

	launchTool(toolName, toolURL) {
		const launchedTool = { toolName: toolName, isLaunched: false };
		cy.window().then((win) => {
			cy.stub(win, "open")
				.as("openStub")
				.callsFake((url) => {
					expect(url).to.contain(toolURL);
					return Cypress.Promise.resolve().then(() => {
						launchedTool.isLaunched = true;
						expect(url).to.contain(toolURL);
					});
				});
		});
		cy.wrap(launchedTool).as("launchedTool");
		cy.wait(500);
		cy.get(`[data-testid="board-external-tool-element-${toolName}"]`)
			.focus()
			.should("be.visible")
			.should("not.be.disabled")
			.within(() => {
				cy.contains(Board.#contentElementTitleSlot, toolName)
					.click()
					.then(() => {
						cy.wait("@courses_api");
						cy.wait("@toolLaunch_api");
					});
			});
		cy.get("@openStub").should("have.been.called");
		cy.wrap(launchedTool).its("isLaunched").should("be.true");
		cy.get("@openStub").invoke("restore");
	}

	toolWasLaunched(toolName) {
		cy.get("@launchedTool").then((launchedTool) => {
			expect(launchedTool.toolName).to.equal(toolName);
			expect(launchedTool.isLaunched).to.be.true;
		});

		cy.wrap({ toolName: "", isLaunched: false }).as("launchedTool");
	}

	enterTextToTextFieldInCard(textContent) {
		cy.get(Board.#ckEditorText).then((el) => {
			const editor = el[0].ckeditorInstance;
			editor.setData(textContent);
		});
		cy.get(Board.#ckEditorText).then((el) => {
			const editor = el[0].ckeditorInstance;
			const editorContent = editor.getData();
			const plainText = editorContent.replace(/<\/?[^>]+(>|$)/g, "");
			expect(plainText).to.equal(textContent);
		});
	}

	seeTextInTextFieldInCard(textContent) {
		cy.contains(textContent);
	}

	seeDeletedElement(name) {
		cy.get(Board.#deletedElement).contains(name).should("be.visible");
	}

	selectEditInThreeDotMenu() {
		cy.get(Board.#editOptionThreeDot).click();
	}

	seeBoardCard() {
		cy.get(Board.#boardCard).should("be.visible");
	}

	selectCopyLinkToCardInThreeDotMenu() {
		cy.get(Board.#copyBoardCardLinkButton).click();
		cy.wait(500);
		cy.window()
			.then((win) => {
				return win.navigator.clipboard.readText();
			})
			.then((link) => {
				cy.wrap(link).as("boardCardLink");

				cy.url().then((currentUrl) => {
					expect(link).to.include(currentUrl);
				});
			});
	}

	openBoardCardLink() {
		cy.get("@boardCardLink").then((link) => {
			cy.visit(link);
		});
	}

	clickOutsideTheCardToSaveTheCard() {
		cy.get(Board.#mainPageArea).click("bottom");
	}

	seeFocusedBoardCard() {
		cy.get(Board.#boardCard).should("be.focused");
	}

	seeSingleColumnBoard() {
		cy.get(Board.#firstBoardColumn).scrollIntoView().should("be.visible");
	}

	seeMultiColumnBoard() {
		cy.get(Board.#firstBoardColumn).should("be.visible");
	}

	enterBoardCardTitle(cardTitle) {
		cy.get(Board.#boardCard).within(() => {
			cy.get(Board.#boardCardTitle)
				.find("textarea")
				.first()
				.clear()
				.type(cardTitle);
		});
	}

	seeBoardCardTitle(cardTitle) {
		cy.get(Board.#boardCard).within(() => {
			cy.get(Board.#boardCardTitle)
				.find("textarea")
				.first()
				.should("be.visible")
				.should("have.value", cardTitle);
		});
	}

	enterBoardCardLinkInLinkElement() {
		cy.get("@boardCardLink").then((link) => {
			cy.get(Board.#boardLinkElement)
				.find("textarea")
				.first()
				.clear()
				.type(link)
				.type('{enter}');
		});
	}

	seeLinkElementTitle(linkElementTitle) {
		cy.get(Board.#contentElementTitle)
			.contains(linkElementTitle)
			.should("be.visible");
	}

	clickOnLinkElement(linkElementTitle) {
		cy.get(Board.#contentElementTitle)
			.contains(linkElementTitle)
			.parents("a")
			.invoke("removeAttr", "target")
			.click();
	}

}
export default Board;

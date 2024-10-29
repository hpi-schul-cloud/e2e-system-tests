"use strict";
class MediaShelf {

	static #mediaShelfNavigationButton = '[data-testid="Media-shelf"]';
	static #mediaShelfPageTitle = '[data-testid="page-title"]';
	static #gridLayoutButton = '[data-testid="media-board-layout-grid"]';
	static #listLayoutButton = '[data-testid="media-board-layout-list"]';
	static #mediaLine1 = '[data-testid="media-board-line-0"]';
	static #mediaLineHeader1 = '[data-testid="media-board-line-header-0"]';
	static #ghostLineSpace = '[data-testid="ghost-line-space"]';
	static #mediaLineSpace1 = '[data-testid="media-line-space-0"]';
	static #availableMediaLineSpace = '[data-testid="available-media-line-space"]';
	static #lineTitle = '[data-testid="media-line-title"]';
	static #collapseLineButton = '[data-testid="collapse-line-btn"]';
	static #threeDotMenuInMediaLine = '[data-testid="line-menu-btn"]';
	static #editLineTitleButton = '[data-testid="action-update-line-title"]';
	static #colorPickerButton = '[data-testid="color-picker-btn"]';
	static #colorPicker = '[data-testid="line-color-picker"]';
	static #deleteLineButton = '[data-testid="action-delete-line"]';
	static #availableLine = '[data-testid="available-line"]';
	static #mediaElementThumbnail = '[data-testid="media-element-thumbnail"]';
	static #mediaElementDefaultThumbnail = '[data-testid="media-element-default-thumbnail"]';
	static #mediaElementTitle = '[data-testid="media-element-title"]';
	static #mediaElementDescription = '[data-testid="media-element-description"]';
	static #mediaElementDeactivatedChip = '[data-testid="warning-chip-deactivated"]';
	static #mediaElementNotLicensedChip = '[data-testid="warning-chip-not-licensed"]';
	static #mediaElementIncompleteChip = '[data-testid="warning-chip-incomplete"]';
	static #mediaElementNoLongerAvailableChip = '[data-testid="warning-chip-no-longer-available"]';
	static #threeDotMenuOnMediaElement = '[data-testid="board-menu-icon"]';
	static #deleteMediaElementButton = '[data-testid="board-menu-action-delete"]';
	static #deleteMediaElementDialog = '[data-testid="delete-dialog-item"]';
	static #confirmDeletionDialogButton = '[data-testid="dialog-confirm"]';
	static #createLineButton = '[data-testid="create-line-button"]';

	navigateToMediaShelf() {
		cy.get(MediaShelf.#mediaShelfNavigationButton).click();
		cy.url().should("include", "/media-shelf");
	}

	seeMediaShelfPageTitle() {
		cy.get(MediaShelf.#mediaShelfPageTitle).should("exist")
	}


	seeAvailableMediaLine() {
		cy.get(MediaShelf.#availableLine).should("exist")
	}

	seeFirstMediaLine() {
		cy.get(MediaShelf.#mediaLine1).should("exist")
	}

	firstMediaLineIsNotVisible() {
		cy.get(MediaShelf.#mediaLine1).should("not.exist")
	}

	seeFirstMediaLineWithTitle(title) {
		const line = cy.get(MediaShelf.#mediaLineHeader1)
		line.find('textarea.v-field__input')
			.should('have.value', title);
	}

	seeMediaLineMenu() {
		cy.get(MediaShelf.#editLineTitleButton).should("exist")
		cy.get(MediaShelf.#colorPickerButton).should("exist")
		cy.get(MediaShelf.#deleteLineButton).should("exist")
	}

	seeAvailableMediaLineMenu() {
		cy.get(MediaShelf.#colorPickerButton).should("exist")
	}

	seeAvailableBackgroundColors() {
		cy.get(MediaShelf.#colorPicker).should("exist")
	}

	seeAvailableMediaLineMenuColor(color) {
		cy.get(MediaShelf.#availableLine).should('have.css', 'background-color', color);
	}

	seeFirstMediaLineMenuColor(color) {
		cy.get(MediaShelf.#mediaLine1).should('have.css', 'background-color', color);
	}

	isAvailableMediaLineCollapsed() {
		const availableLine = cy.get(MediaShelf.#availableLine)
		availableLine.find(".v-expansion-panel-text.no-inner-padding")
			.should("have.css", "display", "none");
	}

	isAvailableMediaLineNotCollapsed() {
		const availableLine = cy.get(MediaShelf.#availableLine)
		availableLine.find(".v-expansion-panel-text.no-inner-padding")
			.should("not.have.css", "display", "none");
	}

	isFirstMediaLineCollapsed() {
		const line = cy.get(MediaShelf.#mediaLine1)
		line.find(".v-expansion-panel-text.no-inner-padding")
			.should("have.css", "display", "none");
	}

	isFirstMediaLineNotCollapsed() {
		const line = cy.get(MediaShelf.#mediaLine1)
		line.find(".v-expansion-panel-text.no-inner-padding")
			.should("not.have.css", "display", "none");
	}

	seeGridLayout() {
		cy.get(MediaShelf.#availableMediaLineSpace)
			.should('have.class', 'flex-wrap')
	}

	seeListLayout() {
		cy.get(MediaShelf.#availableMediaLineSpace)
			.should('not.have.class', 'flex-wrap')
	}

	seeNumberOfMediaInAvailableMediaLine(count) {
		cy.get(MediaShelf.#availableMediaLineSpace)
			.children(".bg-white")
			.should("have.length", count);
	}

	seeNumberOfMediaInFirstMediaLine(count) {
		const line = cy.get(MediaShelf.#mediaLine1);
		line.find(MediaShelf.#mediaLineSpace1)
			.children(".bg-white")
			.should("have.length", count);
	}

	seeMediaElementDefaultThumbnail(toolName) {
		const element = cy.get('[data-testid="media-element-' + toolName + '"]');
		element.find(MediaShelf.#mediaElementDefaultThumbnail)
			.should("exist")
	}

	seeMediaElementTitle(toolName) {
		const element = cy.get('[data-testid="media-element-' + toolName + '"]');
		element.find(MediaShelf.#mediaElementTitle)
			.should("exist")
			.should("contain.text", toolName);
	}

	seeMediaElementDescription(toolName) {
		const element = cy.get('[data-testid="media-element-' + toolName + '"]');
		element.find(MediaShelf.#mediaElementDescription)
			.should("exist")
	}

	seeMediaElementDeactivatedChip(toolName) {
		const element = cy.get('[data-testid="media-element-' + toolName + '"]');
		element.find(MediaShelf.#mediaElementDeactivatedChip)
			.should("exist")
	}

	seeMediaElementNotLicensedChip(toolName) {
		const element = cy.get('[data-testid="media-element-' + toolName + '"]');
		element.find(MediaShelf.#mediaElementNotLicensedChip)
			.should("exist")
	}

	seeMediaElementIncompleteChip(toolName) {
		const element = cy.get('[data-testid="media-element-' + toolName + '"]');
		element.find(MediaShelf.#mediaElementIncompleteChip)
			.should("exist")
	}

	seeDeletedMediaElementPlaceholder(toolName) {
		const element = cy.get('[data-testid="media-element-' + toolName + '"]');
		element.find(MediaShelf.#mediaElementNoLongerAvailableChip)
			.should("exist")
	}

	mediaElementIsVisibleInAvailableMediaLine(toolName) {
		const line = cy.get(MediaShelf.#availableMediaLineSpace)
		line.find('[data-testid="media-element-' + toolName + '"]').should("exist")
	}

	mediaElementIsNotVisibleInAvailableMediaLine(toolName) {
		const line = cy.get(MediaShelf.#availableMediaLineSpace)
		line.find('[data-testid="media-element-' + toolName + '"]').should("not.exist")
	}

	clickGridLayoutButton() {
		cy.get(MediaShelf.#gridLayoutButton).click()
	}

	clickListLayoutButton() {
		cy.get(MediaShelf.#listLayoutButton).click()
	}

	clickAddMediaLineButton() {
		cy.get(MediaShelf.#createLineButton).click()
	}

	clickCollapseAvailableMediaLineButton() {
		cy.get(MediaShelf.#availableLine)
			.find(MediaShelf.#collapseLineButton)
			.click();
	}

	clickCollapseButtonOnFirstMediaLine() {
		cy.get(MediaShelf.#mediaLine1)
			.find(MediaShelf.#collapseLineButton)
			.click();
	}

	clickThreeDotMenuButtonOnAvailableMediaLine() {
		cy.get(MediaShelf.#availableLine)
			.find(MediaShelf.#threeDotMenuInMediaLine)
			.click();
	}

	clickThreeDotMenuButtonOnFirstMediaLine() {
		cy.get(MediaShelf.#mediaLine1)
			.find(MediaShelf.#threeDotMenuInMediaLine)
			.click();
	}

	clickEditTitleButton() {
		cy.get(MediaShelf.#editLineTitleButton).click();
	}

	editTitleOfFirstMediaLine(title) {
		const line = cy.get(MediaShelf.#mediaLine1)
		line.find(MediaShelf.#lineTitle)
			.type('{selectAll}{backspace}')
			.type(title)
			.type('{esc}');
	}

	clickOnFirstMediaLineTitle() {
		const line = cy.get(MediaShelf.#mediaLine1)
		line.find(MediaShelf.#lineTitle).dblclick();
	}

	clickDeleteMediaLineButton() {
		cy.get(MediaShelf.#deleteLineButton).click();
	}

	clickColorPickerButton() {
		cy.get(MediaShelf.#colorPickerButton).click();
	}

	selectLineColor() {
		const colorPicker = cy.get(MediaShelf.#colorPicker);
		colorPicker.get('[style="background: rgb(255, 204, 188);"]').click();
	}

	selectLineColorWhite() {
		const colorPicker = cy.get(MediaShelf.#colorPicker);
		colorPicker.get('[style="background: rgb(255, 255, 255);"]').click();
	}

	clickMediaElement(tool) {
		cy.get('[data-testid="media-element-' + tool + '"]').click();
	}

	clickThreeDotMenuButtonOnMediaElement(toolName) {
		cy.get('[data-testid="media-element-' + toolName + '"]')
			.find(MediaShelf.#threeDotMenuOnMediaElement)
			.click()
	}

	clickDeleteMediaElementButton() {
		cy.get(MediaShelf.#deleteMediaElementButton)
			.click()
	}

	seeDeleteMediaDialog() {
		cy.get(MediaShelf.#deleteMediaElementDialog)
			.should("exist")
	}

	clickConfirmDeleteDialog() {
		cy.get(MediaShelf.#confirmDeletionDialogButton)
			.click()
	}

	moveToolInGhostMediaLine(toolName) {
		cy.get('[data-testid="media-element-' + toolName + '"]').drag(MediaShelf.#ghostLineSpace);
	}

	moveToolInEmptyFirstMediaLine(toolName) {
		cy.get('[data-testid="media-element-' + toolName + '"]').drag(MediaShelf.#mediaLineSpace1);
	}

	moveToolInFirstMediaLine(toolName) {
		const options = { target: {x: 0 , y: 0}, source: { position: "right" }, force: true }
		cy.get('[data-testid="media-element-' + toolName + '"]').drag(MediaShelf.#mediaLineSpace1, options);
	}

	moveToolInAvailableMediaLine(toolName) {
		const options = { target: {x: 0 , y: 0}, source: { position: "right" }, force: true }
		cy.get('[data-testid="media-element-' + toolName + '"]').drag(MediaShelf.#availableMediaLineSpace, options);
	}

	moveToolInEmptyAvailableMediaLine(toolName) {
		cy.get('[data-testid="media-element-' + toolName + '"]').drag(MediaShelf.#availableMediaLineSpace);
	}

	moveToolNextToTool(toolNameSource, toolNameTarget) {
		const options = { target: {x: 0 , y: 0}, source: { position: "right" }, force: true }
		cy.get('[data-testid="media-element-' + toolNameSource + '"]')
			.drag('[data-testid="media-element-' + toolNameTarget + '"]', options)
	}

	mediaElementIsVisibleInFirstMediaLine(toolName) {
		const line = cy.get(MediaShelf.#mediaLineSpace1)
		line.find('[data-testid="media-element-' + toolName + '"]').should("exist")
	}

	launchToolInAvailableMediaLine(toolName, toolURL) {
		const launchedTool =  { toolName: toolName, isLaunched: false };

		cy.window().then((win) => {
			cy.stub(win, "open").as("openStub").callsFake((url) => {
				expect(url).to.contain(toolURL);
				launchedTool.isLaunched = true;
			});
		});

		cy.wrap(launchedTool).as("launchedTool");

		const line = cy.get(MediaShelf.#availableMediaLineSpace)
		line.find('[data-testid="media-element-' + toolName + '"]').click()

		cy.get("@openStub").invoke("restore")
	}

	launchToolInFirstMediaLine(toolName, toolURL) {
		const launchedTool =  { toolName: toolName, isLaunched: false };

		cy.window().then((win) => {
			cy.stub(win, "open").as("openStub").callsFake((url) => {
				expect(url).to.contain(toolURL);
				launchedTool.isLaunched = true;
			});
		});

		cy.wrap(launchedTool).as("launchedTool");

		const line = cy.get(MediaShelf.#mediaLineSpace1)
		line.find('[data-testid="media-element-' + toolName + '"]').click()

		cy.get("@openStub").invoke("restore")
	}

	toolWasLaunched(toolName){
		cy.get("@launchedTool").then((launchedTool) => {
			expect(launchedTool.toolName).to.equal(toolName);
			expect(launchedTool.isLaunched).to.be.true;
		});

		cy.wrap({ toolName: "", isLaunched: false }).as("launchedTool");
	}
}

export default MediaShelf;

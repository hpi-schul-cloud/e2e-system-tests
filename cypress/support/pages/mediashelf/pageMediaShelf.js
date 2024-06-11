"use strict";
class MediaShelf {

	static #mediaShelfNavigationButton = '[data-testid="Media-shelf"]';
	static #mediaShelfPageTitle = '[data-testid="page-title"]';
	static #gridLayoutButton = '[data-testid="media-board-layout-grid"]';
	static #listLayoutButton = '[data-testid="media-board-layout-list"]';
	static #mediaLine0 = '[data-testid="media-board-line-0"]';
	static #mediaLine1 = '[data-testid="media-board-line-1"]';
	static #mediaLine2 = '[data-testid="media-board-line-2"]';
	static #mediaLineHeader0 = '[data-testid="media-board-line-header-0"]';
	static #mediaLineHeader1 = '[data-testid="media-board-line-header-1"]';
	static #mediaLineHeader2 = '[data-testid="media-board-line-header-2"]';
	static #ghostLineSpace = '[data-testid="ghost-line-space"]';
	static #mediaLineSpace = '[data-testid="media-line-space"]';
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

	seeMediaLine() {
		cy.get(MediaShelf.#mediaLine0).should("exist")
	}

	seeDeletedMediaLine() {
		cy.get(MediaShelf.#mediaLine0).should("not.exist")
	}

	seeMediaLineWithTitle(title) {
		const line = cy.get(MediaShelf.#mediaLineHeader0)
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

	seeMediaLineMenuColor(color) {
		cy.get(MediaShelf.#mediaLine0).should('have.css', 'background-color', color);
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

	isMediaLineCollapsed() {
		const line = cy.get(MediaShelf.#mediaLine0)
		line.find(".v-expansion-panel-text.no-inner-padding")
			.should("have.css", "display", "none");
	}

	isMediaLineNotCollapsed() {
		const line = cy.get(MediaShelf.#mediaLine0)
		line.find(".v-expansion-panel-text.no-inner-padding")
			.should("not.have.css", "display", "none");
	}

	seeGridLayout() {
		const line = cy.get(MediaShelf.#availableMediaLineSpace)
			.should('have.class', 'flex-wrap')
	}

	seeListLayout() {
		const line = cy.get(MediaShelf.#availableMediaLineSpace)
			.should('not.have.class', 'flex-wrap')
	}

	seeNumberOfMediaInAvailableMediaLine(count) {
		cy.get(MediaShelf.#availableMediaLineSpace)
			.children(".bg-white")
			.should("have.length", count);
	}

	seeNumberOfMediaInMediaLine(count) {
		const line = cy.get(MediaShelf.#mediaLine0);
		line.get(MediaShelf.#mediaLineSpace)
			.children(".bg-white")
			.should("have.length", count);
	}

	seeMediaElementDefaultThumbnail(tool) {
		const element = cy.get('[data-testid="media-element-' + tool + '"]');
		element.find(MediaShelf.#mediaElementDefaultThumbnail)
			.should("exist")
	}

	seeMediaElementTitle(tool) {
		const element = cy.get('[data-testid="media-element-' + tool + '"]');
		element.find(MediaShelf.#mediaElementTitle)
			.should("exist")
			.should("contain.text", tool);
	}

	seeMediaElementDescription(tool) {
		const element = cy.get('[data-testid="media-element-' + tool + '"]');
		element.find(MediaShelf.#mediaElementDescription)
			.should("exist")
	}

	seeMediaElementDeactivatedChip(tool) {
		const element = cy.get('[data-testid="media-element-' + tool + '"]');
		element.find(MediaShelf.#mediaElementDeactivatedChip)
			.should("exist")
	}

	seeMediaElementNotLicensedChip(tool) {
		const element = cy.get('[data-testid="media-element-' + tool + '"]');
		element.find(MediaShelf.#mediaElementNotLicensedChip)
			.should("exist")
	}

	seeMediaElementIncompleteChip(tool) {
		const element = cy.get('[data-testid="media-element-' + tool + '"]');
		element.find(MediaShelf.#mediaElementIncompleteChip)
			.should("exist")
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

	clickCollapseMediaLineButton() {
		cy.get(MediaShelf.#mediaLine0)
			.find(MediaShelf.#collapseLineButton)
			.click();
	}

	clickThreeDotMenuButtonOnAvailableMediaLine() {
		cy.get(MediaShelf.#availableLine)
			.find(MediaShelf.#threeDotMenuInMediaLine)
			.click();
	}

	clickThreeDotMenuButtonOnMediaLine() {
		cy.get(MediaShelf.#mediaLine0)
			.find(MediaShelf.#threeDotMenuInMediaLine)
			.click();
	}

	clickEditTitleButton() {
		cy.get(MediaShelf.#editLineTitleButton).click();
	}

	editMediaLineTitlte(title) {
		const line = cy.get(MediaShelf.#mediaLine0)
		line.find(MediaShelf.#lineTitle)
			.type('{selectAll}{backspace}')
			.type(title)
			.type('{esc}');
	}

	clickOnMediaLineTitle() {
		const line = cy.get(MediaShelf.#mediaLine0)
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

	clickMediaElement(tool) {
		cy.get('[data-testid="media-element-' + tool + '"]').click();
	}

	// moveMediaElementToNewMediaLine(tool) {
	// 	cy.get('[data-testid="media-element-'+ tool +'"]')
	// 		.drag(MediaShelf.#ghostLineSpace, {force: true, scrollBehavior: "nearest"})
	// }

	// moveMediaElementToAvailableMediaLine(tool) {
	// 	// cy.get('[data-testid="media-element-'+ tool +'"]')
	// 	// 	.drag(MediaShelf.#availableMediaLineSpace, {force: true, scrollBehavior: "nearest"})
	// }

	// moveMediaElementToFirstMediaLine(tool) {
	// 	cy.get('[data-testid="media-element-'+ tool +'"]')
	// 		.drag("[data-testid='media-line-space-0']", {force: true, scrollBehavior: "nearest"})
	// }

}

export default MediaShelf;

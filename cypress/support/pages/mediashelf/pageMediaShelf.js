"use strict";

class MediaShelf {
	static #mediaShelfNavigationButton = '[data-testid="sidebar-mediashelf"]';
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
	static #mediaElementDefaultThumbnail =
		'[data-testid="media-element-default-thumbnail"]';
	static #mediaElementTitle = '[data-testid="media-element-title"]';
	static #mediaElementDescription = '[data-testid="media-element-description"]';
	static #mediaElementDeactivatedChip = '[data-testid="warning-chip-deactivated"]';
	static #mediaElementNotLicensedChip = '[data-testid="warning-chip-not-licensed"]';
	static #mediaElementIncompleteChip = '[data-testid="warning-chip-incomplete"]';
	static #mediaElementNoLongerAvailableChip =
		'[data-testid="warning-chip-no-longer-available"]';
	static #threeDotMenuOnMediaElement = '[data-testid="board-menu-icon"]';
	static #deleteMediaElementButton = '[data-testid="kebab-menu-action-delete"]';
	static #createLineButton = '[data-testid="create-line-button"]';
	static #emptyStateSign = '[data-testid="empty-state"]';
	static #emptyStateInfoText = '[data-testid="emptyTaskMessage"]';

	navigateToMediaShelf() {
		cy.get(MediaShelf.#mediaShelfNavigationButton).click();
		cy.url().should("include", "/media-shelf");
	}

	seeMediaShelfPageTitle() {
		cy.get(MediaShelf.#mediaShelfPageTitle).should("be.visible");
	}

	seeAvailableMediaLine() {
		cy.get(MediaShelf.#availableLine).should("be.visible");
	}

	seeFirstMediaLine() {
		cy.get(MediaShelf.#mediaLine1).should("be.visible");
	}

	firstMediaLineIsNotVisible() {
		cy.get(MediaShelf.#mediaLine1).should("not.exist");
	}

	seeFirstMediaLineWithTitle(title) {
		cy.get(MediaShelf.#mediaLineHeader1).within(() => {
			cy.get("textarea.v-field__input")
				.should("have.value", title);
		});
	}

	seeMediaLineMenu() {
		cy.get(MediaShelf.#editLineTitleButton).should("be.visible");
		cy.get(MediaShelf.#colorPickerButton).should("be.visible");
		cy.get(MediaShelf.#deleteLineButton).should("be.visible");
	}

	seeAvailableMediaLineMenu() {
		cy.get(MediaShelf.#colorPickerButton).should("be.visible");
	}

	seeAvailableBackgroundColors() {
		cy.get(MediaShelf.#colorPicker).should("be.visible");
	}

	seeAvailableMediaLineMenuColor(color) {
		cy.get(MediaShelf.#availableLine).should("have.css", "background-color", color);
	}

	seeFirstMediaLineMenuColor(color) {
		cy.get(MediaShelf.#mediaLine1).should("have.css", "background-color", color);
	}

	isAvailableMediaLineCollapsed() {
		cy.get(MediaShelf.#availableLine).within(() => {
			cy.get(".v-expansion-panel-text.no-inner-padding")
				.should("have.css",	"display", "none");
		});
	}

	isAvailableMediaLineNotCollapsed() {
		cy.get(MediaShelf.#availableLine).within(() => {
			cy.get(".v-expansion-panel-text.no-inner-padding")
				.should("not.have.css",	"display", "none");
		});
	}

	isFirstMediaLineCollapsed() {
		cy.get(MediaShelf.#mediaLine1).within(() => {
			cy.get(".v-expansion-panel-text.no-inner-padding")
				.should("have.css",	"display", "none");
		});
	}

	isFirstMediaLineNotCollapsed() {
		cy.get(MediaShelf.#mediaLine1).within(() => {
			cy.get(".v-expansion-panel-text.no-inner-padding")
				.should("not.have.css",	"display", "none");
		});
	}

	seeGridLayout() {
		cy.get(MediaShelf.#availableMediaLineSpace).should("have.class", "flex-wrap");
	}

	seeListLayout() {
		cy.get(MediaShelf.#availableMediaLineSpace).should("not.have.class", "flex-wrap");
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
		cy.get(`[data-testid="media-element-${toolName}"]`).within(() => {
			cy.get(MediaShelf.#mediaElementDefaultThumbnail).should("be.visible");
		});
	}

	seeMediaElementTitle(toolName) {
		cy.get(`[data-testid="media-element-${toolName}"]`).within(() => {
			cy.get(MediaShelf.#mediaElementTitle)
			.should("be.visible")
			.should("contain.text", toolName);
		});
	}

	seeMediaElementDescription(toolName) {
		cy.get(`[data-testid="media-element-${toolName}"]`).within(() => {
			cy.get(MediaShelf.#mediaElementDescription).should("be.visible");
		});
	}

	seeMediaElementDeactivatedChip(toolName) {
		cy.get(`[data-testid="media-element-${toolName}"]`).within(() => {
			cy.get(MediaShelf.#mediaElementDeactivatedChip).should("be.visible");
		});
	}

	seeMediaElementNotLicensedChip(toolName) {
		cy.get(`[data-testid="media-element-${toolName}"]`).within(() => {
			cy.get(MediaShelf.#mediaElementNotLicensedChip).should("be.visible");
		});
	}

	seeMediaElementIncompleteChip(toolName) {
		cy.get(`[data-testid="media-element-${toolName}"]`).within(() => {
			cy.get(MediaShelf.#mediaElementIncompleteChip).should("be.visible");
		});
	}

	seeMediaElementNoLongerAvailableChip(toolName) {
		cy.get(`[data-testid="media-element-${toolName}"]`).within(() => {
			cy.get(MediaShelf.#mediaElementNoLongerAvailableChip).should("be.visible");
		});
	}

	mediaElementIsVisibleInAvailableMediaLine(toolName) {
		cy.get(MediaShelf.#availableMediaLineSpace).within(() => {
			cy.get(`[data-testid="media-element-${toolName}"]`).should("be.visible");
		});
	}

	mediaElementIsNotVisibleInAvailableMediaLine(toolName) {
		cy.get(MediaShelf.#availableMediaLineSpace).within(() => {
			cy.get(`[data-testid="media-element-${toolName}"]`).should("not.exist");
		});
	}

	clickGridLayoutButton() {
		cy.get(MediaShelf.#gridLayoutButton).click();
	}

	clickListLayoutButton() {
		cy.get(MediaShelf.#listLayoutButton).click();
	}

	clickAddMediaLineButton() {
		cy.get(MediaShelf.#createLineButton).click();
	}

	clickCollapseAvailableMediaLineButton() {
		cy.get(MediaShelf.#availableLine).find(MediaShelf.#collapseLineButton).click();
	}

	clickCollapseButtonOnFirstMediaLine() {
		cy.get(MediaShelf.#mediaLine1).find(MediaShelf.#collapseLineButton).click();
	}

	clickThreeDotMenuButtonOnAvailableMediaLine() {
		cy.get(MediaShelf.#availableLine)
			.find(MediaShelf.#threeDotMenuInMediaLine)
			.click();
	}

	clickThreeDotMenuButtonOnFirstMediaLine() {
		cy.get(MediaShelf.#mediaLine1).find(MediaShelf.#threeDotMenuInMediaLine).click();
	}

	clickEditTitleButton() {
		cy.get(MediaShelf.#editLineTitleButton).click();
	}

	editTitleOfFirstMediaLine(title) {
		cy.get(MediaShelf.#mediaLine1).within(() => {
			cy.get(MediaShelf.#lineTitle)
				.type("{selectAll}{backspace}")
				.type(title)
				.type("{esc}");
		});
	}

	clickOnFirstMediaLineTitle() {
		cy.get(MediaShelf.#mediaLine1).within(() => {
			cy.get(MediaShelf.#lineTitle).dblclick();
		});
	}

	clickDeleteMediaLineButton() {
		cy.get(MediaShelf.#deleteLineButton).click();
	}

	clickColorPickerButton() {
		cy.get(MediaShelf.#colorPickerButton).click();
	}

	selectLineColor() {
		cy.get(MediaShelf.#colorPicker).within(() => {
			cy.get('[style="background: rgb(255, 204, 188);"]').click();
		});
	}

	selectLineColorWhite() {
		cy.get(MediaShelf.#colorPicker).within(() => {
			cy.get('[style="background: rgb(255, 255, 255);"]').click();
		});
	}

	clickMediaElement(tool) {
		cy.get(`[data-testid="media-element-${toolName}"]`).click();
	}

	clickThreeDotMenuButtonOnMediaElement(toolName) {
		cy.get(`[data-testid="media-element-${toolName}"]`)
			.find(MediaShelf.#threeDotMenuOnMediaElement)
			.click();
	}

	clickDeleteMediaElementButton() {
		cy.get(MediaShelf.#deleteMediaElementButton).click();
	}

	moveToolInGhostMediaLine(toolName) {
		cy.get(`[data-testid="media-element-${toolName}"]`)
			.drag(MediaShelf.#ghostLineSpace);
	}

	moveToolInEmptyFirstMediaLine(toolName) {
		cy.get(`[data-testid="media-element-${toolName}"]`)
			.drag(MediaShelf.#mediaLineSpace1);
	}

	moveToolInFirstMediaLine(toolName) {
		const options = {
			target: { x: 0, y: 0 },
			source: { position: "right" },
			force: true,
		};
		cy.get(`[data-testid="media-element-${toolName}"]`)
			.drag(MediaShelf.#mediaLineSpace1, options);
	}

	moveToolInAvailableMediaLine(toolName) {
		const options = {
			target: { x: 0, y: 0 },
			source: { position: "right" },
			force: true,
		};
		cy.get(`[data-testid="media-element-${toolName}"]`)
			.drag(MediaShelf.#availableMediaLineSpace, options);
	}

	moveToolInEmptyAvailableMediaLine(toolName) {
		cy.get(`[data-testid="media-element-${toolName}"]`)
		.drag(MediaShelf.#availableMediaLineSpace);
	}

	moveToolNextToTool(toolNameSource, toolNameTarget) {
		const options = {
			target: { x: 0, y: 0 },
			source: { position: "right" },
			force: true,
		};
		cy.get(`[data-testid="media-element-${toolNameSource}"]`)
			.drag(`[data-testid="media-element-${toolNameTarget}"]`, options);
	}

	mediaElementIsVisibleInFirstMediaLine(toolName) {
		cy.get(MediaShelf.#mediaLineSpace1).within(() => {
			cy.get(`[data-testid="media-element-${toolName}"]`).should("be.visible");
		});
	}

	launchToolInAvailableMediaLine(toolName, toolURL) {
		const launchedTool = { toolName: toolName, isLaunched: false };

		cy.window().then((win) => {
			cy.stub(win, "open")
				.as("openStub")
				.callsFake((url) => {
					expect(url).to.contain(toolURL);
					launchedTool.isLaunched = true;
				});
		});

		cy.wrap(launchedTool).as("launchedTool");

		cy.get(MediaShelf.#availableMediaLineSpace).within(() => {
			cy.get(`[data-testid="media-element-${toolName}"]`).click();
		});

		cy.get("@openStub").invoke("restore");
	}

	launchToolInFirstMediaLine(toolName, toolURL) {
		const launchedTool = { toolName: toolName, isLaunched: false };

		cy.window().then((win) => {
			cy.stub(win, "open")
				.as("openStub")
				.callsFake((url) => {
					expect(url).to.contain(toolURL);
					launchedTool.isLaunched = true;
				});
		});

		cy.wrap(launchedTool).as("launchedTool");

		cy.get(MediaShelf.#mediaLineSpace1).within(() => {
			cy.get(`[data-testid="media-element-${toolName}"]`).click();
		});

		cy.get("@openStub").invoke("restore");
	}

	toolWasLaunched(toolName) {
		cy.get("@launchedTool").then((launchedTool) => {
			expect(launchedTool.toolName).to.equal(toolName);
			expect(launchedTool.isLaunched).to.be.true;
		});

		cy.wrap({ toolName: "", isLaunched: false }).as("launchedTool");
	}

	clickToolInFirstMediaLine(toolName) {
		cy.get(MediaShelf.#mediaLineSpace1).within(() => {
			cy.get(`[data-testid="media-element-${toolName}"]`).click();
		});
	}

	seeNoAvailableMediaInfoText() {
		cy.get(MediaShelf.#emptyStateInfoText).should("be.visible");
		cy.get(MediaShelf.#emptyStateSign).find("svg").should("be.visible");
	}
}

export default MediaShelf;

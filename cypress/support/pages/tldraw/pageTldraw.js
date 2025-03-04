export class Tldraw {
	static #canvas = "#canvas";
	static #pencilButton = "#TD-PrimaryTools-Pencil";
	static #textButton = "#TD-PrimaryTools-Text";
	static #imageButton = "#TD-PrimaryTools-Image";
	static #deleteButton = "#TD-Delete";
	static #drawShape = '[data-shape="draw"]';
	static #textShape = '[data-shape="text"]';
	static #imageShape = '[data-shape="image"]';
	static #imageUploadInput = "#TD-PrimaryTools-Image";

	selectPencilTool() {
		cy.get(Tldraw.#pencilButton).click();
	}

	selectTextTool() {
		cy.get(Tldraw.#textButton).click();
	}

	selectImageTool() {
		cy.get(Tldraw.#imageButton).click();
	}

	removeElement(text) {
		cy.get(Tldraw.#deleteButton).click();
	}

	drawLine(startX, startY, endX, endY) {
		cy.get(Tldraw.#canvas)
			.realMouseDown({ button: "left", x: startX, y: startY })
			.realMouseMove(endX, endY)
			.realMouseUp({ button: "left", x: endX, y: endY });
	}

	typeText(text, x, y) {
		cy.get(Tldraw.#canvas).realClick({ x: x, y: y }).realType(text);
	}

	checkLine() {
		cy.get(Tldraw.#drawShape).should("be.visible");
	}

	checkTextNotExisting() {
		cy.get(Tldraw.#textShape).should("not.exist");
	}

	checkImage(fileName) {
		cy.get(Tldraw.#imageShape).should("be.visible").should("contain", fileName);
	}

	checkText(text) {
		cy.get(Tldraw.#textShape).should("be.visible").should("contain", text);
	}

	clickOnText(text) {
		cy.get(Tldraw.#textShape)
			.contains("div.c-hQszZo", text)
			.should("be.visible")
			.parent()
			.click();
		// cy.get(Tldraw.#textShape)
		// 	.should("contain", text)
		// 	.within(() => {
		// 		cy.get("div.tl-inner-div").within(() => {
		// 			cy.get("div").first().click();
		// 		});
		// 	});
	}

	executeImageUpload(fileName) {
		// mark our window object to "know" when it gets reloaded
		//cy.window().then((w) => (w.beforeReload = true));
		// initially the new property is there
		//cy.window().should("have.prop", "beforeReload", true);
		// Upload a file includes a reload of the page
		cy.get(Tldraw.#imageUploadInput).attachFile(fileName);
		// after reload the property should be gone
		//cy.window().should("not.have.prop", "beforeReload");
		//cy.wait("@homework_api");
	}
}

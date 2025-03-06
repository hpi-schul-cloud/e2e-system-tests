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
	static #undoButton = "#TD-TopPanel-Undo";
	static #redoButton = "#TD-TopPanel-Redo";

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

	redoLastAction() {
		cy.get(Tldraw.#redoButton).click();
	}

	undoLastAction() {
		cy.get(Tldraw.#undoButton).click();
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
			.should("contain", text)
			.within(() => {
				cy.get("div.tl-inner-div").within(() => {
					cy.get("div").first().click();
				});
			});
	}
}

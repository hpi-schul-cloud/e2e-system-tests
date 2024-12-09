export class Tldraw {
	static #canvas = "#canvas";
	static #pencilButton = "#TD-PrimaryTools-Pencil";
	static #textButton = "#TD-PrimaryTools-Text";
	static drawShape = '[data-shape="draw"]';
	static textShape = '[data-shape="text"]';

	selectPencilTool() {
		cy.get(Tldraw.#pencilButton).click();
	}

	selectTextTool() {
		cy.get(Tldraw.#textButton).click();
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
		cy.get(Tldraw.drawShape).should("be.visible");
	}

	checkText(text) {
		cy.get(Tldraw.textShape).should("be.visible").should("contain", text);
	}
}

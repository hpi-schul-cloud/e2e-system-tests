export class Tldraw {
	static #canvas = "#canvas";
	static #pencilButton = "#TD-PrimaryTools-Pencil";
	static #textButton = "#TD-PrimaryTools-Text";

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

	typeText(x, y, text) {
		cy.get(Tldraw.#canvas).realClick({ x: 500, y: 500 }).realType(text);
	}
}

export class Tldraw {
	static #tldrawEditor = ".tldraw";
	static #pencilButton = "#TD-PrimaryTools-Pencil";
	static #textButton = "#TD-PrimaryTools-Text";

	selectPencilTool() {
		cy.get(Tldraw.#pencilButton).click();
	}

	selectTextTool() {
		cy.get(Tldraw.#textButton).click();
	}

	drawALine() {
		cy.get(Tldraw.#tldrawEditor)
			.trigger("mousedown", 100, 100)
			.trigger("mousemove", 200, 200)
			.trigger("mouseup", 200, 200);
	}

	typeText() {
		cy.get(Tldraw.#tldrawEditor).click(300, 300).type("text");
	}
}

export class Collabora {
	static #curssiveButton = "[id=Italic-button]";
	static #collaboraDocx = 'iframe[title="Office-Dokument Editor"]';
	static #collaboraSaveButton = "[id=save-button]";

	getIframeBody(selector) {
		return cy
			.get(selector, { timeout: 60000 })
			.should("exist")
			.then(($iframe) => {
				return cy.wrap($iframe.contents().find("body"));
			});
	}

	selectCursiveWriter() {
		this.getIframeBody(Collabora.#collaboraDocx)
			.find(Collabora.#curssiveButton)
			.click();
	}

	typeCollaboraText(text, x, y) {
		cy.get(Collabora.#collaboraDocx).realClick({ x: x, y: y }).realType(text);
	}

	clickCollaboraSaveButton() {
		this.getIframeBody(Collabora.#collaboraDocx)
			.find(Collabora.#collaboraSaveButton)
			.click({ force: true }); //need to force click
	}

	goBackToRoomBoard() {
		cy.go("back");
		cy.wait(1000);
	}
}

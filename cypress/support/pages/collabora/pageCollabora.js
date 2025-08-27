export class Collabora {
	static #cursiveButton = '[id^="Italic"][id$="-button"]';
	static #collaboraDocx = 'iframe[title="Office-Dokument Editor"]';
	static #collaboraSaveButton = "[id=save-button]";

	seeCollaboraTextEditor() {
		this.getIframeBody(Collabora.#collaboraDocx).should("exist");
	}

	getIframeBody(selector) {
		return cy
			.get(selector, { timeout: 100000 })
			.should("exist")
			.then(($iframe) => {
				return cy.wrap($iframe.contents().find("body"));
			});
	}

	selectCursiveWriter() {
		this.getIframeBody(Collabora.#collaboraDocx)
			.find(Collabora.#cursiveButton) // to match button ids Italic-button, Italic1-button ..
			.click();
	}

	typeCollaboraText(text, x, y) {
		cy.get(Collabora.#collaboraDocx)
			.realClick({ x: x, y: y })
			.realType(`{enter}${text}`); // to type in new line
	}

	clickCollaboraSaveButton() {
		this.getIframeBody(Collabora.#collaboraDocx)
			.find(Collabora.#collaboraSaveButton)
			.click({ force: true }); // need to force click otherwise does not click
	}

	goBackToRoomBoard() {
		cy.go("back");
		cy.wait(1000);
	}
}

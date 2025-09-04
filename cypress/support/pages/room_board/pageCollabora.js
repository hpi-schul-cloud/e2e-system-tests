"use strict";

class Collabora {
	static #collaboraDocx = 'iframe[title="Office-Dokument Editor"]';
	static #collaboraSaveButton = "[id=save-button]";
	static #fileButtonText = "Datei";
	static #pdfDownloadText = "PDF-Dokument (.pdf)";
	static #writeDownloadButton = '[id="downloadas-button"]';
	static #readDownloadLink = 'li[id="menu-downloadas"] a';
	static #pdfDownloadSpan = '[id="downloadas-entries"] span';
	static #pdfDownloadLink = 'li[id="menu-downloadas"] ul a';

	getIframeBody(selector) {
		return cy
			.get(selector, { timeout: 50 })
			.should("exist")
			.then(($iframe) => {
				return cy.wrap($iframe.contents().find("body"));
			});
	}

	seeCollaboraTextEditor() {
		this.getIframeBody(Collabora.#collaboraDocx).should("be.visible");
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

	cannotTypeCollaboraText(text, x, y) {
		cy.get(Collabora.#collaboraDocx)
			.realClick({ x: x, y: y })
			.realType(`{enter}${text}`);
		this.getIframeBody(Collabora.#collaboraDocx).should("not.contain.text", text);
	}

	clickCollaboraFileIcon() {
		this.getIframeBody(Collabora.#collaboraDocx)
			.contains(Collabora.#fileButtonText)
			.click();
		// user with read access has id in the form of number and for edit permission has id in the text format.
		// Therefore, using the text "Datei" to find the element.
	}

	clickCollaboraDownloadButton() {
		this.getIframeBody(Collabora.#collaboraDocx).within(() => {
			cy.contains(
				`${Collabora.#writeDownloadButton}, ${Collabora.#readDownloadLink}`,
				/Herunterladen( als)?/,

				{
					timeout: 5000,
				}
			).click();
		});
	}
	// user with read access has id in the form of number and for edit permission has id and text.

	clickCollaboraPDFDownloadOption() {
		this.getIframeBody(Collabora.#collaboraDocx).within(() => {
			cy.contains(
				`${Collabora.#pdfDownloadSpan}, ${Collabora.#pdfDownloadLink}`,
				Collabora.#pdfDownloadText,
				{
					timeout: 5000,
				}
			).click();
		});
	}
}

export default Collabora;

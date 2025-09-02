export class Collabora {
	static #collaboraDocx = 'iframe[title="Office-Dokument Editor"]';
	static #collaboraSaveButton = "[id=save-button]";
	static #fileButtonText = "Datei";
	static #writeDownloadButtonSelector = 'button[id="downloadas-button"]';
	static #readDownloadLinkSelector = '[id="menu-downloadas"]';
	static #pdfDownloadText = "PDF-Dokument (.pdf)";

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
		this.getIframeBody(Collabora.#collaboraDocx).then(($body) => {
			// start with write access
			let $download = $body.find(Collabora.#writeDownloadButtonSelector);

			// fallback as read access
			if (!$download.length) {
				$download = $body
					.find(Collabora.#readDownloadLinkSelector)
					.filter((i, el) =>
						el.textContent.trim().startsWith("Herunterladen als")
					);
			}

			// generic click action
			if ($download.length) {
				cy.wrap($download).click();
			}
		});
	}
	// user with read access has id in the form of number and for edit permission has id in the text format.
	// Therefore, using the text "Herunterladen als" to find the element.

	clickCollaboraPDFDownloadOption() {
		this.getIframeBody(Collabora.#collaboraDocx)
			.contains(Collabora.#pdfDownloadText)
			.click();
		cy.wait(3000); // to wait for the file to be downloaded
	}
}

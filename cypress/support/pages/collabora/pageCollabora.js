export class Collabora {
	static #collaboraDocx = 'iframe[title="Office-Dokument Editor"]';
	static #collaboraSaveButton = "[id=save-button]";
	static fileButtonSelector = "button, a";
	static fileButtonText = "Datei";
	static writeDownloadButtonSelector = "button#downloadas-button";
	static readDownloadLinkSelector = "a";
	static pdfDownloadText = "PDF-Dokument (.pdf)";

	getIframeBody(selector) {
		return cy
			.get(selector, { timeout: 50 })
			.should("exist")
			.then(($iframe) => {
				return cy.wrap($iframe.contents().find("body"));
			});
	}

	seeCollaboraTextEditor() {
		this.getIframeBody(Collabora.#collaboraDocx).should("exist");
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
			.find(Collabora.fileButtonSelector)
			.contains(Collabora.fileButtonText)
			.click();
		// user with read access has id in the form of number and for edit permission has id in the text format.
		// Therefore, using the text "Datei" to find the element.
	}

	clickCollaboraDownloadButton() {
		this.getIframeBody(Collabora.#collaboraDocx).then(($body) => {
			// user with edit permission
			const writeButton = $body.find(Collabora.writeDownloadButtonSelector);
			if (writeButton.length) {
				cy.wrap(writeButton).click();
			} else {
				// user with read permission
				const readLink = $body
					.find(Collabora.readDownloadLinkSelector)
					.filter((i, el) =>
						el.textContent.trim().startsWith("Herunterladen als")
					);
				if (readLink.length) {
					cy.wrap(readLink).click();
				}
				// user with read access has id in the form of number and for edit permission has id in the text format.
				// Therefore, using the text "Herunterladen als" to find the element.
			}
		});
	}

	clickCollaboraPDFDownloadOption() {
		this.getIframeBody(Collabora.#collaboraDocx)
			.find("span, a")
			.contains(Collabora.pdfDownloadText)
			.click();
		cy.wait(3000); // to wait for the file to be downloaded
	}
}

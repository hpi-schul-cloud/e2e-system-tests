"use strict";

class GlobalAssertions {
	static #firstElementOfBreadcrumb = '[data-testid="breadcrumb-0"]';
	static #selectAllCheckboxInTableHeader = '[data-testid="select-all-checkbox"]';
	static #shareInfoPrefix = '[data-testid="share-info-';
	static #shareModalPrefix = '[data-testid="share-modal-';

	seeBreadcrumbContainsStrings(contentString) {
		// this line done following things:
		// - first remove brackets and quotes if passed
		// - second split into an array based on ", "
		// - and in the last trim spaces
		const contents = contentString
			.replace(/[\[\]"]/g, "")
			.split(", ")
			.map((opt) => opt.trim());
		contents.forEach((content) => {
			cy.get(GlobalAssertions.#firstElementOfBreadcrumb)
				.parent()
				.contains("li", content);
		});
	}

	checkSidebar(activePage) {
		cy.get(`[data-testid="sidebar-${activePage}"]`).should(
			"have.class",
			"v-list-item--active"
		);
	}

	checkElementWithDataTestIdExists(elementId) {
		cy.get(`[data-testid="${elementId}"]`).should("exist");
	}

	checkElementWithDataTestIdNotExists(elementId) {
		cy.get(`[data-testid="${elementId}"]`).should("not.exist");
	}

	checkStateOfHeaderCheckbox(checkboxState) {
		if (checkboxState == "mixed") {
			cy.get(GlobalAssertions.#selectAllCheckboxInTableHeader)
				.find("input")
				.should("have.attr", "aria-checked", "mixed");
		} else if (checkboxState == "checked") {
			cy.get(GlobalAssertions.#selectAllCheckboxInTableHeader)
				.find("input")
				.should("have.attr", "checked");
		} else {
			cy.get(GlobalAssertions.#selectAllCheckboxInTableHeader)
				.find("input")
				.should("not.have.attr", "checked");
			cy.get(GlobalAssertions.#selectAllCheckboxInTableHeader)
				.find("input")
				.should("not.have.attr", "aria-checked");
		}
	}

	checkMessagePoints(infoPointsArray, selectors) {
		infoPointsArray.forEach((point) => {
			const normalized = point.trim().toLowerCase();
			const selector = selectors[normalized];

			cy.get(selector).should("be.visible");
		});
	}

	checkShareModalMessagePoints(infoPoints) {
		const infoPointsArray = infoPoints.split(",").map((p) => p.trim().toLowerCase());
		const selectors = {};
		infoPointsArray.forEach((point, index) => {
			const content_module = point.replace(/\s+/g, "-");

			// First element always belongs to 'share-info', rest to 'share-modal'
			const selector =
				index === 0
					? `${GlobalAssertions.#shareInfoPrefix}${content_module}"]`
					: `${GlobalAssertions.#shareModalPrefix}${content_module}"]`;

			selectors[point] = selector;
		});
		this.checkMessagePoints(infoPointsArray, selectors);
	}
}

export default GlobalAssertions;

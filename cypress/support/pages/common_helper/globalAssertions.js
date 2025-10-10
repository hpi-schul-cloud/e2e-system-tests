"use strict";

class GlobalAssertions {
	static #firstElementOfBreadcrumb = '[data-testid="breadcrumb-0"]';
	static #selectAllCheckboxInTableHeader = '[data-testid="select-all-checkbox"]';

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
}

export default GlobalAssertions;

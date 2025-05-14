"use strict";

class GlobalAssertions {
	static #firstElementOfBreadcrumb = '[data-testid="breadcrumb-0"]';

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
			cy.get(GlobalAssertions.#firstElementOfBreadcrumb).parent().contains('li', content);
		});
	}

	checkSidebar(activePage) {
		cy.get(`[data-testid="sidebar-${activePage}"]`).should('have.class', 'v-list-item--active');
	}

	checkElementWithDataTestIdExists(elementId) {
		cy.get(`[data-testid="${elementId}"]`).should('exist');
	}

	checkElementWithDataTestIdNotExists(elementId) {
		cy.get(`[data-testid="${elementId}"]`).should('not.exist');
	}
}

export default GlobalAssertions;

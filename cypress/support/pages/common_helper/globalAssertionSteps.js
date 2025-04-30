"use strict";

class GlobalAssertionSteps {
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
			cy.get(GlobalAssertionSteps.#firstElementOfBreadcrumb).parent().contains('li', content);
		});
	}

	checkSidebar(activePage) {
		cy.get(`[data-testid="sidebar-${activePage}"]`).should('have.class', 'v-list-item--active');
	}
}

export default GlobalAssertionSteps;

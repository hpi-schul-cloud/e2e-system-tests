"use strict";

class CommonSteps {
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
			cy.get(CommonSteps.#firstElementOfBreadcrumb).parent().contains('li', content);
		});
	}
}

export default CommonSteps;

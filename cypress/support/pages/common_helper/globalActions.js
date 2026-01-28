"use strict";

class GlobalActions {
	static #headerCheckboxAllElements = '[data-testid="select-all-checkbox"]';
	static #tableSearchInput = '[data-testid="table-search"]';

	checkHeaderCheckboxForAllElements() {
		cy.get(GlobalActions.#headerCheckboxAllElements).find("div div input").check();
	}

	uncheckHeaderCheckboxForAllElements() {
		cy.get(GlobalActions.#headerCheckboxAllElements).find("div div input").uncheck();
	}

	clearTableSearch() {
		cy.get(GlobalActions.#tableSearchInput).find("div div div input").clear();
	}

	enterStringToTableSearch(searchString) {
		cy.get(GlobalActions.#tableSearchInput)
			.find("div div div input")
			.type(searchString);
	}

	clickElementWithDataTestId(elementId, nestedSelector = null) {
		const baseSelector = `[data-testid="${elementId}"]`;
		const fullSelector = nestedSelector
			? `${baseSelector} ${nestedSelector}`
			: baseSelector;
		cy.get(fullSelector).click();
	}

	clickBreadcrumbElement(breadcrumbElement) {
		cy.get("li").contains(breadcrumbElement).click();
	}

	goBackToPreviousPage() {
		cy.go("back");
	}
}

export default GlobalActions;

"use strict";

class GlobalActionSteps {
	static #headerCheckboxAllElements = '[data-testid="select-all-checkbox"]';
	static #tableSearchInput = '[data-testid="table-search"]';

	checkHeaderCheckboxForAllElements() {
		cy.get(GlobalActionSteps.#headerCheckboxAllElements)
		.find('div div input')
		.check();
	}

	uncheckHeaderCheckboxForAllElements() {
		cy.get(GlobalActionSteps.#headerCheckboxAllElements)
		.find('div div input')
		.uncheck();
	}

	clearTableSearch() {
		cy.get(GlobalActionSteps.#tableSearchInput)
		.find('div div div input')
		.clear();
	}

	enterStringToTableSearch(searchString) {
		cy.get(GlobalActionSteps.#tableSearchInput)
		.find('div div div input')
		.type(searchString);
	}
}

export default GlobalActionSteps;

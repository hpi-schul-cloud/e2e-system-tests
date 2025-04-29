"use strict";

class GlobalActions {
	static #headerCheckboxAllElements = '[data-testid="select-all-checkbox"]';
	static #tableSearchInput = '[data-testid="table-search"]';

	checkHeaderCheckboxForAllElements() {
		cy.get(GlobalActions.#headerCheckboxAllElements)
		.find('div div input')
		.check();
	}

	uncheckHeaderCheckboxForAllElements() {
		cy.get(GlobalActions.#headerCheckboxAllElements)
		.find('div div input')
		.uncheck();
	}

	clearTableSearch() {
		cy.get(GlobalActions.#tableSearchInput)
		.find('div div div input')
		.clear();
	}

	enterStringToTableSearch(searchString) {
		cy.get(GlobalActions.#tableSearchInput)
		.find('div div div input')
		.type(searchString);
	}
}

export default GlobalActions;

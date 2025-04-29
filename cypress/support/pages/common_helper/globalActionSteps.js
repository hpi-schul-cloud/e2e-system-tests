"use strict";

class GlobalActionSteps {
	static #headerCheckboxAllElements = '[data-testid="select-all-checkbox"]';

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
}

export default GlobalActionSteps;

"use strict";

class GlobalActions {
	static #headerCheckboxAllElements = '[data-testid="select-all-checkbox"]';
	static #tableSearchInput = '[data-testid="table-search"]';
	static #firstElementOfBreadcrumb = '[data-testid="breadcrumb-0"]';

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

	clickElementWithDataTestId(elementId) {
		cy.get(`[data-testid="${elementId}"]`).click();
	}

	clickBreadcrumbElement(breadcrumbElement) {
		//cy.get(GlobalActions.#firstElementOfBreadcrumb).parent().find('li').should('contain', breadcrumbElement).click();
		cy.get('li').contains(breadcrumbElement).click();
	}

}

export default GlobalActions;

"use strict";

class Help {
	static #helpSectionInSidebar = '[data-testid="Hilfeartikel"]';;
	static #helpPageTitle = '[id="page-title"]';
	static #helpFirstSteps = "#erste_schritte > .icon-card__content > .icon-card__title";
	static #helpLessons = '[id="Unterricht"]';
	static #helpOrganization = '[id="Organisation"]';
	static #helpNutzungshilfen = '[id="nutzungshilfen"]';
	static #helpContactform = "h2.h4";
	static #popUpLink = "https://lernen.cloud/";
	static #searchBar = '[data-testid="help_search_bar"]';
	static #searchResult = '[data-testid="help_search_results"]';
	static #bugFormSubject = '[data-testid="bug_headline"]';
	static #bugFormMail = '[data-testid="bug_email"]';
	static #bugFormSubmitButton = '[data-testid="bug_submit"]';
	static #feedbackSendConfirmation = '[data-testid="notification"]';
	static #helpOverviewNavigationButton = '[data-testid="Hilfebereich"]';
	static #helpArticlesNavigationButton = '[data-testid="Hilfeartikel"]';
	static #helpContactNavigationButton = '[data-testid="Kontakt"]';
	static #advancedTrainingsNavigationButton = 'a[title="Fortbildungen"]';
	static #selectProblemDropdown = "[data-testid=select-problem]";

	navigateToHelpSection() {
		cy.get(Help.#helpOverviewNavigationButton).click();
	}

	navigateToHelpArticles() {
		cy.get(Help.#helpSectionInSidebar).click();
		cy.url().should("include", "/help/articles");
	}

	navigateToHelpContact() {
		cy.get(Help.#helpContactNavigationButton).click();
		cy.url().should("include", "/help/contact");
	}

	navigateToAdvancedTrainings() {
		cy.get(Help.#advancedTrainingsNavigationButton).should(($a) => {
			//expect($a.attr("href"), "href").to.equal(Help.#popUpLink); -> is different on staging and main, so this is removed to have a stable test
			expect($a.attr("target"), "target").to.equal("_blank");
		});
	}

	seeHelpArticlesPage() {
		cy.get(Help.#helpPageTitle);
		cy.contains("Hilfeartikel");
		cy.get(Help.#helpFirstSteps);
		cy.contains("Erste Schritte");
		cy.get(Help.#helpLessons);
		cy.contains("Unterricht");
		cy.get(Help.#helpOrganization);
		cy.contains("Organisation");
		cy.get(Help.#helpNutzungshilfen);
		cy.contains("Nutzungshilfen");
	}

	seeHelpContactPage() {
		cy.get(Help.#helpPageTitle).contains("Kontakt");
		cy.get(Help.#helpContactform).contains("Kontaktformular");
	}

	enterKeywordInHelpArticlesSearchbar(search_term) {
		cy.get(Help.#searchBar).type(search_term);
	}

	fillOutContactForm(problem_option, subject, email) {
		cy.get(Help.#selectProblemDropdown).select(problem_option, { force: true });
		cy.get(Help.#bugFormSubject).type(subject);
		cy.wait(500);
		cy.get(Help.#bugFormMail).type(email);
	}

	seeHelpArticle(result_term) {
		cy.get(Help.#searchResult).contains(result_term);
	}

	sendFormToSupport() {
		cy.get(Help.#bugFormSubmitButton).click();
	}

	seeConfirmationFormSended(message) {
		cy.get(Help.#feedbackSendConfirmation).contains(message);
	}
}
export default Help;

"use strict";

class Help {
	static #helpSectionInSidebar = '[data-testid="Hilfeartikel"]';
	static #helpPageTitle = '[id="page-title"]';
	static #helpFirstSteps = "#erste_schritte > .icon-card__content > .icon-card__title";
	static #helpLessons = '[id="Unterricht"]';
	static #helpOrganization = '[id="Organisation"]';
	static #helpNutzungshilfen = '[id="nutzungshilfen"]';
	static #helpContactform = "h2.h4";
	static #searchBar = '[data-testid="help_search_bar"]';
	static #searchResult = '[data-testid="help_search_results"]';
	static #bugFormSubject = '[data-testid="bug_headline"]';
	static #bugFormMail = '[data-testid="bug_email"]';
	static #bugFormSubmitButton = '[data-testid="bug_submit"]';
	static #feedbackSendConfirmation = '[data-testid="notification"]';
	static #helpOverviewNavigationButton = '[data-testid="Hilfebereich"]';
	static #helpContactNavigationButton = '[data-testid="Kontakt"]';
	static #advancedTrainingsNavigationButton = 'a[title="Fortbildungen"]';
	static #selectProblemDropdown = "#problemAreaBug_chosen .chosen-search-input";
	static #selectDropDownOptions = ".chosen-drop .chosen-results";

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

	checkLinkToAdvancedTrainings(linkUrl) {
		cy.get(Help.#advancedTrainingsNavigationButton).should(($a) => {
			expect($a.attr("href"), "href").to.equal(linkUrl);
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
		cy.get(Help.#searchBar)
			.should("be.visible")
			.type(search_term, { delay: 50 })
			.should("have.value", search_term);
	}

	fillOutContactForm(problem_option, subject, email) {
		// Open a dropdown options
		cy.get(Help.#selectProblemDropdown).should("be.visible").click();

		// Select the desired option from the dropdown using its text
		cy.get(Help.#selectDropDownOptions)
			.contains(problem_option)
			.should("be.visible")
			.click();

		// Fill out the subject field
		cy.get(Help.#bugFormSubject)
			.should("be.visible")
			.type(subject)
			.should("have.value", subject);

		// Fill out the email field
		cy.get(Help.#bugFormMail)
			.should("be.visible")
			.type(email)
			.should("have.value", email);
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

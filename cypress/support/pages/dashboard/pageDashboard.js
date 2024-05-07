"use strict";

class Dashboard {
	static #initialsButton = '[data-testid="initials"]';
	static #languageMenu = "#language-menu";
	static #selectedLanguage = "#selected-language";
	static #listOfAllLanguages = "#available-languages";
	static #germanLanguage = '[data-testid="available-language-de"]';
	static #spanishLanguage = '[data-testid="available-language-es"]';
	static #ukrainianLanguage = '[data-testid="available-language-uk"]';
	static #englishLanguage = '[data-testid="available-language-en"]';
	static #getPageTitle = "#page-title";
	static #welcomeMessage = '[data-testid="welcome-section"]';
	static #dashboardTasksTitle = '[data-testid="dashboard-tasks-title"]';
	static #dashboardTaskCourseName = '[data-testid="task-course-name"]';
	static #dashboardTaskName = '[data-testid="task-name"]';
	static #pageTitle = '[data-testid="title_of_an_element"]';
	static #newsText = '[data-testid="body_of_element"]';
	static #newsSection = '[data-testid="news-section"]';
	static #dashboardLink = 'a[data-testid="Übersicht"]';

	static #testAssertionData = {
		german: "Deutsch",
		spanish: "Español",
		ukrainian: "Yкраїнська",
		english: "English",
		overviewInGerman: "Übersicht",
		overviewInSpanish: "Panel",
		overviewInUkrainian: "Панель керування",
		overviewInEnglish: "Dashboard",
	};

	assertNameInitialsIsVisible() {
		cy.get(Dashboard.#initialsButton).should("be.visible");
	}

	clickInitialsOfName() {
		cy.get(Dashboard.#initialsButton)
			.should("be.visible")
			.then(($btn) => {
				if ($btn.is(":disabled")) {
					cy.log("Button exists and is disabled!");
					return;
				} else {
					cy.log("Button exists and is enabled!");
					cy.wrap($btn).click();
				}
			});
	}

	clickLanguagesDropDownMenu() {
		cy.get(Dashboard.#languageMenu)
			.should("be.visible")
			.click()
			.then(() => {
				cy.get(Dashboard.#selectedLanguage).should("be.visible");
				cy.get(Dashboard.#listOfAllLanguages)
					.find("li")
					.each(($element) => {
						cy.get($element).should("have.prop", "value");
						cy.get($element).should("be.visible");
					});
			});
	}

	changeLanguage(language) {
		if (language === "german") {
			return this.selectLanguage(
				Dashboard.#germanLanguage,
				Dashboard.#testAssertionData.german
			);
		}

		if (language === "spanish") {
			return this.selectLanguage(
				Dashboard.#spanishLanguage,
				Dashboard.#testAssertionData.spanish
			);
		}

		if (language === "ukrainian") {
			return this.selectLanguage(
				Dashboard.#ukrainianLanguage,
				Dashboard.#testAssertionData.ukrainian
			);
		}

		return this.selectLanguage(
			Dashboard.#englishLanguage,
			Dashboard.#testAssertionData.english
		);
	}

	selectLanguage(sel, language) {
		return cy
			.contains(sel, language)
			.should("be.visible")
			.click()
			.then(() => cy.wait(["@alerts_api"]));
	}

	assertLanguageUpdate(updatedText) {
		cy.get(Dashboard.#getPageTitle).should("be.visible").should("exist");
		cy.contains(Dashboard.#dashboardLink, updatedText)
			.should("be.visible")
			.should("exist")
			.invoke("text")
			.then((elm) => {
				expect(elm.trim()).to.equal(updatedText.trim());
			});
	}

	verifyLanguageChanged(language) {
		if (language === "german") {
			return this.assertLanguageUpdate(Dashboard.#testAssertionData.overviewInGerman);
		}

		if (language === "spanish") {
			return this.assertLanguageUpdate(Dashboard.#testAssertionData.overviewInSpanish);
		}

		if (language === "ukrainian") {
			return this.assertLanguageUpdate(Dashboard.#testAssertionData.overviewInUkrainian);
		}

		return this.assertLanguageUpdate(Dashboard.#testAssertionData.overviewInEnglish);
	}

	arriveOnDashboard() {
		cy.visit("/dashboard");
		cy.url().should("include", "/dashboard");
		cy.get(Dashboard.#getPageTitle).should("exist");
	}

	seeSchoolNews(newsTitle, newsDesc) {
		cy.get(Dashboard.#newsSection).should("be.visible");
		cy.get(Dashboard.#pageTitle).contains(newsTitle);
		cy.get(Dashboard.#newsText).contains(newsDesc);
	}

	seeTeamsNews(newsTitle, newsDesc) {
		cy.get(Dashboard.#newsSection).should("be.visible");
		cy.get(Dashboard.#pageTitle).contains(newsTitle);
		cy.get(Dashboard.#newsText).contains(newsDesc);
	}

	seeWelcomeMessage(welcomeMsg) {
		cy.get(Dashboard.#welcomeMessage);
		cy.contains(welcomeMsg);
	}

	seeAssignedTasks(taskName, courseName) {
		cy.get(Dashboard.#dashboardTasksTitle).eq(0);
		cy.contains("Gestellte Aufgaben");
		cy.get(Dashboard.#dashboardTaskCourseName)
			.eq(0)
			.contains(courseName);
		cy.get(Dashboard.#dashboardTaskName).contains(taskName);
	}

	seeDraftTasks(draftName, courseName) {
		cy.get(Dashboard.#dashboardTasksTitle).eq(1);
		cy.contains("Entwürfe");
		cy.get(Dashboard.#dashboardTaskCourseName)
			.eq(0)
			.contains(courseName);
		cy.get(Dashboard.#dashboardTaskName).contains(draftName);
	}
}
export default Dashboard;

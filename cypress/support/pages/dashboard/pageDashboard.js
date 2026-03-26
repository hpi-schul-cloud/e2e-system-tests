"use strict";

class Dashboard {
	static #initialsButton = '[data-testid="user-menu-btn"]';
	static #languageMenu = "#v-list-group--id-languages";
	static #selectedLanguage = '[data-testid^="selected-language-"]';
	static #germanLanguage = '[data-testid="available-language-de"]';
	static #spanishLanguage = '[data-testid="available-language-es"]';
	static #ukrainianLanguage = '[data-testid="available-language-uk"]';
	static #englishLanguage = '[data-testid="available-language-en"]';
	static #getPageTitle = '[data-testid="dashboard-title"]';
	static #dashboardTasksTitle = '[data-testid="dashboard-tasks-title"]';
	static #dashboardTaskCourseName = '[data-testid="task-course-name"]';
	static #dashboardTaskName = '[data-testid="task-name"]';
	static #elementTitle = '[data-testid="title_of_an_element"]';
	static #newsText = '[data-testid="news-content"]';
	static #newsSection = "h2";
	static #dashboardLink = 'a[data-testid="sidebar-dashboard"]';

	static #testAssertionData = {
		german: "Deutsch",
		spanish: "Español",
		ukrainian: "Українська",
		english: "English",
		overviewInGerman: "Übersicht",
		overviewInSpanish: "Panel",
		overviewInUkrainian: "Панель керування",
		overviewInEnglish: "Dashboard",
	};

	assertNameInitialsIsVisible() {
		cy.get(Dashboard.#initialsButton).should("be.visible");
	}

	assertNameInitialsIsVisibleWithValue(initials) {
		cy.get(Dashboard.#initialsButton)
			.should("be.visible")
			.should("have.text", initials);
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
		cy.get(Dashboard.#languageMenu).should("be.visible").click();

		// read data-testid attribute of selected language element to determine which language is currently selected
		cy.get(Dashboard.#selectedLanguage)
			.should("be.visible")
			.then(($sel) => {
				const id = $sel.attr("data-testid") || "";
				const selCode = id.split("-").pop(); // de|en|uk|es

				const names = {
					de: Dashboard.#testAssertionData.german,
					en: Dashboard.#testAssertionData.english,
					uk: Dashboard.#testAssertionData.ukrainian,
					es: Dashboard.#testAssertionData.spanish,
				};

				// assert selected and available language items
				["de", "en", "uk", "es"].forEach((code) => {
					const selector =
						code === selCode
							? `[data-testid="selected-language-${code}"]`
							: `[data-testid="available-language-${code}"]`;

					cy.get(selector).should("be.visible").and("contain", names[code]);
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
		return cy.contains(sel, language).should("be.visible").click();
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
			return this.assertLanguageUpdate(
				Dashboard.#testAssertionData.overviewInGerman
			);
		}

		if (language === "spanish") {
			return this.assertLanguageUpdate(
				Dashboard.#testAssertionData.overviewInSpanish
			);
		}

		if (language === "ukrainian") {
			return this.assertLanguageUpdate(
				Dashboard.#testAssertionData.overviewInUkrainian
			);
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
		cy.get(Dashboard.#elementTitle).contains(newsTitle);
		cy.get(Dashboard.#newsText).contains(newsDesc);
	}

	seeTeamsNews(newsTitle, newsDesc) {
		cy.get(Dashboard.#newsSection).should("be.visible");
		cy.get(Dashboard.#elementTitle).contains(newsTitle);
		cy.get(Dashboard.#newsText).contains(newsDesc);
	}

	seeAssignedTasks(taskName, courseName) {
		cy.get(Dashboard.#dashboardTasksTitle).eq(0);
		cy.contains("Gestellte Aufgaben");
		cy.get(Dashboard.#dashboardTaskCourseName).eq(0).contains(courseName);
		cy.get(Dashboard.#dashboardTaskName).contains(taskName);
	}

	seeDraftTasks(draftName, courseName) {
		cy.get(Dashboard.#dashboardTasksTitle).eq(1);
		cy.contains("Entwürfe");
		cy.get(Dashboard.#dashboardTaskCourseName).eq(0).contains(courseName);
		cy.get(Dashboard.#dashboardTaskName).contains(draftName);
	}

	navigateToDashboard() {
		cy.get(Dashboard.#dashboardLink).click();
	}
}
export default Dashboard;

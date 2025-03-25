"use strict";

class News {
	static #elementTitle = '[data-testid="title_of_an_element"]';
	static #elementHeader = '[data-testid="header-of-element"]';
	static #pageTitle = '[id="page-title"]';
	static #enDateFormat = "en-CA";
	static #deDateFormat = "de-DE";
	static #newsText = '[data-testid="body_of_element"]';
	static #newsOverviewNavigationButton = '[data-testid="sidebar-news"]';
	static #createNewNews = '[data-testid="create-news-btn"]';
	static #newsTitleInput = '[data-testid="news_title"]';
	static #newsDescription = '[contenteditable="true"]';
	static #newsDateInput = '[data-testid="news_date"]';
	static #newsTimeInput = '[data-testid="news_time"]';
	static #newsCreateButton = '[data-testid="btn_news_submit"]';
	static #newsTitle = '[id="page-title"]';
	static #newsDescriptionVisible = '[class="ckcontent"]';
	static #newsName = '[data-testid="title_of_an_element"]';
	static #deleteNews = '[data-testid="btn-delete-news"]';
	static #deleteNewsConfirmation = '[data-testid="delete-article-btn"]';
	static #titlebarNewsOverviewPage = '[id="titlebar"]';
	static #newsContent = '[id="main-content"]';
	static #newsOverviewTabUnpublished = '[data-tab="b"]';

	doNotSeeNewsWhenNewsNotYetPublished(newsTitle) {
		cy.get("span", { timeout: 20000 }).then(($span) => {
			if ($span.find(News.#newsName)) {
				cy.contains(newsTitle).should("not.be.visible");
			} else {
				cy.contains(
					"Keine aktuellen Einträge vorhanden." || "Bisher gibt es keine News."
				).should("exist");
			}
		});
	}

	seeNewsWhenNewsNotYetPublished(newsTitle) {
		cy.get("span", { timeout: 20000 }).then(($span) => {
			cy.contains(newsTitle).should("be.visible");
		});
	}

	doNotSeeNews(newsTitle) {
		cy.get("span", { timeout: 20000 }).then(($span) => {
			if ($span.find(News.#newsName)) {
				cy.contains(newsTitle).should("not.exist");
			} else {
				cy.contains(
					"Keine aktuellen Einträge vorhanden." || "Bisher gibt es keine News."
				).should("exist");
			}
		});
	}

	clickOnTabUnpublishedNews() {
		cy.get(News.#newsOverviewTabUnpublished).click();
	}

	confirmDeletionOnDialogBox() {
		cy.get(News.#deleteNewsConfirmation).click();
	}

	clickOnDeleteNewsButton() {
		cy.get(News.#deleteNews).click();
	}

	openNewsDetailPage(newsName) {
		cy.get(News.#newsName).contains(newsName).click();
	}

	seeCreatedNews(newsTitle, newsDesc) {
		cy.get(News.#newsTitle).contains(newsTitle);
		cy.get(News.#newsDescriptionVisible).contains(newsDesc);
	}

	clickOnCreateNewsSaveButton() {
		cy.get(News.#newsCreateButton).click();
	}

	seeTimeInput() {
		cy.get(News.#newsTimeInput).should("exist");
	}

	seeDateInput() {
		cy.get(News.#newsDateInput).should("exist");
	}

	enterNewsDescription(newsDescription) {
		cy.get(News.#newsDescription, { timeout: 20000 })
			.focus()
			.wait(1000)
			.realType(newsDescription)
			.wait(500);
	}

	enterNewsTitle(newsTitle) {
		cy.get(News.#newsTitleInput, { timeout: 20000 }).type(newsTitle);
	}

	seeNewsCreationPage() {
		cy.wait("@news_new_api");
		cy.url().should("include", "/news/new");
		cy.get(News.#newsTitleInput).should("exist");
	}

	clickOnAddNews() {
		cy.get(News.#createNewNews).click();
	}

	navigateToNewsOverview() {
		cy.get(News.#newsOverviewNavigationButton).click();
		cy.url().should("include", "/news");
		cy.get(News.#titlebarNewsOverviewPage).should("exist");
	}

	seeNewsOnOverviewPage(titleOfNews, descriptionOfNews) {
		cy.get(News.#elementTitle).contains(titleOfNews).should("exist");
		cy.get(News.#newsText).contains(descriptionOfNews).should("exist");
	}

	seeNewsOnNewsDetailPage(titleOfNews, descriptionOfNews) {
		cy.get(News.#pageTitle).contains(titleOfNews).should("exist");
		cy.get(News.#newsContent).contains(descriptionOfNews).should("exist");
	}

	setNewsStartDate(newsStartDateDifference, newsStartTime) {
		if (newsStartDateDifference != "notselected") {
			const today = new Date();
			let startDate = new Date(today);
			let startTime;
			let startTimeText;
			let daysFromNow = parseInt(newsStartDateDifference);
			startDate.setDate(startDate.getDate() + daysFromNow);

			let startDateText = startDate.toLocaleString(News.#enDateFormat, {
				year: "numeric",
				day: "2-digit",
				month: "2-digit",
			});
			cy.get(News.#newsDateInput).eq(1).type(`${startDateText}`);

			if (newsStartTime === "currentTime") {
				startTime = new Date(today);
				startTimeText = startTime.toLocaleString(News.#deDateFormat, {
					hour: "2-digit",
					minute: "2-digit",
				});
			} else if (newsStartTime === "+2minutes") {
				startTime = new Date(today);
				startTime.setMinutes(startTime.getMinutes() + 2);
				startTimeText = startTime.toLocaleString(News.#deDateFormat, {
					hour: "2-digit",
					minute: "2-digit",
				});
			} else {
				startTimeText = newsStartTime;
			}
			cy.get(News.#newsTimeInput).eq(1).type(`${startTimeText}`);
		}
	}

	seeNewsTimeInfoOnNewsDetailPage(newsTimeInfo) {
		if (newsTimeInfo === "vor ein") {
			cy.get(News.#newsContent).contains(newsTimeInfo).should("exist");
		} else {
			let daysFromNow = parseInt(newsTimeInfo);
			let startDate = new Date();
			startDate.setDate(startDate.getDate() + daysFromNow);
			let newsDateInfo = startDate.toLocaleString(News.#deDateFormat, {
				year: "numeric",
				day: "2-digit",
				month: "2-digit",
			});
			cy.get(News.#newsContent).contains(newsDateInfo).should("exist");
		}
	}

	seeNewsTimeInfoOnOverviewPage(newsTimeInfo) {
		cy.get(News.#elementHeader).contains(newsTimeInfo).should("exist");
	}

	waitBeforeReload(timeInSeconds) {
		timeInSeconds = parseInt(timeInSeconds);
		cy.wait(timeInSeconds * 1000).reload();
	}
}
export default News;

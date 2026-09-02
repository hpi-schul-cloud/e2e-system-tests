"use strict";

class News {
	static #elementTitle =
		'[data-testid="news-title-0"]';
	static #elementHeader = '[data-testid="news-header-0"]';
	static #pageTitle = '[data-testid="news-title"]';
	static #enDateFormat = "en-CA";
	static #deDateFormat = "de-DE";
	static #newsText = '[data-testid="news-content"]';
	static #newsOverviewNavigationButton = '[data-testid="sidebar-news"]';
	static #createNewNews = '[data-testid="create-news-btn"] .v-btn';
	static #newsTitleInput = '[data-testid="news_title"]';
	static #newsDescription = '[contenteditable="true"]';
	static #newsDateInput = '[data-testid="news_date"]';
	static #newsTimeInput = '[data-testid="news_time"]';
	static #newsCreateButton = '[data-testid="btn_news_submit"]';
	static #newsTitle = '[data-testid="news-title"]';
	static #newsDescriptionVisible = '[data-testid="news-content"]';
	static #newsNameOnNewsOverview =
		'[data-testid="news-title-0"]';
	static #newsNameOnDashboard = '[data-testid="news-title-0"]';
	static #deleteNews = '[data-testid="news-delete-btn"]';
	static #deleteNewsConfirmation = '[data-testid="confirm-dialog-confirm"]';
	static #newsOverviewPageTitle = '[data-testid="news-overview-title"]';
	//static #newsMainContent = '[id="main-content"]';
	static #newsOverviewTabUnpublished = '[data-testid="unpublished-news-tab"]';
	static #inlineCkToolbar = '[data-cke-tooltip-text^="Link"]';
	static #newsContent = '[data-testid="news-content"]';
	static #pageTitleLegacy = '[id="page-title"]';
	static #ckBalloonPanelButton = ".ck-balloon-panel button";
	static #ckLabeledFieldViewInputWrapper = ".ck-labeled-field-view__input-wrapper";
	static #newsDetailPageHeader = "h1";
	static #newsTimeInfo = '[data-testid="news-last-touched"]';

	clickAddLinkInCKEditor() {
		cy.get(News.#inlineCkToolbar).realClick();
	}

	enterLinkInLinkAddressTool(linkUrl) {
		cy.contains(
			News.#ckLabeledFieldViewInputWrapper,
			/Linkadresse|Link address|Link URL/i
		)
			.find("input")
			.should("be.visible")
			.clear()
			.type(linkUrl);
	}

	clickSaveIconInCKEditor() {
		cy.contains(News.#ckBalloonPanelButton, /Save|Speichern/i).click();
	}

	doNotSeeNewsWhenNewsNotYetPublished(newsTitle) {
		cy.contains(News.#newsNameOnNewsOverview, newsTitle, { timeout: 20000 }).should(
			"not.exist"
		);
	}

	seeNewsWhenNewsNotYetPublished(newsTitle) {
		cy.contains(News.#newsNameOnNewsOverview, newsTitle, { timeout: 20000 }).should(
			"be.visible"
		);
	}

	doNotSeeNews(newsTitle) {
		cy.contains(News.#newsNameOnNewsOverview, newsTitle, { timeout: 20000 }).should(
			"not.exist"
		);
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
		const overviewSel = News.#newsNameOnNewsOverview;
		const dashSel = News.#newsNameOnDashboard;

		if (Cypress.$(overviewSel).length) {
			cy.contains(overviewSel, newsName).click();
		} else {
			cy.contains(dashSel, newsName).click();
		}
	}

	seeCreatedNews(newsTitle, newsDesc) {
		cy.get(News.#newsDetailPageHeader).should("contain.text", "Neuigkeit vom");
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
		cy.url().should("include", "/news/new");
		cy.get(News.#newsTitleInput).should("be.visible");
	}

	clickOnAddNews() {
		cy.get(News.#createNewNews).click();
	}

	navigateToNewsOverview() {
		cy.get(News.#newsOverviewNavigationButton).click();
		cy.url().should("include", "/news");
		cy.get(News.#newsOverviewPageTitle).should("be.visible");
	}

	seeNewsOnOverviewPage(titleOfNews, descriptionOfNews) {
		cy.get(News.#elementTitle).contains(titleOfNews).should("exist");
		cy.get(News.#newsText).contains(descriptionOfNews).should("exist");
	}

	seeNewsOnNewsDetailPage(titleOfNews, descriptionOfNews) {
		cy.get(News.#pageTitle).contains(titleOfNews).should("exist");
		cy.get(News.#newsContent).contains(descriptionOfNews).should("exist");
	}

	seeLinkUrlOnNewsDetailPage(linkUrl) {
		cy.get(News.#newsContent).contains(linkUrl).should("exist");
	}

	setNewsStartDate(newsStartDateDifference, newsStartTime) {
		// skip if date should not be changed
		if (newsStartDateDifference === "notselected") return;

		const now = new Date();

		// ----- date (DD.MM.YYYY) -----
		const daysFromNow = parseInt(newsStartDateDifference, 10) || 0;
		const startDate = new Date(now);
		startDate.setDate(startDate.getDate() + daysFromNow);

		const day = String(startDate.getDate()).padStart(2, "0");
		const month = String(startDate.getMonth() + 1).padStart(2, "0");
		const year = startDate.getFullYear();
		const startDateText = `${day}.${month}.${year}`;

		// set date via helper (vuetify inputs are controlled and don’t always react to .type())
		this.setVuetifyInputValue(News.#newsDateInput, startDateText);

		// ----- time -----
		let time = new Date(now);

		if (newsStartTime === "+2minutes") {
			time.setMinutes(time.getMinutes() + 2);
		}

		time.setSeconds(0, 0);

		const hh = String(time.getHours()).padStart(2, "0");
		const mm = String(time.getMinutes()).padStart(2, "0");

		const startTimeText =
			newsStartTime === "currentTime" || newsStartTime === "+2minutes"
				? `${hh}:${mm}`
				: newsStartTime;

		this.setVuetifyInputValue(News.#newsTimeInput, startTimeText);
	}

	setVuetifyInputValue(selector, value) {
		// vuetify uses Vue-controlled inputs.
		// direct DOM typing may not update the Vue model immediately, so the native setter is used and fire input/change events.

		cy.get(selector)
			.find("input")
			.then(($input) => {
				const input = $input[0];
				const setter = Object.getOwnPropertyDescriptor(
					window.HTMLInputElement.prototype,
					"value"
				).set;

				setter.call(input, value);
				input.dispatchEvent(new Event("input", { bubbles: true }));
				input.dispatchEvent(new Event("change", { bubbles: true }));
				input.dispatchEvent(new Event("blur", { bubbles: true }));
			});

		// ensure the UI reflects the value before continuing
		cy.get(selector).find("input").should("have.value", value);
	}

	seeNewsTimeInfoOnNewsDetailPage(newsTimeInfo) {
		const daysFromNow = parseInt(newsTimeInfo, 10);
		const targetSelector =
			daysFromNow === -7 ? News.#newsDetailPageHeader : News.#newsTimeInfo;

		if (newsTimeInfo === "vor ein") {
			cy.get(targetSelector).contains(newsTimeInfo).should("exist");
			return;
		}

		let startDate = new Date();
		startDate.setDate(startDate.getDate() + daysFromNow);
		let newsDateInfo = startDate.toLocaleString(News.#deDateFormat, {
			year: "numeric",
			day: "2-digit",
			month: "2-digit",
		});

		cy.get(targetSelector).contains(newsDateInfo).should("exist");
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

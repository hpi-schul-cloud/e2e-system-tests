const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import News from "../../pages/news/pageNews";

const news = new News();

When("I go to news overview", () => {
	news.navigateToNewsOverview();
});

When("I click on add news button", () => {
	news.clickOnAddNews();
});

Then("I see news creation page", () => {
	news.seeNewsCreationPage();
});

When("I enter news title {string}", (newsTitle) => {
	news.enterNewsTitle(newsTitle);
});

When("I enter news description {string}", (newsDescription) => {
	news.enterNewsDescription(newsDescription);
});

When("I see date input field", () => {
	news.seeDateInput();
});

When("I see time input field", () => {
	news.seeTimeInput();
});

When("I click on save button", () => {
	news.clickOnCreateNewsSaveButton();
});

Then(
	"I see news is created successfully with title {string} and with description {string}",
	(newsTitle, newsDesc) => {
		news.seeCreatedNews(newsTitle, newsDesc);
	}
);

When("I click on the news teaser {string}", (newsName) => {
	news.openNewsDetailPage(newsName);
});

When("I click on delete button", () => {
	news.clickOnDeleteNewsButton();
});

When("I confirm the deletion on confirmation dialog box", () => {
	news.confirmDeletionOnDialogBox();
});

Then("I do not see the news {string}", (newsName) => {
	news.doNotSeeNews(newsName);
});

Then("I do not see the unpublished news {string}", (newsName) => {
	news.doNotSeeNewsWhenNewsNotYetPublished(newsName);
});

When("I set news-visibility-start-date to {string} days at {string}", (newsDayDifference, newsTime) => {
	news.setNewsStartDate(newsDayDifference, newsTime);
});

When("I can see the publishing time info {string} on overview page", (newsTimeInfo) => {
	news.seeNewsTimeInfoOnOverviewPage(newsTimeInfo);
});

When("I can see the publishing time info {string} on news detail page", (newsTimeInfo) => {
	news.seeNewsTimeInfoOnNewsDetailPage(newsTimeInfo);
});

Then(
	"I can read the news {string} with description {string} on news detail page",
	(titleOfNews, descriptionOfNews) => {
		news.seeNewsOnNewsDetailPage(titleOfNews, descriptionOfNews);
	}
);

When("I wait {string} seconds and reload", (timeInSeconds) => {
	news.waitBeforeReload(timeInSeconds)
});

When("I click on tab for unpublished news", () => {
	news.clickOnTabUnpublishedNews()
});

Then("I see the unpublished news {string}", (newsTitle) => {
	news.seeNewsWhenNewsNotYetPublished(newsTitle)
});



const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Dashboard from "../../pages/dashboard/pageDashboard";
import News from "../../pages/news/pageNews";

const dashboard = new Dashboard();
const news = new News();

When("I click on the button Show All in the tasks section", () => {
	dashboard.clickShowAllTasksButtonOnDashboard();
});

Then("I see the tasks overview page", () => {
	dashboard.seeTasksOverviewPage();
});

When("I click on the button Show All in the news section", () => {
	dashboard.clickShowAllNewsButtonOnDashboard();
});

Then("I see the news overview page", () => {
	dashboard.seeNewsOverviewPage();
});

Then("I see the button Show All in the news section", () => {
	dashboard.seeShowAllNewsButtonOnDashboard();
});

Then("I see the button Show All in the tasks section", () => {
	dashboard.seeShowAllTasksButtonOnDashboard();
});

Then(
	"I see school news with title {string} and description {string}",
	(newsTitle, newsDesc) => {
		dashboard.seeSchoolNews(newsTitle, newsDesc);
	}
);

Then(
	"I see teams news with title {string} and description {string}",
	(newsTitle, newsDesc) => {
		dashboard.seeTeamsNews(newsTitle, newsDesc);
	}
);

Then(
	"I can see the assigned task {string} of course {string}",
	(taskName, courseName) => {
		dashboard.seeAssignedTasks(taskName, courseName);
	}
);

Then("I can see the draft task {string} of course {string}", (draftName, courseName) => {
	dashboard.seeDraftTasks(draftName, courseName);
});

Then("I do not see school news with title {string}", (schoolNewsTitle) => {
	news.doNotSeeNews(schoolNewsTitle);
});

Then("I do not see teams news with title {string}", (teamNewsTitle) => {
	news.doNotSeeNews(teamNewsTitle);
});

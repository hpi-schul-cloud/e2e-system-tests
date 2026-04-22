const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Topics from "../../pages/topics/pageTopics";

const topics = new Topics();

When("I click on the button Edit on topic page", () => {
	topics.clickOnButtonEditInTopicPage();
});

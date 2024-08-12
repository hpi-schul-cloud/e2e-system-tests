const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Help from "../../pages/help_section/pageHelpSection";

const help = new Help();

When("I click on Help Section in sidebar", () => {
	help.navigateToHelpSection();
});

When("I click on Help articles in sidebar", () => {
	help.navigateToHelpArticles();
});

When("I click on Contact in sidebar", () => {
	help.navigateToHelpContact();
});

const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Help from "../../pages/help_section/pageHelpSection";

const help = new Help();

// EXTERNAL COMMON STEP DEFINITIONS
// ================================
// External defined steps can be found here:
// -----------------------------------------
// -->\step_definition\authentication\loginStep.spec.js
// --> \step_definition\help_section\commonHelpSectionRelatedSteps.spec.js

//Scenario: Use the help area in the sidebar

Then("I see the help articles page", () => {
	help.seeHelpArticlesPage();
});

Then("I see the help contact page", () => {
	help.seeHelpContactPage();
});

//Scenario: Use the article search inside the help articles area

When("I enter keyword in search bar for help articles", () => {
	help.enterKeywordInHelpArticlesSearchbar();
});

Then("I see an help article related to my search", () => {
	help.seeHelpArticle();
});

//Scenario: Submit an issue via contact form inside help area

When("I fill out the contact form", () => {
	help.fillOutContactForm();
});

When("I click on button Submit to send form", () => {
	help.sendFormToSupport();
});

Then("I see confirmation for sended form", () => {
	help.seeConfirmationFormSended();
});

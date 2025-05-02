const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import GlobalActions from "../../pages/common_helper/globalActions";

const globalActions = new GlobalActions();

When("I check the checkbox in the table header for all elements", () => {
	globalActions.checkHeaderCheckboxForAllElements();
});

When("I uncheck the checkbox in the table header for all elements", () => {
	globalActions.uncheckHeaderCheckboxForAllElements();
});

When("I enter {string} to the table search field", (searchString) => {
	globalActions.enterStringToTableSearch(searchString);
});

When("I clear table search field", () => {
	globalActions.clearTableSearch();
});



const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import GlobalActionSteps from "../../pages/common_helper/globalActionSteps";

const globalActionSteps = new GlobalActionSteps();

When("I check the checkbox in the table header for all elements", () => {
	globalActionSteps.checkHeaderCheckboxForAllElements();
});

When("I uncheck the checkbox in the table header for all elements", () => {
	globalActionSteps.uncheckHeaderCheckboxForAllElements();
});

When("I enter {string} to the table search field", (searchString) => {
	globalActionSteps.enterStringToTableSearch(searchString);
});

When("I clear table search field", () => {
	globalActionSteps.clearTableSearch();
});



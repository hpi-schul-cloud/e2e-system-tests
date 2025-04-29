const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import GlobalActionSteps from "../../pages/common_helper/globalActionSteps";

const globalActionSteps = new GlobalActionSteps();

When("I check the checkbox in the table header for all elements", () => {
	globalActionSteps.checkHeaderCheckboxForAllElements();
});

When("I uncheck the checkbox in the table header for all elements", () => {
	globalActionSteps.uncheckHeaderCheckboxForAllElements();
});



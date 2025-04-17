const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import GlobalAssertionSteps from "../../pages/common_helper/globalAssertionSteps";

const globalAssertionSteps = new GlobalAssertionSteps();

Then("I see breadcrumb with {string}", (contentString) => {
	globalAssertionSteps.seeBreadcrumbContainsStrings(contentString);
});



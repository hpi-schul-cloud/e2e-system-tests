const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import GlobalAssertions from "../../pages/common_helper/globalAssertions";

const globalAssertions = new GlobalAssertions();

Then("I see breadcrumb with {string}", (contentString) => {
	globalAssertions.seeBreadcrumbContainsStrings(contentString);
});



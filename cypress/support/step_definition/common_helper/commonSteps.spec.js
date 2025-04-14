const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import CommonSteps from "../../pages/common_helper/commonSteps";

const commonSteps = new CommonSteps();

Then("I see breadcrumb with {string}", (contentString) => {
	commonSteps.seeBreadcrumbContainsStrings(contentString);
});



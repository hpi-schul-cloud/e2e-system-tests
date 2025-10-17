const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import GlobalAssertions from "../../pages/common_helper/globalAssertions";

const globalAssertions = new GlobalAssertions();

Then("I see breadcrumb with {string}", (contentString) => {
	globalAssertions.seeBreadcrumbContainsStrings(contentString);
});

Then("I see sidebar item {string} is highlighted", (itemName) => {
	globalAssertions.checkSidebar(itemName);
});

Then("I see state of table header checkbox is {string}", (checkboxState) => {
	globalAssertions.checkStateOfHeaderCheckbox(checkboxState);
});

Then("I see modal information {string} on {string}", (modalType, infoPoints) => {
	globalAssertions.checkModalMessagePoints(infoPoints, modalType);
});

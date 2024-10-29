const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Management from "../../pages/admin/pageAdministration";

const management = new Management();

When("I enter the initial generated password", () => {
	management.enterInitialPasswordAsStudentAfterRegistration();
});

Then("I see my first name {string}", (firstName) => {
	management.seeFirstNameOnREgistrationPage(firstName);
});

Then("I see my last name {string}", (lastName) => {
	management.seeLastNameOnREgistrationPage(lastName);
});

Then("I click on the button Generate Personal Registration Link", () => {
	management.clickOnGeneratePersonalRegistrationLink();
});

Then("I visit to the generated student registration link", () => {
	management.openAndVisitToStudentRegistrationPage();
});

When("I choose the language for the registration process", () => {
	management.chooseLanguageOnRegistrationProcess();
});

Then("I click on the button Next to proceed to the age selection", () => {
	management.clickOnNextForAgeSelection();
});

When("I select the age over 16 years for registration", () => {
	management.selectAgeOnRegistrationProcess();
});

Then(
	"I click on the button Next to proceed to the personal data information page",
	() => {
		management.clickOnNextToProcceedToPersonalRegistrationData();
	}
);

When("I click on the button Next to proceed to the next step", () => {
	management.clickOnNextOnRegistrationPage();
});

When("I accept the privacy and terms of use consents", () => {
	management.acceptingConsentOnRegistrationProcess();
});

Then("I click on the button Next to proceed to the registration pin step", () => {
	management.clickOnNextToProceedToRegistrationPinPage();
});

When("I request a new registration pin", () => {
	management.requestRegistrationPin();
});

Then(
	"I retrieve the registration pin to enter it into the form for {string}",
	(environment) => {
		management.retrieveAndEnterRegistrationPinViaApi(environment);
	}
);

Then(
	"I click on the button Send and Get Started to successfully complete the registration process",
	() => {
		management.clickOnSendAndGetStartedOnRegistration();
	}
);

Then("I see the page user data summary", () => {
	management.seeUserSummaryOnRegistrationFinalPage();
});

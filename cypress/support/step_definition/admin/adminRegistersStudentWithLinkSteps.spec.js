const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Management from "../../pages/admin/pageAdministration";

const management = new Management();

When("I enter the initial generated password", () => {
	management.enterInitialPasswordAsStudentAfterRegistration();
});

Then("I click on the button Generate Personal Registration Link for student", () => {
	management.generateRegistrationLinkForStudent();
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
		management.clickOnNextToProceedToPersonalRegistrationData();
	}
);

Then("I see the page user data summary", () => {
	management.seeUserSummaryOnRegistrationFinalPage();
});

const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Management from "../../pages/admin/pageAdministration";

const management = new Management();

When("I click on the button Next on the section 1", () => {
	management.clickOnNextOnSectionOneTeacherFirstLogin();
});
Then("I see my email", () => {
	management.seeTeacherEmailOnFisrtLoginSectionTwoPage();
});

When("I click on the button Next on the section 2", () => {
	management.clickOnNextOnSectionTwoTeacherFirstLogin();
});
When("I click on the button Get started right away on the section 3", () => {
	management.clickOnGetStartedOnSectionThreeTeacherFirstLogin();
});

When("I enter the set password", () => {
	management.enterNewSetPasswordAsTeacher();
});

Then("I see the summary page", () => {
	management.seeSummaryOnTeacherRegistration();
});

Then("I click on the button Next to proceed to next step", () => {
	management.clickOnNextButtonOnTecherRegistration();
});
Then(
	"I click again on the button Next to proceed to the personal data information page",
	() => {
		management.clickOnNextButtonOnTecherRegistration();
	}
);
Then("I set a new password on personal data page", () => {
	management.setNewPasswordAsTeacherOnRegistration();
});

Then("I click on the button Generate Personal Registration Link for teacher", () => {
	management.generateRegistrationLinkForTeacher();
});

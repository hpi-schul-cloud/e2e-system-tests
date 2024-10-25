const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Management from "../../pages/admin/pageAdministration";

const management = new Management();

Then("I see the summary page", () => {});

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

const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Management from "../../pages/admin/pageAdmin";
const management = new Management();

When("I click the toggle switch to disable students access to learning store", () => {
	management.clickToggleSwitchToDisableAccessToLearningStore();
});

When("I click the toggle switch to enable students access to learning store", () => {
	management.clickToggleSwitchToEnableAccessToLearningStore();
});

Then(
	"I see toggle switch to enable students access to learning store is unchecked",
	() => {
		management.assertStudentsAccessIsUnchecked();
	}
);

Then("I see toggle switch to enable students access to learning store is checked", () => {
	management.assertStudentsAccessIsChecked();
});

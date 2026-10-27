const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import UserConsent from "../../pages/common_helper/pageUserConsent";

const userConsent = new UserConsent();

When("I remember my own user id as student", () => {
	userConsent.rememberOwnUserIdAsStudent();
});

When("I set the consent {string} of the student in the student edit form", (caseName) => {
	userConsent.setStudentConsentAsAdmin(caseName);
});

When("I change my own language to {string} via API", (language) => {
	userConsent.changeOwnLanguageAsStudent(language);
});

Then(
	"I see the consent {string} of the student with consent status {string} via API",
	(caseName, expectedStatus) => {
		userConsent.verifyStudentConsentAsAdmin(caseName, expectedStatus);
	}
);

When("I remember the student data via API", () => {
	userConsent.rememberStudentAsAdmin();
});

Then("I see the remembered student data unchanged via API", () => {
	userConsent.verifyStudentUnchangedAsAdmin();
});

const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Login_Management from "../../pages/login_management/pageLoginManagement";

const loginManagement = new Login_Management();

// EXTERNAL COMMON STEP DEFINITIONS
// ================================
// External defined steps can be found here:
// -----------------------------------------
// --> \step_definition\login_management\commonLoginManagementRelatedSteps.spec.js

//Scenario: User sees password recovery dialog

Then("I see the Reset Password dialog", () => {
	loginManagement.showUpElementsOnDialog();
});

//Scenario: Entering email or user name is mandatory

When("I clear email section and submit the request", () => {
	loginManagement.submitRequestWithoutEmail();
});

Then("I still see the email input box that request is not submitted", () => {
	loginManagement.seeEmailInputOnSubmittingRequestWithoutEnteringEmail();
});

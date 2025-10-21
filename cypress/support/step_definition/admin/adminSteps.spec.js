const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Management from "../../pages/admin/pageAdministration";

const management = new Management();

Then("I see the context external tool configuration page", () => {
	toolConfiguration.seeContextExternalToolConfiguratorPage();
});

Then("I see the school external tool configuration page", () => {
	toolConfiguration.seeExternalToolConfiguratorPage();
});

Then("I see the school external tool configuration info text", () => {
	toolConfiguration.seeToolConfigurationInfoText();
});

When("I click on button Add in the modal to add an external tool", () => {
	toolConfiguration.saveExternalToolButton();
});

Then("I do not see tool {string} in the tool selection", (toolName) => {
	toolConfiguration.toolIsNotVisibleInToolSelection(toolName);
});

When("I select the tool {string} from available tools", (toolName) => {
	toolConfiguration.addExternalTool(toolName);
});

Then("I see tool {string} is selected", (toolName) => {
	toolConfiguration.seeSelectedExternalTool(toolName);
});

When("I insert the external tool link {string}", (toolLink) => {
	toolConfiguration.insertToolLink(toolLink);
});

When("I deactivate the tool", () => {
	toolConfiguration.deactivateTool();
});

When("I activate the tool", () => {
	toolConfiguration.activateTool();
});

Then("I see the deactivate checkbox is checked", () => {
	toolConfiguration.seeDeactivatedCheckBoxIsChecked();
});

Then("I see the deactivate checkbox is not checked", () => {
	toolConfiguration.seeDeactivatedCheckBoxIsNotChecked();
});

Then("I see an error alert", () => {
	toolConfiguration.seeToolErrorAlert();
});

When("I enter {string} in display name field", (toolName) => {
	toolConfiguration.fillInToolDisplayName(toolName);
});

When("I select {string} in required protected custom parameter selection", (value) => {
	toolConfiguration.selectProtectedCustomParameterOption(value);
});

When(
	"I enter {string} in required custom parameter field {string}",
	(value, paramName) => {
		toolConfiguration.fillInCustomParameter(paramName, value);
	}
);

When(
	"I enter {string} in optional custom parameter field {string}",
	(value, paramName) => {
		toolConfiguration.fillInCustomParameter(paramName, value);
	}
);

Then(
	"I see custom parameter input field {string} contains {string}",
	(paramName, value) => {
		toolConfiguration.seeCustomParameterFormContains(paramName, value);
	}
);

When("I click the cancel button on the tool configuration page", (paramName, value) => {
	toolConfiguration.clickCancelButton();
});

Then("I see the assigned date of birth for student in the table", () => {
	management.seeTheAssignedBirthDateInUserTable();
});

Then("I logout from the application", () => {
	management.logoutFromApplication();
});
Then("I see the page download access data with info table", () => {
	management.seeTheLastStepPageSummaryManualRegistration();
});

When("I enter the email assigned during user creation", () => {
	management.enterEmailOnFirstLogin();
});

When("I enter the password", () => {
	management.enterPasswordOnFirstLogin();
});

When("I click on the button Login", () => {
	management.clickOnLoginButtonForFirstLogin();
});

Then("I see the first login page section 1", () => {
	management.seeSectionOneFirstLoginPage();
});

When("I click on the button Next in section 1", () => {
	management.clickOnNextButtonOnFirstLoginSectionOne();
});

Then("I see the section 2", () => {
	management.seeSectionTwoFirstLoginPage();
});

When("I click on the button Next in section 2", () => {
	management.clickOnNextButtonOnFirstLoginSectionTwo();
});

Then("I see the section 3", () => {
	management.seeSectionThreeFirstLoginPage();
});

Then("I re enter the new password", () => {
	management.reEnterPasswordOnManualRegistration();
});

When("I click on the button Next to proceed", () => {
	management.clickOnNextButtonOnFirstLoginSectionThree();
});

Then("I set a new password", () => {
	management.setNewPasswordOnFirstLogin();
});

Then("I click on the button Get started now in section 4", () => {
	management.clickOnStartImmediateButtonOnFirstLoginSectionFour();
});

Then("I see the dashboard", () => {
	management.seeDashboardAfterFirstLogin();
});

When("I select student {string} with email {string}", (firstname, userEmail) => {
	management.selectStudentOnStudentOverview(firstname, userEmail);
});

When("I click on the button Actions", () => {
	management.clickOnActionsOnStudentOverview();
});

When("I click on the option Manual Registration", () => {
	management.clickOnManualRegistrationOption();
});

Then("I see the page Manual Registration", () => {
	management.seeManualRegistrationPage();
});

When("I clear the default assigned password", () => {
	management.clearDefaultPasswordInManualRegistration();
});

Then("I enter the initial password", () => {
	management.enterPasswordOnManualRegistration();
});

When("I click on the button Apply data", () => {
	management.clickOnApplyDataButton();
});

When("I click on the checkbox to confirm the consent", () => {
	management.clickOnConsentCheckBox();
});
When("I click on the button Register users", () => {
	management.clickOnRegisterUserButton();
});

When("I click on the button Abbrechen", () => {
	management.clickOnCancelButton();
});

When("I click on the button Trotzdem abbrechen on the confirmation modal", () => {
	management.clickOnCancelRegardlessOnModalButton();
});

Then("I am on the students management page", () => {
	management.beingOnStudentManagementOverview();
});

When("I navigate to the students management page", () => {
	management.navigateToStudentManagementOverview();
});

const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Management from "../../pages/admin/pageAdministration";
import ToolConfiguration from "../../pages/admin/pageToolConfiguration";

const toolConfiguration = new ToolConfiguration();
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

Then("I see the school number", () => {
	management.seeAddedSchoolNumber();
});

Then("I see button Start migration is enabled", () => {
	management.seeMigrationButtonIsEnabled();
});

When("I click on the start migration button", () => {
	management.clickStartMigration();
});

Then("I see the migration information text", () => {
	management.seeMigrationInformation();
});

Then("I see the migration school number information text", () => {
	management.seeMigrationSchoolNumberInformation();
});

Then("I see the email form with correct recipient", () => {
	management.checkSupportLink();
});

Then(/^I see the information link href is blog\.niedersachsen\.cloud\/umzug$/, () => {
	management.checkInfoLink();
});

When("I click on agree migration button", () => {
	management.clickAgreeMigrationButton();
});

Then("I see the migration is active field", () => {
	management.seeMigrationActiveTextInformation();
});

Then("I see the end migration button", () => {
	management.seeEndMigrationButtonIsEnabled();
});

When("I click on end migration button", () => {
	management.clickEndMigrationButton();
});

When("I click on the end migration confirmation checkbox", () => {
	management.clickEndMigrationConfirmationCheckbox();
});

When("I click on the end migration confirmation button", () => {
	management.clickEndMigrationConfirmationButton();
});

Then("I see the end of migration information title", () => {
	management.seeEndMigrationInformationTitle();
});

Then("I see the end of migration information text", () => {
	management.seeEndMigrationInformationText();
});

Then(
	/^I see the end migration information link href is blog\.niedersachsen\.cloud\/umzug$/,
	() => {
		management.seeEndMigrationInfoLink();
	}
);

Then("I see the end migration confirmation checkbox is unchecked", () => {
	management.seeEndMigrationConfirmationCheckboxIsUnchecked();
});

Then("I see the abort button for end of migration conformation", () => {
	management.seeEndMigrationAbortButton();
});

Then("I see the end migration confirmation button is disabled", () => {
	management.seeEndMigrationConfirmationButtonIsDisabled();
});

Then("I see the end migration confirmation button is enabled", () => {
	management.seeEndMigrationConfirmationButtonIsEnabled();
});

Then("I see the migration mandatory switch is not checked", () => {
	management.seeMigrationMandatorySwitch();
});

Then("I see the sync during migration switch is visible and not checked", () => {
	management.seeSyncDuringMigrationSwitchIsNotChecked();
});

Then("I see the sync during migration switch is checked", () => {
	management.seeSyncDuringMigrationSwitchIsChecked();
});

Then("I see the migration mandatory switch is checked", () => {
	management.seeMigrationMandatorySwitchIsChecked();
});

When("I check the migration mandatory switch", () => {
	management.checkMigrationMandatorySwitch();
});

When("I check the sync during migration switch", () => {
	management.checkSyncDuringMigrationSwitch();
});

When("I uncheck the sync during migration switch", () => {
	management.uncheckSyncDuringMigrationSwitch();
});

Then("I see the timestamp when the migration is finished", () => {
	management.seeMigrationFinishedTimestamp();
});

Then("I see the migration wizard button", () => {
	management.seeMigrationWizardButton();
});

Then("I see the show outdated users switch is visible and not checked", () => {
	management.seeShowOutdatedUsersSwitchIsNotChecked();
});

Then("I see the show outdated users switch is checked", () => {
	management.seeShowOutdatedUsersSwitchIsChecked();
});

When("I check the show outdated users switch", () => {
	management.checkShowOutdatedUsersSwitch();
});

When("I uncheck the show outdated users switch", () => {
	management.uncheckShowOutdatedUsersSwitch();
});

When("I click on delete external tool button", () => {
	management.clickDeleteExternalToolButton();
});

When("I click on cancel external tool deletion button", () => {
	management.clickCancelExternalToolDeletionButton();
});

Then("I see the external tools table", () => {
	management.seeExternalToolTable();
});

Then("I see the external tools table is empty", () => {
	management.seeEmptyExternalToolTable();
});

Then("I do not see the tool {string} in external tools table", (toolName) => {
	management.toolIsNotVisibleInExternalToolTable(toolName);
});

When("I click the add external tool button", () => {
	management.clickAddExternalTool();
});

Then("I see the tool {string} is active in tools table", (toolName) => {
	management.checkActivatedTool(toolName);
});

Then("I see the tool {string} is deactivated in external tools table", (toolName) => {
	management.checkDeactivatedTool(toolName);
});

Then("I see the external tool deletion dialog information text", () => {
	management.seeExternalToolDeletionDialogInfoText();
});

Then("I see the external tool deletion dialog title", () => {
	management.seeExternalToolDeletionDialogTitle();
});

Then("I see the tool {string} in external tools table", (toolname) => {
	management.seeExternalTool(toolname);
});

When("I click on edit button of tool {string}", (toolName) => {
	management.clickOnEditButton(toolName);
});

When("I click on delete button of tool {string}", (toolName) => {
	management.clickDeleteButtonOnTool(toolName);
});

When("I confirm deletion on deletion dialog", () => {
	management.clickOnConfirmInToolUsageDialog();
});

Then(
	"I see the tool {string} in external tools table has no context restriction",
	(toolName) => {
		management.seeToolHasNoContextRestriction(toolName);
	}
);

Then(
	"I see the tool {string} in external tools table has context restriction {string}",
	(toolName, contextRestriction) => {
		management.seeToolHasContextRestriction(toolName, contextRestriction);
	}
);

When("I click on authentication panel", () => {
	management.clickOnAuthenticationPanel();
});

Then("I see a systems table", () => {
	management.seeSystemTable();
});

Then(
	"I see system {string} of type {string} in the system table",
	(systemName, systemType) => {
		management.seeSystemInTable(systemName, systemType);
	}
);

When("I click on the edit button of system {string}", (systemName) => {
	management.clickEditButtonOfSystem(systemName);
});

Then("I see the provisioning options page", () => {
	management.seeProvisioningOptionsPage();
});

Then("I see 4 checkboxes with assigned default values", () => {
	management.seeCheckboxesWithDefaultValues();
});

When("I check all checkboxes", () => {
	management.checkAllBoxes();
});

When("I click the cancel button on the provisioning options page", () => {
	management.clickOnProvisioningOptionsCancelButton();
});

When("I click the save button on the provisioning options page", () => {
	management.clickOnProvisioningOptionsSaveButton();
});

Then("I see all 4 checkboxes are checked", () => {
	management.seeAllCheckboxesAreChecked();
});

When("I set the checkboxes to default values", () => {
	management.resetCheckboxValues();
});

When("I uncheck all checkboxes", () => {
	management.uncheckAllBoxes();
});

Then("I see a warning dialog", () => {
	management.seeDialog();
});

When("I confirm the dialog", () => {
	management.confirmDialog();
});

Then("I see all 4 checkboxes are unchecked", () => {
	management.seeAllCheckboxesAreUnchecked();
});

When("I visit the login page", () => {
	management.visitUrlForFirstLogin();
});

When(
	"I fill out the user creation form for {string} {string} with email {string}",
	(forename, surname, email) => {
		management.fillUserCreationForm(forename, surname, email);
	}
);

When("I click on add button to add {string}", (role) => {
	management.clickOnAddButton(role);
});

Then("I can see the user with email {string} in the table", (email) => {
	management.userIsVisibleInTable(email);
});

When("I enter {string} email {string} in search input field", (role, keyword) => {
	management.enterNameForSearch(role, keyword);
});

When("I change username to {string} {string}", (firstname, surname) => {
	management.changeUsername(firstname, surname);
});

When("I change email to {string}", (newEmail) => {
	management.changeEmail(newEmail);
});

When("I click save changes button", () => {
	management.clickSaveButton();
});

When("I click edit {string} button for {string}", (role, email) => {
	management.clickEditUserButton(role, email);
});

When("I click delete user button to delete user with last name {string}", (surname) => {
	management.deleteUser(surname);
});

When("I click on delete button in pop up", () => {
	management.clickUserDeleteButtonInModal();
});

Then("I can not see user {string} in the table", (email) => {
	management.userIsNotVisibleInTable(email);
});

When("I click delete user button", () => {
	management.clickDeleteButton();
});
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

When("I click on the button Next on the section 1", () => {
	management.clickOnNextOnSectionOneTeacherFirstLogin();
});
Then("I see my email", () => {
	management.seeEmailOnFirstLoginSectionTwoPage();
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
	management.clickOnNextButtonOnTeacherRegistration();
});
Then(
	"I click again on the button Next to proceed to the personal data information page",
	() => {
		management.clickOnNextButtonOnTeacherRegistration();
	}
);
Then("I set a new password on personal data page", () => {
	management.setNewPasswordAsTeacherOnRegistration();
});

Then("I click on the button Generate Personal Registration Link for teacher", () => {
	management.generateRegistrationLinkForTeacher();
});

Then("I see my assigned Email", () => {
	management.seeEmailOnFirstLoginSectionTwoPage();
});

When("I click on the button Change password", () => {
	management.clickOnChanagePasswordByAdmin();
});
Then("I see the pop-up window", () => {
	management.seeChangePasswordDialogForAdmin();
});
Then("I enter a new password in the pop-up window", () => {
	management.enterNewPasswordForUserByAdmin();
});
Then("I click on the button Save", () => {
	management.clickOnSaveAfterChangingPasswordByAdmin();
});
Then("I see the success message", () => {
	management.seeSuccessMessageAfterChangingPasswordByAdmin();
});

Then("I click on the button Next to proceed to the registration pin step", () => {
	management.clickOnNextToProceedToRegistrationPinPage();
});

Then(
	"I click on the button Send and Get Started to successfully complete the registration process",
	() => {
		management.clickOnSendAndGetStartedOnRegistration();
	}
);

Then(
	"I retrieve the registration pin to enter it into the form for {string}",
	(environment) => {
		management.retrieveAndEnterRegistrationPinViaApi(environment);
	}
);

When("I request a new registration pin", () => {
	management.requestRegistrationPin();
});

When("I accept the privacy and terms of use consents", () => {
	management.acceptingConsentOnRegistrationProcess();
});

When("I click on the button Next to proceed to the next step", () => {
	management.clickOnNextOnRegistrationPage();
});

When("I choose the language for the registration process", () => {
	management.chooseLanguageOnRegistrationProcess();
});

Then("I visit to the generated registration link", () => {
	management.openAndVisitToRegistrationPage();
});

Then("I see my first name {string}", (firstName) => {
	management.seeFirstNameOnRegistrationPage(firstName);
});

Then("I see my last name {string}", (lastName) => {
	management.seeLastNameOnRegistrationPage(lastName);
});

When("I click the toggle switch to enable student visibility for teachers", () => {
	management.enableStudentVisibilityForTeacher();
});

Then("I disable the video conference", () => {
	management.disableTeamsVideoConferenceByAdmin();
});

Then("I click on button Save admin settings", () => {
	management.clickOnAdminSettingsSave();
});

Then("I enable the video conference", () => {
	management.enableTeamsVideoConferenceByAdmin();
});

When("I navigate to new school admin page via sub menu", () => {
	management.clickOnSchoolAdministrationInSideMenu();
});

When("I click on administration in menu", () => {
	management.openAdministrationInMenu();
});

When("I click on general settings panel", () => {
	management.clickGeneralSettingsPanel();
});

When("I click on account migration panel", () => {
	management.clickAccountMigrationPanel();
});

When("I click on external tools panel", () => {
	management.clickExternalToolsPanel();
});

When("I click save general settings button", () => {
	management.clickSaveGeneralSettingsButton();
});

When("I go to {string} administration", (role) => {
	management.navigateToUserAdministration(role);
});

When("I go to team administration", () => {
	management.navigateToTeamAdministration();
});

When("I go to legacy course administration", () => {
	management.navigateToLegacyCourseAdministration();
});

When("I click on FAB", () => {
	management.clickOnFAB();
});

When("I click on Add User in opened FAB for {string}", (role) => {
	management.clickOnAddUserInFAB(role);
});

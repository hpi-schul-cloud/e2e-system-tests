"use strict";
import { getPageUrl } from "../../custom_commands/input.utils";

class Management {
	static #fabButton = "#fab";
	static #addStudentButton = '[data-testid="fab_button_add_students"]';
	static #addTeacherButton = '[data-testid="fab_button_add_teachers"]';
	static #firstNameCreationForm = '[data-testid="input_create-user_firstname"]';
	static #lastNameCreationForm = '[data-testid="input_create-user_lastname"]';
	static #emailCreationForm = '[data-testid="input_create-user_email"]';
	static #addButton = '[data-testid="button_create-user_submit"]';
	static #searchbar = '.core > [data-testid="searchbar"]';
	static #editStudentButton = '[data-testid="edit_student_button"]';
	static #firstNameEditForm = "input[name='firstName']";
	static #lastNameEditForm = "input[name='lastName']";
	static #emailEditForm = "input[id='email']";
	static #submitButton = '[data-testid="button_save_user"]';
	static #deleteButton = '[data-testid="button_delete_user"]';
	static #deleteUserButtonConfirmationOnModal =
		'[data-testid="submit-btn-delete-user-modal"]';
	static #newSchoolAdminPageButton = '[data-testid="button_new_admin_page"]';
	static #videoconferenceToggleSwitch = ".videoconference-switch";
	static #saveGeneralSettingsButton = ".my-5";
	static #tableContents = '[data-testid="table-data-body"]';
	static #schoolAdministrationNavigationSubMenu =
		'[data-testid="sidebar-management-school"]';
	static #saveGeneralAdminSetting = '[data-testid="save-general-setting"]';
	static #administrationOverviewNavigationButton = '[data-testid="sidebar-management"]';
	static #studentAdministrationNavigationButton =
		'[data-testid="sidebar-management-students"]';
	static #teacherAdministrationNavigationButton =
		'[data-testid="sidebar-management-teachers"]';
	static #courseAdministrationNavigationButton =
		'[data-testid="sidebar-management-courses"]';
	static #classAdministrationNavigationButton =
		'[data-testid="sidebar-management-classes"]';
	static #newClassAdministrationNavigationButton = '[data-testid="administrate_classes"]';
	static #teamAdministrationNavigationButton = '[data-testid="sidebar-management-teams"]';
	static #studentTeamCheckbox = '[data-testid="student_team_checkbox"]';
	// static #videoConferenceToggle = 'input[data-testid="toggle_video_conference"]'
	static #videoConferenceToggle =
		'[data-testid="toggle_video_conference"] .v-input__control input';
	static #learningStoreStudentAccessToggle =
		'[data-testid="admin-school-toggle-learning-store"] input';
	static #submitButtonTeamsAdmin = '[data-testid="button_save_team_administration"]';
	static #startMigrationButton = '[data-testid="migration-start-button"]';
	static #migrationInformationText = '[data-testid="text-description"]';
	static #migrationSchoolNumberInformationText = '[data-testid="migration-info-text"]';
	static #migrationWizardButton = '[data-testid="migration-wizard-button"]';
	static #migrationShowOutdatedUsersSwitch = '[data-testid="show-outdated-users-switch"]';
	static #agreeMigrationButton = '[data-testid="agree-btn"]';
	static #migrationEndButton = '[data-testid="migration-end-button"]';
	static #endMigrationConfirmationCheckbox =
		'[data-testid="migration-confirmation-checkbox"]';
	static #endMigrationConfirmationButton = '[data-testid="agree-btn"]';
	static #migrationActiveStatus = '[data-testid="migration-active-status"]';
	static #schoolNumberForm = '[data-testid="school-number"]';
	static #migrationTextSupportLink = '[data-testid="support-link"]';
	static #migrationTextBlogLink = '[data-testid="migration-blog-link"]';
	static #endMigrationAbortButton = '[data-testid="disagree-btn"]';
	static #endMigrationInformationTitle = '[data-testid="migration-warning-card-title"]';
	static #endMigrationInformationText =
		'[data-testid="migration-warning-card-info-text"]';
	static #endMigrationTextBlogLink =
		'[data-testid="end-warningcard-migration-blog-link"]';
	static #migrationMandatorySwitch = '[data-testid="migration-mandatory-switch"]';
	static #enableSyncDuringMigrationSwitch =
		'[data-testid="enable-sync-during-migration-switch"]';
	static #migrationFinishedTimestamp = '[data-testid="migration-finished-timestamp"]';
	static #generalSettingsPanel = '[data-testid="general-settings-panel"]';
	static #externalToolsPanel = '[data-testid="tools-panel"]';
	static #accountMigrationPanel = '[data-testid="migration-panel"]';
	static #externalToolsTable = '[data-testid="external-tool-section-table"]';
	static #editExternalToolButton = '[data-testId="editAction"]';
	static #deleteExternalToolButton = '[data-testId="deleteAction"]';
	static #confirmExternalToolDeletionButton = '[data-testid="delete-dialog-confirm"]';
	static #cancelExternalToolDeletionButton = '[data-testid="delete-dialog-cancel"]';
	static #externalToolDeletionDialogText = '[data-testid="delete-dialog-content-header"]';
	static #externalToolDeletionDialogTitle = '[data-testid="delete-dialog-title"]';
	static #systemPanel = '[data-testid="systems-panel"]';
	static #systemtable = '[data-testid="system-table"]';
	static #classOptionCheckbox = '[data-testid="checkbox-option-class"]';
	static #courseOptionCheckbox = '[data-testid="checkbox-option-course"]';
	static #othersOptionCheckbox = '[data-testid="checkbox-option-others"]';
	static #externalToolsOptionCheckbox =
		'[data-testid="checkbox-option-school-external-tools"]';
	static #saveProvisioningOptionsButton =
		'[data-testid="provisioning-options-save-button"]';
	static #cancelProvisioningOptionsButton =
		'[data-testid="provisioning-options-cancel-button"]';
	static #dialogTitle = '[data-testid="dialog-title"]';
	static #dialogConfirm = '[data-testid="dialog-confirm"]';
	static #addExternalToolButton = '[data-testid="add-external-tool-button"]';
	static #dataTable = '[data-testid="table_container"]';
	static #studentVisiblityToggle =
		'[data-testid="admin-school-toggle-student-visibility"]';
	static #buttonNewAdminPage = '[data-testid="button_new_admin_page"]';
	static #birthDateFieldCreateStudent = '[data-testid="input_create-student_birthdate"]';
	static #manualRegistrationSummaryPage = '[data-testid="consent_table_3"]';
	static #userPasswordLoginPage = '[data-testid="password-email"]';
	static #submitButtonOnLoginPage = '[data-testid="submit-login-email"]';
	static #sectionOneOnFirstLogin = '[data-panel="section-1"]';
	static #nextButtonFirstLogin = '[id="nextSection"]';
	static #sectionTwoOnFirstLogin = '[data-panel="section-2"]';
	static #sectionThreeOnFirstLogin = '[data-panel="section-3"]';
	static #getStartedFirstLoginButton = '[data-testid="btn_schul-cloud_erkunden"]';
	static #pageTitleOnDashboard = '[id="page-title"]';
	static #passwordInputFirstLogin = '[data-testid="firstlogin_password"]';
	static #reEnterPasswordInputFirstLogin = '[data-testid="firstlogin_password_control"]';
	static #actionButtonUserOverview = '[data-test-id="context-menu-open"]';
	static #manualRegitrationOption = '[data-testid="consent_action"]';
	static #breadcrumbManualRegistration = '[data-testid="breadcrumb-2"]';
	static #inputPasswordManualRegistrationStepOne = 'input[data-testid="password-input"]';
	static #applyDataManualRegistrationButton = '[data-testid="button-next"]';
	static #consentCheckboxManualRegistration = 'div[id="consent-checkbox"]';
	static #buttonRegisterUserOnManualPage = '[data-testid="button-next-2"]';
	static #searchBarUserOverview = 'input[data-testid="searchbar"]';
	static #buttonLoginViaEmailNbc = '[data-testid="submit-cloud-site"]';
	static #inputBoxUserEmailOnLoginPage = '[data-testid="username-email"]';
	static #userSummaryDiv = '[id = "userdata-summary"]';
	static #getStartedButtonOnRegistration = "button[id='nextSection']";
	static #pinInputField = "div[id='pinverification'] input[class='digit']";
	static #requestPinButton = "button[id='resend-pin']";
	static #pinSuccessMessage = "div[class*='alert-success']";
	static #courseAdminErrorAlert = '[data-testid="alert-text"]';
	static #nextButtonOnRegistration = "button[id='nextSection']";
	static #checkBoxPrivacyConsentRegistration = "input[name='privacyConsent']";
	static #checkBoxTermsOfUseConsentRegistration = "input[name='termsOfUseConsent']";
	static #nextButtonOnRegistrationFurtherStep = "button[id='nextSection']";
	static #nextButtonToPersonalRegistrationData = "button[id='showRegistrationForm']";
	static #ageSelectionBox = "input[id='reg-16']";
	static #nextButtonToAgeSelectionPage = "button[id='showAgeSelection']";
	static #languageSelectionBox = "div[id='language_chosen']";
	static #registrationLinkTextBox = "input[id='invitation-link']";
	static #generatePersonalLinkButton = '[data-testid="generate-registration-link"]';
	static #firstNameTextBoxOnRegistrationPage = "input[name='firstName']";
	static #lastNameTextBoxOnRegistrationPage = "input[name='lastName']";
	static #passwordTextBoxOneOnRegistration = "input[id='password']";
	static #passwordTextBoxTwoOnRegistration = "input[id='password-control']";
	static #nextButtonOnTeacherRegistration = "[id='nextSection']";
	static #summarySectionTeacherRegistration =
		'[data-testid="teacher-registration-summary"]';
	static #sectionOneButtonOnTeacherFirstLogin = '[data-testid="section-button-1"]';
	static #sectionTwoButtonOnTeacherFirstLogin = '[data-testid="section-button-2"]';
	static #sectionThreeButtonOnTeacherFirstLogin = '[data-testid="section-button-3"]';
	static #emailOnSectionTwoFirstLogin = '[id="email"]';
	static #getStartedImmediateButtonTeacherFirstLogin =
		'[data-testid="btn_schul-cloud_erkunden"]';
	static #initialPasswordTextOnStudentRegistration =
		'[data-testid="student-initial-password"]';
	static #tableExternalTool = "tbody tr.v-data-table-rows-no-data td";
	static #buttonChangePasswordUserSetting = '[data-testid="button-change-password"]';
	static #modalPasswordChangeUserSetting = '[data-testid="modal_content"]';
	static #inputBoxChangePasswordUserSetting = '[id="change_password"]';
	static #buttonSaveChangePasswordModalUserSetting =
		'[data-testid="submit-btn-change-password-modal"]';
	static #successNotificationChangePassword = '[data-testid="notification"]';
	static #externalToolStatus = '[data-testid="external-tool-status"]';
	static #externalToolContextRestriction =
		'[data-testid="external-tool-context-restriction"]';
	static #externalToolActions = '[data-testid="external-tool-actions"]';
	static #externalToolName = '[data-testid="external-tool-name"]';
	static #systemTableAlias = '[data-testid="system-table-alias"]';
	static #systemTableSystemType = '[data-testid="system-table-type"]';
	static #systemTableLoginLink = '[data-testid="system-table-login-link"]';
	static #systemTableButtonEdit = '[data-testid="system-table-button-edit"]';

	seeSuccessMessageAfterChangingPasswordByAdmin() {
		cy.get(Management.#successNotificationChangePassword).should("be.visible");
	}

	clickOnSaveAfterChangingPasswordByAdmin() {
		cy.get(Management.#buttonSaveChangePasswordModalUserSetting).click();
	}

	enterNewPasswordForUserByAdmin() {
		const userPassword = Cypress.env("INITIAL_PWD_BY_ADMIN");
		cy.get(Management.#inputBoxChangePasswordUserSetting)
			.should("exist")
			.and("be.visible")
			.and("not.be.disabled")
			.clear()
			.type(userPassword, { log: false, force: true })
			.should("have.value", userPassword);
	}

	seeChangePasswordDialogForAdmin() {
		cy.get(Management.#modalPasswordChangeUserSetting).should("be.visible");
	}

	clickOnChanagePasswordByAdmin() {
		cy.get(Management.#buttonChangePasswordUserSetting).click();
	}

	clickOnNextOnSectionOneTeacherFirstLogin() {
		cy.get(Management.#sectionOneButtonOnTeacherFirstLogin).should("be.visible");
		cy.get(Management.#nextButtonOnTeacherRegistration).click();
	}

	seeEmailOnFirstLoginSectionTwoPage() {
		cy.get("@uniqueEmail").then((uniqueEmail) => {
			cy.get(Management.#emailOnSectionTwoFirstLogin)
				.should("be.visible")
				.invoke("val")
				.then((inputValue) => {
					expect(inputValue).to.equal(uniqueEmail);
				});
		});
	}

	clickOnNextOnSectionTwoTeacherFirstLogin() {
		cy.get(Management.#sectionTwoButtonOnTeacherFirstLogin).should("be.visible");
		cy.get(Management.#nextButtonOnTeacherRegistration).click();
	}

	clickOnGetStartedOnSectionThreeTeacherFirstLogin() {
		cy.get(Management.#sectionThreeButtonOnTeacherFirstLogin).should("be.visible");
		cy.get(Management.#getStartedImmediateButtonTeacherFirstLogin).click();
	}

	seeSummaryOnTeacherRegistration() {
		cy.get(Management.#summarySectionTeacherRegistration).should("be.visible");
	}

	enterNewSetPasswordAsTeacher() {
		const manualPassword = Cypress.env("SET_NEW_PWD_BY_TEACHER");
		cy.get(Management.#userPasswordLoginPage).type(manualPassword, {
			log: false,
		});
	}

	clickOnNextButtonOnTeacherRegistration() {
		cy.get(Management.#nextButtonOnTeacherRegistration).click();
	}

	generateRegistrationLinkForTeacher() {
		cy.get(Management.#generatePersonalLinkButton).click();
	}

	setNewPasswordAsTeacherOnRegistration() {
		const setNewPassword = Cypress.env("SET_NEW_PWD_BY_TEACHER");
		cy.get(Management.#passwordTextBoxOneOnRegistration).type(setNewPassword, {
			log: false,
		});
		cy.get(Management.#passwordTextBoxTwoOnRegistration).type(setNewPassword, {
			log: false,
		});
	}

	seeUserSummaryOnRegistrationFinalPage() {
		cy.get(Management.#userSummaryDiv).should("be.visible");
		// Store the initial password as alias on the summary page for the first login in later step for the method enterInitialPasswordAsStudentAfterRegistration()
		cy.get(Management.#initialPasswordTextOnStudentRegistration)
			.should("exist")
			.and("not.be.empty")
			.invoke("text")
			.then((initialPwd) => {
				cy.log(`Initial password invoked from summary page: ${initialPwd}`);
				cy.wrap(initialPwd).as("initialStudentdPwd");
			});
	}

	enterInitialPasswordAsStudentAfterRegistration() {
		// Retrieve the stored password from the alias defined in the method seeUserSummaryOnRegistrationFinalPage()
		cy.get("@initialStudentdPwd").then((initialStudentdPwd) => {
			cy.get(Management.#userPasswordLoginPage).type(initialStudentdPwd, {
				log: false,
			});
		});
	}

	clickOnSendAndGetStartedOnRegistration() {
		cy.get(Management.#getStartedButtonOnRegistration).click();
	}

	retrieveAndEnterRegistrationPinViaApi(environment) {
		// Retrieve the unique email from the Cypress alias coming from the method fillUserCreationForm()
		cy.get("@uniqueEmail").then((uniqueEmail) => {
			// Make an API request to retrieve the registration pin
			cy.request({
				method: "GET",
				headers: {
					"X-API-KEY": Cypress.env(`apiKey-${environment}`),
				},
				// Construct the URL with the unique email
				url: getPageUrl(environment, `/admin/api/v1/registration-pin/${uniqueEmail}`),
			}).then(({ body }) => {
				// Check if the response is an array and is not empty
				expect(body).to.be.an("array").that.is.not.empty;
				// Extract the registration pin from the response
				const pin = body.pop().registrationPin.split("");
				// Enter each digit of the pin into the form input fields
				cy.get(Management.#pinInputField).each((el, index) => {
					cy.wrap(el).type(pin[index]);
				});
			});
		});
	}

	requestRegistrationPin() {
		cy.get(Management.#requestPinButton).click();
		cy.get(Management.#pinSuccessMessage).should("be.visible");
	}

	clickOnNextToProceedToRegistrationPinPage() {
		cy.get(Management.#nextButtonOnRegistration).click();
	}

	acceptingConsentOnRegistrationProcess() {
		if (Cypress.config().baseUrl.includes("dbc")) {
			cy.get(Management.#checkBoxPrivacyConsentRegistration).click();
			cy.get(Management.#checkBoxTermsOfUseConsentRegistration).click();
		}
	}

	clickOnNextOnRegistrationPage() {
		cy.get(Management.#nextButtonOnRegistrationFurtherStep).click();
	}

	clickOnNextToProceedToPersonalRegistrationData() {
		cy.get(Management.#nextButtonToPersonalRegistrationData).click();
	}

	selectAgeOnRegistrationProcess() {
		cy.get(Management.#ageSelectionBox).click();
	}

	clickOnNextForAgeSelection() {
		cy.get(Management.#nextButtonToAgeSelectionPage).click();
	}

	chooseLanguageOnRegistrationProcess() {
		cy.get(Management.#languageSelectionBox).click();
		cy.contains("li", "deutsch", { matchCase: false }).click(); // Select 'Deutsch' from the list
	}

	openAndVisitToRegistrationPage() {
		cy.get(Management.#registrationLinkTextBox)
			.should("be.visible")
			.invoke("val")
			.then((val) => {
				expect(val).to.be.a("string").and.not.to.be.empty;
				cy.clearCookies();
				cy.visit(val);
			});
	}

	generateRegistrationLinkForStudent() {
		cy.get(Management.#generatePersonalLinkButton).click();
	}

	seeFirstNameOnRegistrationPage(firstName) {
		cy.get(Management.#firstNameTextBoxOnRegistrationPage).should(
			"have.value",
			firstName
		);
	}

	seeLastNameOnRegistrationPage(lastName) {
		cy.get(Management.#lastNameTextBoxOnRegistrationPage).should("have.value", lastName);
	}

	logoutFromApplication() {
		cy.logout();
	}
	seeTheLastStepPageSummaryManualRegistration() {
		cy.get(Management.#manualRegistrationSummaryPage).should("be.visible");
	}

	visitUrlForFirstLogin() {
		cy.clearCookies();
		cy.visit("login");
	}

	enterPasswordOnFirstLogin() {
		const userPassword = Cypress.env("INITIAL_PWD_BY_ADMIN");
		cy.get(Management.#userPasswordLoginPage).type(userPassword, { log: false });
	}

	clickOnLoginButtonForFirstLogin() {
		cy.get(Management.#submitButtonOnLoginPage).click();
	}

	seeSectionOneFirstLoginPage() {
		cy.get(Management.#sectionOneOnFirstLogin).should("exist");
	}

	clickOnNextButtonOnFirstLoginSectionOne() {
		cy.get(Management.#nextButtonFirstLogin).click();
	}

	seeSectionTwoFirstLoginPage() {
		cy.get(Management.#sectionTwoOnFirstLogin).should("exist");
	}

	clickOnNextButtonOnFirstLoginSectionTwo() {
		cy.get(Management.#nextButtonFirstLogin).click();
	}

	clickOnNextButtonOnFirstLoginSectionThree() {
		cy.get(Management.#nextButtonFirstLogin).click();
	}

	seeSectionThreeFirstLoginPage() {
		cy.get(Management.#sectionThreeOnFirstLogin).should("exist");
	}

	clickOnStartImmediateButtonOnFirstLoginSectionFour() {
		cy.get(Management.#getStartedFirstLoginButton).click();
	}

	seeDashboardAfterFirstLogin() {
		cy.get(Management.#pageTitleOnDashboard).should("be.visible");
	}

	setNewPasswordOnFirstLogin() {
		const setNewPassword = Cypress.env("SET_NEW_PWD_BY_STUDENT");
		cy.get(Management.#passwordInputFirstLogin).type(setNewPassword, { log: false });
	}

	reEnterPasswordOnManualRegistration() {
		const reEnterPassword = Cypress.env("SET_NEW_PWD_BY_STUDENT");
		cy.get(Management.#reEnterPasswordInputFirstLogin).type(reEnterPassword, {
			log: false,
		});
	}

	clickOnActionsOnStudentOverview() {
		cy.get(Management.#actionButtonUserOverview).click();
	}

	clickOnManualRegistrationOption() {
		cy.get(Management.#manualRegitrationOption).click();
	}

	seeManualRegistrationPage() {
		cy.get(Management.#breadcrumbManualRegistration).should("be.visible");
	}

	seeNoErrorAlertInCourseAdministration() {
		cy.get(Management.#courseAdminErrorAlert).should("not.exist");
	}

	clearDefaultPasswordInManualRegistration() {
		cy.get(Management.#inputPasswordManualRegistrationStepOne).clear();
	}

	enterPasswordOnManualRegistration() {
		const manualPassword = Cypress.env("INITIAL_PWD_BY_ADMIN");
		cy.get(Management.#inputPasswordManualRegistrationStepOne).type(manualPassword, {
			log: false,
		});
	}
	clickOnApplyDataButton() {
		cy.get(Management.#applyDataManualRegistrationButton).click();
	}

	clickOnConsentCheckBox() {
		cy.get("body").then((body) => {
			if (body.find(Management.#consentCheckboxManualRegistration).length) {
				cy.get(Management.#consentCheckboxManualRegistration).click();
			} else {
				cy.log("No consent checkbox required on BRB and NBC");
			}
		});
	}

	clickOnRegisterUserButton() {
		cy.get(Management.#buttonRegisterUserOnManualPage).click();
	}

	clickOnCancelButton() {
		cy.contains("button", "abbrechen", { matchCase: false }).click();
	}

	clickOnCancelRegardlessOnModalButton() {
		cy.contains("button", "trotzdem abbrechen", {
			matchCase: false,
		}).click();
	}

	beingOnStudentManagementOverview() {
		cy.visit("/administration/students");
		cy.location("pathname").should("equal", "/administration/students");
	}

	navigateToStudentManagementOverview() {
		cy.visit("/administration/students");
		cy.location("pathname").should("equal", "/administration/students");
	}

	selectStudentOnStudentOverview(firstname, userEmail) {
		cy.get(Management.#searchBarUserOverview).clear();
		cy.get(Management.#searchBarUserOverview).type(firstname);
		cy.contains("tr", userEmail).find("svg").first().should("be.visible").click();
	}

	enableStudentVisibilityForTeacher() {
		cy.get(Management.#studentVisiblityToggle)
			.find("input")
			.check({ force: true })
			.wait(500);
		cy.get(Management.#studentVisiblityToggle)
			.find("input")
			.should("have.prop", "checked");
	}

	clickOnAdminSettingsSave() {
		cy.get(Management.#saveGeneralAdminSetting).click();
	}

	checkingToggleButtonStatus() {
		return cy.get(Management.#videoConferenceToggle).invoke("prop", "checked");
	}

	toggleTeamsVideoConferenceByAdmin(desiredState) {
		this.checkingToggleButtonStatus().then((toggleBtnStatus) => {
			toggleBtnStatus === desiredState
				? cy.log(`Element is already in the desired state, skipping click`)
				: cy.get(Management.#videoConferenceToggle).click({ force: true }).wait(500);
		});
		cy.get(Management.#videoConferenceToggle).should(
			"have.prop",
			"checked",
			desiredState
		);
	}

	enableTeamsVideoConferenceByAdmin() {
		this.toggleTeamsVideoConferenceByAdmin(true);
	}

	disableTeamsVideoConferenceByAdmin() {
		this.toggleTeamsVideoConferenceByAdmin(false);
	}

	clickOnSchoolAdministrationInSideMenu() {
		cy.get(Management.#schoolAdministrationNavigationSubMenu).first().click();
	}

	clickAllowStudentsTeamCheckbox() {
		cy.get(Management.#studentTeamCheckbox)
			.as("checkbox")
			.invoke("is", ":checked")
			.then((checked) => {
				if (checked) {
				} else {
					cy.get("@checkbox").check();
				}
			});
	}

	clickToggleSwitchToDisableAccessToLearningStore() {
		cy.get(Management.#learningStoreStudentAccessToggle).then((el) => {
			!el.is(":checked")
				? cy.log("Element is already unchecked, skipping click")
				: cy.get(Management.#learningStoreStudentAccessToggle).click({ force: true });
		});
	}

	clickToggleSwitchToEnableAccessToLearningStore() {
		cy.get(Management.#learningStoreStudentAccessToggle).then((el) => {
			el.is(":checked")
				? cy.log("Element is already checked, skipping click")
				: cy.get(Management.#learningStoreStudentAccessToggle).click({ force: true });
		});
	}

	assertStudentsAccessIsUnchecked() {
		cy.get(Management.#learningStoreStudentAccessToggle).should("not.be.checked");
	}

	assertStudentsAccessIsChecked() {
		cy.get(Management.#learningStoreStudentAccessToggle).should("be.checked");
	}

	clickSaveButtonToAllowStudentCreateTeam() {
		cy.get(Management.#submitButtonTeamsAdmin).eq(0).click();
	}

	seeStudentTeamsAllowed() {
		cy.get(Management.#studentTeamCheckbox).should("be.checked");
	}

	openAdministrationInMenu() {
		cy.get(Management.#administrationOverviewNavigationButton)
			.parent()
			.then(($element) => {
				if (!$element.hasClass("v-list-group--open")) {
					cy.get(Management.#administrationOverviewNavigationButton).click();
				}
			});
	}

	navigateToUserAdministration(role) {
		let navToUserManagementButton =
			role === "student"
				? Management.#studentAdministrationNavigationButton
				: Management.#teacherAdministrationNavigationButton;
		cy.get(navToUserManagementButton).click();
		let expectedURL = "/administration/" + role;
		cy.url().should("include", expectedURL);
	}

	navigateToLegacyCourseAdministration() {
		cy.get(Management.#administrationOverviewNavigationButton)
			.siblings()
			.find(Management.#courseAdministrationNavigationButton)
			.click();
		cy.url().should("include", "/administration/courses");
	}

	navigateToCourseAdministration() {
		cy.get(Management.#administrationOverviewNavigationButton)
			.siblings()
			.find(Management.#courseAdministrationNavigationButton)
			.click();
		cy.url().should("include", "/administration/rooms/new");
	}

	navigateToClassAdministration() {
		cy.get(Management.#classAdministrationNavigationButton).click();
		cy.url().should("include", "/administration/classes");
	}

	navigateToNewClassAdministration() {
		cy.get(Management.#classAdministrationNavigationButton).click();
		cy.url().should("include", "/administration/groups/classes");
	}

	navigateToTeamAdministration() {
		cy.get(Management.#teamAdministrationNavigationButton).click();
		cy.url().should("include", "/administration/teams");
	}

	clickGeneralSettingsPanel() {
		cy.get(Management.#generalSettingsPanel).click();
	}

	clickOnFAB() {
		cy.get(Management.#fabButton).click();
	}

	clickOnAddUserInFAB(role) {
		let addUserButtonInFAB =
			role === "student" ? Management.#addStudentButton : Management.#addTeacherButton;
		cy.get(addUserButtonInFAB).click({ force: true });
	}

	fillUserCreationForm(forename, surname, baseEmail) {
		const randomNumber = new Date().getTime() + Math.floor(Math.random() * 1000);
		const uniqueEmail = randomNumber + baseEmail;

		// Store the generated unique email as an alias for later use
		cy.wrap(uniqueEmail).as("uniqueEmail");

		// Log the generated unique email
		cy.log("Generated Unique Email:", uniqueEmail);

		// Fill in the form with the generated email and other details
		cy.get(Management.#firstNameCreationForm).type(forename);
		cy.get(Management.#lastNameCreationForm).type(surname);
		cy.get(Management.#emailCreationForm).type(uniqueEmail);

		// Setting the birth date to 17 years ago in the form
		cy.get("body").then((body) => {
			if (body.find(Management.#birthDateFieldCreateStudent).length) {
				// For Student
				const birthDate = new Date();
				birthDate.setFullYear(birthDate.getFullYear() - 17);
				cy.get(Management.#birthDateFieldCreateStudent).type(
					birthDate.toISOString().split("T")[0],
					100
				);
			} else {
				//For Teacher
				cy.log("Birthdate is not required while creating a new teacher");
			}
		});
	}

	enterEmailOnFirstLogin() {
		// Retrieve and use the same unique email assigned to the student during the user creation
		cy.get("@uniqueEmail").then((uniqueEmail) => {
			cy.get("body").then((body) => {
				if (body.find(Management.#buttonLoginViaEmailNbc).length) {
					// For NBC
					cy.get(Management.#buttonLoginViaEmailNbc).click();
					cy.get(Management.#inputBoxUserEmailOnLoginPage).type(uniqueEmail);
				} else {
					// For dBC/BRB
					cy.get(Management.#inputBoxUserEmailOnLoginPage).type(uniqueEmail);
				}
			});
		});
	}

	clickOnAddButton(role) {
		if (!(role == "student")) {
			cy.intercept("POST", "**/teachers").as("post_role_api");
			cy.intercept("GET", "**/teachers?**").as("get_roles_api");
		} else {
			cy.intercept("POST", "**/students").as("post_role_api");
			cy.intercept("GET", "**/students?**").as("get_roles_api");
		}
		cy.get(Management.#addButton).click();
		cy.wait(["@post_role_api", "@classes_api", "@get_roles_api"], {
			timeout: 10000,
		}).then((interceptions) => {
			expect(interceptions[0].response.statusCode).to.equal(201);
			expect(interceptions[1].response.statusCode).to.equal(200);
			expect(interceptions[2].response.statusCode).to.equal(200);
			expect(interceptions[2].request.url).to.include("/api/v3/users/admin");
		});
	}

	enterNameForSearch(role, keyword) {
		cy.reload();
		if (!(role == "student")) {
			cy.intercept("**/teachers?**").as("search_api");
		} else {
			cy.intercept("**/students?**").as("search_api");
		}
		cy.get(Management.#searchbar).clear();
		cy.get(Management.#searchbar).type(keyword);
		cy.wait("@search_api").its("response.statusCode").should("eq", 200);
	}

	clickEditUserButton(role, email) {
		let editUserButton = "edit_" + role + "_button";
		cy.contains("td", email)
			.siblings()
			.find("a")
			.should("have.attr", "data-testid", editUserButton)
			.click();
	}

	// clickEditTeacherButton(email) {
	// 	cy.contains("td", email)
	// 		.siblings()
	// 		.find("a")
	// 		.should("have.attr", "data-testid", "edit_teacher_button")
	// 		.click()
	// 		.wait(["@alerts_api"])
	// 		.then((interceptions) => {
	// 			expect(interceptions.response.statusCode).to.equal(200);
	// 		});
	// }

	changeUsername(firstname, surname) {
		cy.get(Management.#firstNameEditForm).clear();
		cy.get(Management.#firstNameEditForm).type(firstname);
		cy.get(Management.#lastNameEditForm).clear();
		cy.get(Management.#lastNameEditForm).type(surname);
	}

	changeEmail(newEmail) {
		let randomNumber = new Date().getTime() + Math.floor(Math.random() * 1000);
		cy.get(Management.#emailEditForm).clear();
		cy.get(Management.#emailEditForm).type(randomNumber + newEmail);
	}

	clickSaveButton() {
		cy.get(Management.#submitButton).eq(0).click();
	}

	deleteUser(lastName) {
		cy.get(Management.#lastNameEditForm)
			.should("have.value", lastName)
			.then(($matchEmail) => {
				this.clickDeleteButton();
			});
	}

	clickDeleteButton() {
		cy.get(Management.#deleteButton).click();
	}

	clickUserDeleteButtonInModal() {
		cy.get(Management.#deleteUserButtonConfirmationOnModal).click({
			multiple: true,
			force: true,
		});
	}

	clickNewAdminPageButton() {
		cy.get(Management.#newSchoolAdminPageButton).click();
		cy.url().should("include", "/administration/school-settings");
	}

	clickVideoConferenceToggleSwitch() {
		cy.intercept("**/federalStates/**").as("federalStates");
		cy.wait("@federalStates");
		cy.get(Management.#videoconferenceToggleSwitch).find("input").click({ force: true });
	}

	clickSaveGeneralSettingsButton() {
		cy.get(Management.#saveGeneralSettingsButton).click({
			multiple: true,
			force: true,
		});
	}

	userIsVisibleInTable(email) {
		cy.get(Management.#tableContents)
			.contains(email)
			.should("be.visible")
			.and("contain.text", email);
	}

	userIsNotVisibleInTable(email) {
		cy.get(Management.#searchbar).clear(Management.#searchbar);
		cy.get(Management.#tableContents).contains(email).should("not.exist");
	}

	seeAddedSchoolNumber() {
		cy.get(Management.#schoolNumberForm)
			.find("input")
			.should("be.disabled")
			.invoke("val")
			.should("not.be.empty");
	}

	seeMigrationButtonIsEnabled() {
		cy.get(Management.#startMigrationButton).should("be.enabled");
	}

	clickStartMigration() {
		cy.get(Management.#startMigrationButton).click();
	}

	seeMigrationInformation() {
		cy.get(Management.#migrationInformationText).should("be.visible");
	}

	seeMigrationSchoolNumberInformation() {
		cy.get(Management.#migrationSchoolNumberInformationText).should("be.visible");
	}

	checkSupportLink() {
		cy.get(Management.#migrationTextSupportLink)
			.invoke("attr", "href")
			.should("contain", "mailto:ticketsystem@niedersachsen.support");
	}

	checkInfoLink() {
		cy.get(Management.#migrationTextBlogLink).should(
			"have.attr",
			"href",
			"https://blog.niedersachsen.cloud/umzug"
		);
	}

	clickAgreeMigrationButton() {
		cy.get(Management.#agreeMigrationButton).click();
	}

	seeMigrationActiveTextInformation() {
		cy.get(Management.#migrationActiveStatus).should(
			"contain",
			"Die Account-Migration ist aktiv."
		);
	}

	seeEndMigrationButtonIsEnabled() {
		cy.get(Management.#migrationEndButton).should("be.visible").should("be.enabled");
	}

	clickEndMigrationButton() {
		cy.get(Management.#migrationEndButton).click();
	}

	clickEndMigrationConfirmationCheckbox() {
		cy.get(Management.#endMigrationConfirmationCheckbox)
			.find("input")
			.check({ force: true });
	}

	clickEndMigrationConfirmationButton() {
		cy.get(Management.#endMigrationConfirmationButton).click();
	}

	seeEndMigrationInformationTitle() {
		cy.get(Management.#endMigrationInformationTitle).should("be.visible");
	}

	seeEndMigrationInformationText() {
		cy.get(Management.#endMigrationInformationText).should("be.visible");
	}

	seeEndMigrationInfoLink() {
		cy.get(Management.#endMigrationTextBlogLink).should(
			"have.attr",
			"href",
			"https://blog.niedersachsen.cloud/umzug"
		);
	}

	seeEndMigrationConfirmationCheckboxIsUnchecked() {
		cy.get(Management.#endMigrationConfirmationCheckbox)
			.find("input")
			.should("not.be.checked");
	}

	seeEndMigrationAbortButton() {
		cy.get(Management.#endMigrationAbortButton).should("be.visible");
	}

	seeEndMigrationConfirmationButtonIsDisabled() {
		cy.get(Management.#endMigrationConfirmationButton)
			.should("be.visible")
			.should("be.disabled");
	}

	seeEndMigrationConfirmationButtonIsEnabled() {
		cy.get(Management.#endMigrationConfirmationButton)
			.should("be.visible")
			.should("be.enabled");
	}

	seeMigrationMandatorySwitch() {
		cy.get(Management.#migrationMandatorySwitch).find("input").should("not.be.checked");
	}

	seeMigrationMandatorySwitchIsChecked() {
		cy.get(Management.#migrationMandatorySwitch).find("input").should("be.checked");
	}

	seeSyncDuringMigrationSwitchIsNotChecked() {
		cy.get(Management.#enableSyncDuringMigrationSwitch)
			.find("input")
			.should("not.be.checked");
	}

	seeSyncDuringMigrationSwitchIsChecked() {
		cy.get(Management.#enableSyncDuringMigrationSwitch)
			.find("input")
			.should("be.checked");
	}

	seeShowOutdatedUsersSwitchIsNotChecked() {
		cy.get(Management.#migrationShowOutdatedUsersSwitch)
			.find("input")
			.should("not.be.checked");
	}

	seeShowOutdatedUsersSwitchIsChecked() {
		cy.get(Management.#migrationShowOutdatedUsersSwitch)
			.find("input")
			.should("be.checked");
	}

	checkShowOutdatedUsersSwitch() {
		cy.get(Management.#migrationShowOutdatedUsersSwitch)
			.find("input")
			.check({ force: true });
	}

	uncheckShowOutdatedUsersSwitch() {
		cy.get(Management.#migrationShowOutdatedUsersSwitch)
			.find("input")
			.uncheck({ force: true });
	}

	checkMigrationMandatorySwitch() {
		cy.get(Management.#migrationMandatorySwitch).find("input").check({ force: true });
	}

	checkSyncDuringMigrationSwitch() {
		cy.get(Management.#enableSyncDuringMigrationSwitch)
			.find("input")
			.check({ force: true });
	}

	uncheckSyncDuringMigrationSwitch() {
		cy.get(Management.#enableSyncDuringMigrationSwitch)
			.find("input")
			.uncheck({ force: true });
	}

	seeMigrationFinishedTimestamp() {
		cy.get(Management.#migrationFinishedTimestamp).and("be.visible");
	}

	seeMigrationWizardButton() {
		cy.get(Management.#migrationWizardButton).and("be.visible");
	}

	clickExternalToolsPanel() {
		cy.get(Management.#externalToolsPanel).click();
	}

	clickDeleteExternalToolButton() {
		cy.get(Management.#deleteExternalToolButton).first().click();
	}

	clickDeleteButtonOnTool(toolName) {
		cy.get(Management.#externalToolName)
			.contains(toolName)
			.parents("tr")
			.within(() => {
				cy.get(Management.#deleteExternalToolButton).should("be.visible").click();
			});
	}

	clickOnConfirmInToolUsageDialog() {
		cy.get(Management.#confirmExternalToolDeletionButton).click();
	}

	clickCancelExternalToolDeletionButton() {
		cy.get(Management.#cancelExternalToolDeletionButton).click();
	}

	seeExternalToolTable() {
		cy.get(Management.#externalToolsTable).scrollIntoView().should("be.visible");
	}

	seeEmptyExternalToolTable() {
		cy.get(Management.#externalToolsTable).within(() => {
			cy.get(Management.#tableExternalTool).should("have.text", "Keine Daten vorhanden");
		});
	}

	clickAddExternalTool() {
		cy.get(Management.#addExternalToolButton).scrollIntoView().should("be.visible");
		cy.get(Management.#addExternalToolButton).click();
	}

	checkActivatedTool(toolName) {
		cy.get(Management.#externalToolName)
			.contains(toolName)
			.parents("tr")
			.within(() => {
				cy.get(Management.#externalToolStatus).should("be.visible").contains("Aktuell");
			});
	}

	checkDeactivatedTool(toolName) {
		cy.get(Management.#externalToolName)
			.contains(toolName)
			.parents("tr")
			.within(() => {
				cy.get(Management.#externalToolStatus)
					.should("be.visible")
					.contains("Deaktiviert");
			});
	}

	seeExternalToolDeletionDialogTitle() {
		cy.get(Management.#externalToolDeletionDialogTitle).should("be.visible");
	}

	seeExternalToolDeletionDialogInfoText() {
		cy.get(Management.#externalToolDeletionDialogText).should("be.visible");
	}

	seeExternalTool(toolName) {
		cy.get(Management.#externalToolsTable).contains(toolName);
	}

	toolIsNotVisibleInExternalToolTable(toolName) {
		cy.get(Management.#externalToolsTable).contains(toolName).should("not.exist");
	}

	clickOnEditButton(toolName) {
		cy.get(Management.#externalToolName)
			.contains(toolName)
			.parents("tr")
			.within(() => {
				cy.get(Management.#editExternalToolButton).should("be.visible").click();
			});
	}

	seeToolHasNoContextRestriction(toolName) {
		cy.get(Management.#externalToolName)
			.contains(toolName)
			.parents("tr")
			.within(() => {
				cy.get(Management.#externalToolContextRestriction).should("have.text", "");
			});
	}

	seeToolHasContextRestriction(toolName, contextRestriction) {
		cy.get(Management.#externalToolName)
			.contains(toolName)
			.parents("tr")
			.within(() => {
				cy.get(Management.#externalToolContextRestriction).should(
					"have.text",
					contextRestriction
				);
			});
	}

	clickOnAuthenticationPanel() {
		cy.get(Management.#systemPanel).click();
	}

	seeSystemTable() {
		cy.get(Management.#systemtable).should("be.visible");
	}

	seeSystemInTable(systemName, systemType) {
		cy.get(Management.#systemTableAlias)
			.contains(systemName)
			.parents("tr")
			.within(() => {
				cy.get(Management.#systemTableSystemType).should("have.text", systemType);
			});
	}

	clickEditButtonOfSystem(systemName) {
		cy.get(Management.#systemTableAlias)
			.contains(systemName)
			.parents("tr")
			.within(() => {
				cy.get(Management.#systemTableButtonEdit).should("be.visible").click();
			});
	}

	seeProvisioningOptionsPage() {
		cy.url().should(
			"include",
			"/administration/school-settings/provisioning-options?systemId="
		);
	}

	seeCheckboxesWithDefaultValues() {
		cy.get("[type=checkbox]").should("have.length", 4);
		cy.get(Management.#classOptionCheckbox).find("input").should("be.checked");
		cy.get(Management.#courseOptionCheckbox).find("input").should("not.be.checked");
		cy.get(Management.#othersOptionCheckbox).find("input").should("not.be.checked");
		cy.get(Management.#externalToolsOptionCheckbox)
			.find("input")
			.should("not.be.checked");
	}

	checkAllBoxes() {
		cy.get(Management.#courseOptionCheckbox).find("input").check({ force: true });
		cy.get(Management.#othersOptionCheckbox).find("input").check({ force: true });
		cy.get(Management.#externalToolsOptionCheckbox).find("input").check({ force: true });
	}

	clickOnProvisioningOptionsCancelButton() {
		cy.get(Management.#cancelProvisioningOptionsButton).click();
	}

	clickOnProvisioningOptionsSaveButton() {
		cy.get(Management.#saveProvisioningOptionsButton).click();
	}

	seeAllCheckboxesAreChecked() {
		cy.get(Management.#classOptionCheckbox).find("input").should("be.checked");
		cy.get(Management.#courseOptionCheckbox).find("input").should("be.checked");
		cy.get(Management.#othersOptionCheckbox).find("input").should("be.checked");
		cy.get(Management.#externalToolsOptionCheckbox).find("input").should("be.checked");
	}

	resetCheckboxValues() {
		cy.get(Management.#classOptionCheckbox).find("input").check({ force: true });
		cy.get(Management.#courseOptionCheckbox).find("input").uncheck({ force: true });
		cy.get(Management.#othersOptionCheckbox).find("input").uncheck({ force: true });
		cy.get(Management.#externalToolsOptionCheckbox)
			.find("input")
			.uncheck({ force: true });
	}

	uncheckAllBoxes() {
		cy.get(Management.#classOptionCheckbox).find("input").uncheck({ force: true });
		cy.get(Management.#courseOptionCheckbox).find("input").uncheck({ force: true });
		cy.get(Management.#othersOptionCheckbox).find("input").uncheck({ force: true });
		cy.get(Management.#externalToolsOptionCheckbox)
			.find("input")
			.uncheck({ force: true });
	}

	seeDialog() {
		cy.get(Management.#dialogTitle).should("be.visible");
	}

	confirmDialog() {
		cy.get(Management.#dialogConfirm).click({ force: true });
	}

	seeAllCheckboxesAreUnchecked() {
		cy.get(Management.#classOptionCheckbox).should("not.be.checked");
		cy.get(Management.#courseOptionCheckbox).should("not.be.checked");
		cy.get(Management.#othersOptionCheckbox).should("not.be.checked");
		cy.get(Management.#externalToolsOptionCheckbox).should("not.be.checked");
	}

	clickAccountMigrationPanel() {
		cy.get(Management.#accountMigrationPanel).click();
	}

	schoolHasExternalTool(toolName) {
		return cy
			.get(Management.#externalToolsTable)
			.should("be.visible")
			.then(($table) => {
				if ($table.text().includes("Keine Daten vorhanden")) {
					return cy.wrap(false);
				}

				return cy.get(Management.#externalToolName).then(($names) => {
					const found = [...$names].some((el) => el.textContent.trim() === toolName);
					return cy.wrap(found);
				});
			});
	}

	deleteAllExternalTools() {
		cy.get(Management.#externalToolsTable).then(($table) => {
			if ($table.text().includes("Keine Daten vorhanden")) {
				return;
			}

			cy.get(Management.#externalToolName).each(($element) => {
				cy.wrap($element)
					.parents("tr")
					.within(() => {
						cy.get(Management.#deleteExternalToolButton).should("be.visible").click();
					});

				cy.get(Management.#confirmExternalToolDeletionButton).click();
			});

			cy.get(Management.#externalToolsTable).within(() => {
				cy.get(Management.#tableExternalTool).should(
					"have.text",
					"Keine Daten vorhanden"
				);
			});
		});
	}
}

export default Management;

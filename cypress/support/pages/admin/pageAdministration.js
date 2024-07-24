"use strict";

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
	static #chatToggleSwitch = ".rocketchat-switch";
	static #videoconferenceToggleSwitch = ".videoconference-switch";
	static #saveGeneralSettingsButton = ".my-5";
	static #tableContents = '[data-testid="table-data-body"]';
	static #schoolAdministrationNavigationSubMenu = '[data-testid="Schule"]';
	static #saveGeneralAdminSetting = '[data-testid="save-general-setting"]';
	static #administrationOverviewNavigationButton = '[data-testid="Verwaltung"]';
	static #studentAdministrationNavigationButton = '[data-testid="Schüler:innen"]';
	static #teacherAdministrationNavigationButton = '[data-testid="Lehrkräfte"]';
	static #courseAdministrationNavigationButton = '[data-testid="Kurse"]';
	static #classAdministrationNavigationButton = '[data-testid="Klassen"]';
	static #newClassAdministrationNavigationButton = '[data-testid="administrate_classes"]';
	static #teamAdministrationNavigationButton = '[data-testid="Teams"]';
	static #studentTeamCheckbox = '[data-testid="student_team_checkbox"]';
	// static #videoConferenceToggle = 'input[data-testid="toggle_video_conference"]'
	static #videoConferenceToggle =
		'[data-testid="toggle_video_conference"] .v-input__control input';
	static #learningStoreStudentAccessToggle =
		'[data-testid="admin-school-toggle-learning-store"] input';
	static #submitButtonTeamsAdmin = '[data-testid="button_save_team_administration"]';
	static #startMigrationButton = '[data-testid="migration-start-button"]';
	static #migrationInformationText = '[data-testid="text-description"]';
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
	static #externalToolConfigInfotext = '[data-testid="tool-configuration-infotext"]';
	static #externalToolConfigPageTitle =
		'[data-testid="school-external-tool-configurator-title"]';
	static #toolConfigurationSelectedItem = '[data-testid="configuration-selected-item"]';
	static #toolConfigurationSelectItem = '[data-testId="configuration-select-item"]';
	static #toolErrorAlert = '[data-testId="tool-error-alert"]';
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
	static #saveProvisioningOptionsButton =
		'[data-testid="provisioning-options-save-button"]';
	static #cancelProvisioningOptionsButton =
		'[data-testid="provisioning-options-cancel-button"]';
	static #dialogTitle = '[data-testid="dialog-title"]';
	static #dialogConfirm = '[data-testid="dialog-confirm"]';
	static #addExternalToolButton = '[data-testid="add-external-tool-button"]';
	static #toolSelection = '[data-testid="configuration-select"]';
	static #addExternalToolSaveButton = '[data-testid="save-button"]';
	static #isDeactivatedCheckBox = '[data-testid="configuration-deactivate-checkbox"]';
	static #dataTable = '[data-testid="table_container"]';
	static #studentVisiblityToggle =
		'[data-testid="admin-school-toggle-student-visibility"]';
	static #toolConfiguration = '[data-testid="configuration-field"]';

	enableStudentVisibilityForTeacher() {
		cy.get(Management.#studentVisiblityToggle).click({ force: true }).wait(500);
		cy.get(Management.#studentVisiblityToggle).should("have.prop", "checked");
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
		cy.get(Management.#schoolAdministrationNavigationSubMenu).click();
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
		cy.get(Management.#administrationOverviewNavigationButton).click();
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

	navigateToCourseAdministration() {
		cy.get(Management.#courseAdministrationNavigationButton).click();
		cy.url().should("include", "/administration/courses");
	}

	navigateToClassAdministration() {
		cy.get(Management.#classAdministrationNavigationButton).click();
		cy.url().should("include", "/administration/classes");
	}

	navigateToNewClassAdministration() {
		cy.get(Management.#newClassAdministrationNavigationButton).click();
		cy.url().should("include", "/administration/groups/classes");
	}

	navigateToTeamAdministration() {
		cy.get(Management.#teamAdministrationNavigationButton).eq(1).click();
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

	fillUserCreationForm(forename, surname, email) {
		let randomNumber = new Date().getTime() + Math.floor(Math.random() * 1000);
		cy.get(Management.#firstNameCreationForm).type(forename);
		cy.get(Management.#lastNameCreationForm).type(surname);
		cy.get(Management.#emailCreationForm).type(randomNumber + email);
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

	clickChatToggleSwitch() {
		cy.intercept("**/federalStates/**").as("federalStates");
		cy.wait("@federalStates");
		cy.get(Management.#chatToggleSwitch).find("input").click({ force: true });
	}

	seeAddedSchoolNumber() {
		cy.get(Management.#schoolNumberForm).should("be.disabled");
	}

	seeMigrationButtonIsEnabled() {
		cy.get(Management.#startMigrationButton).should("be.enabled");
	}

	clickStartMigration() {
		cy.get(Management.#startMigrationButton).click();
	}

	seeVisibleMigrationInformation() {
		cy.get(Management.#migrationInformationText).should("be.visible");
	}

	checkSupportLink() {
		cy.get(Management.#migrationTextSupportLink)
			.invoke("attr", "href")
			.should("contain", "mailto:nbc-support@netz-21.de");
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
		cy.get(Management.#migrationEndButton).should("be.enabled");
	}

	clickEndMigrationButton() {
		cy.get(Management.#migrationEndButton).click();
	}

	clickEndMigrationConfirmationCheckbox() {
		cy.get(Management.#endMigrationConfirmationCheckbox).check({ force: true });
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

	checkEndMigrationInfoLink() {
		cy.get(Management.#endMigrationTextBlogLink).should(
			"have.attr",
			"href",
			"https://blog.niedersachsen.cloud/umzug"
		);
	}

	seeEndMigrationConfirmationCheckboxIsUnchecked() {
		cy.get(Management.#endMigrationConfirmationCheckbox).should("not.be.checked");
	}

	seeEndMigrationAbortButton() {
		cy.get(Management.#endMigrationAbortButton).should("be.visible");
	}

	seeEndMigrationConfirmationButtonIsDisabled() {
		cy.get(Management.#endMigrationConfirmationButton).should("be.disabled");
	}

	seeEndMigrationConfirmationButtonIsEnabled() {
		cy.get(Management.#endMigrationConfirmationButton).should("be.enabled");
	}

	seeMigrationMandatorySwitch() {
		cy.get(Management.#migrationMandatorySwitch).should("not.be.checked");
	}

	seeMigrationMandatorySwitchIsChecked() {
		cy.get(Management.#migrationMandatorySwitch).should("be.checked");
	}

	seeSyncDuringMigrationSwitchIsNotChecked() {
		cy.get(Management.#enableSyncDuringMigrationSwitch).should("not.be.checked");
	}

	seeSyncDuringMigrationSwitchIsChecked() {
		cy.get(Management.#enableSyncDuringMigrationSwitch).should("be.checked");
	}

	toggleMigrationMandatorySwitch() {
		cy.get(Management.#migrationMandatorySwitch).click();
	}

	toggleSyncDuringMigrationSwitch() {
		cy.get(Management.#enableSyncDuringMigrationSwitch).click();
	}

	seeMigrationFinishedTimestamp() {
		cy.get(Management.#migrationFinishedTimestamp).and("be.visible");
	}

	clickExternalToolsPanel() {
		cy.get(Management.#externalToolsPanel).click();
	}

	clickDeleteExternalToolButton() {
		cy.get(Management.#deleteExternalToolButton).first().click();
	}

	clickDeleteButtonOnTool(toolName) {
		cy.get(Management.#externalToolsTable).contains(toolName);
		const toolData = cy.get(Management.#externalToolsTable).find("td").contains(toolName);

		toolData
			.parent("td")
			.siblings("td")
			.find(Management.#deleteExternalToolButton)
			.should("exist")
			.click();
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
		cy.get(Management.#externalToolsTable).should("not.exist");
	}

	seeExternalToolConfigurationPage() {
		cy.url().should("include", "/administration/school-settings/tool-configuration");
	}

	seeToolConfigurationInfoText() {
		cy.get(Management.#externalToolConfigInfotext).should("be.visible");
	}

	seeExternalToolConfiguratorPageTitle() {
		cy.get(Management.#externalToolConfigPageTitle).should("exist");
	}

	seeSelectedExternalTool(toolName) {
		cy.get(Management.#toolConfigurationSelectedItem).should("contain.text", toolName);
	}

	seeCustomParameterFormContains(paramName, value) {
		cy.get(`[data-testid="${paramName}"]`).find("input").should("have.value", value);
	}

	fillInCustomParameter(paramName, value) {
		cy.get(`[data-testid="${paramName}"]`).find("input").clear().type(value);
	}

	insertToolLink(toolLink) {
		cy.get(Management.#toolSelection).click().type(toolLink);
		cy.get(Management.#toolConfigurationSelectItem).contains("OpenStreetMap").click();
	}

	checkConfiguration(key, value) {
		cy.get(Management.#toolConfiguration)
			.get(`[data-testid="${key}"] input`)
			.should("have.value", value);
	}

	externalToolIsNotVisibleInToolSelection(toolName) {
		cy.get(Management.#toolSelection).click();
		cy.get(Management.#toolConfigurationSelectItem)
			.contains(toolName)
			.should("not.exist");
	}

	seeToolErrorAlert() {
		cy.get(Management.#toolErrorAlert).should("be.visible");
	}

	seeDeactivatedCheckBox(value) {
		cy.get(Management.#isDeactivatedCheckBox).should("be.visible");
	}

	seeDeactivatedCheckBoxIsChecked(value) {
		cy.get(Management.#isDeactivatedCheckBox)
			.find('input[type="checkbox"]')
			.should("be.checked");
	}

	seeDeactivatedCheckBoxIsNotChecked() {
		cy.get(Management.#isDeactivatedCheckBox)
			.find('input[type="checkbox"]')
			.should("not.be.checked");
	}

	clickAddExternalTool() {
		cy.get(Management.#addExternalToolButton).scrollIntoView().should("be.visible");
		cy.get(Management.#addExternalToolButton).click();
	}

	addExternalTool(toolName) {
		cy.get(Management.#toolSelection).click();
		cy.get(Management.#toolConfigurationSelectItem).contains(toolName).click();
	}

	deactivateTool() {
		cy.get(Management.#isDeactivatedCheckBox)
			.find('input[type="checkbox"]')
			.check({ force: true });
	}

	activateTool() {
		cy.get(Management.#isDeactivatedCheckBox)
			.find('input[type="checkbox"]')
			.uncheck({ force: true });
	}

	checkActivatedTool(toolName) {
		cy.get(Management.#externalToolsTable).contains(toolName);
		const toolData = cy.get(Management.#externalToolsTable).find("td").contains(toolName);

		toolData.parent("td").siblings("td").eq(0).contains("Aktuell").should("exist");
	}

	checkDeactivatedTool(toolName) {
		cy.get(Management.#externalToolsTable).contains(toolName);
		const toolData = cy.get(Management.#externalToolsTable).find("td").contains(toolName);

		toolData.parent("td").siblings("td").eq(0).contains("Deaktiviert").should("exist");
	}

	saveExternalTool() {
		cy.get(Management.#addExternalToolSaveButton).click();
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
		cy.get(Management.#externalToolsTable).contains(toolName);
		const toolData = cy.get(Management.#externalToolsTable).find("td").contains(toolName);

		toolData
			.parent("td")
			.siblings("td")
			.eq(1)
			.find(Management.#editExternalToolButton)
			.should("exist")
			.click();
	}

	clickOnAuthenticationPanel() {
		cy.get(Management.#systemPanel).click();
	}

	seeSystemTable() {
		cy.get(Management.#systemtable).should("be.visible");
	}

	seeLdapSystem() {
		const ldapSystemEntry = cy.get(Management.#systemtable).find("td").contains("ldap");
		ldapSystemEntry.should("be.visible");

		ldapSystemEntry.siblings("td").eq(2).find("a").should("be.visible");
	}

	seeSpecificSystemWithEditButton(systemName) {
		const systemEntry = cy.get(Management.#systemtable).find("td").contains(systemName);
		systemEntry.should("be.visible");

		systemEntry.siblings("td").eq(2).find("a").should("be.visible");
	}

	clickOnLdapEditButton() {
		const ldapSystemEntry = cy.get(Management.#systemtable).find("td").contains("ldap");

		ldapSystemEntry.siblings("td").eq(2).find("a").click();
	}

	seeLdapConfigurationPage() {
		cy.url().should("include", "/administration/ldap/config?id=");
	}

	clickOnSpecificSystemEditButton(systemName) {
		const systemEntry = cy.get(Management.#systemtable).find("td").contains(systemName);

		systemEntry.siblings("td").eq(2).find("a").click();
	}

	seeProvisioningOptionsPage() {
		cy.url().should(
			"include",
			"/administration/school-settings/provisioning-options?systemId="
		);
	}

	seeCheckboxesWithDefaultValues() {
		cy.get("[type=checkbox]").should("have.length", 3);
		cy.get(Management.#classOptionCheckbox).should("be.checked");
		cy.get(Management.#courseOptionCheckbox).should("not.be.checked");
		cy.get(Management.#othersOptionCheckbox).should("not.be.checked");
	}

	checkAllBoxes() {
		cy.get(Management.#courseOptionCheckbox).check({ force: true });
		cy.get(Management.#othersOptionCheckbox).check({ force: true });
	}

	clickOnProvisioningOptionsCancelButton() {
		cy.get(Management.#cancelProvisioningOptionsButton).click();
	}

	clickOnProvisioningOptionsSaveButton() {
		cy.get(Management.#saveProvisioningOptionsButton).click();
	}

	seeAllCheckboxesAreChecked() {
		cy.get(Management.#classOptionCheckbox).should("be.checked");
		cy.get(Management.#courseOptionCheckbox).should("be.checked");
		cy.get(Management.#othersOptionCheckbox).should("be.checked");
	}

	resetCheckboxValues() {
		cy.get(Management.#classOptionCheckbox).check({ force: true });
		cy.get(Management.#courseOptionCheckbox).uncheck({ force: true });
		cy.get(Management.#othersOptionCheckbox).uncheck({ force: true });
	}

	uncheckAllBoxes() {
		cy.get(Management.#classOptionCheckbox).uncheck({ force: true });
		cy.get(Management.#courseOptionCheckbox).uncheck({ force: true });
		cy.get(Management.#othersOptionCheckbox).uncheck({ force: true });
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
	}

	editSpecificCourse(courseName) {
		const courseEntry = cy.get(Management.#dataTable).find("td").contains(courseName);
		const actionButtons = courseEntry.siblings("td").eq(2);
		actionButtons.children().first().click();
		cy.wait("@courses_api");
	}

	seeCourseAdministrationPage() {
		cy.url().should("include", "/administration/courses");
	}

	clickAccountMigrationPanel() {
		cy.get(Management.#accountMigrationPanel).click();
	}
}

export default Management;

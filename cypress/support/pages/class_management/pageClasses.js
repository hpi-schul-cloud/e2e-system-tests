"use strict";

class Classes {
	static #createClass = '[data-testid="admin-class-add-button"]';
	static #confirmClassCreate = '[data-testid="confirmClassCreate"]';
	static #classTitleNew = '[data-testid="admin-class-title"]';
	static #classTableNew = '[data-testid="admin-class-table"]';
	static #nextYearTab = '[data-testid="admin-class-next-year-tab"]';
	static #currentYearTab = '[data-testid="admin-class-current-year-tab"]';
	static #previousYearsTab = '[data-testid="admin-class-previous-years-tab"]';
	static #manageClassButton = '[data-testid="legacy-class-table-manage-btn"]';
	static #cancelModal = '[data-testid="modal_content"]';
	static #editClassButton = '[data-testid="class-table-edit-btn"]';
	static #createSuccessorButton = '[data-testid="class-table-successor-btn"]';
	static #deleteClassButton = '[data-testid="class-table-delete-btn"]';
	static #deleteDialog = '[data-testid="dialog-title"]';
	static #deleteDialogCancel = '[data-testid="dialog-cancel"]';
	static #deleteDialogConfirm = '[data-testid="dialog-confirm"]';
	static #adminGroupTitle = '[data-testid="admin-class-title"]';
	static #groupMemberTable = '[data-testid="class-members-table"]';
	static #classMemberInfoBox = '[data-testid="class-members-info-box"]';
	static #classMemberInfoBoxText = '[data-testid="class-members-info-box-text"]';
	static #manageGroupButton = '[data-testid="class-table-members-manage-btn"]';
	static #adminClassNavigationSidebarCard = '[data-testid="sidebar-management-classes"]';
	static #adminClassNavigationCard = '[data-testid="administrate_classes"]';
	static #legacyClassTable = '[data-testid="table_container"]';
	static #buttonAddClassOldPage = '[data-testid="createClass"]';
	static #dropDownSchoolYearCreateClass = '[data-testid="class-school-year-selection"]';
	static #teacherNameInClassPage = '[data-testid="class-teacher-selection"]';
	static #moreOptionButtonInClassPage = '[data-testid="classCreationExtraOptions"]';
	static #textBoxCustomClassName = '[data-testid="Klassenbezeichnung"]';
	static #checkBoxMaintainSchoolYearInClassCreate =
		'[data-testid="maintain-school-year-in-class"]';
	static #dropDownTeacherSelectionOnClassManage =
		'[data-testid="teacher-selection-on-manage-class"]';
	static #dropDownStudentSelectionOnClassManage =
		'[data-testid="student-selection-on-manage-class"]';
	static #buttonSaveChangedClassManage = '[data-testid="manage-confirm"]';
	static #selectionBoxStudentInManageClass = ".chosen-results"; // this is a hidden class, so not visible in the FE code to assign the data-testid
	static #tableOldClassOverview = '[data-testid="table_container"]';
	static #buttonEditClassOnOldOverview = '[data-testid="edit-class"]';
	static #buttonSaveChangeOnEditClass = '[data-testid="confirm-class-edit"]';
	static #buttonDeleteClassOnOldOverview = '[data-testid="delete-class"]';
	static #modalDeleteOnOldClassPage = '[data-testid="popup-title"]';
	static #buttonCancelOnDeleteModalOldClassPage = '[data-testid="btn-cancel"]';
	static #buttonDeleteOnDeleteModalOldClassPage =
		'[data-testid="submit-btn-delete-systems-modal"]';
	static #tableClassName = '[data-testid="class-table-name"]';
	static #tableClassSource = '[data-testid="class-table-source"]';
	static #tableClassMemberFirstName = '[data-testid="class-members-table-firstname"]';
	static #tableClassMemberLasteName = '[data-testid="class-members-table-lastname"]';
	static #tableClassMemberRole = '[data-testid="class-members-table-role"]';
	static #tableClassSyncedCourse = '[data-testid="class-table-synced-courses"]';
	static #tableClassStudentCount = '[data-testid="class-table-student-count"]';
	static #stopSyncButton = '[data-testid="class-table-end-course-sync-btn"]';

	doNotSeeClassOnOldClassAdministrationPageAfterDeletion(customClassName) {
		cy.get(Classes.#tableOldClassOverview).find(customClassName).should("not.exist");
	}

	clickOnConfirmDeleteOnModalOldClassPage() {
		cy.get(Classes.#buttonDeleteOnDeleteModalOldClassPage).click();
	}

	clickOnCancelDeleteModalOnOldClassPage() {
		cy.get(Classes.#buttonCancelOnDeleteModalOldClassPage).click();
	}

	seeDeleteModalOnOldClassAdministrationPage() {
		cy.get(Classes.#modalDeleteOnOldClassPage).should("exist");
	}

	clickOnDeleteClassOnOldClassOverview() {
		cy.get(Classes.#tableOldClassOverview)
			.find(Classes.#buttonDeleteClassOnOldOverview)
			.click();
	}

	clickOnSaveChangesOnEditClassPage() {
		cy.get(Classes.#buttonSaveChangeOnEditClass).click();
	}

	clickOnEditClassOnOldClassOverview() {
		cy.get(Classes.#tableOldClassOverview)
			.find(Classes.#buttonEditClassOnOldOverview)
			.click();
	}

	seeCustomClassNameOnClassOverviewTable(customClassName) {
		cy.get(Classes.#tableOldClassOverview).contains(customClassName);
	}

	seeNumberOfStudentOnClassOverviewTable(numberOfStudent) {
		cy.get(Classes.#tableOldClassOverview).contains(numberOfStudent);
	}

	seeOldClassAdministrationPage() {
		cy.url().should("include", "/classes");
	}

	clickOnSaveChangesOnManageClassPage() {
		cy.get(Classes.#buttonSaveChangedClassManage).click();
	}

	selectStudentInManageClassPage(fullNameStudent) {
		cy.get(Classes.#dropDownStudentSelectionOnClassManage).click();
		cy.get(Classes.#selectionBoxStudentInManageClass)
			.contains(fullNameStudent)
			.click();
	}

	seeSelectedTeacherOnManageClassPage(teacherName) {
		cy.get(Classes.#dropDownTeacherSelectionOnClassManage).contains(teacherName);
	}

	seeSelectedStudentOnManageClassPage(studentName) {
		cy.get(Classes.#dropDownStudentSelectionOnClassManage)
			.contains(studentName);
	}

	clickOnAddClassButtonOnClassOverviewPage() {
		cy.get(Classes.#buttonAddClassOldPage).click();
	}

	clickOnCheckBoxMaintainSchoolYearAssignment() {
		cy.get(Classes.#checkBoxMaintainSchoolYearInClassCreate).check();
	}

	enterCustomClassName(customClassName) {
		cy.get(Classes.#textBoxCustomClassName).clear().type(customClassName);
	}

	clickOnMoreOptionsInClassCreatePage() {
		cy.get(Classes.#moreOptionButtonInClassPage).click({ force: true });
	}

	seeTeacherNameInClassCreatePage(teacherName) {
		cy.get(Classes.#teacherNameInClassPage).contains(teacherName);
	}

	seeSelectedSchoolYearInClass(schoolYear) {
		cy.get(Classes.#dropDownSchoolYearCreateClass).contains(schoolYear);
	}

	clickOnClassInAdministrationSubMenu() {
		cy.get(Classes.#adminClassNavigationSidebarCard).click();
	}

	clickCreateClassButtonOnNewClassPage() {
		cy.get(Classes.#createClass).click();
	}

	clickConfirmCreateClass() {
		cy.get(Classes.#confirmClassCreate).click();
	}

	clickCancelButton() {
		cy.get(".btn-cancel").click();
	}

	clickConfirmButton() {
		cy.get(".historyback").click();
	}

	clickConfirmSuccessor() {
		cy.get(".btn-primary").eq(0).click();
	}

	clickConfirmDeleteDialogButton() {
		cy.get(Classes.#deleteDialogConfirm).click();
	}

	clickNextYearTab() {
		cy.get(Classes.#nextYearTab).click();
		cy.get(Classes.#nextYearTab).should("have.attr", "aria-selected", "true");
	}

	isNewClassAdministrationPage() {
		cy.url().should("include", "/administration/groups/classes");
	}

	isManageClassPage() {
		cy.url().should("include", "/administration/classes");
		cy.url().should("include", "/manage");
	}

	isEditClassPage() {
		cy.url().should("include", "/administration/classes");
		cy.url().should("include", "/edit");
	}

	isCreateSuccessorPage() {
		cy.url().should("include", "/administration/classes");
		cy.url().should("include", "/createSuccessor");
	}

	seeSuccessorButtonIsDisabled(className) {
		cy.get(Classes.#tableClassName)
			.contains(className)
			.parents("tr")
			.within(() => {
				cy.get(Classes.#createSuccessorButton).should("have.class", "v-btn--disabled");
			});
	}

	seeSuccessorButtonIsEnabled(className) {
		cy.get(Classes.#tableClassName)
			.contains(className)
			.parents("tr")
			.within(() => {
				cy.get(Classes.#createSuccessorButton).should("not.have.class", "v-btn--disabled");
			});
	}

	isDeleteDialog() {
		cy.get(Classes.#deleteDialog).should("be.visible");
	}

	seeSourceOfClass(className, sourceName) {
		cy.get(Classes.#tableClassName)
			.contains(className)
			.parents("tr")
			.within(() => {
				cy.get(Classes.#tableClassSource)
					.should("have.text", sourceName);
			});
	}

	doNotSeeSourceOfClass(className) {
		cy.get(Classes.#tableClassName)
			.contains(className)
			.parents("tr")
			.within(() => {
				cy.get(Classes.#tableClassSource)
					.should("have.text", "");
			});
	}

	see3Tabs() {
		cy.get(Classes.#nextYearTab).should("be.visible");
		cy.get(Classes.#currentYearTab).should("be.visible");
		cy.get(Classes.#previousYearsTab).should("be.visible");
	}

	seeManageGroupPage() {
		cy.url().should("include", "/administration/groups/classes/");
	}

	seeGroupMemberTableContainsMemberWithRole(role, lastName, firstName) {
		cy.get(Classes.#tableClassMemberLasteName)
			.contains(lastName)
			.parents("tr")
			.within(() => {
				cy.get(Classes.#tableClassMemberRole).should("have.text", role)
				cy.get(Classes.#tableClassMemberFirstName).should("contain", firstName);
			});
	}

	seeClassMemberInfoBox() {
		cy.get(Classes.#classMemberInfoBox).should("be.visible");
	}

	seeNoNewClassAdministrationPage() {
		cy.get(Classes.#adminClassNavigationSidebarCard).should(
			"not.have.attr",
			"href",
			"/administration/groups/classes"
		);
		cy.get(Classes.#adminClassNavigationCard).should(
			"not.have.attr",
			"data-loclink",
			"/administration/groups/classes"
		);
	}

	clickEndSyncWithCourseButton(groupName) {
		cy.get(Classes.#tableClassName)
		.contains(groupName)
		.parents("tr")
		.within(() => {
			cy.get(Classes.#stopSyncButton)
			.should("be.visible")
			.click();
		});
	}

	doNotSeeClassInTable(className) {
		cy.get(Classes.#tableClassName).should("not.contain", className);
	}

	clickOnManageClassButton(className) {
		cy.get(Classes.#tableClassName)
		.contains(className)
		.parents("tr")
		.within(() => {
			cy.get(Classes.#manageClassButton)
			.should("be.visible")
			.click();
		});
	}

	clickOnManageGroupButton(className) {
		cy.get(Classes.#tableClassName)
		.contains(className)
		.parents("tr")
		.within(() => {
			cy.get(Classes.#manageGroupButton)
			.should("be.visible")
			.click();
		});
	}

	clickOnEditClassButton(className) {
		cy.get(Classes.#tableClassName)
		.contains(className)
		.parents("tr")
		.within(() => {
			cy.get(Classes.#editClassButton)
			.should("be.visible")
			.click();
		});
	}

	clickOnCreateSuccessorButton(className) {
		cy.get(Classes.#tableClassName)
		.contains(className)
		.parents("tr")
		.within(() => {
			cy.get(Classes.#createSuccessorButton)
			.should("be.visible")
			.click();
		});
	}

	clickOnDeleteClassButton(className) {
		cy.get(Classes.#tableClassName)
		.contains(className)
		.parents("tr")
		.within(() => {
			cy.get(Classes.#deleteClassButton)
			.should("be.visible")
			.click();
		});
		cy.wait(500);
		cy.get(Classes.#deleteDialog).should("be.visible");
	}

	seeGroupIsSyncedWithCourse(groupName, courseName) {
		cy.get(Classes.#tableClassName)
			.contains(groupName)
			.parents("tr")
			.within(() => {
				cy.get(Classes.#tableClassSyncedCourse).should("have.text", courseName)
			});
	}

	clickStopSyncButtonOfGroup(groupName) {
		cy.get(Classes.#tableClassName)
			.contains(groupName)
			.parents("tr")
			.within(() => {
				cy.get(Classes.#stopSyncButton)
					.should("be.visible")
					.click();
			});
	}

	doNotSeeStopSyncButtonOfGroup(groupName) {
		cy.get(Classes.#tableClassName)
			.contains(groupName)
			.parents("tr")
			.within(() => {
				cy.get(Classes.#stopSyncButton).should("not.exist")
			});
	}

	seeNumberOfStudentsOfClass(className, numberOfStudents) {
		cy.get(Classes.#tableClassName)
			.contains(className)
			.parents("tr")
			.within(() => {
				cy.get(Classes.#tableClassStudentCount).should("have.text", numberOfStudents)
			});
	}

	isCreateClassPage() {
		cy.url().should("include", "/administration/classes");
		cy.url().should("include", "/create");
	}
}

export default Classes;

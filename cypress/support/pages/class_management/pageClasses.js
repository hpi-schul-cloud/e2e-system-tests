"use strict";

class Classes {
	static #createClass = '[data-testid="admin-class-add-button"]';
	static #confirmClassCreate = '[data-testid="confirmClassCreate"]';
	static #manageConfirm = '[data-testid="manage-confirm"]';
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
	static #adminClassNavigationSidebarCard = '[data-testid="Klassen"]';
	static #adminClassNavigationCard = '[data-testid="administrate_classes"]';
	static #legacyClassTable = '[data-testid="table_container"]';
	static #buttonAddClassOldPage = '[data-testid="createClass"]';
	static #dropDownSchoolYearCreateClass = '[data-testid="class-school-year-selection"]';
	static #subMenuClassInAdministration = '[data-testid="Klassen"]';
	static #teacherNameInClassPage = '[data-testid="class-teacher-selection"]';
	static #moreOptionButtonInClassPage = '[data-testid="classCreationExtraOptions"]';
	static #textBoxCustomClassName = '[data-testid="Klassenbezeichnung"]';
	static #checkBoxMiantainSchoolYearInClassCreate =
		'[data-testid="maintain-school-year-in-class"]';
	static #addClassButtonOnClassCreate = '[data-testid="confirmClassCreate"]';
	static #dropDownTeacherSelectonOnClassManage =
		'[data-testid="teacher-selection-on-manage-class"]';
	static #dropDownStudentSelectonOnClassManage =
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

	clickOnDeleteClassOnOldClassOverview(customClassName) {
		cy.get(Classes.#tableOldClassOverview).contains(customClassName)
			.find(Classes.#buttonDeleteClassOnOldOverview)
			.click();
	}

	clickOnSaveChangesOnEditClassPage() {
		cy.get(Classes.#buttonSaveChangeOnEditClass).click();
	}

	clickOnEditClassOnOldClassOverview(customClassName) {
		cy.get(Classes.#tableOldClassOverview).contains(customClassName)
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

	clickOnSaveChangesClass() {
		cy.get(Classes.#buttonSaveChangedClassManage).click();
	}

	selectStudentInManageClassPage(fullNameStudent) {
		cy.get(Classes.#dropDownStudentSelectonOnClassManage).click();
		cy.get(Classes.#selectionBoxStudentInManageClass)
			.contains(fullNameStudent)
			.click();
	}

	seeSelectedTeacherOnManageClassPage(teacherName) {
		cy.get(Classes.#dropDownTeacherSelectonOnClassManage).contains(teacherName);
	}

	clickOnAddClassButtonOnClassCreatePage() {
		cy.get(Classes.#addClassButtonOnClassCreate).click();
	}

	clickOnCheckBoxMaintainSchoolYearClassCreatePage() {
		cy.get(Classes.#checkBoxMiantainSchoolYearInClassCreate).check();
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

	clickOnClassesSubMenuInAdministration() {
		cy.get(Classes.#subMenuClassInAdministration).click();
	}

	selectSchoolYearInClass(schoolYear) {
		cy.get(Classes.#dropDownSchoolYearCreateClass).contains(schoolYear);
	}

	clickOnClassInAdministrationSubMenu() {
		cy.get(Classes.#adminClassNavigationSidebarCard).click();
	}

	clickOnAddClassButtonOnOldClassPage() {
		cy.get(Classes.#buttonAddClassOldPage).click();
	}

	clickCreateClass() {
		cy.get(Classes.#createClass).click();
	}

	clickConfirmCreateClass() {
		cy.get(Classes.#confirmClassCreate).click();
	}

	clickConfirmManageClass() {
		cy.get(Classes.#manageConfirm).click();
	}

	clickCancelButton() {
		cy.get(".btn-cancel").click();
	}

	clickManageClassButton() {
		cy.get(Classes.#manageClassButton).first().click();
	}

	clickConfirmButton() {
		cy.get(".historyback").click();
	}

	clickEditClassButton() {
		cy.get(Classes.#editClassButton).first().click();
	}

	clickNameSuffixField() {
		cy.get("[name=classsuffix]").click();
	}

	clickCreateSuccessorButton() {
		cy.get(Classes.#createSuccessorButton).first().click();
	}

	clickSaveChangesButton() {
		cy.get(".btn-primary").eq(0).should("not.be.disabled").click();
	}

	clickConfirmSuccessor() {
		cy.get(".btn-primary").eq(0).click();
	}

	clickDeleteButton() {
		cy.get(Classes.#deleteClassButton).first().click();
		cy.wait(500);
		cy.get(Classes.#deleteDialog).should("be.visible");
	}

	clickCancelDeleteDialogButton() {
		cy.get(Classes.#deleteDialogCancel).click();
	}

	clickConfirmDeleteDialogButton() {
		cy.get(Classes.#deleteDialogConfirm).click();
	}

	clickManageGroupButton() {
		cy.get(Classes.#manageGroupButton)
			.first()
			.invoke("attr", "href")
			.then((hrefVal) => {
				cy.visit(hrefVal);
			});
		// cy.get(Classes.#manageGroupButton).first().click({ force: true }) // This method is not working so tried another way above.
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

	isCancelModal() {
		cy.get(Classes.#cancelModal).should("exist");
	}

	isCreateSuccessorPage() {
		cy.url().should("include", "/administration/classes");
		cy.url().should("include", "/createSuccessor");
	}

	seeNewClassPageTitle() {
		cy.get(Classes.#classTitleNew).should("exist");
	}

	isSuccessorButtonDisabled() {
		cy.get(Classes.#createSuccessorButton)
			.first()
			.should("have.class", "v-btn--disabled");
	}

	isDeleteDialog() {
		cy.get(Classes.#deleteDialog).should("be.visible");
	}

	isCreateClassPage() {
		cy.url().should("include", "/administration/classes");
		cy.url().should("include", "/create");
	}

	seeNewClassTableContainsClass(className, sourceName) {
		const classNameData = cy
			.get(Classes.#classTableNew)
			.find("td")
			.contains(className);

		classNameData.should("be.visible");
		classNameData
			.siblings("td")
			.eq(1)
			.should(($td) => {
				expect($td.text().trim()).to.equal(sourceName);
			});
	}

	seeGroupsHaveAManageButton(groupName) {
		const classNameData = cy
			.get(Classes.#classTableNew)
			.find("td")
			.contains(groupName);

		classNameData
			.siblings("td")
			.eq(4)
			.find('a[data-testid="class-table-members-manage-btn"]')
			.should("exist");
	}

	seeClassesHave4ActiveActionItems(className) {
		const classNameData = cy
			.get(Classes.#classTableNew)
			.find("td")
			.contains(className);

		const buttons = classNameData.siblings("td").eq(4).find("a, button");

		buttons.should("have.length", 4);
		buttons.each(($btn) => {
			cy.wrap($btn).should("not.be.disabled");
		});
	}

	seeTableHas6Columns() {
		const tableHeader = cy.get(Classes.#classTableNew).find("th");
		tableHeader.should("have.length", 6);
	}

	see3Tabs() {
		cy.get(Classes.#nextYearTab).should("exist");
		cy.get(Classes.#currentYearTab).should("exist");
		cy.get(Classes.#previousYearsTab).should("exist");
	}

	seeManageGroupPage() {
		cy.url().should("include", "/administration/groups/classes/");
	}

	seeManageGroupPageTitle() {
		cy.get(Classes.#adminGroupTitle).should("be.visible");
	}

	seeGroupMemberTable() {
		cy.get(Classes.#groupMemberTable).should("be.visible");
	}

	seeGroupMemberTableContainsMember(role, lastName) {
		const groupMemberData = cy
			.get(Classes.#groupMemberTable)
			.find("td")
			.contains(lastName);

		groupMemberData.should("be.visible");
		groupMemberData
			.siblings("td")
			.eq(1)
			.should(($td) => {
				expect($td.text().trim()).to.equal(role);
			});
	}

	seeClassMemberInfoBox() {
		cy.get(Classes.#classMemberInfoBox).should("be.visible");
	}

	seeClassMemberInfoBoxText() {
		cy.get(Classes.#classMemberInfoBoxText).should("be.visible");
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

	seeNoSourceHeader() {
		cy.get(Classes.#legacyClassTable).find("th").should("not.contain", "source");
	}

	seeGroupIsSyncedWithCourse(groupName, courseName) {
		const classNameData = cy
			.get(Classes.#classTableNew)
			.find("td")
			.contains(groupName);

		classNameData.should("be.visible");
		classNameData.siblings("td").should(($td) => {
			expect($td.text().trim()).to.include(courseName);
		});
	}

	seeGroupIsNotSyncedWithCourse(groupName) {
		const classNameData = cy
			.get(Classes.#classTableNew)
			.find("td")
			.contains(groupName);

		classNameData.should("be.visible");
		classNameData
			.siblings("td")
			.eq(0)
			.should(($td) => {
				expect($td.text().trim()).to.be.empty;
			});
	}

	clickEndSyncWithCourseButton(groupName) {
		const classNameData = cy
			.get(Classes.#classTableNew)
			.find("td")
			.contains(groupName);

		const buttons = classNameData.siblings("td").eq(4).find("a, button");
		buttons.should("have.length", 2);
		buttons.eq(1).click();
	}
}

export default Classes;

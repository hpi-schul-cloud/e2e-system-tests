"use strict";

class Classes {
	static #createClass = '[data-testid="fab_button_add_class"]';
	static #confirmClassCreate = '[data-testid="confirmClassCreate"]';
	static #classTableNew = '[data-testid="admin-class-table"]';
	static #nextYearTab = '[data-testid="admin-class-next-year-tab"]';
	static #currentYearTab = '[data-testid="admin-class-current-year-tab"]';
	static #previousYearsTab = '[data-testid="admin-class-previous-years-tab"]';
	static #manageClassButton = '[data-testid="legacy-class-table-manage-btn"]';
	static #editClassButton = '[data-testid="class-table-edit-btn"]';
	static #createSuccessorButton = '[data-testid="class-table-successor-btn"]';
	static #deleteClassButton = '[data-testid="class-table-delete-btn"]';
	static #deleteDialog = '[data-testid="confirm-dialog-title"]';
	static #deleteDialogConfirm = '[data-testid="confirm-dialog-confirm"]';
	static #deleteDialogConfirmSecondary = '[data-testid="dialog-confirm"]';
	static #classMemberInfoBox = '[data-testid="class-members-info-box"]';
	static #manageGroupButton = '[data-testid="class-table-members-manage-btn"]';
	static #adminClassNavigationSidebarCard = '[data-testid="sidebar-management-classes"]';
	static #adminClassNavigationCard = '[data-testid="administrate_classes"]';
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
	// this is a hidden class, so not visible in the FE code to assign the data-testid
	static #selectionBoxStudentInManageClass = ".chosen-results";
	static #buttonSaveChangeOnEditClass = '[data-testid="confirm-class-edit"]';
	static #buttonCancelOnDeleteModalClassAdminPage =
		'[data-testid="confirm-dialog-cancel"]';
	static #cancelDeleteButtonDialog = '[data-testid="dialog-cancel"]';
	static #tableClassName = '[data-testid="class-table-name"]';
	static #tableClassSource = '[data-testid="class-table-source"]';
	static #tableClassMemberFirstName = '[data-testid="class-members-table-firstname"]';
	static #tableClassMemberLastName = '[data-testid="class-members-table-lastname"]';
	static #tableClassMemberRole = '[data-testid="class-members-table-role"]';
	static #tableClassSyncedCourse = '[data-testid="class-table-synced-courses"]';
	static #tableClassStudentCount = '[data-testid="class-table-student-count"]';
	static #stopSyncButton = '[data-testid="class-table-end-course-sync-btn"]';

	clickOnCancelDeleteModalOnClassAdminPage() {
		cy.get("body").then(($body) => {
			if ($body.find(Classes.#buttonCancelOnDeleteModalClassAdminPage).length > 0) {
				cy.get(Classes.#buttonCancelOnDeleteModalClassAdminPage).click();
			} else if ($body.find(Classes.#cancelDeleteButtonDialog).length > 0) {
				cy.get(Classes.#cancelDeleteButtonDialog).click();
			} else {
				throw new Error("No cancel button found in delete modal");
			}
		});
	}

	clickOnSaveChangesOnEditClassPage() {
		cy.get(Classes.#buttonSaveChangeOnEditClass).click();
	}

	clickOnEditClassOnClassOverview(className) {
		cy.get(Classes.#tableClassName)
			.contains(className)
			.parents("tr")
			.within(() => {
				cy.get(Classes.#editClassButton).click();
			});
	}

	clickOnSaveChangesOnManageClassPage() {
		cy.get(Classes.#buttonSaveChangedClassManage).click();
	}

	selectStudentInManageClassPage(fullNameStudent) {
		cy.get(Classes.#dropDownStudentSelectionOnClassManage).click();
		cy.get(Classes.#selectionBoxStudentInManageClass).contains(fullNameStudent).click();
	}

	seeSelectedTeacherOnManageClassPage(teacherName) {
		cy.get(Classes.#dropDownTeacherSelectionOnClassManage).contains(teacherName);
	}

	seeSelectedStudentOnManageClassPage(studentName) {
		cy.get(Classes.#dropDownStudentSelectionOnClassManage).contains(studentName);
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
		cy.log(`Now its clicking at create class button...`);
		cy.get(Classes.#createClass).find("a").click();
		cy.wait(500);
	}

	clickAddClassButton() {
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
		cy.get("body").then(($body) => {
			if ($body.find(Classes.#deleteDialogConfirm).length > 0) {
				cy.get(Classes.#deleteDialogConfirm).click();
			} else if ($body.find(Classes.#deleteDialogConfirmSecondary).length > 0) {
				cy.get(Classes.#deleteDialogConfirmSecondary).click();
			} else {
				throw new Error("No confirm delete button found in dialog");
			}
		});
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
				cy.get(Classes.#createSuccessorButton).should(
					"not.have.class",
					"v-btn--disabled"
				);
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
				cy.get(Classes.#tableClassSource).should("have.text", sourceName);
			});
	}

	doNotSeeSourceOfClass(className) {
		cy.get(Classes.#tableClassName)
			.contains(className)
			.parents("tr")
			.within(() => {
				cy.get(Classes.#tableClassSource).should("have.text", "");
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
		cy.get(Classes.#tableClassMemberLastName)
			.contains(lastName)
			.parents("tr")
			.within(() => {
				cy.get(Classes.#tableClassMemberRole).should("have.text", role);
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
				cy.get(Classes.#stopSyncButton).should("be.visible").click();
			});
	}

	doNotSeeClassInTable(className) {
		cy.get(Classes.#tableClassName).should("not.contain", className);
	}

	isClassInTheTable(
		className,
		expectedState = "exist",
		classTableSelector = Classes.#classTableNew,
		classRowInTableSelector = Classes.#tableClassName
	) {
		const isClassPresent = expectedState === "exist";
		cy.get(classTableSelector).then(($table) => {
			const isRowEmpty = $table.find("tbody tr").length > 1;
			cy.get(classRowInTableSelector).should(
				isClassPresent ? "contain" : isRowEmpty ? "not.contain" : "not.exist",
				className
			);
		});
	}

	clickOnManageClassButton(className) {
		cy.get(Classes.#tableClassName)
			.contains(className)
			.parents("tr")
			.within(() => {
				cy.get(Classes.#manageClassButton).should("be.visible").click();
			});
	}

	clickOnManageGroupButton(className) {
		cy.get(Classes.#tableClassName)
			.contains(className)
			.parents("tr")
			.within(() => {
				cy.get(Classes.#manageGroupButton).should("be.visible").click();
			});
	}

	clickOnEditClassButton(className) {
		cy.get(Classes.#tableClassName)
			.contains(className)
			.parents("tr")
			.within(() => {
				cy.get(Classes.#editClassButton).should("be.visible").click();
			});
	}

	clickOnCreateSuccessorButton(className) {
		cy.get(Classes.#tableClassName)
			.contains(className)
			.parents("tr")
			.within(() => {
				cy.get(Classes.#createSuccessorButton).should("be.visible").click();
			});
	}

	clickOnDeleteClassButton(className) {
		cy.get(Classes.#tableClassName)
			.contains(className)
			.parents("tr")
			.within(() => {
				cy.wait(500);
				cy.get(Classes.#deleteClassButton).should("be.visible").click();
			});
		cy.wait(500);
		cy.get(Classes.#deleteDialog).should("be.visible");
	}

	seeGroupIsSyncedWithCourse(groupName, courseName) {
		cy.get(Classes.#tableClassName)
			.contains(groupName)
			.parents("tr")
			.within(() => {
				cy.get(Classes.#tableClassSyncedCourse).should("have.text", courseName);
			});
	}

	clickStopSyncButtonOfGroup(groupName) {
		cy.get(Classes.#tableClassName)
			.contains(groupName)
			.parents("tr")
			.within(() => {
				cy.get(Classes.#stopSyncButton).should("be.visible").click();
			});
	}

	doNotSeeStopSyncButtonOfGroup(groupName) {
		cy.get(Classes.#tableClassName)
			.contains(groupName)
			.parents("tr")
			.within(() => {
				cy.get(Classes.#stopSyncButton).should("not.exist");
			});
	}

	seeNumberOfStudentsOfClass(className, numberOfStudents) {
		cy.get(Classes.#tableClassName)
			.contains(className)
			.parents("tr")
			.within(() => {
				cy.get(Classes.#tableClassStudentCount).should("have.text", numberOfStudents);
			});
	}

	isCreateClassPage() {
		cy.url().should("include", "/administration/classes");
		cy.url().should("include", "/create");
	}

	//  delete before merging
	// ########################################

	//  don't delete before merging
	// ########################################

	showAllClassesInTable() {
		cy.get(Classes.#classTableNew).scrollIntoView().should("be.visible");

		// Wait for initial load to complete
		this.waitForClassTableToLoad();

		// Click on the pagination select dropdown
		cy.get(Classes.#classTableNew)
			.find(".v-data-table-footer__items-per-page .v-field")
			.click();

		// Select "100" from the dropdown list
		cy.get(".v-list").should("be.visible");
		cy.get(".v-list-item").contains("100").click();

		// Wait for table to finish loading with new page size
		this.waitForClassTableToLoad();

		// Verify pagination changed
		cy.get(Classes.#classTableNew)
			.find(".v-data-table-footer__items-per-page .v-select__selection-text")
			.should("contain", "100");
	}

	getTotalClassCount() {
		// Reads "1-10 von 109" and returns 109
		return cy
			.get(Classes.#classTableNew)
			.find(".v-data-table-footer__info div")
			.invoke("text")
			.then((text) => {
				const match = text.match(/von\s+(\d+)/);
				return match ? parseInt(match[1], 10) : 0;
			});
	}

	classExistsInTable(className) {
		return cy
			.get(Classes.#classTableNew)
			.find("tbody tr")
			.then(($rows) => {
				// check empty state
				if (
					$rows.length === 1 &&
					($rows.text().includes("Keine Daten vorhanden") ||
						$rows.text().includes("No data available"))
				) {
					return cy.wrap(false);
				}

				// check for class in all visible rows
				const found = [...$rows].some((row) => {
					const nameCell = row.querySelector('[data-testid="class-table-name"]');
					return nameCell && nameCell.textContent.trim() === className;
				});

				return cy.wrap(found);
			});
	}

	waitForClassTableToLoad() {
		// Wait until the table no longer has the loading class
		cy.get(Classes.#classTableNew, { timeout: 30000 }).should(
			"not.have.class",
			"v-data-table--loading"
		);

		// Wait for progress bar to disappear
		cy.get(Classes.#classTableNew).find(".v-data-table-progress").should("not.exist");

		// Ensure no loading text in tbody
		cy.get(Classes.#classTableNew)
			.find("tbody tr", { timeout: 30000 })
			.should(($rows) => {
				const isLoading = [...$rows].some((r) => r.textContent.includes("Lade Elemente"));
				expect(isLoading).to.be.false;
			});
	}

	deleteAllClassesWithPrefix(classPrefix, maxAttempts = 120) {
		cy.intercept("DELETE", "/api/v1/classes/*").as("deleteClass");
		cy.intercept("GET", "/api/v3/groups/class*").as("getClasses");

		this._deleteNextClass(classPrefix, maxAttempts, 0);
	}

	_deleteNextClass(classPrefix, maxAttempts, attempt) {
		if (attempt >= maxAttempts) {
			cy.log(`Reached max attempts (${maxAttempts}). Stopping.`);
			return;
		}

		this.waitForClassTableToLoad();

		cy.get(Classes.#classTableNew)
			.find("tbody tr")
			.then(($rows) => {
				if (
					$rows.length === 1 &&
					($rows.text().includes("Keine Daten vorhanden") ||
						$rows.text().includes("No data available"))
				) {
					cy.log("No more classes to delete.");
					return;
				}

				let classId = null;
				let foundClassName = null;

				$rows.each((_, row) => {
					const nameCell = row.querySelector('[data-testid="class-table-name"]');
					if (nameCell && nameCell.textContent.trim().startsWith(classPrefix)) {
						foundClassName = nameCell.textContent.trim();
						const manageLink = row.querySelector(
							'[data-testid="legacy-class-table-manage-btn"]'
						);
						if (manageLink) {
							const href = manageLink.getAttribute("href");
							classId = href.split("/").slice(-2, -1)[0];
						}
						return false;
					}
				});

				if (!classId) {
					cy.log(`No more classes matching "${classPrefix}" found.`);
					return;
				}

				cy.log(`Deleting "${foundClassName}" (${classId}) [attempt ${attempt + 1}]`);

				// Add a small delay between deletions to avoid overwhelming the server
				cy.wait(300, { log: false });

				cy.get(`[href="/administration/classes/${classId}/manage"]`)
					.parents("tr")
					.find('[data-testid="class-table-delete-btn"]')
					.click({ log: false });

				cy.get('[data-testid="confirm-dialog-title"]', { log: false }).should(
					"be.visible"
				);
				cy.get('[data-testid="confirm-dialog-confirm"]', { log: false }).click({
					log: false,
				});

				// Shorter timeout — fail fast instead of hanging 80s
				cy.wait("@deleteClass", { timeout: 15000, log: false }).then((interception) => {
					if (interception.response.statusCode !== 200) {
						cy.log(`DELETE failed with ${interception.response.statusCode}, retrying...`);
					}
				});

				cy.wait("@getClasses", { timeout: 15000, log: false });

				cy.get('[data-testid="confirm-dialog-title"]', { log: false }).should(
					"not.exist"
				);

				cy.get(`[href="/administration/classes/${classId}/manage"]`, {
					timeout: 10000,
					log: false,
				}).should("not.exist");

				this._deleteNextClass(classPrefix, maxAttempts, attempt + 1);
			});
	}
}

export default Classes;

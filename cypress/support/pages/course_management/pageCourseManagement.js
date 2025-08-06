"use strict";

class CourseManagement {
	static #createCourseAdminButton = '[data-testid="admin-courses-add-button"]';
	static #confirmDialogButton = '[data-testid="dialog-confirm"]';
	static #confirmDialogTitle = '[data-testid="dialog-title"]';
	static #confirmSyncDialogInfoText =
		'[data-testid="end-course-sync-dialog-info-text"]';
	static #courseTable = '[data-testid="admin-rooms-table"]';
	static #courseTableDeleteButton = '[data-testid="course-table-delete-btn"]';
	static #courseTableEditButton = '[data-testid="course-table-edit-btn"]';
	static #courseTableStartSynchronizeButton =
		'[data-testid="course-table-start-course-sync-btn"]';
	static #courseTableEndSynchronizeButton =
		'[data-testid="course-table-end-course-sync-btn"]';
	static #courseTableNew = '[data-testid="admin-rooms-table"]';
	static #currentYearTab = '[data-testid="admin-course-current-tab"]';
	static #previousYearsTab = '[data-testid="admin-course-archive-tab"]';
	static #adminCourseNavigationSidebarCard =
		'[data-testid="sidebar-management-courses"]';
	static #courseTableName = '[data-testid="admin-rooms-table-name"]';
	static #courseTableSyncedGroup = '[data-testid="admin-rooms-table-synced-group"]';
	static #courseTableClassNames = '[data-testid="admin-rooms-table-class-names"]';
	static #courseTableTeacherNames = '[data-testid="admin-rooms-table-teacher-names"]';
	static #courseTableAlertIcon =
		'[data-testid="admin-rooms-table-teacher-names-empty"]';
	static #courseWithoutTeacherToggle =
		'[data-testid="admin-course-without-teacher-checkbox"] input[type="checkbox"]';
	static #courseTitle = '[data-testid="course-title"]';
	static #courseBadgeLock = '[data-testid="course-badge-lock"]';
	static #courseLockedMessage = '[data-testid="img-permission"]';

	clickLockedCourse(courseName) {
		cy.contains(CourseManagement.#courseTitle, courseName)
			.should("be.visible")
			.then((title) => {
				cy.wrap(title).prev().click();
			});
	}

	seeLockIconInCourse(courseName) {
		cy.get(CourseManagement.#courseTitle)
			.contains(courseName)
			.siblings(CourseManagement.#courseBadgeLock)
			.should("be.visible");
	}

	seeCourseNotAccessibleMessage() {
		cy.get(CourseManagement.#courseLockedMessage).should("be.visible");
	}

	seeCurrentAndArchiveTabs() {
		cy.get(CourseManagement.#currentYearTab).should("be.visible");
		cy.get(CourseManagement.#previousYearsTab).should("be.visible");
	}

	clickCurrentTab() {
		cy.get(CourseManagement.#currentYearTab).click();
	}

	seeAlertIconInTeachersColumn() {
		cy.get(CourseManagement.#courseTableAlertIcon).should("be.visible");
	}

	clickToggleCourseWithoutTeachers() {
		cy.get(CourseManagement.#courseWithoutTeacherToggle)
			.should("exist")
			.then(($toggle) => {
				if ($toggle.is(":checked")) {
					throw new Error(
						"Expected 'Only show courses without teachers' toggle to be OFF by default, but it was ON."
					);
				}
				cy.wrap($toggle).check({ force: true });
			});
	}

	clickOnCourseInAdministrationSubMenu() {
		cy.get(CourseManagement.#adminCourseNavigationSidebarCard).click();
	}

	isNewCourseAdministrationPage() {
		cy.url().should("include", "/administration/rooms/new");
	}

	clickCreateCourseAdminButton() {
		cy.get(CourseManagement.#createCourseAdminButton).click();
	}

	seeCourseInCourseTable(courseName) {
		cy.get(CourseManagement.#courseTableName).should("contain", courseName);
	}

	doNotSeeCourseInTable(courseName) {
		cy.get(CourseManagement.#courseTableName).should("not.contain", courseName);
	}

	clickDeleteButtonOfCourse(courseName) {
		cy.get(CourseManagement.#courseTableName)
			.contains(courseName)
			.parents("tr")
			.within(() => {
				cy.get(CourseManagement.#courseTableDeleteButton)
					.should("be.visible")
					.click();
			});
	}

	clickEditButtonOfCourse(courseName) {
		cy.get(CourseManagement.#courseTableName)
			.contains(courseName)
			.parents("tr")
			.within(() => {
				cy.get(CourseManagement.#courseTableEditButton)
					.should("be.visible")
					.click();
			});
		cy.wait("@courses_api");
	}

	seeSynchronizationConfirmationModalTitle() {
		cy.get(CourseManagement.#confirmDialogTitle).should("be.visible");
	}

	seeSynchronizationInfoTextForCourseAndGroup(courseName, groupName) {
		cy.get(CourseManagement.#confirmSyncDialogInfoText)
			.should("contain.text", courseName)
			.should("contain.text", groupName);
	}

	clickConfirmSynchronizationButton() {
		cy.get(CourseManagement.#confirmDialogButton).click();
	}

	seeCourseWithTeacher(courseName, teacherName) {
		cy.get(CourseManagement.#courseTableName)
			.contains(courseName)
			.parents("tr")
			.within(() => {
				cy.get(CourseManagement.#courseTableTeacherNames).should(
					"have.text",
					teacherName
				);
			});
	}

	seeCourseWithClass(courseName, className) {
		cy.get(CourseManagement.#courseTableName)
			.contains(courseName)
			.parents("tr")
			.within(() => {
				cy.get(CourseManagement.#courseTableClassNames).should(
					"have.text",
					className
				);
			});
	}

	seeCourseWithSyncedGroup(courseName, groupName) {
		cy.get(CourseManagement.#courseTableName)
			.contains(courseName)
			.parents("tr")
			.within(() => {
				cy.get(CourseManagement.#courseTableSyncedGroup).should(
					"have.text",
					groupName
				);
			});
	}

	doNotSeeStartSyncedButtonOfCourse(courseName) {
		cy.get(CourseManagement.#courseTableName)
			.contains(courseName)
			.parents("tr")
			.within(() => {
				cy.get(CourseManagement.#courseTableStartSynchronizeButton).should(
					"not.exist"
				);
			});
	}

	doNotSeeStopSyncedButtonOfCourse(courseName) {
		cy.get(CourseManagement.#courseTableName)
			.contains(courseName)
			.parents("tr")
			.within(() => {
				cy.get(CourseManagement.#courseTableEndSynchronizeButton).should(
					"not.exist"
				);
			});
	}

	clickStartSyncButtonOfCourse(courseName) {
		cy.get(CourseManagement.#courseTableName)
			.contains(courseName)
			.parents("tr")
			.within(() => {
				cy.get(CourseManagement.#courseTableStartSynchronizeButton)
					.should("be.visible")
					.click();
			});
	}

	clickStopSyncButtonOfCourse(courseName) {
		cy.get(CourseManagement.#courseTableName)
			.contains(courseName)
			.parents("tr")
			.within(() => {
				cy.get(CourseManagement.#courseTableEndSynchronizeButton)
					.should("be.visible")
					.click();
			});
	}
}

export default CourseManagement;

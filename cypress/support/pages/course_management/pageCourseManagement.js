"use strict";

class CourseManagement {
	static #createCourseAdminButton = '[data-testid="admin-courses-add-button"]'
	static #confirmDialogButton = '[data-testid="dialog-confirm"]'
	static #confirmDialogTitle = '[data-testid="dialog-title"]'
	static #confirmSyncDialogInfoText = '[data-testid="end-course-sync-dialog-info-text"]'
	static #courseTable = '[data-testid="admin-rooms-table"]'
	static #courseTableDeleteButton = '[data-testid="course-table-delete-btn"]'
	static #courseTableEditButton = '[data-testid="course-table-edit-btn"]'
	static #courseTableSynchronizeButton = '[data-testid="course-table-start-course-sync-btn"]'
	static #courseTableEndSynchronizeButton = '[data-testid="course-table-end-course-sync-btn"]'
	static #courseTableNew = '[data-testid="admin-rooms-table"]'
	static #currentYearTab = '[data-testid="admin-course-current-tab"]'
	static #previousYearsTab = '[data-testid="admin-course-archive-tab"]'

	isNewCourseAdministrationPage() {
		cy.url().should("include", "/administration/rooms/new");
	}

	isNotNewCourseAdministrationPage() {
		cy.url().should("not.include", "/administration/rooms/new");
	}

	clickCreateCourseAdminButton() {
		cy.get(CourseManagement.#createCourseAdminButton).click()
	}

	seeCourseTableContainsCourse(courseName) {
		cy.get(CourseManagement.#courseTable).find("td").contains(courseName)
			.should("be.visible");
	}

	doNotSeeCourseInTable(courseName) {
		cy.get(CourseManagement.#courseTable).find("td").contains(courseName)
			.should("not.exist");
	}

	clickDeleteButtonForCourse(courseName) {
		const courseNameData = cy.get(CourseManagement.#courseTable).find("td").contains(courseName)
			.should("be.visible");

		courseNameData
			.siblings("td")
			.eq(3)
			.find(CourseManagement.#courseTableDeleteButton)
			.should("exist")
			.click();
	}

	seeTableHas5Columns() {
		const tableHeader = cy.get(CourseManagement.#courseTableNew).find("th");
		tableHeader.should("have.length", 5);
	}

	see2Tabs() {
		cy.get(CourseManagement.#currentYearTab).should("exist");
		cy.get(CourseManagement.#previousYearsTab).should("exist");
	}

	seeNewCourseTableContainsCourseWithoutClass(courseName, teacherName) {
		const courseNameData = cy.get(CourseManagement.#courseTableNew).find("td").contains(courseName);

		courseNameData.should("be.visible");
		courseNameData
			.siblings("td")
			.eq(1)
			.should(($td) => {
				expect($td.text().trim()).to.equal("");
			});
		courseNameData
			.siblings("td")
			.eq(2)
			.should(($td) => {
				expect($td.text().trim()).to.equal(teacherName);
			});
	}

	seeCourseHas3ActiveActionItems(courseName) {
		const courseNameData = cy.get(CourseManagement.#courseTableNew).find("td").contains(courseName);

		const buttons = courseNameData.siblings("td").eq(3).find("a, button");

		buttons.should("have.length", 3);
		buttons.each(($btn) => {
			cy.wrap($btn).should("not.be.disabled");
		});
	}

	clickEditButtonForCourse(courseName) {
		const courseNameData = cy.get(CourseManagement.#courseTable).find("td").contains(courseName)
			.should("be.visible");

		courseNameData
			.siblings("td")
			.eq(3)
			.find(CourseManagement.#courseTableEditButton)
			.should("exist")
			.click();
	}

	clickSynchronizeButtonForCourse(courseName) {
		const courseNameData = cy.get(CourseManagement.#courseTable).find("td").contains(courseName)
			.should("be.visible");

		courseNameData
			.siblings("td")
			.eq(3)
			.find(CourseManagement.#courseTableSynchronizeButton)
			.should("exist")
			.click();
	}

	clickEndSynchronizeButtonForCourse(courseName) {
		const courseNameData = cy.get(CourseManagement.#courseTable).find("td").contains(courseName)
			.should("be.visible");

		courseNameData
			.siblings("td")
			.eq(3)
			.find(CourseManagement.#courseTableEndSynchronizeButton)
			.should("exist")
			.click();
	}

	seeCourseSynchronizedWithGroup(courseName, groupName) {
		const courseNameData = cy.get(CourseManagement.#courseTable).find("td").contains(courseName)
			.should("be.visible");

		courseNameData
			.siblings("td").eq(0)
			.should(($td) => {
				expect($td.text().trim()).to.equal(groupName);
			});
	}

	seeCourseNotSynchronized(courseName) {
		const courseNameData = cy.get(CourseManagement.#courseTable).find("td").contains(courseName)
			.should("be.visible");

		courseNameData
			.siblings("td").eq(0)
			.should(($td) => {
				expect($td.text().trim()).to.equal("");
			});
	}

	seeStartSynchronizeButtonForCourse(courseName) {
		const courseNameData = cy.get(CourseManagement.#courseTable).find("td").contains(courseName)
			.should("be.visible");

		courseNameData
			.siblings("td")
			.eq(3)
			.find(CourseManagement.#courseTableSynchronizeButton)
			.should("exist")
	}

	seeNoSynchronizeButtonForCourse(courseName) {

		const courseNameData = cy.get(CourseManagement.#courseTable).find("td").contains(courseName)
			.should("be.visible");

		courseNameData
			.siblings("td")
			.eq(3)
			.find(CourseManagement.#courseTableSynchronizeButton)
			.should("not.exist")
	}

	seeEndSynchronizeButtonForCourse(courseName) {
		const courseNameData = cy.get(CourseManagement.#courseTable).find("td").contains(courseName)
			.should("be.visible");

		courseNameData
			.siblings("td")
			.eq(3)
			.find(CourseManagement.#courseTableEndSynchronizeButton)
			.should("exist")
	}

	seeSynchronizationConfirmationModalTitle() {
		cy.get(CourseManagement.#confirmDialogTitle).should("be.visible");
	}

	seeSynchronizationInfoTextForCourseAndGroup(courseName, groupName) {
		cy.get(CourseManagement.#confirmSyncDialogInfoText)
			.should("contain.text", courseName)
			.should("contain.text", groupName)
	}

	clickConfirmSynchronizationButton() {
		cy.get(CourseManagement.#confirmDialogButton).click();
	}
}

export default CourseManagement

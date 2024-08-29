"use strict";

class CourseManagement {
	static #createCourseAdminButton = '[data-testid="admin-courses-add-button"]'
	static #courseTable = '[data-testid="admin-rooms-table"]'
	static #courseTableDeleteButton = '[data-testid="course-table-delete-btn"]'
	static #courseTableEditButton = '[data-testid="course-table-edit-btn"]'
	static #courseTableSynchronizeButton = '[data-testid="course-table-start-course-sync-btn"]'
	static #courseTableNew = '[data-testid="admin-rooms-table"]'
	static #currentYearTab = '[data-testid="admin-course-current-tab"]'
	static #previousYearsTab = '[data-testid="admin-course-archive-tab"]'

	isNewCourseAdministrationPage() {
		cy.url().should("include", "/administration/rooms/new");
	}

	clickCreateCourseAdminButton() {
		cy.get(CourseManagement.#createCourseAdminButton).click()
	}

	seeCourseTableContainsCourse(courseName) {
		cy.get(CourseManagement.#courseTable).find("td").contains(courseName)
			.should("be.visible");
	}

	clickDeleteButtonForCourse(courseName) {
		const courseNameData = cy.get(CourseManagement.#courseTable).find("td").contains(courseName)
			.should("be.visible");

		courseNameData
			.siblings("td")
			.eq(2)
			.find(CourseManagement.#courseTableDeleteButton)
			.should("exist")
			.click();
	}

	seeTableHas4Columns() {
		const tableHeader = cy.get(CourseManagement.#courseTableNew).find("th");
		tableHeader.should("have.length", 4);
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
			.eq(0)
			.should(($td) => {
				expect($td.text().trim()).to.equal("");
			});
		courseNameData
			.siblings("td")
			.eq(1)
			.should(($td) => {
				expect($td.text().trim()).to.equal(teacherName);
			});
	}

	seeCourseHas3ActiveActionItems(courseName) {
		const courseNameData = cy.get(CourseManagement.#courseTableNew).find("td").contains(courseName);

		const buttons = courseNameData.siblings("td").eq(2).find("a, button");

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
			.eq(2)
			.find(CourseManagement.#courseTableEditButton)
			.should("exist")
			.click();
	}

	clickSynchronizeButtonForCourse(courseName) {
		const courseNameData = cy.get(CourseManagement.#courseTable).find("td").contains(courseName)
			.should("be.visible");

		courseNameData
			.siblings("td")
			.eq(2)
			.find(CourseManagement.#courseTableSynchronizeButton)
			.should("exist")
			.click();
	}

	seeNoSynchronizeButtonForCourse(courseName) {
		//just temporary
		cy.reload();
		cy.wait(5000);

		const courseNameData = cy.get(CourseManagement.#courseTable).find("td").contains(courseName)
			.should("be.visible");

		courseNameData
			.siblings("td")
			.eq(2)
			.find(CourseManagement.#courseTableSynchronizeButton)
			.should("not.exist")
	}
}

export default CourseManagement

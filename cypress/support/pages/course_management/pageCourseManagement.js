"use strict";

class CourseManagement {
	static #createCourseAdminButton = '[data-testid="admin-courses-add-button"]'
	static #courseTable = '[data-testid="admin-rooms-table"]'
	static courseTableDeleteButton = '[data-testid="course-table-delete-btn"]'

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
			.find(CourseManagement.courseTableDeleteButton)
			.should("exist")
			.click();
	}
}

export default CourseManagement

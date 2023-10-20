'use strict'

class Groups {
	static #cretaeClass = '[data-testid="createClass"]'
	static #confirmClassCreate = '[data-testid="confirmClassCreate"]'
	static #manageConfirm = '[data-testid="manage-confirm"]'
	static #classTitleNew = '[data-testid="admin-class-title"]'
	static #classTableNew = '[data-testid="admin-class-table"]'
	static #manageClassIcon = '[data-testid="class-table-manage-btn"]'

	clickCreateClass() {
		cy.get(Groups.#cretaeClass)
			.click()
	}

	clickConfirmCreateClass() {
		cy.get(Groups.#confirmClassCreate)
			.click()
	}

	clickConfirmManageClass() {
		cy.get(Groups.#manageConfirm)
			.click()
	}

	clickCancelManageClass() {
		cy.get('.btn-cancel')
			.click()
	}

	clickManageClassIcon() {
		cy.get(Groups.#manageClassIcon)
			.first().click()
	}

	isNewClassAdministrationPage() {
		cy.url().should('include', '/administration/groups/classes')
	}

	isManageClassPage() {
		cy.url().should('include', '/administration/classes')
		cy.url().should('include', '/manage')
	}

	seeNewClassPageTitle() {
		cy.get(Groups.#classTitleNew).should('exist')
	}

	newClassTableContainsClass(className, sourceName) {
		const classNameData = cy.get(Groups.#classTableNew).find('td').contains(className);

		classNameData.should('be.visible');
		classNameData.siblings('td').eq(0).should(($td) => {
			expect($td.text().trim()).to.equal(sourceName);
		});
	}

	groupsHaveNoActionItems(groupName) {
		const classNameData = cy.get(Groups.#classTableNew).find('td').contains(groupName);

		classNameData.siblings('td').eq(2).should('be.empty');
	}

	classesHave4ActiveActionItems(className) {
		const classNameData = cy.get(Groups.#classTableNew).find('td').contains(className);

		const buttons = classNameData.siblings('td').eq(2).find('a, button');

		buttons.should('have.length', 4);
		buttons.each(($btn) => {
			cy.wrap($btn).should('not.be.disabled');
		})
	}
}

export default Groups

'use strict'

class Groups {
	static #cretaeClass = '[data-testid="createClass"]'
	static #confirmClassCreate = '[data-testid="confirmClassCreate"]'
	static #manageConfirm = '[data-testid="manage-confirm"]'
	static #classTitleNew = '[data-testid="admin-class-title"]'
	static #classTableNew = '[data-testid="admin-class-table"]'
	static #manageClassButton = '[data-testid="class-table-manage-btn"]'
	static #cancelModal = '[data-testid="modal_content"]'
	static #editClassButton = '[data-testid="class-table-edit-btn"]'

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

	clickCancelButton() {
		cy.get('.btn-cancel')
			.click()
	}

	clickManageClassButton() {
		cy.get(Groups.#manageClassButton)
			.first().click()
	}

	clickConfirmButton() {
		cy.get('.historyback')
			.click()
	}

	clickEditClassButton() {
		cy.get(Groups.#editClassButton)
			.first().click()
	}

	clickNameSuffixField() {
		cy.get('[name=classsuffix]')
			.click()
	}

	clickSaveChangesButton() {
		cy.get('.btn-primary')
			.eq(0)
			.should('not.be.disabled')
			.click()
	}

	isNewClassAdministrationPage() {
		cy.url().should('include', '/administration/groups/classes')
	}

	isManageClassPage() {
		cy.url().should('include', '/administration/classes')
		cy.url().should('include', '/manage')
	}

	isEditClassPage() {
		cy.url().should('include', '/administration/classes')
		cy.url().should('include', '/edit')
	}

	isCancelModal() {
		cy.get(Groups.#cancelModal).should('exist')
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

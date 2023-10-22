'use strict'

class Groups {
	static #createClass = '[data-testid="createClass"]';
	static #confirmClassCreate = '[data-testid="confirmClassCreate"]';
	static #manageConfirm = '[data-testid="manage-confirm"]';
	static #classTitleNew = '[data-testid="admin-class-title"]';
	static #classTableNew = '[data-testid="admin-class-table"]';
	static #manageClassButton = '[data-testid="legacy-class-table-manage-btn"]';
	static #cancelModal = '[data-testid="modal_content"]';
	static #editClassButton = '[data-testid="class-table-edit-btn"]';
	static #createSuccessorButton = '[data-testid="class-table-successor-btn"]';
	static #deleteClassButton = '[data-testid="class-table-delete-btn"]';
	static #deleteDialog = '.v-dialog--active';
	static #deleteDialogCancel = '[data-testid="dialog-cancel"]';
	static #deleteDialogConfirm = '[data-testid="dialog-confirm"]';

	clickCreateClass() {
		cy.get(Groups.#createClass)
			.click();
	}

	clickConfirmCreateClass() {
		cy.get(Groups.#confirmClassCreate)
			.click();
	}

	clickConfirmManageClass() {
		cy.get(Groups.#manageConfirm)
			.click();
	}

	clickCancelButton() {
		cy.get('.btn-cancel')
			.click();
	}

	clickManageClassButton() {
		cy.get(Groups.#manageClassButton)
			.first().click();
	}

	clickConfirmButton() {
		cy.get('.historyback')
			.click();
	}

	clickEditClassButton() {
		cy.get(Groups.#editClassButton)
			.first().click();
	}

	clickNameSuffixField() {
		cy.get('[name=classsuffix]')
			.click();
	}

	clickCreateSuccessorButton() {
		cy.get(Groups.#createSuccessorButton)
			.first().click();
	}

	clickSaveChangesButton() {
		cy.get('.btn-primary')
			.eq(0)
			.should('not.be.disabled')
			.click();
	}

	clickConfirmSuccessor() {
		cy.get('.btn-primary')
			.eq(0)
			.click();
	}

	clickDeleteButton() {
		cy.get(Groups.#deleteClassButton)
			.first().click();
	}

	clickCancelDeleteDialogButton() {
		cy.get(Groups.#deleteDialogCancel)
			.click();
	}

	clickConfirmDeleteDialogButton() {
		cy.get(Groups.#deleteDialogConfirm)
			.click();
	}

	isNewClassAdministrationPage() {
		cy.url().should('include', '/administration/groups/classes');
	}

	isManageClassPage() {
		cy.url().should('include', '/administration/classes');
		cy.url().should('include', '/manage');
	}

	isEditClassPage() {
		cy.url().should('include', '/administration/classes');
		cy.url().should('include', '/edit');
	}

	isCancelModal() {
		cy.get(Groups.#cancelModal).should('exist');
	}

	isCreateSuccessorPage() {
		cy.url().should('include', '/administration/classes');
		cy.url().should('include', '/createSuccessor');
	}

	seeNewClassPageTitle() {
		cy.get(Groups.#classTitleNew).should('exist');
	}

	isSuccessorButtonDisabled() {
		cy.get(Groups.#createSuccessorButton)
			.first().should('have.class', 'v-btn--disabled');
	}

	isDeleteDialog() {
		cy.get(Groups.#deleteDialog)
			.should('be.visible');
	}

	newClassTableContainsClass(className, sourceName) {
		const classNameData = cy.get(Groups.#classTableNew).find('td').contains(className);

		classNameData.should('be.visible');
		classNameData.siblings('td').eq(0).should(($td) => {
			expect($td.text().trim()).to.equal(sourceName);
		});
	}

	groupsHaveAManageButton(groupName) {
		const classNameData = cy.get(Groups.#classTableNew).find('td').contains(groupName);

		classNameData.siblings('td').eq(2).find('a[data-testid="class-table-members-manage-btn"]')
			.should('exist');
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

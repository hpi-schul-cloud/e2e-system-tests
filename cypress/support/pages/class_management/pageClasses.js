'use strict'

class Classes {
	static #createClass = '[data-testid="admin-class-add-button"]';
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
	static #adminGroupTitle = '[data-testid="admin-class-title"]';
	static #groupMemberTable = '[data-testid="class-members-table"]';
	static #classMemberInfoBox = '[data-testid="class-members-info-box"]';
	static #classMemberInfoBoxText = '[data-testid="class-members-info-box-text"]';
	static #manageGroupButton = '[data-testid="class-table-members-manage-btn"]';

	clickCreateClass() {
		cy.get(Classes.#createClass)
			.click();
	}

	clickConfirmCreateClass() {
		cy.get(Classes.#confirmClassCreate)
			.click();
	}

	clickConfirmManageClass() {
		cy.get(Classes.#manageConfirm)
			.click();
	}

	clickCancelButton() {
		cy.get('.btn-cancel')
			.click();
	}

	clickManageClassButton() {
		cy.get(Classes.#manageClassButton)
			.first().click();
	}

	clickConfirmButton() {
		cy.get('.historyback')
			.click();
	}

	clickEditClassButton() {
		cy.get(Classes.#editClassButton)
			.first().click();
	}

	clickNameSuffixField() {
		cy.get('[name=classsuffix]')
			.click();
	}

	clickCreateSuccessorButton() {
		cy.get(Classes.#createSuccessorButton)
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
		cy.get(Classes.#deleteClassButton)
			.first().click();
	}

	clickCancelDeleteDialogButton() {
		cy.get(Classes.#deleteDialogCancel)
			.click();
	}

	clickConfirmDeleteDialogButton() {
		cy.get(Classes.#deleteDialogConfirm)
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
		cy.get(Classes.#cancelModal).should('exist');
	}

	isCreateSuccessorPage() {
		cy.url().should('include', '/administration/classes');
		cy.url().should('include', '/createSuccessor');
	}

	seeNewClassPageTitle() {
		cy.get(Classes.#classTitleNew).should('exist');
	}

	isSuccessorButtonDisabled() {
		cy.get(Classes.#createSuccessorButton)
			.first().should('have.class', 'v-btn--disabled');
	}

	isDeleteDialog() {
		cy.get(Classes.#deleteDialog)
			.should('be.visible');
	}

	isCreateClassPage() {
		cy.url().should('include', '/administration/classes');
		cy.url().should('include', '/create');
	}

	seeNewClassTableContainsClass(className, sourceName) {
		const classNameData = cy.get(Classes.#classTableNew).find('td').contains(className);

		classNameData.should('be.visible');
		classNameData.siblings('td').eq(0).should(($td) => {
			expect($td.text().trim()).to.equal(sourceName);
		});
	}

	seeGroupsHaveAManageButton(groupName) {
		const classNameData = cy.get(Classes.#classTableNew).find('td').contains(groupName);

		classNameData.siblings('td').eq(3).find('a[data-testid="class-table-members-manage-btn"]')
			.should('exist');
	}

	seeClassesHave4ActiveActionItems(className) {
		const classNameData = cy.get(Classes.#classTableNew).find('td').contains(className);

		const buttons = classNameData.siblings('td').eq(3).find('a, button');

		buttons.should('have.length', 4);
		buttons.each(($btn) => {
			cy.wrap($btn).should('not.be.disabled');
		})
	}

	seeManageGroupPage(){
		cy.url().should('include', '/administration/groups/classes/');
	}

	seeManageGroupPageTitle() {
		cy.get(Classes.#adminGroupTitle).should('be.visible')
	}

	seeGroupMemberTable() {
		cy.get(Classes.#groupMemberTable).should('be.visible')
	}

	seeGroupMemberTableContainsMember(role, lastName){
		const groupMemberData = cy.get(Classes.#groupMemberTable).find('td').contains(lastName);

		groupMemberData.should('be.visible');
		groupMemberData.siblings('td').eq(1).should(($td) => {
			expect($td.text().trim()).to.equal(role);
		});
	}

	seeClassMemberInfoBox() {
		cy.get(Classes.#classMemberInfoBox).should('be.visible')
	}

	seeClassMemberInfoBoxText() {
		cy.get(Classes.#classMemberInfoBoxText).should('be.visible')
	}

	clickManageGroupButton(){
		cy.get(Classes.#manageGroupButton)
			.first().click();
	}

}

export default Classes

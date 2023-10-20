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

	newClassTableContainsClassesAndGroups() {
		cy.get(Groups.#classTableNew)
		.find('tbody td:nth-child(2)')
		.each(($td) => {
			const text = $td.text().trim();
			if (text === '' || text === 'moin.schule') {
				cy.wrap($td).should('be.visible');
			}
		});
	}


	groupsHaveNoActionIcons() {
		const entries = document.querySelector('[data-testid="admin-class-table"]').firstChild.firstChild.querySelector('tbody').children
		const group = entries.filter((entry) => entry.children[1].innerText === "moin.schule")

		expect(group.children[3].children.length).to.equal(0)
	}

	classesHave4ActiveActionIcons() {
		const entries = document.querySelector('[data-testid="admin-class-table"]').firstChild.firstChild.querySelector('tbody').children
		const clazz = entries.filter((entry) => entry.children[1].innerText === "")
		const actionIcons = clazz.children[3].children

		expect(actionIcons.length).to.equal(4)

		let activeIcons = 0
		actionIcons.forEach((icon) => {
			if (icon.attributes.disabled === false) {
				activeIcons = activeIcons + 1
			}
		})
		expect(activeIcons).to.equal(4)
	}
}

export default Groups

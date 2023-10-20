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

	newClassTableContainsClassesAndGroups() {
		const entries = cy.get(`${Groups.#classTableNew}>div>table>tbody`).children()
		let classes = 0
		let groups = 0
		console.log(entries)
		entries.each((entry) => {
			console.log(entry)
			if (entry.find('td').eq(1).innerText === "moin.schule") {
				groups = groups + 1
			}

			if (entry.find('td').eq(1).innerText === "") {
				classes = classes + 1
			}
			console.log(classes, groups)
		})
		expect(classes * groups).to.be.greaterThan(0)
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

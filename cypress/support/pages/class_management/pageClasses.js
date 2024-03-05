'use strict'

class Classes {
  static #createClass = '[data-testid="admin-class-add-button"]'
  static #confirmClassCreate = '[data-testid="confirmClassCreate"]'
  static #manageConfirm = '[data-testid="manage-confirm"]'
  static #classTitleNew = '[data-testid="admin-class-title"]'
  static #classTableNew = '[data-testid="admin-class-table"]'
  static #nextYearTab = '[data-testid="admin-class-next-year-tab"]'
  static #currentYearTab = '[data-testid="admin-class-current-year-tab"]'
  static #previousYearsTab = '[data-testid="admin-class-previous-years-tab"]'
  static #manageClassButton = '[data-testid="legacy-class-table-manage-btn"]'
  static #cancelModal = '[data-testid="modal_content"]'
  static #editClassButton = '[data-testid="class-table-edit-btn"]'
  static #createSuccessorButton = '[data-testid="class-table-successor-btn"]'
  static #deleteClassButton = '[data-testid="class-table-delete-btn"]'
  static #deleteDialog = '[data-testid="dialog-title"]'
  static #deleteDialogCancel = '[data-testid="dialog-cancel"]'
  static #deleteDialogConfirm = '[data-testid="dialog-confirm"]'
  static #adminGroupTitle = '[data-testid="admin-class-title"]'
  static #groupMemberTable = '[data-testid="class-members-table"]'
  static #classMemberInfoBox = '[data-testid="class-members-info-box"]'
  static #classMemberInfoBoxText = '[data-testid="class-members-info-box-text"]'
  static #manageGroupButton = '[data-testid="class-table-members-manage-btn"]'
  static #adminClassNavigationSidebarCard = '[data-testid="Klassen"]'
  static #adminClassNavigationCard = '[data-testid="administrate_classes"]'
  static #legacyClassTable = '[data-testid="table_container"]'

  clickCreateClass () {
    cy.get(Classes.#createClass).click()
  }

  clickConfirmCreateClass () {
    cy.get(Classes.#confirmClassCreate).click()
  }

  clickConfirmManageClass () {
    cy.get(Classes.#manageConfirm).click()
  }

  clickCancelButton () {
    cy.get('.btn-cancel').click()
  }

  clickManageClassButton () {
    cy.get(Classes.#manageClassButton).first().click()
  }

  clickConfirmButton () {
    cy.get('.historyback').click()
  }

  clickEditClassButton () {
    cy.get(Classes.#editClassButton).first().click()
  }

  clickNameSuffixField () {
    cy.get('[name=classsuffix]').click()
  }

  clickCreateSuccessorButton () {
    cy.get(Classes.#createSuccessorButton).first().click()
  }

  clickSaveChangesButton () {
    cy.get('.btn-primary').eq(0).should('not.be.disabled').click()
  }

  clickConfirmSuccessor () {
    cy.get('.btn-primary').eq(0).click()
  }

  clickDeleteButton () {
    cy.get(Classes.#deleteClassButton).first().click()
  }

  clickCancelDeleteDialogButton () {
    cy.get(Classes.#deleteDialogCancel).click()
  }

  clickConfirmDeleteDialogButton () {
    cy.get(Classes.#deleteDialogConfirm).click()
  }

  clickManageGroupButton () {
    cy.get(Classes.#manageGroupButton).first().realClick()
    cy.wait(5000)
    cy.url().should('include', '/administration/groups/classes')
  }

  clickNextYearTab () {
    cy.get(Classes.#nextYearTab).click()
  }

  isNewClassAdministrationPage () {
    cy.url().should('include', '/administration/groups/classes')
  }

  isManageClassPage () {
    cy.url().should('include', '/administration/classes')
    cy.url().should('include', '/manage')
  }

  isEditClassPage () {
    cy.url().should('include', '/administration/classes')
    cy.url().should('include', '/edit')
  }

  isCancelModal () {
    cy.get(Classes.#cancelModal).should('exist')
  }

  isCreateSuccessorPage () {
    cy.url().should('include', '/administration/classes')
    cy.url().should('include', '/createSuccessor')
  }

  seeNewClassPageTitle () {
    cy.get(Classes.#classTitleNew).should('exist')
  }

  isSuccessorButtonDisabled () {
    cy.get(Classes.#createSuccessorButton)
      .first()
      .should('have.class', 'v-btn--disabled')
  }

  isDeleteDialog () {
    cy.get(Classes.#deleteDialog).should('be.visible')
  }

  isCreateClassPage () {
    cy.url().should('include', '/administration/classes')
    cy.url().should('include', '/create')
  }

  seeNewClassTableContainsClass (className, sourceName) {
    const classNameData = cy
      .get(Classes.#classTableNew)
      .find('td')
      .contains(className)

    classNameData.should('be.visible')
    classNameData
      .siblings('td')
      .eq(0)
      .should($td => {
        expect($td.text().trim()).to.equal(sourceName)
      })
  }

  seeGroupsHaveAManageButton (groupName) {
    const classNameData = cy
      .get(Classes.#classTableNew)
      .find('td')
      .contains(groupName)

    classNameData
      .siblings('td')
      .eq(3)
      .find('a[data-testid="class-table-members-manage-btn"]')
      .should('exist')
  }

  seeClassesHave4ActiveActionItems (className) {
    const classNameData = cy
      .get(Classes.#classTableNew)
      .find('td')
      .contains(className)

    const buttons = classNameData.siblings('td').eq(3).find('a, button')

    buttons.should('have.length', 4)
    buttons.each($btn => {
      cy.wrap($btn).should('not.be.disabled')
    })
  }

  seeTableHas5Columns () {
    const tableHeader = cy.get(Classes.#classTableNew).find('th')

    tableHeader.should('have.length', 5)
  }

  see3Tabs () {
    cy.get(Classes.#nextYearTab).should('exist')
    cy.get(Classes.#currentYearTab)
      .should('exist')
      .and('have.class', 'v-tab v-tab--active')
    cy.get(Classes.#previousYearsTab).should('exist')
  }

  seeManageGroupPage () {
    cy.url().should('include', '/administration/groups/classes/')
  }

  seeManageGroupPageTitle () {
    cy.get(Classes.#adminGroupTitle).should('be.visible')
  }

  seeGroupMemberTable () {
    cy.get(Classes.#groupMemberTable).should('be.visible')
  }

  seeGroupMemberTableContainsMember (role, lastName) {
    const groupMemberData = cy
      .get(Classes.#groupMemberTable)
      .find('td')
      .contains(lastName)

    groupMemberData.should('be.visible')
    groupMemberData
      .siblings('td')
      .eq(1)
      .should($td => {
        expect($td.text().trim()).to.equal(role)
      })
  }

  seeClassMemberInfoBox () {
    cy.get(Classes.#classMemberInfoBox).should('be.visible')
  }

  seeClassMemberInfoBoxText () {
    cy.get(Classes.#classMemberInfoBoxText).should('be.visible')
  }

  seeNoNewClassAdministrationPage () {
    cy.get(Classes.#adminClassNavigationSidebarCard).should(
      'not.have.attr',
      'href',
      '/administration/groups/classes'
    )
    cy.get(Classes.#adminClassNavigationCard).should(
      'not.have.attr',
      'data-loclink',
      '/administration/groups/classes'
    )
  }

  seeNoSourceHeader () {
    cy.get(Classes.#legacyClassTable).find('th').should('not.contain', 'source')
  }
}

export default Classes

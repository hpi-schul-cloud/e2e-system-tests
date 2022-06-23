'use strict'

class Management {

  static #fabButton = '#fab'
  static #createUserButton = '.v-btn--router'
  static #firstNameCreationForm = '[data-testid="input_create-user_firstname"]'
  static #lastNameCreationForm = '[data-testid="input_create-user_lastname"]'
  static #emailCreationForm = '[data-testid="input_create-user_email"]'
  static #addButton = '[data-testid="button_create-user_submit"]'
  static #searchbar = '.core > [data-testid="searchbar"]'
  static #editStudentButton = '[data-testid="edit_student_button"]'
  static #editTeacherButton = '[data-testid="edit_teacher_button"]'
  static #firstNameEditForm = "input[name='firstName']"
  static #lastNameEditForm = "input[name='lastName']"
  static #emailEditForm = "input[name='email']"
  static #submitButton = '[data-testid="button_save_user"]'
  static #deleteButton = '[data-testid="button_delete_user"]'
  static #cancelButtonConfirmation = '[data-testid="btn-cancel"]'
  static #deleteButtonCancel = '.cancel-modal button.historyback'
  static #deleteButtonConfirmation = '[data-testid="btn-submit"]'
  static #newSchoolAdminPageButton = '[data-testid="button_new_admin_page"]'
  static #chatToggleSwitch = '.rocketchat-switch'
  static #videoconferenceToggleSwitch = '.videoconference-switch'
  static #saveGeneralSettingsButton = '.my-5'
  static #tableContents = '[data-testid="table-data-body"]'

  clickOnFAB() {
    cy.get(Management.#fabButton).click()
    cy.get(Management.#createUserButton).click()
  }

  fillStudentCreationForm() {
    cy.get(Management.#firstNameCreationForm).type('Adam')
    cy.get(Management.#lastNameCreationForm).type('Riese')
    cy.get(Management.#emailCreationForm).type('adam.riese@example.com')
  }

  fillTeacherCreationForm() {
    cy.get(Management.#firstNameCreationForm).type('Adam')
    cy.get(Management.#lastNameCreationForm).type('Rose')
    cy.get(Management.#emailCreationForm).type('adam.rose@example.com')
  }

  clickOnAddButton() {
    cy.get(Management.#addButton).click()
  }

  enterNameForSearch() {
    cy.get(Management.#searchbar).type('Adam')
  }

  clickEditStudentButton() {
    cy.get(Management.#editStudentButton).eq(0).click()
  }

  clickEditTeacherButton() {
    cy.get(Management.#editTeacherButton).eq(0).click()
  }

  changeStudentUserInformation() {
    cy.get(Management.#firstNameEditForm).clear()
    cy.get(Management.#firstNameEditForm).type('Alex')
    cy.get(Management.#lastNameEditForm).clear()
    cy.get(Management.#lastNameEditForm).type('Abramovic')
    cy.get(Management.#emailEditForm).clear()
    cy.get(Management.#emailEditForm).type('alex.abramovic@example')
  }

  changeTeacherUserInformation() {
    cy.get(Management.#firstNameEditForm).clear()
    cy.get(Management.#firstNameEditForm).type('Amber')
    cy.get(Management.#lastNameEditForm).clear()
    cy.get(Management.#lastNameEditForm).type('Adams Young')
    cy.get(Management.#emailEditForm).clear()
    cy.get(Management.#emailEditForm).type('amber.adams-young@example')
  }

  clickSaveButton() {
    cy.get(Management.#submitButton).eq(0).click()
  }

  clickDeleteButton() {
    cy.get(Management.#deleteButton).click()
  }

  clickDeleteButtonInPopup() {
    cy.get(Management.#deleteButtonConfirmation).click({ multiple: true, force:true})
  }

  clickNewAdminPageButton() {
    cy.get(Management.#newSchoolAdminPageButton).click()
    cy.url().should('include', '/administration/school-settings')
  }

  clickVideoconferenceToggleSwitch() {
    cy.intercept('/api/v1/federalStates/*').as('federalStates')
    cy.wait('@federalStates')
    cy.get(Management.#videoconferenceToggleSwitch)
      .find('input')
      .click({ force: true })
  }

  clickSaveGeneralSettingsButton() {
    cy.get(Management.#saveGeneralSettingsButton).click({ multiple: true, force: true })
  }

  createdUserIsVisibleInTable() {
    cy.get(Management.#searchbar).clear(Management.#searchbar)
    cy.get(Management.#tableContents)
    cy.contains('Adam')
  }

  editedUserIsVisibleInTable() {
    cy.get(Management.#searchbar).clear()
    cy.get(Management.#tableContents)
    cy.contains(/Alex|Amber/g)
  }

  createdUserIsNotVisibleInTable() {
    cy.get(Management.#searchbar).clear()
    cy.get(Management.#tableContents)
    cy.contains('Adam').should('not.exist')
    cy.contains('Alex').should('not.exist')
  }

  clickChatToggleSwitch() {
    ///cy.intercept('/api/v1/federalStates/*').as('federalStates')
    //cy.wait('@federalStates')
    //cy.get(Management.#chatToggleSwitch).find('input').click({ force: true })
    cy.contains('Chatfunktion aktivieren').click()
    //need to find out current state and decide if state needs to be changed
    //if current state aria-checked="true" and I want it activated then I don't need to click
    //if current state aria-checked="false" and I want it activated then I need to click
    /*
    it('Enable', function () {
    cy.get('input[aria-label="toggle switch"]').eq(2).then(($ele) => { //#input-130 für Video, input-125 für Chat
    if ($ele.is(':true')) {
        return
    } else {
        cy.wrap($ele).click()
        //cy.get(Administration.#chatToggleSwitch)
    }
    })
})
it('Disable', function () {
cy.get('input[aria-label="toggle switch"]').eq(2).then(($ele) => {
    if ($ele.is(':true')) {
        cy.wrap($ele).click()
        //cy.get(Administration.#chatToggleSwitch)
    } else {
        return
    }
})
})*/
  }
}
export default Management
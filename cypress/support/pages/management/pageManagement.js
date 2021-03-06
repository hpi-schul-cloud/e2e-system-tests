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
  static #firstNameEditForm = "input[name='firstName']"
  static #lastNameEditForm = "input[name='lastName']"
  static #emailEditForm = "input[name='email']"
  static #submitButton = '[data-testid="button_save_user"]'
  static #deleteButton = '[data-testid="button_delete_user"]'
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

  fillUserCreationForm(forename, surname, email) {
    cy.get(Management.#firstNameCreationForm).type(forename)
    cy.get(Management.#lastNameCreationForm).type(surname)
    cy.get(Management.#emailCreationForm).type(email)
  }

  clickOnAddButton() {
    cy.get(Management.#addButton).click()
  }

  enterNameForSearch(keyword) {
    cy.get(Management.#searchbar).type(keyword)
  }

  clickEditStudentButton(email) {
    cy.contains('td', email)
      .siblings()
      .find('a')
      .should('have.attr', 'data-testid', 'edit_student_button')
      .click()
  }

  clickEditTeacherButton(email) {
    cy.contains('td', email)
      .siblings()
      .find('a')
      .should('have.attr', 'data-testid', 'edit_teacher_button')
      .click()
  }

  changeUsername(firstname, surname) {
    cy.get(Management.#firstNameEditForm).clear()
    cy.get(Management.#firstNameEditForm).type(firstname)
    cy.get(Management.#lastNameEditForm).clear()
    cy.get(Management.#lastNameEditForm).type(surname)
  }

  changeEmail(newEmail) {
    cy.get(Management.#emailEditForm).clear()
    cy.get(Management.#emailEditForm).type(newEmail)
  }

  clickSaveButton() {
    cy.get(Management.#submitButton).eq(0).click()
  }

  deleteUser(email){
    cy.get(Management.#emailEditForm).should('have.value', email).then(($matchEmail) => {
      this.clickDeleteButton()
    })
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

  clickVideoConferenceToggleSwitch() {
    cy.intercept('/api/v1/federalStates/*').as('federalStates')
    cy.wait('@federalStates')
    cy.get(Management.#videoconferenceToggleSwitch)
      .find('input')
      .click({ force: true })
  }

  clickSaveGeneralSettingsButton() {
    cy.get(Management.#saveGeneralSettingsButton).click({ multiple: true, force: true })
  }

  userIsVisibleInTable(email) {
    cy.get(Management.#searchbar).clear(Management.#searchbar)
    cy.get(Management.#tableContents)
    cy.contains(email)
  }

  userIsNotVisibleInTable(email) {
    cy.get(Management.#searchbar).clear(Management.#searchbar)
    cy.get(Management.#tableContents)
    cy.contains(email).should('not.exist')
  }

  clickChatToggleSwitch() {
    cy.intercept('/api/v1/federalStates/*').as('federalStates')
    cy.wait('@federalStates')
    cy.get(Management.#chatToggleSwitch).find('input').click({ force: true })
  }
}
export default Management
'use strict'

class Management {
  static #fabButton = '#fab'
  static #addStudentButton = '[data-testid="fab_button_add_students"]'
  static #addTeacherButton = '[data-testid="fab_button_add_teachers"]'
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
  static #manageSchoolCard = '[data-testid="school_administration_card"]'
  static #oldAdminPageVideoChatCheckBox ='[data-testid="school-administration-video-conference-checkbox"]'
  static #saveGeneralAdminSetting = '[data-testid="school-administration-save-general-setting"]'
  static #administrationOverviewNavigationButton = '[data-testid="Verwaltung"]'
  static #studentAdministrationNavigationButton = '[data-testid="Schüler:innen"]'
  static #teacherAdministrationNavigationButton = '[data-testid="Lehrkräfte"]'
  static #courseAdministrationNavigationButton = '[data-testid="Kurse"]'
  static #classAdministrationNavigationButton = '[data-testid="Klassen"]'
  static #teamAdministrationNavigationButton = '[data-testid="Teams"]'
  static #schoolAdministrationNavigationButton = '[data-testid="Schule"]'
  static #studentTeamCheckbox = '[data-testid="student_team_checkbox"]'
  static #submitButtonTeamsAdmin = '[data-testid="button_save_team_administration"]'


  disableTeamsVideoConferenceByAdmin () {
    cy.get(Management.#oldAdminPageVideoChatCheckBox)
      .uncheck()
  }

  clickOnAdminSettingsSave () {
    cy.get(Management.#saveGeneralAdminSetting)
      .click()
  }

  enableTeamsVideoConferenceByAdmin () {
    cy.get(Management.#oldAdminPageVideoChatCheckBox)
      .check()
  }

  clickOnManageSchoolCard () {
    cy.get(Management.#manageSchoolCard)
      .click()
  }

  clickAllowStudentsTeamCheckbox () {
    cy.get(Management.#studentTeamCheckbox)
      .as('checkbox')
      .invoke('is', ':checked')
      .then(checked => {
        if (checked) {
        } else {
          cy
            .get('@checkbox')
            .check();
        }
      })
  }

  clickSaveButtonToAllowStudentCreateTeam () {
    cy.get(Management.#submitButtonTeamsAdmin)
      .eq(0)
      .click()
  }

  seeStudentTeamsAllowed () {
    cy.get(Management.#studentTeamCheckbox).should('be.checked')
  }

  navigateToAdministration() {
    cy.get(Management.#administrationOverviewNavigationButton).click()
    cy.url().should('include', '/administration')
  }

  navigateToStudentAdministration() {
    cy.get(Management.#studentAdministrationNavigationButton)
      .click()
    cy.url()
      .should('include', '/administration/students')
  }

  navigateToTeacherAdministration() {
    cy.get(Management.#teacherAdministrationNavigationButton).click()
    cy.url().should('include', '/administration/teachers')
  }

  navigateToCourseAdministration() {
    cy.get(Management.#courseAdministrationNavigationButton).click()
    cy.url().should('include', '/administration/courses')
  }

  navigateToClassAdministration() {
    cy.get(Management.#classAdministrationNavigationButton).click()
    cy.url().should('include', '/administration/classes')
  }

  navigateToTeamAdministration() {
    cy.get(Management.#teamAdministrationNavigationButton).eq(1).click()
    cy.url().should('include', '/administration/teams')
  }

  navigateToSchoolAdministration() {
    cy.get(Management.#schoolAdministrationNavigationButton).click()
    cy.url().should('include', '/administration/school')
  }

  clickOnFAB () {
    cy.get(Management.#fabButton).click()
  }

  clickOnAddStudentInFAB () {
    cy.get(Management.#addStudentButton).click({force: true})
  }

  clickOnAddTeacherInFAB () {
    cy.get(Management.#addTeacherButton).click()
  }

  fillUserCreationForm (forename, surname, email) {
    cy.get(Management.#firstNameCreationForm).type(forename)
    cy.get(Management.#lastNameCreationForm).type(surname)
    cy.get(Management.#emailCreationForm).type(email)
  }

  clickOnAddButton (role) {
    if (!(role == 'student')) {
      cy.intercept('POST', '**/teachers').as('post_role_api')
      cy.intercept('GET', '**/teachers**').as('get_roles_api')
    } else {
      cy.intercept('POST', '**/students').as('post_role_api')
      cy.intercept('GET', '**/students**').as('get_roles_api')
    }
    cy.get(Management.#addButton)
      .click()
    cy.wait(['@post_role_api', '@classes_api', '@get_roles_api'], {
      timeout: 10000
    }).then(interceptions => {
      expect(interceptions[0].response.statusCode).to.equal(201)
      expect(interceptions[1].response.statusCode).to.equal(200)
      expect(interceptions[2].response.statusCode).to.equal(200)
      expect(interceptions[2].request.url).to.include('/api/v1/users/admin')
    })
  }

  enterNameForSearch (role, keyword) {
    if (!(role == 'student')) {
      cy.intercept('**/teachers?**').as('search_api')
    } else {
      cy.intercept('**/students?**').as('search_api')
    }
    cy.get(Management.#searchbar).type(keyword)
    cy.wait('@search_api')
      .its('response.statusCode')
      .should('eq', 200)
  }

  clickEditStudentButton (email) {
    cy.contains('td', email)
      .siblings()
      .find('a')
      .should('have.attr', 'data-testid', 'edit_student_button')
      .click()
      .wait([
        '@alerts_api'
      ])
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })
  }

  clickEditTeacherButton (email) {
    cy.contains('td', email)
      .siblings()
      .find('a')
      .should('have.attr', 'data-testid', 'edit_teacher_button')
      .click()
      .wait([
        '@alerts_api'
      ])
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })
  }

  changeUsername (firstname, surname) {
    cy.get(Management.#firstNameEditForm).clear()
    cy.get(Management.#firstNameEditForm).type(firstname)
    cy.get(Management.#lastNameEditForm).clear()
    cy.get(Management.#lastNameEditForm).type(surname)
  }

  changeEmail (newEmail) {
    cy.get(Management.#emailEditForm).clear()
    cy.get(Management.#emailEditForm).type(newEmail)
  }

  clickSaveButton () {
    cy.get(Management.#submitButton)
      .eq(0)
      .click()
  }

  deleteUser (email) {
    cy.get(Management.#emailEditForm)
      .should('have.value', email)
      .then($matchEmail => {
        this.clickDeleteButton()
      })
  }

  clickDeleteButton () {
    cy.get(Management.#deleteButton).click()
  }

  clickDeleteButtonInPopup () {
    cy.get(Management.#deleteButtonConfirmation).click({
      multiple: true,
      force: true
    })
  }

  clickNewAdminPageButton () {
    cy.get(Management.#newSchoolAdminPageButton).click()
    cy.url().should('include', '/administration/school-settings')
  }

  clickVideoConferenceToggleSwitch () {
    cy.intercept('**/federalStates/**').as('federalStates')
    cy.wait('@federalStates')
    cy.get(Management.#videoconferenceToggleSwitch)
      .find('input')
      .click({ force: true })
  }

  clickSaveGeneralSettingsButton () {
    cy.get(Management.#saveGeneralSettingsButton).click({
      multiple: true,
      force: true
    })
  }

  userIsVisibleInTable (email) {
    cy.get(Management.#searchbar).clear(Management.#searchbar)
    cy.get(Management.#tableContents)
    cy.contains(email)
      .should('be.visible')
      .and('contain.text', email)
  }

  userIsNotVisibleInTable (email) {
    cy.get(Management.#searchbar)
      .clear(Management.#searchbar)
    cy.get(Management.#tableContents)
      .contains(email).should('not.exist')
  }

  clickChatToggleSwitch () {
    cy.intercept('**/federalStates/**').as('federalStates')
    cy.wait('@federalStates')
    cy.get(Management.#chatToggleSwitch)
      .find('input')
      .click({ force: true })
  }
}
export default Management

'use strict'

class Course {
  static #createFAB = '[name="fab-icon"]'
  static #courseTitle = '[data-testid="coursename"]'
  static #nextButton = '[id="nextSection"]'
  static #nextContinueButton = '[data-submit-label="Kurs anlegen und Weiter"]'
  static #goToCourseOverviewButton = '[data-testid="zur-uebersicht-btn"]'
  static #threeDotButton = '[type="button"]'
  static #editOption = '[class="three-dot-button v-btn v-btn--icon v-btn--round theme--light v-size--default"]'
  static #selectOption = '[class="v-icon notranslate menu-action-icon mr-1 theme--light"]'
  static #deleteButton = '[data-method="DELETE"]'
  static #confirmDeletionPopup = '.btn-primary:nth-child(3)'
  static #pageTitle = '[id="page-title"]'
  static #dropDownCourse = '.v-btn__content > .v-icon > .v-icon__svg'
  static #btnCourseEdit = '[class="v-list-item v-list-item--link theme--light menu-action menu-action-Bearbeiten/Löschen"]'
  static #selectClassesInput = '#classId_chosen > ul > li > input'
  static #selectClassesDropdown = '#classId_chosen > div > ul > li:nth-child(1)'
  static #selectClassesDeleteButtons = '#classId_chosen > ul > li > a'
  static #selectClasses = '#classId_chosen > ul > li > span'
  static #btnSubmit = '#main-content > section > form > div.modal-footer > button.btn.btn-primary.btn-submit'
  static #classSearchString = 'ALLE'
  static #numberStudentsInClass = 3
  static #selectStudents = '#studentsId_chosen > ul > li'

  clickOnCreateFAB () {
    cy.get(Course.#createFAB).click()
  }

  fillCourseCreationForm (new_course) {
    cy.get(Course.#courseTitle).type(new_course)
  }

  clickOnNextSteps () {
    cy.get(Course.#nextButton).click()
    cy.get(Course.#nextContinueButton).click()
    cy.get(Course.#goToCourseOverviewButton).click()
  }

  performDeletion () {
    cy.get(Course.#threeDotButton)
      .eq(1)
      .click()
    cy.get(Course.#editOption).click()
    cy.get(Course.#selectOption).click({
      multiple: true,
      force: true
    })
    cy.get(Course.#deleteButton).click()
    cy.get(Course.#confirmDeletionPopup).click({
      multiple: true,
      force: true
    })
  }

// edit course
  openCourseEditPage () {
    cy.get(Course.#dropDownCourse).click()
    cy.get(Course.#btnCourseEdit).click()
  }


  showCourseEditPage () {
    cy.get(Course.#pageTitle)
    cy.contains('Kurs bearbeiten')
  }

  selectClassForCourse () {
    cy.get(Course.#selectClassesInput).type(Course.#classSearchString)
    cy.get(Course.#selectClassesDropdown).click()
  }

  removeClassesFromCourse () {
    cy.get(Course.#selectClassesDeleteButtons).click({ multiple: true })
  }

  submitChanges () {
    cy.get(Course.#btnSubmit).click()
  }

  checkAddedClassIsInFieldClasses () {
    cy.get(Course.#selectClasses).should('contain',Course.#classSearchString)
  }

  checkStudentsAreInFieldStudents () {
    // + 1 - because the inputfield to add a student is also in the ul
    cy.get(Course.#selectStudents).should('have.length', Course.#numberStudentsInClass + 1)
  }

  checkNoClassesInFieldClasses () {
    cy.get(Course.#selectClasses).should('have.length', 0)
  }

  checkNoStudentsInFieldStudents () {
    // 1 - because the inputfield to add a student is also in the ul
    cy.get(Course.#selectStudents).should('have.length', 1)
  }
}
export default Course
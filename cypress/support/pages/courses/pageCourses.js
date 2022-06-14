'use strict'

class Courses {
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
  static #dropDownCourse = '.course-title .three-dot-button'//'.three-dot-button:first-of-type'//'[data-testid="title-menu"]'
  static #btnCourseEdit =  '[data-testid="title-menu-edit-delete"]'// [class="v-list-item v-list-item--link theme--light menu-action menu-action-Bearbeiten/Löschen"]'
  static #selectClassesInput = '#classId_chosen > ul > li > input'
  //static #selectClassesDropdown = '#classId_chosen > div > ul > li:nth-child(1)'
  static #selectClassesDeleteButtons = '#classId_chosen > ul > li > a'
  static #selectClasses = '#classId_chosen > ul > li > span'
  static #btnSubmit = '#main-content > section > form > div.modal-footer > button.btn.btn-primary.btn-submit'
  static #classSearchString = 'ALLE'
  static #numberStudentsInClass = 2
  static #selectStudents = '#studentsId_chosen > ul > li'

  clickOnCreateFAB() {
    cy.get(Courses.#createFAB).click()
  }

  fillCourseCreationForm(new_course) {
    cy.get(Courses.#courseTitle).type(new_course)
  }

  clickOnNextSteps() {
    cy.get(Courses.#nextButton).click()
    cy.get(Courses.#nextContinueButton).click()
    cy.get(Courses.#goToCourseOverviewButton).click()
  }

  performDeletion() {
    cy.get(Courses.#threeDotButton)
      .eq(1)
      .click()
    cy.get(Courses.#editOption).click()
    cy.get(Courses.#selectOption).click({
      multiple: true,
      force: true
    })
    cy.get(Courses.#deleteButton).click()
    cy.get(Courses.#confirmDeletionPopup).click({
      multiple: true,
      force: true
    })
  }

  // edit course
  openCourseEditPage() {
    cy.get(Courses.#dropDownCourse).click()
    cy.get(Courses.#btnCourseEdit).click()
  }

  showCourseEditPage() {
    cy.get(Courses.#pageTitle)
    cy.contains('Kurs bearbeiten')
  }

  selectClassForCourse() {
    //type.('{enter}') simulates hitting 'enter' button from the keyboard to select class ALLE from the dropdown
    cy.get(Courses.#selectClassesInput).should('have.value','Klasse(n) auswählen').type(Courses.#classSearchString).type('{enter}')
  }

  removeClassesFromCourse() {
    cy.get(Courses.#selectClassesDeleteButtons).click({ multiple: true })
  }

  submitChanges() {
    cy.get(Courses.#btnSubmit).click()
  }

  checkAddedClassIsInFieldClasses() {
    cy.get(Courses.#selectClasses).should('contain', Courses.#classSearchString)
  }

  checkStudentsAreInFieldStudents() {
    // + 1 - because the inputfield to add a student is also in the ul
    cy.get(Courses.#selectStudents).should('have.length', Courses.#numberStudentsInClass + 1)
  }

  checkNoClassesInFieldClasses() {
    cy.get(Courses.#selectClasses).should('have.length', 0)
  }

  checkNoStudentsInFieldStudents() {
    // 1 - because the inputfield to add a student is also in the ul
    cy.get(Courses.#selectStudents).should('have.length', 1)
  }
}
export default Courses
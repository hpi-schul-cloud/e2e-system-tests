'use strict'

class Courses {
  static #courseTitle = '[data-testid="coursename"]'
  static #nextButton = '[id="nextSection"]'
  static #nextContinueButton = '[data-submit-label="Kurs anlegen und Weiter"]'
  static #goToCourseOverviewButton = '[data-testid="zur-uebersicht-btn"]'
  static #deleteButton = '[data-method="DELETE"]'
  static #confirmDeletionPopup = '[data-testid="modal_delete_course_button"]'
  static #pageTitle = '[id="page-title"]'
  static #dropDownCourse = '.course-title .three-dot-button'
  static #btnCourseEdit = '[data-testid="title-menu-edit-delete"]'
  static #selectClassesInput = '#classId_chosen > ul > li > input'
  static #selectClassesDeleteButtons = '#classId_chosen > ul > li > a'
  static #selectClasses = '#classId_chosen > ul > li > span'
  static #btnSubmit = '#main-content > section > form > div.modal-footer > button.btn.btn-primary.btn-submit'
  static #classSearchString = 'ALLE'
  static #numberStudentsInClass = 2
  static #selectStudents = '#studentsId_chosen > ul > li'

  fillCourseCreationForm(new_course) {
    cy.get(Courses.#courseTitle).type(new_course)
  }

  clickOnNextSteps() {
    cy.get(Courses.#nextButton).click()
    cy.get(Courses.#nextContinueButton).click()
    cy.get(Courses.#goToCourseOverviewButton).click()
  }

  performDeletion() {
    cy.get(Courses.#deleteButton).click()
    cy.get(Courses.#confirmDeletionPopup).click({
      multiple: true,
      force: true
    })
  }

  openCourseEditPage() {
    cy.get(Courses.#dropDownCourse).click()
    cy.get(Courses.#btnCourseEdit).click()
  }

  showCourseEditPage() {
    cy.get(Courses.#pageTitle)
    cy.contains('Kurs bearbeiten')
  }

  selectClassForCourse() {
    cy.get(Courses.#selectClassesInput).should('have.value', 'Klasse(n) auswählen').type(Courses.#classSearchString).type('{enter}')
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
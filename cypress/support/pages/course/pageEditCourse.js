'use strict'

class Edit_Course {
  static #pageTitle = '[id="page-title"]'
  static #dropDownCourse = 'div.course-title > button.three-dot-button'
  static #btnCourseEdit = '[data-testid="title-menu-edit-delete"]'
  static #selectClassesInput = '#classId_chosen > ul > li > input'
  static #selectClassesDropdown = '#classId_chosen > div > ul > li:nth-child(1)'
  static #selectClassesDeleteButtons = '#classId_chosen > ul > li > a'
  static #selectClasses = '#classId_chosen > ul > li > span'
  static #btnSubmit = '#main-content > section > form > div.modal-footer > button.btn.btn-primary.btn-submit'
  static #classSearchString = 'ALLE'
  static #numberStudentsInClass = 2
  static #selectStudents = '#studentsId_chosen > ul > li'

  openCourseEditPage () {
    cy.get(Edit_Course.#dropDownCourse).click()
    cy.get(Edit_Course.#btnCourseEdit).click()
  }

  showCourseEditPage () {
    cy.get(Edit_Course.#pageTitle)
    cy.contains('Kurs bearbeiten')
  }

  selectClassForCourse () {
    cy.get(Edit_Course.#selectClassesInput).type(Edit_Course.#classSearchString)
    cy.get(Edit_Course.#selectClassesDropdown).click()
  }

  removeClassesFromCourse () {
    cy.get(Edit_Course.#selectClassesDeleteButtons).click({ multiple: true })
  }

  submitChanges () {
    cy.get(Edit_Course.#btnSubmit).click()
  }

  checkAddedClassIsInFieldClasses () {
    cy.get(Edit_Course.#selectClasses).should('contain',Edit_Course.#classSearchString)
  }

  checkStudentsAreInFieldStudents () {
    // + 1 - because the inputfield to add a student is also in the ul
    cy.get(Edit_Course.#selectStudents).should('have.length', Edit_Course.#numberStudentsInClass + 1)
  }

  checkNoClassesInFieldClasses () {
    cy.get(Edit_Course.#selectClasses).should('have.length', 0)
  }

  checkNoStudentsInFieldStudents () {
    // 1 - because the inputfield to add a student is also in the ul
    cy.get(Edit_Course.#selectStudents).should('have.length', 1)
  }
}
export default Edit_Course
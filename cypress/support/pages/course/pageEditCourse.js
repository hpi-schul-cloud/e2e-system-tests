'use strict'

class Edit_Course {
  static #courseToEdit = '[aria-label="Kurs Mathe"]'
  static #pageTitle = '[id="page-title"]'
  static #dropDownCourse = '[class="btn btn-sm dropdown-toggle btn-course-dropdown"]'
  static #btnCourseEdit = '[class="dropdown-item btn-course-edit"]'
  static #selectClassesInput = '#classId_chosen > ul > li > input'
  static #selectClassesDropdown = '#classId_chosen > div > ul > li:nth-child(1)'
  static #selectClassesDeleteButtons = '#classId_chosen > ul > li > a'
  static #selectClasses = '#classId_chosen > ul > li > span'
  static #btnSubmit = '#main-content > section > form > div.modal-footer > button.btn.btn-primary.btn-submit'
  static #titleEditPageString = 'Kurs bearbeiten'
  static #classSearchString = 'ALLE'
  static #numberStudentsInClass = 3
  static #courseName = 'Mathe'
  static #selectStudents = '#studentsId_chosen > ul > li'

  clickOnCourse () {
    cy.get(Edit_Course.#courseToEdit).click()
  }

  coursePageIsVisible () {
    cy.url().should('include', '/courses')
    cy.get(Edit_Course.#pageTitle).should('contain',Edit_Course.#courseName)
  }

  openCourseEditPage () {
    cy.get(Edit_Course.#dropDownCourse).click()
    cy.get(Edit_Course.#btnCourseEdit).click()
  }

  courseEditPageIsVisible () {
    cy.get(Edit_Course.#pageTitle).should('contain',Edit_Course.#titleEditPageString)
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

  addedClassIsInFieldClasses () {
    cy.get(Edit_Course.#selectClasses).should('contain',Edit_Course.#classSearchString)
  }

  studentsAreInFieldStudents () {
    // + 1 - because the inputfield to add a student is also in the ul
    cy.get(Edit_Course.#selectStudents).should('have.length', Edit_Course.#numberStudentsInClass + 1)
  }

  CheckNoClassesInFieldClasses () {
    cy.get(Edit_Course.#selectClasses).should('have.length', 0)
  }

  CheckNoStudentsInFieldStudents () {
    // 1 - because the inputfield to add a student is also in the ul
    cy.get(Edit_Course.#selectStudents).should('have.length', 1)
  }
}
export default Edit_Course


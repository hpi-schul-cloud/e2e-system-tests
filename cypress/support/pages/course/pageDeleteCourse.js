'use strict'

class Delete_Course {
  static #threeDotButton = '[type="button"]'
  static #editOption = '[class="btn btn-sm dropdown-toggle btn-course-dropdown"]'
  static #selectOption = '[class="dropdown-item btn-course-edit"]'
  static #deleteButton = '[data-method="DELETE"]'
  static #confirmDeletionPopup = '.btn-primary:nth-child(3)'

  selectTheRoom () {
    cy.get('[aria-label="Kurs unique test course name"]').click({
      multiple: true,
      force: true
    })
  }

  performDeletion () {
    cy.get(Delete_Course.#threeDotButton)
      .eq(1)
      .click()
    cy.get(Delete_Course.#editOption).click()
    cy.get(Delete_Course.#selectOption).click()
    cy.get(Delete_Course.#deleteButton).click()
    cy.get(Delete_Course.#confirmDeletionPopup).click({
      multiple: true,
      force: true
    })
  }
}
export default Delete_Course

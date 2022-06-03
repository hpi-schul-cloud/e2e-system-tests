'use strict'

class Create_Delete_Course {
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

  clickOnCreateFAB () {
    cy.get(Create_Delete_Course.#createFAB).click()
  }

  fillCourseCreationForm (new_course) {
    cy.get(Create_Delete_Course.#courseTitle).type(new_course)
  }

  clickOnNextSteps () {
    cy.get(Create_Delete_Course.#nextButton).click()
    cy.get(Create_Delete_Course.#nextContinueButton).click()
    cy.get(Create_Delete_Course.#goToCourseOverviewButton).click()
  }

  performDeletion () {
    cy.get(Create_Delete_Course.#threeDotButton)
      .eq(1)
      .click()
    cy.get(Create_Delete_Course.#editOption).click()
    cy.get(Create_Delete_Course.#selectOption).click({
      multiple: true,
      force: true
    })
    cy.get(Create_Delete_Course.#deleteButton).click()
    cy.get(Create_Delete_Course.#confirmDeletionPopup).click({
      multiple: true,
      force: true
    })
  }
}
export default Create_Delete_Course
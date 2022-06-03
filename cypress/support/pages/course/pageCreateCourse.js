'use strict'

class Create_Course {
  static #createFAB = '[name="fab-icon"]'
  static #courseTitle = '[data-testid="coursename"]'
  static #nextButton = '[id="nextSection"]'
  static #nextContinueButton = '[data-submit-label="Kurs anlegen und Weiter"]'
  static #goToCourseOverviewButton = '[data-testid="zur-uebersicht-btn"]'

  clickOnCourseFAB () {
    cy.get(Create_Course.#createFAB).click()
  }

  fillCourseCreationForm (new_course) {
    cy.get(Create_Course.#courseTitle).type(new_course)
  }

  clickOnNextSteps () {
    cy.get(Create_Course.#nextButton).click()
    cy.get(Create_Course.#nextContinueButton).click()
    cy.get(Create_Course.#goToCourseOverviewButton).click()
  }
}
export default Create_Course
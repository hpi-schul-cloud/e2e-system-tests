'use strict'

class Tasks_Common {
  static #tasksOverviewNavigationButton = '[data-testid="Aufgaben"]'
  static #taskForm = '[id="homework-form"]'
  static #submitButton = '[class="btn btn-primary btn-submit"]'

  navigateToTasksOverview() {
    cy.visit('/tasks')
    cy.get(Tasks_Common.#tasksOverviewNavigationButton).click()
    cy.url().should('include', '/tasks')
  }

  clickOnSubmit() {
    cy.get(Tasks_Common.#taskForm).find(Tasks_Common.#submitButton).click()
    //cy.get(Tasks_Common.#submitButton).should('contain', '').click()
  }
}
export default Tasks_Common
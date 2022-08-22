'use strict'

class Dashboard {

  static #welcomeMessage = '[data-testid="welcome-section"]'
  static #dashboardTasksTitle = '[data-testid="dashboard-tasks-title"]'
  static #dashboardTaskCourseName = '[data-testid="task-course-name"]'
  static #dashboardTaskName = '[data-testid="task-name"]'

  seeWelcomeMessage() {
    cy.get(Dashboard.#welcomeMessage)
    cy.contains('Hallo')
  }

  seeAssignedTasks() {
    cy.get(Dashboard.#dashboardTasksTitle).eq(0)
    cy.contains('Gestellte Aufgaben')
    cy.get(Dashboard.#dashboardTaskCourseName).eq(0).contains('Course with subject and tasks')
    cy.get(Dashboard.#dashboardTaskName).contains('Task11')
  }

  seeDraftTasks() {
    cy.get(Dashboard.#dashboardTasksTitle).eq(1)
    cy.contains('Entwürfe')
    cy.get(Dashboard.#dashboardTaskCourseName).eq(0).contains('Course with subject and tasks')
    cy.get(Dashboard.#dashboardTaskName).contains('Task1')
  }
}
export default Dashboard
'use strict'

class Dashboard {
  static #welcomeMessage = '[data-testid="welcome-section"]'
  static #dashboardTasksTitle = '[data-testid="dashboard-tasks-title"]'
  static #dashboardTaskCourseName = '[data-testid="task-course-name"]'
  static #dashboardTaskName = '[data-testid="task-name"]'

  seeWelcomeMessage () {
    cy.get(Dashboard.#welcomeMessage)
    cy.contains('Hallo')
  }

  seeAssignedTasks () {
    cy.get(Dashboard.#dashboardTasksTitle).eq(0)
    cy.contains('Gestellte Aufgaben')
    cy.get(Dashboard.#dashboardTaskCourseName).eq(0)
    cy.contains('Task11')
    //cy.get(Dashboard.#dashboardTaskName).eq(0)
    //cy.contains('Test Aufgabe - Copy')
  }

  seeDraftTasks () {
    cy.get(Dashboard.#dashboardTasksTitle).eq(1)
    cy.contains('Entwürfe')
    cy.get(Dashboard.#dashboardTaskCourseName).eq(1)
    cy.contains('Task1')
    //cy.get(Dashboard.#dashboardTaskName).eq(1)
    //cy.contains('Test - Copy')
  }
}
export default Dashboard
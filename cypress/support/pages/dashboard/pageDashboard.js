'use strict'

class Dashboard {

  static #welcomeMessage = '[data-testid="welcome-section"]'
  static #dashboardTasksTitle = '[data-testid="dashboard-tasks-title"]'
  static #dashboardTaskCourseName = '[data-testid="task-course-name"]'
  static #dashboardTaskName = '[data-testid="task-name"]'
  static #pageTitle = '[data-testid="title_of_an_element"]'
  static #newsText = '[data-testid="body_of_element"]'
  static #newsSection = '[data-testid="news-section"]'
  static #titleOnDashboardPage = '[id="page-title"]'

  arriveOnDashboard() {
    cy.visit('/dashboard')
    cy.url()
      .should('include', '/dashboard')
    cy.get(Dashboard.#titleOnDashboardPage).should('exist')
  }

  seeSchoolNews(newsTitle, newsDesc) {
    cy.get(Dashboard.#newsSection).should('be.visible')
    cy.get(Dashboard.#pageTitle).contains(newsTitle)
    cy.get(Dashboard.#newsText).contains(newsDesc)
  }

  seeTeamsNews(newsTitle, newsDesc) {
    cy.get(Dashboard.#newsSection).should('be.visible')
    cy.get(Dashboard.#pageTitle).contains(newsTitle)
    cy.get(Dashboard.#newsText).contains(newsDesc)
  }

  seeWelcomeMessage(welcomeMsg) {
    cy.get(Dashboard.#welcomeMessage)
    cy.contains(welcomeMsg)
  }

  seeAssignedTasks(taskName) {
    cy.get(Dashboard.#dashboardTasksTitle).eq(0)
    cy.contains('Gestellte Aufgaben')
    cy.get(Dashboard.#dashboardTaskCourseName).eq(0).contains('Course with subject and tasks')
    cy.get(Dashboard.#dashboardTaskName).contains(taskName)
  }

  seeDraftTasks(draftName) {
    cy.get(Dashboard.#dashboardTasksTitle).eq(1)
    cy.contains('Entwürfe')
    cy.get(Dashboard.#dashboardTaskCourseName).eq(0).contains('Course with subject and tasks')
    cy.get(Dashboard.#dashboardTaskName).contains(draftName)
  }
}
export default Dashboard
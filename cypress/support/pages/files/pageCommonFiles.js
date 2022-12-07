'use strict'

class Files_Common {

  static #filesOverviewNavigationButton = '[data-testid="Meine Dateien"]'
  static #personalFilesOverviewNavigationButton = '[data-testid="persönliche Dateien"]'
  static #coursesFilesOverviewNavigationButton = '[data-testid="Kurse"]'
  static #teamsFilesOverviewNavigationButton = '[data-testid="Teams"]'
  static #sharedFilesOverviewNavigationButton = '[data-testid="geteilte Dateien"]'

  navigateToFilesOverview() {
    cy.visit('/files')
    cy.get(Files_Common.#filesOverviewNavigationButton).click()
    cy.url().should('include', '/files')
  }

  navigateToPersonalFilesOverview() {
    cy.visit('/files/my')
    cy.get(Files_Common.#personalFilesOverviewNavigationButton).click()
    cy.url().should('include', '/files/my')
  }

  navigateToCourseFilesOverview() {
    cy.visit('/files/courses')
    cy.get(Files_Common.#coursesFilesOverviewNavigationButton).click()
    cy.url().should('include', '/files/courses')
  }

  navigateToTeamsFilesOverview() {
    cy.visit('/files/teams')
    cy.get(Files_Common.#teamsFilesOverviewNavigationButton).eq(1).click()
    cy.url().should('include', '/files/teams')
  }

  navigateToSharedFilesOverview() {
    cy.visit('/files/shared')
    cy.get(Files_Common.#sharedFilesOverviewNavigationButton).click()
    cy.url().should('include', '/files/shared')
  }
}
export default Files_Common
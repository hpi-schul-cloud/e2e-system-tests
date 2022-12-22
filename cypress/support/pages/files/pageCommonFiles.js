'use strict'

class Files_Common {
  static #filesOverviewNavigationButton = '[data-testid="Meine Dateien"]'
  static #personalFilesOverviewNavigationButton =
    '[data-testid="persönliche Dateien"]'
  static #coursesFilesOverviewNavigationButton = '[data-testid="Kurse"]'
  static #teamsFilesOverviewNavigationButton = '[data-testid="Teams"]'
  static #sharedFilesOverviewNavigationButton =
    '[data-testid="geteilte Dateien"]'

  navigateToFilesOverview () {
    cy.get(Files_Common.#filesOverviewNavigationButton).click()
    cy.wait('@alerts_api')
    cy.url().should('include', '/files')
  }

  navigateToPersonalFilesOverview () {
    cy.get(Files_Common.#personalFilesOverviewNavigationButton).click()
    cy.wait('@alerts_api')
    cy.url().should('include', '/files/my')
  }

  navigateToCourseFilesOverview () {
    cy.get(Files_Common.#coursesFilesOverviewNavigationButton).click()
    cy.wait('@alerts_api')
    cy.url().should('include', '/files/courses')
  }

  navigateToTeamsFilesOverview () {
    cy.get(Files_Common.#teamsFilesOverviewNavigationButton).eq(1).click()
    cy.wait('@alerts_api')
    cy.url().should('include', '/files/teams')
  }

  navigateToSharedFilesOverview () {
    cy.get(Files_Common.#sharedFilesOverviewNavigationButton).click()
    cy.wait('@alerts_api')
    cy.url().should('include', '/files/shared')
  }
}
export default Files_Common

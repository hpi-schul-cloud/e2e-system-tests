
'use strict'

class My_Files_Common {


static #filesOverviewNavigationButton = '[data-testid="Meine Dateien"]'
static #personalFilesOverviewNavigationButton = '[data-testid="persönliche Dateien"]'
static #coursesFilesOverviewNavigationButton = '[data-testid="Kurse"]'
static #teamsFilesOverviewNavigationButton = '[data-testid="Teams"]'
static #sharedFilesOverviewNavigationButton = '[data-testid="geteilte Dateien"]'


goToFilesOverview () {
    cy.visit('/files')
    cy.get(My_Files_Common.#filesOverviewNavigationButton).click()
    cy.url().should('include', '/files')
  }

  goToPersonalFilesOverview () {
    cy.visit('/files/my')
    cy.get(My_Files_Common.#personalFilesOverviewNavigationButton).click()
    cy.url().should('include', '/files/my')
  }

  goToCourseFilesOverview () {
    cy.visit('/files/courses')
    cy.get(My_Files_Common.#coursesFilesOverviewNavigationButton).click()
    cy.url().should('include', '/files/courses')
  }

  goToTeamsFilesOverview () {
    cy.visit('/files/teams')
    cy.get(My_Files_Common.#teamsFilesOverviewNavigationButton).eq(1).click()
    cy.url().should('include', '/files/teams')
  }

  goToSharedFilesOverview () {
    cy.visit('/files/shared')
    cy.get(My_Files_Common.#sharedFilesOverviewNavigationButton).click()
    cy.url().should('include', '/files/shared')
  }
}
export default My_Files_Common
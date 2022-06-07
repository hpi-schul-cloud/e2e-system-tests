'use strict'

class Management_Common {

    static #administrationOverviewNavigationButton = '[data-testid="Verwaltung"]'
    static #studentAdministrationNavigationButton = '[data-testid="Schüler:innen"]'
    static #teacherAdministrationNavigationButton = '[data-testid="Lehrkräfte"]'
    static #courseAdministrationNavigationButton = '[data-testid="Kurse"]'
    static #classAdministrationNavigationButton = '[data-testid="Klassen"]'
    static #teamAdministrationNavigationButton = '[data-testid="Teams"]'
    static #schoolAdministrationNavigationButton = '[data-testid="Schule"]'

    goToAdministration () {
        cy.visit('/administration')
        cy.get( Management_Common.#administrationOverviewNavigationButton).click()
        cy.url().should('include', '/administration')
      }

      goToStudentAdministration () {
        cy.visit('/administration/students')
        cy.get( Management_Common.#studentAdministrationNavigationButton).click()
        cy.url().should('include', '/administration/students')
      }

      goToTeacherAdministration () {
        cy.visit('/administration/teachers')
        cy.get( Management_Common.#teacherAdministrationNavigationButton).click()
        cy.url().should('include', '/administration/teachers')
      }

      goTCourseAdministration () {
        cy.visit('/administration/courses')
        cy.get( Management_Common.#courseAdministrationNavigationButton).click()
        cy.url().should('include', '/administration/courses')
      }

      goToClassAdministration () {
        cy.visit('/administration/classes')
        cy.get( Management_Common.#classAdministrationNavigationButton).click()
        cy.url().should('include', '/administration/classes')
      }

      goToTeamAdministration () {
        cy.visit('/administration/teams')
        cy.get( Management_Common.#teamAdministrationNavigationButton).eq(1).click()
        cy.url().should('include', '/administration/teams')
      }

      goToSchoolAdministration () {
        cy.visit('/administration/school')
        cy.get( Management_Common.#schoolAdministrationNavigationButton).click()
        cy.url().should('include', '/administration/school')
      }

}
export default Management_Common
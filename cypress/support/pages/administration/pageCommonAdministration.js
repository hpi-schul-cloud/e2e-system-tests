'use strict'

class Management_Common {

  static #administrationOverviewNavigationButton = '[data-testid="Verwaltung"]'
  static #studentAdministrationNavigationButton = '[data-testid="Schüler:innen"]'
  static #teacherAdministrationNavigationButton = '[data-testid="Lehrkräfte"]'
  static #courseAdministrationNavigationButton = '[data-testid="Kurse"]'
  static #classAdministrationNavigationButton = '[data-testid="Klassen"]'
  static #teamAdministrationNavigationButton = '[data-testid="Teams"]'
  static #schoolAdministrationNavigationButton = '[data-testid="Schule"]'

  navigateToAdministration() {
    cy.get(Management_Common.#administrationOverviewNavigationButton).click()
    cy.url().should('include', '/administration')
  }

  navigateToStudentAdministration() {
    cy.get(Management_Common.#studentAdministrationNavigationButton).click()
    cy.wait([
      '@runtime_config_api',
      '@public_api',
      '@me_api',
      '@roles_api',
      '@schools_api',
      '@students_api',
      '@alert_api',
      '@classes_api',
    ]).then(interceptions => {
      expect(interceptions[0].response.statusCode).to.equal(200)
      expect(interceptions[1].response.statusCode).to.equal(200)
      expect(interceptions[2].response.statusCode).to.equal(200)
      expect(interceptions[3].response.statusCode).to.equal(200)
      expect(interceptions[4].response.statusCode).to.equal(200)
      expect(interceptions[5].response.statusCode).to.equal(200)
      expect(interceptions[6].response.statusCode).to.equal(200)
      expect(interceptions[7].response.statusCode).to.equal(200)
    })
    cy.url().should('include', '/administration/students')
  }

  navigateToTeacherAdministration() {
    cy.get(Management_Common.#teacherAdministrationNavigationButton).click()
    cy.url().should('include', '/administration/teachers')
  }

  navigateToCourseAdministration() {
    cy.get(Management_Common.#courseAdministrationNavigationButton).click()
    cy.url().should('include', '/administration/courses')
  }

  navigateToClassAdministration() {
    cy.get(Management_Common.#classAdministrationNavigationButton).click()
    cy.url().should('include', '/administration/classes')
  }

  navigateToTeamAdministration() {
    cy.get(Management_Common.#teamAdministrationNavigationButton).eq(1).click()
    cy.url().should('include', '/administration/teams')
  }

  navigateToSchoolAdministration() {
    cy.get(Management_Common.#schoolAdministrationNavigationButton).click()
    cy.url().should('include', '/administration/school')
  }
}
export default Management_Common
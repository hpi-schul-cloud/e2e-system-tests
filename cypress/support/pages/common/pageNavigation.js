'use strict'

class Navigation {
    static #courseOverviewNavigationButton = '[data-testid="Course-Overview"]'
    static #teamsOverviewNavigationButton = '[data-testid="Teams"]'
    static #tasksOverviewNavigationButton = '[data-testid="Aufgaben"]'
    static #filesOverviewNavigationButton = '[data-testid="Meine Dateien"]'
    static #personalFilesOverviewNavigationButton = '[data-testid="persönliche Dateien"]'
    static #coursesFilesOverviewNavigationButton = '[data-testid="Kurse"]'
    static #teamsFilesOverviewNavigationButton = '[data-testid="Teams"]'
    static #sharedFilesOverviewNavigationButton = '[data-testid="geteilte Dateien"]'
    static #newsOverviewNavigationButton = '[data-testid="Neuigkeiten"]'
    static #calendarOverviewNavigationButton = '[data-testid="Termine"]'
    static #lernStoreOverviewNavigationButton = '[data-testid="Lern-Store"]'
    static #addonsOverviewNavigationButton = '[data-testid="Add-Ons"]'
    static #administrationOverviewNavigationButton = '[data-testid="Verwaltung"]'
    static #studentAdministrationNavigationButton = '[data-testid="Schüler:innen"]'
    static #teacherAdministrationNavigationButton = '[data-testid="Lehrkräfte"]'
    static #courseAdministrationNavigationButton = '[data-testid="Kurse"]'
    static #classAdministrationNavigationButton = '[data-testid="Klassen"]'
    static #teamAdministrationNavigationButton = '[data-testid="Teams"]'
    static #schoolAdministrationNavigationButton = '[data-testid="Schule"]'
    static #helpOverviewNavigationButton = '[data-testid="Hilfebereich"]'
    static #helpArticlesNavigationButton = '[data-testid="Hilfeartikel"]'
    static #helpContactNavigationButton = '[data-testid="Kontakt"]'
    static #advancedTrainingsNavigationButton = 'a[title="Fortbildungen"]'
    static #popUpLink = 'https://lernen.cloud/'

  arriveOnDashboard () {
    cy.visit('/dashboard')
    cy.url().should('include', '/dashboard')
  }

  goToRoomsOverview () {
    cy.visit('/rooms-overview')
    cy.get(Navigation.#courseOverviewNavigationButton).click()
    cy.url().should('include', '/rooms-overview')
  }

  goToTeamsOverview () {
    cy.visit('/teams')
    cy.get(Navigation.#teamsOverviewNavigationButton).click()
    cy.url().should('include', '/teams')
  }

  goToTasksOverview () {
    cy.visit('/tasks')
    cy.get(Navigation.#tasksOverviewNavigationButton).click()
    cy.url().should('include', '/tasks')
  }

  goToFilesOverview () {
    cy.visit('/files')
    cy.get(Navigation.#filesOverviewNavigationButton).click()
    cy.url().should('include', '/files')
  }

  goToPersonalFilesOverview () {
    cy.visit('/files/my')
    cy.get(Navigation.#personalFilesOverviewNavigationButton).click()
    cy.url().should('include', '/files/my')
  }

  goToCourseFilesOverview () {
    cy.visit('/files/courses')
    cy.get(Navigation.#coursesFilesOverviewNavigationButton).click()
    cy.url().should('include', '/files/courses')
  }

  goToTeamsFilesOverview () {
    cy.visit('/files/teams')
    cy.get(Navigation.#teamsFilesOverviewNavigationButton).eq(1).click()
    cy.url().should('include', '/files/teams')
  }

  goToSharedFilesOverview () {
    cy.visit('/files/shared')
    cy.get(Navigation.#sharedFilesOverviewNavigationButton).click()
    cy.url().should('include', '/files/shared')
  }

  goToNewsOverview () {
    cy.visit('/news')
    cy.get(Navigation.#newsOverviewNavigationButton).click()
    cy.url().should('include', '/news')
  }

  goToCalendarOverview () {
    cy.visit('/calendar')
    cy.get(Navigation.#calendarOverviewNavigationButton).click()
    cy.url().should('include', '/calendar')
  }

  goToLernStoreOverview () {
    cy.visit('/content')
    cy.get(Navigation.#lernStoreOverviewNavigationButton).click()
    cy.url().should('include', '/content')
  }

  goToAddonsOverview () {
    cy.visit('/addons')
    cy.get(Navigation.#addonsOverviewNavigationButton).click()
    cy.url().should('include', '/addons')
  }

  goToAdministration () {
    cy.visit('/administration')
    cy.get(Navigation.#administrationOverviewNavigationButton).click()
    cy.url().should('include', '/administration')
  }

  goToStudentAdministration () {
    cy.visit('/administration/students')
    cy.get(Navigation.#studentAdministrationNavigationButton).click()
    cy.url().should('include', '/administration/students')
  }

  goToTeacherAdministration () {
    cy.visit('/administration/teachers')
    cy.get(Navigation.#teacherAdministrationNavigationButton).click()
    cy.url().should('include', '/administration/teachers')
  }

  goTCourseAdministration () {
    cy.visit('/administration/courses')
    cy.get(Navigation.#courseAdministrationNavigationButton).click()
    cy.url().should('include', '/administration/courses')
  }

  goToClassAdministration () {
    cy.visit('/administration/classes')
    cy.get(Navigation.#classAdministrationNavigationButton).click()
    cy.url().should('include', '/administration/classes')
  }

  goToTeamAdministration () {
    cy.visit('/administration/teams')
    cy.get(Navigation.#teamAdministrationNavigationButton).eq(1).click()
    cy.url().should('include', '/administration/teams')
  }

  goToSchoolAdministration () {
    cy.visit('/administration/school')
    cy.get(Navigation.#schoolAdministrationNavigationButton).click()
    cy.url().should('include', '/administration/school')
  }

  goToHelpSection () {
    cy.visit('/help')
    cy.get(Navigation.#helpOverviewNavigationButton).click()
    cy.url().should('include', '/help/articles')
  }

  goToHelpArticles () {
    cy.visit('/help/articles')
    cy.get(Navigation.#helpArticlesNavigationButton).eq(0).click()
    cy.url().should('include', '/help/articles')
  }

  goToHelpContact () {
    cy.visit('/help/contact')
    cy.get(Navigation.#helpContactNavigationButton).click()
    cy.url().should('include', '/help/contact')
  }

  goToAdvancedTrainings () {
    cy.get(Navigation.#advancedTrainingsNavigationButton).should($a => {
      expect($a.attr('href'), 'href').to.equal(Navigation.#popUpLink)
      expect($a.attr('target'), 'target').to.equal('_blank')
    })
  }
}
export default Navigation

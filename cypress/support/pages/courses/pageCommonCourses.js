'use strict'

class Courses_Common {

  static #learningContentTab = '[data-testid="learnContent"]'
  static #toolsTab = '[data-testid="tools"]'
  static #groupsTab = '[data-testid="groups"]'
  static #toolsList = 'div.list-group'
  static #pageTitle = '[id="page-title"]'
  static #courseOverviewNavigationButton = '[data-testid="Course-Overview"]'

  navigateToRoomsOverview() {
    cy.visit('/rooms-overview')
    cy.get(Courses_Common.#courseOverviewNavigationButton).click()
    cy.url().should('include', '/rooms-overview')
  }

  naviagteToRoomBoard(room_name) {
    const selectedRoom = `[aria-label='${room_name}']`
    cy.get(selectedRoom).click({
      multiple: true,
      force: true
    })
  }

  showRoomPage(room) {
    const selectedRoom = `[aria-label='${room}']`
    cy.get(selectedRoom).should('be.visible')
  }

  navigateToTools() {
    cy.get(Courses_Common.#toolsTab).click()
  }

  addNewTool() {
    cy.get('[aria-label="Neues Tool hinzufügen"]').click()
  }

  courseIsVisibleOnOverviewPage(course_name) {
    cy.url().should('include', '/rooms-overview')
    cy.contains(course_name)
  }

  courseIsNotVisibleOnOverviewPage(course_name) {
    cy.url().should('include', '/rooms-overview')
    cy.contains(course_name).should('not.exist')
  }

  canAddBigBlueButton() {
    cy.get(Courses_Common.#toolsList)
    cy.contains('Video-Konferenz mit BigBlueButton')
  }

  canNotAddBigBlueButton() {
    cy.get(Courses_Common.#toolsList)
    cy.contains('Video-Konferenz mit BigBlueButton').should('not.exist')
  }
}
export default Courses_Common

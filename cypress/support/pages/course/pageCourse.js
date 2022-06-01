'use strict'

class Course {
  static #learningContentTab = '[data-testid="learnContent"]'
  static #toolsTab = '[data-testid="tools"]'
  static #groupsTab = '[data-testid="groups"]'
  static #toolsList = 'div.list-group'
  static #pageTitle = '[id="page-title"]'

  selectTheRoom (room) {
    const selectedRoom = `[aria-label='${room}']`
    cy.get(selectedRoom).click({
      multiple: true,
      force: true
    })
  }

  showRoomPage (room) {
    cy.url().should('include', '/courses')
    cy.get(Course.#pageTitle).should('contain', room)
  }

  goToTools () {
    cy.get(Course.#toolsTab).click()
  }

  addNewTool () {
    cy.get('[aria-label="Neues Tool hinzufügen"]').click()
  }

  courseIsVisibleOnOverviewPage (course_name) {
    cy.url().should('include', '/rooms-overview')
    cy.contains(course_name)
  }

  courseIsNotVisibleOnOverviewPage (course_name) {
    cy.url().should('include', '/rooms-overview')
    cy.contains(course_name).should('not.exist')
  }

  canAddBigBlueButton () {
    cy.get(Course.#toolsList)
    cy.contains('Video-Konferenz mit BigBlueButton')
  }

  canNotAddBigBlueButton () {
    cy.get(Course.#toolsList)
    cy.contains('Video-Konferenz mit BigBlueButton').should('not.exist')
  }
}
export default Course

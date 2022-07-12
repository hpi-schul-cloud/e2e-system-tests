'use strict'

class Courses_Common {

  static #toolsTab = '[data-testid="tools"]'
  static #toolsList = '[data-testid="course_tool_list_add_tool"]'
  static #pageTitle = '[id="page-title"]'
  static #courseOverviewNavigationButton = '[data-testid="Course-Overview"]'
  static #addNewToolButton = '[data-testid="add_new_tool"]'
  static #dropDownCourse = '.course-title .three-dot-button'
  static #btnCourseEdit = '[data-testid="title-menu-edit-delete"]'

  navigateToRoomsOverview() {
    cy.get(Courses_Common.#courseOverviewNavigationButton).click()
  }

  navigateToRoomBoard(roomName) {
    const selectedRoom = `[aria-label='${roomName}']`
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
    cy.get(Courses_Common.#addNewToolButton).click()
  }

  courseIsVisibleOnOverviewPage(courseName) {
    cy.contains(courseName)
  }

  courseIsNotVisibleOnOverviewPage(courseName) {
    cy.url().should('include', '/rooms-overview')
    cy.contains(courseName).should('not.exist')
  }

  canAddBigBlueButton() {
    cy.get(Courses_Common.#toolsList).should('be.visible')
  }

  canNotAddBigBlueButton() {
    cy.get(Courses_Common.#toolsList).should('not.exist')
  }

  openCourseEditPage() {
    cy.get(Courses_Common.#dropDownCourse).click()
    cy.get(Courses_Common.#btnCourseEdit).click()
  }

  showCourseEditPage() {
    cy.get(Courses_Common.#pageTitle)
    cy.contains('Kurs bearbeiten')
  }
}
export default Courses_Common
'use strict'

class Courses_Common {

  static #createCourse = '[data-testid="add-course-button"]'
  static #createContent = '[data-testid="add-content-button"]'
  static #toolsTab = '[data-testid="tools"]'
  static #toolsList = '[data-testid="course_tool_list_add_tool"]'
  static #courseOverviewNavigationButton = '[data-testid="Course-Overview"]'
  static #addNewToolButton = '[data-testid="add_new_tool"]'
  static #newTask = '[data-testid="fab_button_add_task"]'

  navigateToRoomsOverview() {
    cy.get(Courses_Common.#courseOverviewNavigationButton).click()
    cy.url().should('include', '/rooms-overview')
  }

  navigateToRoomBoard(room_name) {
    cy.get('h1').eq(0).then(($title) => {
      const htmlTitlePage = $title.text()
      if (htmlTitlePage.includes('Kurse')) {
        cy.get(`[aria-label="Kurs ${room_name}"]`).click({
          multiple: true,
          force: true
        })
      } else if (htmlTitlePage.includes('courses')) {
        cy.get(`[aria-label="Course ${room_name}"]`).click({
          multiple: true,
          force: true
        })
      } else if (htmlTitlePage.includes('Cursos')) {
        cy.get(`[aria-label="Curso ${room_name}"]`).click({
          multiple: true,
          force: true
        })
      } else if (htmlTitlePage.includes('Поточні')) {
        cy.get(`[aria-label="Курс ${room_name}"]`).click({
          multiple: true,
          force: true
        })
      }
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

  courseIsVisibleOnOverviewPage(course_name) {
    cy.url().should('include', '/rooms-overview')
    cy.contains(course_name)
  }

  courseIsNotVisibleOnOverviewPage(course_name) {
    cy.url().should('include', '/rooms-overview')
    cy.contains(course_name).should('not.exist')
  }

  canAddBigBlueButton() {
    cy.get(Courses_Common.#toolsList).should('be.visible')
  }

  canNotAddBigBlueButton() {
    cy.get(Courses_Common.#toolsList).should('not.exist')
  }

  clickOnCreateCourseFAB() {
    cy.get(Courses_Common.#createCourse).click()
  }

  clickOnCreateContentFAB() {
    cy.get(Courses_Common.#createContent).click()
  }

  clickOnNewTask() {
    cy.get(Courses_Common.#newTask).click()
  }
}
export default Courses_Common
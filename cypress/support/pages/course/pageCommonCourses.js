'use strict'

class Courses_Common {

  static #createCourse = '[data-testid="add-course-button"]'
  static #createContent = '[data-testid="add-content-button"]'
  static #toolsTab = '[data-testid="tools"]'
  static #toolsList = '[data-testid="course_tool_list_add_tool"]'
  static #courseOverviewNavigationButton = '[data-testid="Course-Overview"]'
  static #addNewToolButton = '[data-testid="add_new_tool"]'
  static #newTask = '[data-testid="fab_button_add_task"]'
  static #dialogConfirmButton = '[data-testid="dialog-confirm"]'
  static #dialogCancelButton = '[data-testid="dialog-cancel"]'
  static #deleteButtonInDotMenu = '[data-testid="content-card-task-menu-remove"]'
  static #contentCardText = '[data-testid="content-card-task-content"]'
  static #dropDownCourse = '.course-title .three-dot-button'
  static #btnCourseEdit = '[data-testid="title-menu-edit-delete"]'
  static #pageTitle = '[id="page-title"]'

  navigateToRoomsOverview() {
    cy.get(Courses_Common.#courseOverviewNavigationButton).click()
  }

  navigateToRoomBoard(roomName) {
    cy.get('h1').eq(0).then(($title) => {
      const htmlTitlePage = $title.text()
      if (htmlTitlePage.includes('Kurse')) {
        cy.get(`[aria-label="Kurs ${roomName}"]`).eq(0).click()
      } else if (htmlTitlePage.includes('courses')) {
        cy.get(`[aria-label="Course ${roomName}"]`).click()
      } else if (htmlTitlePage.includes('Cursos')) {
        cy.get(`[aria-label="Curso ${roomName}"]`).click()
      } else if (htmlTitlePage.includes('Поточні')) {
        cy.get(`[aria-label="Курс ${roomName}"]`).click()
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

  courseIsVisibleOnOverviewPage(courseName) {
    cy.contains(courseName)
  }

  courseIsNotVisibleOnOverviewPage(courseName) {
    cy.contains(courseName).should('not.exist')
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

  taskIsVisibleOnCoursePage(taskTitle) {
    cy.reload() // Reload is necessary because after deletion of a content element a message window with its title stays hidden in the DOM
    cy.url().should('include', '/rooms/')
    cy.contains(taskTitle)
  }

  taskIsNotVisibleOnCoursePage(taskTitle) {
    cy.reload() // Reload is necessary because after deletion of a content element a message window with its title stays hidden in the DOM
    cy.url().should('include', '/rooms/')
    cy.contains(taskTitle).should('not.exist')
  }

  openThreeDotMenuForContent(contentTitle){
    cy.get(Courses_Common.#contentCardText)
      .contains(contentTitle)
      .prev()
      .find('button')
      .click()
  }

  clickDeleteInDotMenu(){
    cy.get(Courses_Common.#deleteButtonInDotMenu).click()
  }

  clickCancelInConfirmationWindow() {
    cy.get(Courses_Common.#dialogCancelButton).click()
  }

  clickDeleteInConfirmationWindow() {
    cy.get(Courses_Common.#dialogConfirmButton).click()
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
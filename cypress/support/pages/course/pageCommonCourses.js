'use strict'

class Courses_Common {

  static #mainContent = '[id="main-content"]'
  static #createCourse = '[data-testid="add-course-button"]'
  static #createContent = '[data-testid="add-content-button"]'
  static #toolsTab = '[data-testid="tools"]'
  static #toolsList = '[data-testid="course_tool_list_add_tool"]'
  static #courseOverviewNavigationButton = '[data-testid="Course-Overview"]'
  static #addNewToolButton = '[data-testid="add_new_tool"]'
  static #newTaskFAB = '[data-testid="fab_button_add_task"]'
  static #dialogConfirmButton = '[data-testid="dialog-confirm"]'
  static #dialogCancelButton = '[data-testid="dialog-cancel"]'
  static #deleteButtonInDotMenu = '[data-testid="content-card-task-menu-remove"]'
  static #editButtonInDotMenu = '[data-testid="content-card-task-menu-edit"]'
  static #contentCardContent = '[data-testid="content-card-task-content"]'
  static #contentCardTaskActions = '[data-testid="content-card-task-actions"]'
  static #dropDownCourse = '.course-title .three-dot-button'
  static #btnCourseEdit = '[data-testid="title-menu-edit-delete"]'
  static #pageTitle = '[id="page-title"]'
  static #contentCardTaskInfoSubmissionsChip = '[data-testid="room-detail-task-chip-submitted"]'
  static #contentCardTaskInfoGradingsChip = '[data-testid="room-detail-task-chip-graded"]'


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

  clickOnNewTaskFAB() {
    cy.get(Courses_Common.#newTaskFAB).click()
  }

  taskIsVisibleOnCoursePage(taskTitle) {
    // cy.reload() // Reload is necessary because after deletion of a content element a message window with its title stays hidden in the DOM
    // cy.url().should('include', '/rooms/')
    cy.contains(taskTitle)
    // cy.contains(taskTitle).should('not.exist')
  }

  taskIsNotVisibleOnCoursePage(taskTitle) {
    // cy.reload() // Reload is necessary because after deletion of a content element a message window with its title stays hidden in the DOM
    // cy.url().should('include', '/rooms/')
    // cy.wait(1000)
    cy.contains(taskTitle).should('not.exist')
    // cy.get(Courses_Common.#mainContent).should('not.contain', taskTitle)
    // cy.get(Courses_Common.#mainContent).contains(taskTitle).should('not.exist')
  }

  openTask(taskTitle) {
    cy.get(Courses_Common.#contentCardContent)
      .contains(taskTitle)
      .click()
  }

  openThreeDotMenuForContent(contentTitle){
    cy.get(Courses_Common.#contentCardContent)
      .contains(contentTitle)
      .prev()
      .find('button')
      .click()
  }

  clickDeleteInDotMenu(linkId){
    cy.get(Courses_Common.#deleteButtonInDotMenu).click()
  }

  clickEditInDotMenu(linkId){
    cy.get(Courses_Common.#editButtonInDotMenu).click()
  }

  clickOnCancelInConfirmationWindow() {
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

  compareSubmittedTasksInformation(submittedTasks, contentTitle){
    cy.get(Courses_Common.#contentCardContent)
      .contains(contentTitle)
      .parent()
      .parent()
      .find(Courses_Common.#contentCardTaskInfoSubmissionsChip)
      .should('contain', submittedTasks)
  }

  compareGradedTasksInformation(gradedTasks, contentTitle){
    cy.get(Courses_Common.#contentCardContent)
      .contains(contentTitle)
      .parent()
      .parent()
      .find(Courses_Common.#contentCardTaskInfoGradingsChip)
      .should('contain', gradedTasks)
  }

  clickOnFinishTask(taskTitle){
    cy.get(Courses_Common.#contentCardContent)
      .contains(taskTitle)
      .parent()
      .parent()
      .find(Courses_Common.#contentCardTaskActions)
      .find('button')
      .click()
  }

  checkTaskCardDoesNotHaveButtons(taskTitle){
    cy.get(Courses_Common.#contentCardContent)
      .contains(taskTitle)
      .parent()
      .parent()
      .find(Courses_Common.#contentCardTaskActions)
      .find('button')
      .should('not.exist')
  }

  checkTaskCardDoesHaveButtons(taskTitle){
    cy.get(Courses_Common.#contentCardContent)
      .contains(taskTitle)
      .parent()
      .parent()
      .find(Courses_Common.#contentCardTaskActions)
      .find('button')
      .should('be.visible')
  }


}
export default Courses_Common
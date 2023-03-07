'use strict'

class Courses {
  static #courseTitle = '[data-testid="coursename"]'
  static #nextButton = '[id="nextSection"]'
  static #nextContinueButton = '[data-submit-label="Kurs anlegen und Weiter"]'
  static #goToCourseOverviewButton = '[data-testid="zur-uebersicht-btn"]'
  static #deleteButton = '[data-method="DELETE"]'
  static #confirmDeletionPopup = '[data-testid="modal_delete_course_button"]'
  static #btnSubmit =
    '#main-content > section > form > div.modal-footer > button.btn.btn-primary.btn-submit'
  static #courseDescription = '[id="courseDescription"]'
  static #courseName = '[name="name"]'
  static #createFAB = '[name="fab-icon"]'
  static #newTopicFAB = '[data-testid="fab_button_add_lesson"]'
  static #searchFieldRoomOverview = '[data-testid="search-field"]'
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
  static #deleteButtonInDotMenu =
    '[data-testid="content-card-task-menu-remove"]'
  static #deleteButtonInDotMenuOfTopic =
    '[data-testid="content-card-lesson-menu-remove"]'
  static #editButtonInDotMenu = '[data-testid="content-card-task-menu-edit"]'
  static #editButtonInDotMenuOfTopic =
    '[data-testid="content-card-lesson-menu-edit"]'
  static #contentCardContent = '[data-testid="content-card-task-content"]'
  static #contentCardTopic = '[data-testid="content-card-lesson-content"]'
  static #contentCardTaskActions = '[data-testid="content-card-task-actions"]'
  static #dropDownCourse = '.course-title .three-dot-button'
  static #btnCourseEdit = '[data-testid="title-menu-edit-delete"]'
  static #pageTitle = '[id="page-title"]'
  static #contentCardTaskInfoSubmissionsChip =
    '[data-testid="room-detail-task-chip-submitted"]'
  static #contentCardTaskInfoGradingsChip =
    '[data-testid="room-detail-task-chip-graded"]'

  courseIsVisiblOnOverviewPage (courseName) {
    cy.contains(courseName).should('be.visible').and('contain.text', courseName)
  }

  courseIsNotVisiblOnOverviewPage (courseName) {
    cy.contains(courseName).should('not.exist')
  }

  navigateToRoomsOverview () {
    cy.get(Courses.#courseOverviewNavigationButton)
      .click()
  }

  navigateToRoomBoard (roomName) {
    cy.wait(4444)
    cy.get('h1')
      .eq(0)
      .then($title => {
        const htmlTitlePage = $title.text()
        if (htmlTitlePage.includes('Kurse')) {
          cy.get(`[aria-label="Kurs ${roomName}"]`)
            .click()
        } else if (htmlTitlePage.includes('courses')) {
          cy.get(`[aria-label="Course ${roomName}"]`)
            .click()
        } else if (htmlTitlePage.includes('Cursos')) {
          cy.get(`[aria-label="Curso ${roomName}"]`)
            .click()
        } else if (htmlTitlePage.includes('Поточні')) {
          cy.get(`[aria-label="Курс ${roomName}"]`)
            .click()
        }
      })
  }

  showRoomPage (room) {
    const selectedRoom = `[aria-label='${room}']`
    cy.get(selectedRoom).should('be.visible')
  }

  navigateToTools () {
    cy.get(Courses.#toolsTab).click()
  }

  addNewTool () {
    cy.get(Courses.#addNewToolButton).click()
  }

  courseIsVisibleOnOverviewPage (courseName) {
    cy.contains(courseName)
      .should('be.visible')
      .and('contain.text', courseName)
      .wait(['@schools_api', '@alert_api', '@dashboard_api'])
      .then(interceptions => {
        expect(interceptions[0].response.statusCode).to.equal(200)
        expect(interceptions[1].response.statusCode).to.equal(200)
        expect(interceptions[2].response.statusCode).to.equal(200)
      })
  }

  courseIsNotVisibleOnOverviewPage (courseName) {
    cy.contains(courseName).should('not.exist')
  }

  canAddBigBlueButton () {
    cy.get(Courses.#toolsList).should('be.visible')
  }

  canNotAddBigBlueButton () {
    cy.get(Courses.#toolsList).should('not.exist')
  }

  clickOnCreateCourseFAB () {
    cy.get(Courses.#createCourse)
      .click()
      .wait(['@alerts_api'])
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })
  }

  clickOnCreateContentFAB () {
    cy.get(Courses.#createContent).click()
  }

  clickOnNewTaskFAB () {
    cy.get(Courses.#newTaskFAB).click()
  }

  contentIsVisibleOnCoursePage (taskTitle) {
    cy.reload() // Reload is necessary because after deletion of a content element a message window with its title stays hidden in the DOM
    cy.wait(4444)
    cy.url().should('include', '/rooms/')
    cy.contains(taskTitle)
      .should('be.visible')
      .wait([
        '@public_api',
        '@me_api',
        '@roles_api',
        '@schools_api',
        '@userPermissions_api'
      ])
      .then(interceptions => {
        expect(interceptions[0].response.statusCode).to.equal(200)
        expect(interceptions[1].state).to.equal('Complete')
        expect(interceptions[1].response.statusCode).to.equal(200)
      })
  }

  contentIsNotVisibleOnCoursePage (contentTitle) {
    cy.reload() // Reload is necessary because after deletion of a content element a message window with its title stays hidden in the DOM
      .wait(['@board_api', '@runtime_config_api', '@public_api'])
      .then(interceptions => {
        expect(interceptions[0].response.statusCode).to.equal(200)
        expect(interceptions[1].response.statusCode).to.equal(200)
        expect(interceptions[1].response.statusCode).to.equal(200)
      })
    cy.contains(contentTitle).should('not.exist')
  }

  openTask (taskTitle) {
    cy.get(Courses.#contentCardContent).contains(taskTitle).click()
  }
  openThreeDotMenuForContent (contentTitle) {
    cy.contains(contentTitle).prev().find('button').click()
  }

  openThreeDotMenuForTopic (contentTitle) {
    cy.contains(contentTitle).prev().find('button').click()
  }

  openTopic (contentTitle) {
    cy.contains(contentTitle).parent().click()
  }

  clickDeleteInDotMenu () {
    cy.get(Courses.#deleteButtonInDotMenu).click()
  }

  clickDeleteInDotMenuOfTopic () {
    cy.get(Courses.#deleteButtonInDotMenuOfTopic).click()
  }

  clickEditInDotMenu (linkId) {
    cy.get(Courses.#editButtonInDotMenu).click()
  }

  clickEditInDotMenuOfTopic () {
    cy.get(Courses.#editButtonInDotMenuOfTopic).click()
  }

  clickOnCancelInConfirmationWindow () {
    cy.get(Courses.#dialogCancelButton).click()
  }

  clickDeleteInConfirmationWindow () {
    cy.get(Courses.#dialogConfirmButton).click()
  }

  openCourseEditPage () {
    cy.get(Courses.#dropDownCourse).click()
    cy.get(Courses.#btnCourseEdit)
      .click()
      .wait(['@alerts_api'])
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })
  }

  showCourseEditPage () {
    cy.get(Courses.#pageTitle)
    cy.contains('Kurs bearbeiten')
  }

  compareSubmittedTasksInformation (submittedTasks, contentTitle) {
    cy.get(Courses.#contentCardContent)
      .contains(contentTitle)
      .parent()
      .parent()
      .find(Courses.#contentCardTaskInfoSubmissionsChip)
      .should('contain', submittedTasks)
  }

  compareGradedTasksInformation (gradedTasks, contentTitle) {
    cy.get(Courses.#contentCardContent)
      .contains(contentTitle)
      .parent()
      .parent()
      .find(Courses.#contentCardTaskInfoGradingsChip)
      .should('contain', gradedTasks)
  }

  clickOnFinishTask (taskTitle) {
    cy.get(Courses.#contentCardContent)
      .contains(taskTitle)
      .parent()
      .parent()
      .find(Courses.#contentCardTaskActions)
      .find('button')
      .click()
  }

  checkTaskCardDoesNotHaveButtons (taskTitle) {
    cy.get(Courses.#contentCardContent)
      .contains(taskTitle)
      .parent()
      .parent()
      .find(Courses.#contentCardTaskActions)
      .find('button')
      .should('not.exist')
  }

  checkTaskCardDoesHaveButtons (taskTitle) {
    cy.get(Courses.#contentCardContent)
      .contains(taskTitle)
      .parent()
      .parent()
      .find(Courses.#contentCardTaskActions)
      .find('button')
      .should('be.visible')
  }

  fillCourseCreationForm (new_course) {
    cy.get(Courses.#courseTitle).type(new_course)
  }

  clickOnCreateFAB () {
    cy.get(Courses.#createFAB).click()
  }

  fillCourseCreationForm (newCourseName) {
    cy.get(Courses.#courseTitle).type(newCourseName)
  }

  clickOnNextSteps () {
    cy.get(Courses.#nextButton).click()
    cy.get(Courses.#nextContinueButton).click()
    cy.get(Courses.#goToCourseOverviewButton)
      .click()
      .wait(['@runtime_config_api', '@public_api', '@me_api', '@roles_api'])
      .then(interceptions => {
        expect(interceptions[0].response.statusCode).to.equal(200)
        expect(interceptions[1].response.statusCode).to.equal(200)
        expect(interceptions[2].response.statusCode).to.equal(200)
        expect(interceptions[3].response.statusCode).to.equal(200)
      })
  }

  performRoomDeletion () {
    cy.get(Courses.#deleteButton).click()
    cy.get(Courses.#confirmDeletionPopup)
      .click({
        multiple: true,
        force: true
      })
      .wait(
        [
          '@runtime_config_api',
          '@public_api',
          '@me_api',
          '@roles_api',
          '@schools_api',
          '@alert_api',
          '@dashboard_api'
        ],
        { timeout: 80000 }
      )
      .then(interceptions => {
        expect(interceptions[0].response.statusCode).to.equal(200)
        expect(interceptions[1].response.statusCode).to.equal(200)
        expect(interceptions[2].response.statusCode).to.equal(200)
        expect(interceptions[3].response.statusCode).to.equal(200)
        expect(interceptions[4].response.statusCode).to.equal(200)
        expect(interceptions[5].response.statusCode).to.equal(200)
        expect(interceptions[6].response.statusCode).to.equal(200)
      })
  }

  submitChanges () {
    cy.get(Courses.#btnSubmit)
      .click()
      .wait([
        '@runtime_config_api',
        '@public_api',
        '@me_api',
        '@roles_api',
        '@schools_api',
        '@alert_api',
        '@board_api',
        '@userPermissions_api'
      ])
      .then(interceptions => {
        expect(interceptions[0].response.statusCode).to.equal(200)
        expect(interceptions[1].response.statusCode).to.equal(200)
        expect(interceptions[2].response.statusCode).to.equal(200)
        expect(interceptions[3].response.statusCode).to.equal(200)
        expect(interceptions[4].response.statusCode).to.equal(200)
        expect(interceptions[5].response.statusCode).to.equal(200)
        expect(interceptions[6].response.statusCode).to.equal(200)
        expect(interceptions[7].response.statusCode).to.equal(200)
      })
  }

  editCourseTitleAndDescription (editedRoomName) {
    cy.get(Courses.#courseName).clear().type(editedRoomName)
    cy.get(Courses.#courseDescription).type('cy edit this is test description')
  }

  searchForARoom (roomName) {
    cy.get(Courses.#searchFieldRoomOverview).type(roomName)
  }

  clickOnNewTopicFAB () {
    cy.get(Courses.#newTopicFAB)
      .click()
      .wait(['@alerts_api'])
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })
  }
}
export default Courses

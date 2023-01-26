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
  static #newTopicFAB = '[data-testid="fab_button_add_lesson"]'
  static #dialogConfirmButton = '[data-testid="dialog-confirm"]'
  static #dialogCancelButton = '[data-testid="dialog-cancel"]'
  static #deleteButtonInDotMenu = '[data-testid="content-card-task-menu-remove"]'
  static #deleteButtonInDotMenuOfTopic = '[data-testid="content-card-lesson-menu-remove"]'
  static #editButtonInDotMenu = '[data-testid="content-card-task-menu-edit"]'
  static #contentCardContent = '[data-testid="content-card-task-content"]'
  static #contentCardTopic = '[data-testid="content-card-lesson-content"]'
  static #contentCardTaskActions = '[data-testid="content-card-task-actions"]'
  static #dropDownCourse = '.course-title .three-dot-button'
  static #btnCourseEdit = '[data-testid="title-menu-edit-delete"]'
  static #pageTitle = '[id="page-title"]'
  static #contentCardTaskInfoSubmissionsChip = '[data-testid="room-detail-task-chip-submitted"]'
  static #contentCardTaskInfoGradingsChip = '[data-testid="room-detail-task-chip-graded"]'


  courseIsVisiblOnOverviewPage(courseName) {
    cy.contains(courseName)
      .should('be.visible')
      .and('contain.text', courseName)
  }

  courseIsNotVisiblOnOverviewPage (courseName) {
    cy.contains(courseName)
      .should('not.exist')
  }

  navigateToRoomsOverview () {
    cy.get(Courses_Common.#courseOverviewNavigationButton)
      .click()
      .wait([
        '@runtime_config_api',
        '@public_api',
        '@me_api',
        '@schools_api',
        '@alert_api',
        '@dashboard_api'
      ])
      .then(interceptions => {
        expect(interceptions[0].response.statusCode).to.equal(200)
        expect(interceptions[1].response.statusCode).to.equal(200)
        expect(interceptions[2].response.statusCode).to.equal(200)
        expect(interceptions[3].response.statusCode).to.equal(200)
        expect(interceptions[4].response.statusCode).to.equal(200)
        expect(interceptions[5].request.url).to.include('/dashboard')
      })
  }

  navigateToRoomBoard (roomName) {
    cy.get('h1')
      .eq(0)
      .then($title => {
        const htmlTitlePage = $title.text()
        if (htmlTitlePage.includes('Kurse')) {
          cy.get(`[aria-label="Kurs ${roomName}"]`)
            .eq(0)
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
              expect(interceptions[2].state).to.equal('Complete')
              expect(interceptions[3].response.statusCode).to.equal(200)
              expect(interceptions[4].response.statusCode).to.equal(200)
              expect(interceptions[5].response.statusCode).to.equal(200)
              expect(interceptions[6].response.statusCode).to.equal(200)
              expect(interceptions[7].response.statusCode).to.equal(200)
            })
        } else if (htmlTitlePage.includes('courses')) {
          cy.get(`[aria-label="Course ${roomName}"]`).click()
        } else if (htmlTitlePage.includes('Cursos')) {
          cy.get(`[aria-label="Curso ${roomName}"]`).click()
        } else if (htmlTitlePage.includes('Поточні')) {
          cy.get(`[aria-label="Курс ${roomName}"]`).click()
        }
      })
  }

  showRoomPage (room) {
    const selectedRoom = `[aria-label='${room}']`
    cy.get(selectedRoom).should('be.visible')
  }

  navigateToTools () {
    cy.get(Courses_Common.#toolsTab).click()
  }

  addNewTool () {
    cy.get(Courses_Common.#addNewToolButton).click()
  }

  courseIsVisibleOnOverviewPage (courseName) {
    cy.contains(courseName)
      .should('be.visible')
      .and('contain.text', courseName)
      .wait([
        '@schools_api',
        '@alert_api',
        '@dashboard_api'
      ])
      .then(interceptions => {
        expect(interceptions[0].response.statusCode).to.equal(200)
        expect(interceptions[1].response.statusCode).to.equal(200)
        expect(interceptions[2].response.statusCode).to.equal(200)
      })
  }

  courseIsNotVisibleOnOverviewPage (courseName) {
    cy.contains(courseName)
      .should('not.exist')
  }

  canAddBigBlueButton () {
    cy.get(Courses_Common.#toolsList).should('be.visible')
  }

  canNotAddBigBlueButton () {
    cy.get(Courses_Common.#toolsList).should('not.exist')
  }

  clickOnCreateCourseFAB () {
    cy.get(Courses_Common.#createCourse)
      .click()
      .wait([
        '@alerts_api'
      ])
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })
  }

  clickOnCreateContentFAB () {
    cy.get(Courses_Common.#createContent).click()
  }

  clickOnNewTaskFAB () {
    cy.get(Courses_Common.#newTaskFAB).click()
  }

  clickOnNewTopicFAB () {
    cy.get(Courses_Common.#newTopicFAB)
      .click()
      .wait([
        '@alerts_api'
      ])
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })
  }

  contentIsVisibleOnCoursePage (contentTitle) {
    cy.reload() // Reload is necessary because after deletion of a content element a message window with its title stays hidden in the DOM
    cy.url().should('include', '/rooms/')
    cy.contains(contentTitle)
      .should('be.visible')
      .wait([
        '@runtime_config_api',
        '@public_api',
        '@me_api',
        '@roles_api',
        '@schools_api',
        '@userPermissions_api'
      ])
      .then(interceptions => {
        expect(interceptions[0].response.statusCode).to.equal(200)
        expect(interceptions[1].response.statusCode).to.equal(200)
        expect(interceptions[2].state).to.equal('Complete')
        expect(interceptions[2].response.statusCode).to.equal(200)
      })
  }

  contentIsNotVisibleOnCoursePage (taskTitle) {
    cy.reload() // Reload is necessary because after deletion of a content element a message window with its title stays hidden in the DOM
      .wait([
        '@board_api',
        '@runtime_config_api',
        '@public_api'
      ])
      .then(interceptions => {
        expect(interceptions[0].response.statusCode).to.equal(200)
        expect(interceptions[1].response.statusCode).to.equal(200)
        expect(interceptions[1].response.statusCode).to.equal(200)
      })
    cy.contains(taskTitle).should('not.exist')
  }

  openTask (taskTitle) {
    cy.get(Courses_Common.#contentCardContent)
      .contains(taskTitle)
      .click()
  }

  openThreeDotMenuForContent (contentTitle) {
    cy.get(Courses_Common.#contentCardContent)
      .contains(contentTitle)
      .prev()
      .find('button')
      .click()
  }

  openThreeDotMenuForTopic (topicTitle) {
    cy.get(Courses_Common.#contentCardTopic)
      .contains(topicTitle)
      .prev()
      .find('button')
      .click()
  }

  clickDeleteInDotMenu (linkId) {
    cy.get(Courses_Common.#deleteButtonInDotMenu).click()
  }

  clickDeleteInDotMenuOfTopic () {
    cy.get(Courses_Common.#deleteButtonInDotMenuOfTopic).click()
  }

  clickEditInDotMenu (linkId) {
    cy.get(Courses_Common.#editButtonInDotMenu).click()
  }

  clickOnCancelInConfirmationWindow () {
    cy.get(Courses_Common.#dialogCancelButton).click()
  }

  clickDeleteInConfirmationWindow () {
    cy.get(Courses_Common.#dialogConfirmButton).click()
  }

  openCourseEditPage () {
    cy.get(Courses_Common.#dropDownCourse)
      .click()
    cy.get(Courses_Common.#btnCourseEdit)
      .click()
      .wait([
        '@alerts_api'
      ])
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })
  }

  showCourseEditPage () {
    cy.get(Courses_Common.#pageTitle)
    cy.contains('Kurs bearbeiten')
  }

  compareSubmittedTasksInformation (submittedTasks, contentTitle) {
    cy.get(Courses_Common.#contentCardContent)
      .contains(contentTitle)
      .parent()
      .parent()
      .find(Courses_Common.#contentCardTaskInfoSubmissionsChip)
      .should('contain', submittedTasks)
  }

  compareGradedTasksInformation (gradedTasks, contentTitle) {
    cy.get(Courses_Common.#contentCardContent)
      .contains(contentTitle)
      .parent()
      .parent()
      .find(Courses_Common.#contentCardTaskInfoGradingsChip)
      .should('contain', gradedTasks)
  }

  clickOnFinishTask (taskTitle) {
    cy.get(Courses_Common.#contentCardContent)
      .contains(taskTitle)
      .parent()
      .parent()
      .find(Courses_Common.#contentCardTaskActions)
      .find('button')
      .click()
  }

  checkTaskCardDoesNotHaveButtons (taskTitle) {
    cy.get(Courses_Common.#contentCardContent)
      .contains(taskTitle)
      .parent()
      .parent()
      .find(Courses_Common.#contentCardTaskActions)
      .find('button')
      .should('not.exist')
  }

  checkTaskCardDoesHaveButtons (taskTitle) {
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

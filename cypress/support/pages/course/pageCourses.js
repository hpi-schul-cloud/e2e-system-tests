'use strict'

class Courses {
  static #courseTitle = '[data-testid="coursename"]'
  static #nextButton = '[id="nextSection"]'
  static #goToCourseOverviewButton = '[data-testid="courses-to-overview-btn"]'
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
  static #addSubstituteTeacher = '[id="substituteTeacher_chosen"]'
  static #chosenResults = '.chosen-results li'
  static #chosenContainer  = '.chosen-container span'

  courseIsVisiblOnOverviewPage (courseName) {
    cy.contains(courseName).should('be.visible').and('contain.text', courseName)
  }

  courseIsNotVisiblOnOverviewPage (courseName) {
    cy.contains(courseName).should('not.exist')
  }

  navigateToRoomsOverview () {
    cy.get(Courses.#courseOverviewNavigationButton)
        .should('exist')
      .click()
    cy.wait(['@dashboard_api', '@courses_api'])
  }

  navigateToRoomBoard (roomName) {
    cy.get('h1')
      .eq(0)
      .then($title => {
        const htmlTitlePage = $title.text()
        if (htmlTitlePage.includes('Kurse')) {
          cy.get(`[aria-label="Kurs ${roomName}"]`)
              .should('exist')
            .click()
        } else if (htmlTitlePage.includes('courses')) {
          cy.get(`[aria-label="Course ${roomName}"]`)
              .should('exist')
            .click()
        } else if (htmlTitlePage.includes('Cursos')) {
          cy.get(`[aria-label="Curso ${roomName}"]`)
              .should('exist')
            .click()
        } else if (htmlTitlePage.includes('Поточні')) {
          cy.get(`[aria-label="Курс ${roomName}"]`)
              .should('exist')
            .click()
        }
      })
      cy.wait(['@board_api', '@userPermissions_api'])
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
    cy.wait('@homework_api')
  }

  contentIsVisibleOnCoursePage (taskTitle) {
    cy.reload() // Reload is necessary because after deletion of a content element a message window with its title stays hidden in the DOM
    cy.wait('@rooms_api')
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
    cy.wait('@homework_api')
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
    cy.wait('@homework_api')
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
       .wait(['@course_api'])
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

  clickOnToCourseOverviewBtn () {
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

  clickOnNextStepsBtn () {
    cy.get(Courses.#nextButton).click()
  }

  performRoomDeletion () {
    cy.get(Courses.#deleteButton).should('exist').click()
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
          '@dashboard_api',
            '@rooms_overview_api'
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

  clearSubstituteTeacherField() {
    cy.get(Courses.#addSubstituteTeacher).click().type('{selectall}{backspace}')
  }

  addSubstituteTeacher (username) {
    let userFirstName
    let userLastName
    switch (username) {
      case 'teacher1':
        userFirstName = Cypress.env('TEACHER_1_FIRST_NAME')
        userLastName = Cypress.env('TEACHER_1_LAST_NAME')
        break
      case 'teacher2':
        userFirstName = Cypress.env('TEACHER_2_FIRST_NAME')
        userLastName = Cypress.env('TEACHER_2_LAST_NAME')
        break
    }
    let userFullName = userLastName + ", " + userFirstName
    cy.get(Courses.#chosenResults).contains(userFullName).click()
    cy.get(Courses.#chosenContainer).should('contain', userFullName)
  }

  deleteAllCoursesMatchingName (roomName) {
    cy.get('h1')
        .eq(0)
        .then($title => {
          const htmlTitlePage = $title.text()
          if (htmlTitlePage.includes('Kurse')) {
              this.deleteCursesByName('Kurs', roomName)
          } else if (htmlTitlePage.includes('courses')) {
              this.deleteCursesByName('Course', roomName)
          } else if (htmlTitlePage.includes('Cursos')) {
              this.deleteCursesByName('Curso', roomName)
          } else if (htmlTitlePage.includes('Поточні')) {
              this.deleteCursesByName('Курс', roomName)
          }
        })
  }

  deleteCursesByName (courseLabel, roomName) {
      cy.get(`[class="rooms-container"]`).then($roomsContainer => {
          if ($roomsContainer.find(`[aria-label="${courseLabel} ${roomName}"]`).length) {
              cy.get(`[aria-label="${courseLabel} ${roomName}"]`).then(($rooms) => {
                  if ($rooms) {
                      cy.wrap($rooms).first().click()
                      cy.wait(['@board_api', '@userPermissions_api', '@rooms_api']);
                      this.openCourseEditPage();
                      cy.get(Courses.#deleteButton).should('exist').click()
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
                                  '@dashboard_api',
                                  '@rooms_overview_api'
                              ],
                              {timeout: 80000}
                          )

                      if ($rooms.length > 1) {
                          this.deleteAllCoursesMatchingName(roomName)
                      }
                  }
              })
          }
      })
  }

}
export default Courses

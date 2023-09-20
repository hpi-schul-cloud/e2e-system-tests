'use strict'

class Courses {
  static #courseTitle = '[data-testid="coursename"]'
  static #nextButton = '[id="nextSection"]'
  static #goToCourseOverviewButton = '[data-testid="courses-to-overview-btn"]'
  static #deleteButton = '[data-method="DELETE"]'
  static #confirmDeletionPopup = '[data-testid="modal_delete_course_button"]'
  static #btnSubmit = '[data-testid="modal-edit-course-button"]'
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
  static #dropDownCourse = '[data-testid="title-menu"]'
  static #btnCourseEdit = '[data-testid="title-menu-edit-delete"]'
  static #pageTitle = '[id="page-title"]'
  static #contentCardTaskInfoSubmissionsChip =
    '[data-testid="room-detail-task-chip-submitted"]'
  static #contentCardTaskInfoGradingsChip =
    '[data-testid="room-detail-task-chip-graded"]'
  static #addSubstituteTeacher = '[id="substituteTeacher_chosen"]'
  static #chosenResults = '.chosen-results li'
  static #chosenContainer = '.chosen-container span'
  static #roomSearrchBox = '[data-testid="search-field"]'
  static #selectRoomColour = '[data-testid="color-picker"]'
  static #RoomColourAsRed = '[aria-label="#D50000"]'
  static #chosenCourseTeacher = '[id="courseTeacher_chosen"]'
  static #chosenSubstituteTeacher = '[id="courseSubstitute_chosen"]'
  static #courseStartDatePicker = '[data-testid="date_start"]'
  static #courseEndDatePicker = '[data-testid="form-date-input-untilDate"]'
  static #courseTimeTableContainer = '[data-timesref="#timesContainer"]'
  static #addClassToCourseSelectionBox = '[id="addClassesToCourse_chosen"]'
  static #addStudentToCourseSelectionBox = '[id="addStudentsToCourse_chosen"]'
  static #nextButtonToCreateCourseOnParticipationDeatilStep =
    '[id="nextSection"]'
  static #sectionThreeAreaOnCourseCreationPage =
    '[data-testid="section-3-area"]'
  static #sectionOneAreaOnCourseCreationPage = '[data-testid="section-1-area"]'
  static #sectionTwoAreaOnCourseCreationPage = '[data-testid="section-2-area"]'
  static #courseDeleteConfirmationModal = '[data-testid="popup-title"]'
  static #courseTitleInRoomoverview = '[data-testid="course-title"]'
  static #learningContentTab = '[data-testid="learnContent-tab"]'
  static #courseDetailPageTitle = '[data-testid="courses-course-title"]'

  seeSectionOneAreaOnCourseCreatePage () {
    cy.get(Courses.#sectionOneAreaOnCourseCreationPage).should('exist')
  }

  seeSectionTwoAreaOnCourseCreatePage () {
    cy.get(Courses.#sectionTwoAreaOnCourseCreationPage).should('exist')
  }

  seeSelectedDefaultTeacher (defaultTeacherName) {
    cy.get(Courses.#chosenCourseTeacher).contains(defaultTeacherName)
  }

  seeSubstituteTeacherSelectionBox () {
    cy.get(Courses.#chosenSubstituteTeacher).should('exist')
  }

  seeDatePickersForCourseInSchoolYear () {
    cy.get(Courses.#courseStartDatePicker).should('exist')
    cy.get(Courses.#courseEndDatePicker).should('exist')
  }

  seeCreateCourseTimeTableContainer () {
    cy.get(Courses.#courseTimeTableContainer).should('exist')
  }

  seeSelectionBoxToSelectClass () {
    cy.get(Courses.#addClassToCourseSelectionBox).should('exist')
  }

  seeSelectioinBoxToSelectStudent () {
    cy.get(Courses.#addStudentToCourseSelectionBox).should('exist')
  }

  clickOnNextStepButtonOnCourseParticipationDetail () {
    cy.get(Courses.#nextButtonToCreateCourseOnParticipationDeatilStep).click()
  }

  seeCourseCreationFinishPageSectionThree () {
    cy.get(Courses.#sectionThreeAreaOnCourseCreationPage).should('exist')
  }

  selectRoomColour () {
    cy.get(Courses.#RoomColourAsRed).click()
  }

  seeRoomSearchBoxOnRoomOverview () {
    cy.get(Courses.#roomSearrchBox).should('be.exist')
  }

  courseIsVisiblOnOverviewPage (courseName) {
    cy.contains(courseName).should('be.visible').and('contain.text', courseName)
  }

  courseIsNotVisiblOnOverviewPage (courseName) {
    cy.contains(courseName).should('not.exist')
  }

  navigateToRoomsOverview () {
    cy.get(Courses.#courseOverviewNavigationButton).click()
  }

  navigateToRoomBoard (roomName) {
    cy.contains(Courses.#courseTitleInRoomoverview, roomName)
      .should('be.visible')
      .then(title => {
        cy.wrap(title)
          .prev()
          .click()
          .then(() => {
            return new Cypress.Promise((resolve, reject) => {
              try {
                setTimeout(() => {
                  cy.wait(['@alert_api', '@board_api', '@userPermissions_api'])
                    .get(Courses.#learningContentTab)
                    .should('have.attr', 'aria-selected', 'true')
                  resolve()
                  return
                }, 1000)
              } catch (error) {
                reject(error)
              }
            })
          })
      })
  }

  showRoomPage (courseName) {
    cy.wait('@rooms_api')
    cy.get(Courses.#courseDetailPageTitle).should('contain.text', courseName)
  }

  navigateToTools () {
    cy.get(Courses.#toolsTab).click()
  }

  addNewTool () {
    cy.get(Courses.#addNewToolButton).click()
  }

  courseIsVisibleOnOverviewPage (courseName) {
    cy.contains(courseName).should('be.visible').and('contain.text', courseName)
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

  clickOnCreateRoomFAB () {
    cy.get(Courses.#createCourse).click()
  }

  clickOnCreateContentFAB () {
    cy.wait('@rooms_api')
    cy.get(Courses.#createContent).click()
  }

  clickOnNewTaskFAB () {
    cy.get(Courses.#newTaskFAB).click()
    cy.wait('@homework_api')
  }

  contentIsVisibleOnCoursePage (taskTitle) {
    // no cy.wait('@rooms_api') here as the reload takes care of this
    cy.reload() // Reload is necessary because after deletion of a content element a message window with its title stays hidden in the DOM
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
    cy.contains(taskTitle).should('be.visible')
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
    // cy.wait('@rooms_api') dont needed as on vue page already where scenario is given
    cy.get(Courses.#contentCardContent).contains(taskTitle).click()
    cy.wait('@homework_api')
  }
  openThreeDotMenuForContent (contentTitle) {
    cy.wait('@rooms_api')
    cy.get(Courses.#contentCardContent)
      .contains(contentTitle)
      .parent()
      .find('button')
      .click()
  }

  openThreeDotMenuForTopic (contentTitle) {
    cy.wait('@rooms_api')
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
    cy.wait('@rooms_api')
    cy.get(Courses.#dropDownCourse).parent().click()
    cy.get(Courses.#btnCourseEdit).click()
  }

  showCourseEditPage () {
    cy.get(Courses.#pageTitle).should('exist')
  }

  compareSubmittedTasksInformation (submittedTasks, contentTitle) {
    cy.wait('@rooms_api')
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
    cy.wait('@rooms_api')
    cy.get(Courses.#contentCardContent)
      .contains(taskTitle)
      .parent()
      .parent()
      .find(Courses.#contentCardTaskActions)
      .find('button')
      .click()
      .wait(['@task_finish_api'])
  }

  checkTaskCardDoesNotHaveButtons (taskTitle) {
    cy.wait('@rooms_api')
    cy.get(Courses.#contentCardContent)
      .contains(taskTitle)
      .parent()
      .parent()
      .find(Courses.#contentCardTaskActions)
      .find('button')
      .should('not.exist')
  }

  checkTaskCardDoesHaveButtons (taskTitle) {
    cy.wait('@rooms_api')
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
    cy.get(Courses.#goToCourseOverviewButton).click()
  }

  clickOnNextStepsBtnAfterEnteringRoomDetails () {
    cy.get(Courses.#nextButton).click()
  }

  clickOnDeleteButtonOnCourseEditPage () {
    cy.get(Courses.#deleteButton).click()
  }

  seeModalToConfirmCourseDeletion () {
    cy.get(Courses.#courseDeleteConfirmationModal).should('exist')
  }

  confirmCourseDeletionOnModal () {
    cy.get(Courses.#confirmDeletionPopup).click({ multiple: true, force: true })
  }

  submitChangesAfterEditingCourse () {
    cy.get(Courses.#btnSubmit).click()
  }

  editCourseTitle (editedRoomName) {
    cy.get(Courses.#courseName).clear().type(editedRoomName)
  }

  editCourseDescription (editedRoomDesccription) {
    cy.get(Courses.#courseDescription).clear().type(editedRoomDesccription)
  }

  searchForARoom (roomName) {
    cy.wait('@rooms_overview_api');
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

  clearSubstituteTeacherField () {
    cy.get(Courses.#addSubstituteTeacher).click().type('{selectall}{backspace}')
  }

  addSubstituteTeacher (username) {
    let userFirstName
    let userLastName
    switch (username) {
      case 'teacher1':
        userFirstName = Cypress.env('TEACHER_1_BRB_FIRST_NAME')
        userLastName = Cypress.env('TEACHER_1_BRB_LAST_NAME')
        break
      case 'teacher2':
        userFirstName = Cypress.env('TEACHER_2_BRB_FIRST_NAME')
        userLastName = Cypress.env('TEACHER_2_BRB_LAST_NAME')
        break
    }
    let userFullName = userLastName + ', ' + userFirstName
    cy.get(Courses.#chosenResults).contains(userFullName).click()
    cy.get(Courses.#chosenContainer).should('contain', userFullName)
  }

  deleteAllCoursesMatchingName (roomName) {
    cy.get('h1')
      .eq(0)
      .then($title => {
        const htmlTitlePage = $title.text()
        if (htmlTitlePage.includes('Kurse')) {
          this.deleteCoursesByName('Kurs', roomName)
        } else if (htmlTitlePage.includes('courses')) {
          this.deleteCoursesByName('Course', roomName)
        } else if (htmlTitlePage.includes('Cursos')) {
          this.deleteCoursesByName('Curso', roomName)
        } else if (htmlTitlePage.includes('Поточні')) {
          this.deleteCoursesByName('Курс', roomName)
        }
      })
  }

  deleteCoursesByName (courseLabel, roomName) {
    cy.get(`[class="rooms-container"]`).then($roomsContainer => {
      if (
        $roomsContainer.find(`[aria-label="${courseLabel} ${roomName}"]`).length
      ) {
        cy.get(`[aria-label="${courseLabel} ${roomName}"]`).then($rooms => {
          if ($rooms) {
            cy.wrap($rooms).first().click()
            this.openCourseEditPage()
            cy.get(Courses.#deleteButton).should('exist').click()
            cy.get(Courses.#confirmDeletionPopup).click({
              multiple: true,
              force: true
            })

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

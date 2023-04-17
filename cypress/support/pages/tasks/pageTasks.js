'use strict'

class Tasks {
  static #pageTitle = '[id="page-title"]'
  static #localeDateFormat = 'de-DE'
  static #taskOverviewTeacher = '[class="task-dashboard-teacher"]'
  static #taskOverviewStudent = '[class="task-dashboard-student"]'
  static #groupSubmissionCheckbox = '[id="teamSubmissions"]'
  static #draftCheckbox = '[data-testid="private-checkbox"]'
  static #visibilityStartDateInput =
    '[data-testid="form-datetime-input-availableDate"]'
  static #visibilityDueDateInput = '[data-testid="form-datetime-input-dueDate"]'
  static #publicSubmissionsCheckbox = '[id="publicSubmissionsCheckbox"]'
  static #dialogConfirmButton =
    '[data-testid="task-publicSubmissions-dialog-confirm"]'
  static #dialogCancelButton =
    '[data-testid="task-publicSubmissions-dialog-cancel"]'
  static #dialogCancelDeletionTaskButtons =
    '#modal-delete-homework-footer > .btn-close'
  static #dialogConfirmDeletionTaskButtons =
    '#modal-delete-homework-footer > .btn-submit'
  static #taskDetailsTab = '[id="extended"]'
  static #submissionTab = '[id="submission-tab-link"]'
  static #submissionsTab = '[id="submissions-tab-link"]'
  static #taskDetailsEditButton = '[data-testid="task-details-btn-edit"]'
  static #fileUploadButtonDisabled = '[data-testid="fileupload-button"]'
  static #fileUploadButtonEnabled = '[data-testid="fileupload-button"]'
  static #fileUploadInput = '[data-testid="fileupload-input"]'
  static #filesSection = '[data-testid="tasks-section-files"]'
  static #uploadedFilesSectionInSubmission =
    '[data-testid="submissions-section-files"]'
  static #fileViewerSection = '[class="file-viewer"]'
  static #renameFileInput = '[id="newNameInput"]'
  static #renameFileCancelButton =
    '[data-testid="rename-file-dialog-cancel-btn"]'
  static #renameFileSubmitButton =
    '[data-testid="rename-file-dialog-submit-btn"]'
  static #deleteFileCancelButton =
    '[data-testid="delete-file-dialog-cancel-btn"]'
  static #deleteFileSubmitButton =
    '[data-testid="delete-file-dialog-submit-btn"]'
  static #submissionSaveButton = '[data-testid="tasks-submission-save-btn"]'
  static #submissionSendButton = '[data-testid="tasks-submission-submit-btn"]'
  static #gradingSaveAndSendBtn =
    '[data-testid="tasks-submission-grading-save-and-send-btn"]'
  static #hintForSubmissionReceived =
    '[data-testid="tasks-submission-hint-received"]'
  static #doneTasksTab = '[data-testid="closedTasks"]'
  static #taskTitleInList = '[data-testid="taskTitle"]'
  static #taskSection = '[data-testid="task-section-task"]'
  static #submissionsSection = '[id="submissions"]'
  static #submissionDiv = '[id="submission"]'
  static #gradingPercentInput = '[data-testid="evaluation_procent"]'
  static #lowerTaskSectionIcon = '[data-testid="lowerTaskSectionIcon"]'
  static #lowertaskSectionText = '[data-testid="lowerTaskSection"]'
  static #toCourseButton = '[data-testid="tasks-navbtn-to-room"]'
  static #taskSubmissionsSubmittedIcon =
    '[data-testid="task-submissions-task-submitted-icon"]'
  static #taskSubmissionsOpenSubmissionIcon =
    '[data-testid="task-submissions-opensubmission-icon"]'
  static #taskSubmissionsGradingTabLink =
    '[data-testid="task-submission-grading-tab"]'
  static #taskFeedbackTabLink = '[id="feedback-tab-link"]'
  static #feedbackSection = '[id="feedback"]'
  static #finishedTasksTab = '[data-testid="finishedTasks"]'
  static #openTasksTab = '[data-testid="openTasks"]'
  static #finishedTasksListDiv = '[id="finished"]'
  static #taskDotMenu = '[data-testid="task-menu"]'
  static #taskFinishButtonInDotMenu = '[data-testid="task-finish"]'
  static #uploadedFileNameTag = '.card-block > div > a'
  static #tasksOverviewNavigationButton = '[data-testid="Aufgaben"]'
  static #taskForm = '[id="homework-form"]'
  static #submitButton = '[data-testid="submit-task-btn"]'
  static #createContentButton =  '[data-testid="add-content-button"]'
  static #addTaskButton = '[data-testid="fab_button_add_task"]'
  static #taskNameInput = '[data-testid="homework-name"]'
  static #homeworkDescription = '[class="ck ck-editor__main"]'
  static #draftTasksTab = '[data-testid="draftTasks"]'
  static #taskCardTitle = '[data-testid="taskTitle"]'
  static #taskMenuDelete = '[data-testid="task-delete"]'
  static #deleteTaskButton = '[data-testid="task-details-btn-delete"]'
  static #downloadFileGradingSection =
    '[data-testid="submissions-section-files"]'
  static #downloadFileTitle = '.card-title'
  static #downloadFileText = '.card-text'

  navigateToTasksOverview () {
    cy.visit('/tasks')
    cy.url().should('include', '/tasks')
  }

  clickOnSubmit () {
    cy.get(Tasks.#taskForm).find(Tasks.#submitButton).click()
    cy.wait('@rooms_api')
  }

  clickOnSubmitAndStayOnCreatePage () {
    cy.get(Tasks.#taskForm).find(Tasks.#submitButton).click()
    cy.wait('@homework_api')
  }

  clickOnAddTask () {
    cy.get(Tasks.#addTaskButton).click()
  }

  clickOnAddCreateContent () {
    cy.get(Tasks.#createContentButton).click()
  }

  seeCreateTaskPage (taskTitle) {
    if (taskTitle === '-') {
      cy.get(Tasks.#taskForm).get(Tasks.#taskNameInput).should('be.empty')
    } else {
      cy.get(Tasks.#taskForm)
        .get(Tasks.#taskNameInput)
        .should('have.value', taskTitle)
    }
  }

  enterTaskTitle (taskTitle) {
    cy.get(Tasks.#taskNameInput).clear()
    cy.get(Tasks.#taskNameInput).type(taskTitle)
  }

  setTaskText (taskText) {
    cy.get(Tasks.#homeworkDescription).find('div > p').clear()
    cy.get(Tasks.#homeworkDescription).find('div > p').type(taskText)
  }

  clickOnTabDraftTasks () {
    cy.get(Tasks.#draftTasksTab).click()
  }

  taskIsVisibleOnTasksOverviewPage (taskTitle) {
    cy.reload() // Reload is necessary because after deletion of a content element a message window with its title stays hidden in the DOM
    cy.wait(5000)
    cy.url().should('include', '/tasks')
    cy.contains(taskTitle).should('be.visible')
  }

  taskIsNotVisibleOnTasksOverviewPage (taskTitle) {
    cy.wait(200)
    cy.contains(taskTitle).should('not.exist')
  }

  openThreeDotMenuForTask (taskTitle) {
    cy.get(Tasks.#taskCardTitle)
      .contains(taskTitle)
      .parent()
      .parent()
      .find('button')
      .click()
  }

  openTaskFromTasksOverview (taskTitle) {
    cy.get(Tasks.#taskCardTitle).contains(taskTitle).click()
  }

  clickDeleteTaskInDotMenu () {
    cy.get(Tasks.#taskMenuDelete).click()
  }

  clickButtonDeleteTask () {
    cy.get(Tasks.#deleteTaskButton).click()
  }

  clickCancelDeletionButtonInEditTask () {
    cy.get(Tasks.#dialogCancelDeletionTaskButtons).click()
  }

  clickConfirmDeletionButtonInEditTask () {
    cy.get(Tasks.#dialogConfirmDeletionTaskButtons).click()
  }

  compareFeedbackText (feedbackText) {
    cy.get(Tasks.#feedbackSection).should('contain', feedbackText)
  }

  compareFeedbackGrade (feedbackGrade) {
    cy.get(Tasks.#feedbackSection).should('contain', feedbackGrade)
  }

  seeUploadFileButtonIsDisabled () {
    cy.get(Tasks.#fileUploadButtonDisabled).should('be.visible')
  }

  seeUploadFileButtonIsEnabled () {
    cy.get(Tasks.#fileUploadButtonEnabled).should('be.visible')
  }

  clickOnGroupSubmissionCheckbox () {
    cy.get(Tasks.#groupSubmissionCheckbox).click()
  }

  clickOnDraftCheckbox () {
    cy.get(Tasks.#draftCheckbox).click()
  }

  setVisibilityStartDate (visibilityStartDate, visibilityStartTime) {
    const today = new Date()
    let startDate
    if (visibilityStartDate === 'today') {
      startDate = today
    } else if (visibilityStartDate === 'tomorrow') {
      startDate = new Date(today)
      startDate.setDate(startDate.getDate() + 1)
    }
    let startDateText = startDate.toLocaleString(Tasks.#localeDateFormat, {
      year: 'numeric',
      day: '2-digit',
      month: '2-digit'
    })
    cy.get(Tasks.#visibilityStartDateInput).type(
      `{selectAll}${startDateText}${visibilityStartTime}`
    )
  }

  setVisibilityDueDate (visibilityDueDate, visibilityDueTime) {
    const today = new Date()
    let dueDate
    if (visibilityDueDate === 'today') {
      dueDate = today
    } else if (visibilityDueDate === 'tomorrow') {
      dueDate = new Date(today)
      dueDate.setDate(dueDate.getDate() + 1)
    }
    let startDueText = dueDate.toLocaleString(Tasks.#localeDateFormat, {
      year: 'numeric',
      day: '2-digit',
      month: '2-digit'
    })
    cy.get(Tasks.#visibilityDueDateInput).type(
      `{selectAll}${startDueText}${visibilityDueTime}`
    )
  }

  executeFileUpload (fileName) {
    // mark our window object to "know" when it gets reloaded
    cy.window().then(w => (w.beforeReload = true))
    // initially the new property is there
    cy.window().should('have.prop', 'beforeReload', true)
    // Upload a file includes a reload of the page
    cy.get(Tasks.#fileUploadInput).attachFile(fileName)
    // after reload the property should be gone
    cy.window().should('not.have.prop', 'beforeReload')
    cy.wait('@homework_api')
  }

  executeFileUploadForSubmission (fileName) {
    cy.get(Tasks.#fileUploadInput)
      .attachFile(fileName) // attaching the file
      .then(() => {
        cy.contains(Tasks.#uploadedFileNameTag, fileName).should('be.visible')
      })
  }

  clickOnPublicSubmissionCheckbox () {
    cy.get(Tasks.#publicSubmissionsCheckbox).click()
  }

  clickOnCancelInConfirmationWindow () {
    cy.get(Tasks.#dialogCancelButton).click()
  }

  clickOnSubmitInConfirmationWindow () {
    cy.get(Tasks.#dialogConfirmButton).click()
  }

  compareDescriptionOnDetailpage (expectedDescription) {
    cy.get(Tasks.#taskDetailsTab).should('contain', expectedDescription)
  }

  clickOnEditInTaskDetails () {
    cy.get(Tasks.#taskDetailsEditButton).click()
    cy.wait('@homework_api')
  }

  publicSubmissionIsEnabled () {
    cy.get(Tasks.#publicSubmissionsCheckbox).should('be.checked')
  }

  compareVisibilityStartDate (visibilityStartDate, visibilityStartTime) {
    const today = new Date()
    let startDate
    if (visibilityStartDate === 'today') {
      startDate = today
    } else if (visibilityStartDate === 'tomorrow') {
      startDate = new Date(today)
      startDate.setDate(startDate.getDate() + 1)
    }
    let startDateText = startDate.toLocaleString('en-GB', {
      year: 'numeric',
      day: '2-digit',
      month: '2-digit'
    })
    let startDateCheckValue =
      startDateText.replace(/\//gm, '.') + ' ' + visibilityStartTime
    cy.get(Tasks.#visibilityStartDateInput).should(
      'have.value',
      startDateCheckValue
    )
  }

  compareVisibilityDueDate (visibilityDueDate, visibilityDueTime) {
    const today = new Date()
    let dueDate
    if (visibilityDueDate === 'today') {
      dueDate = today
    } else if (visibilityDueDate === 'tomorrow') {
      dueDate = new Date(today)
      dueDate.setDate(dueDate.getDate() + 1)
    }
    let dueDateText = dueDate.toLocaleString('en-GB', {
      year: 'numeric',
      day: '2-digit',
      month: '2-digit'
    })
    let dueDateCheckValue =
      dueDateText.replace(/\//gm, '.') + ' ' + visibilityDueTime
    cy.get(Tasks.#visibilityDueDateInput).should(
      'have.value',
      dueDateCheckValue
    )
  }

  seeDraftIsDisabled () {
    cy.get(Tasks.#draftCheckbox).should('not.be.checked')
  }

  seeFileInSectionFilesInEditTask (fileName) {
    cy.get(Tasks.#filesSection).contains(fileName, { includeShadowDom: true })
  }

  seeFileInSectionUploadedFiles (fileName) {
    cy.contains(fileName, {
      includeShadowDom: true
    })
  }

  seeFileInSubmissionSectionUploadedFiles (fileName) {
    cy.get(Tasks.#uploadedFilesSectionInSubmission)
      .contains(fileName, { includeShadowDom: true })
      .should('be.visible')
  }

  fileIsNotVisibleInSectionFiles (fileName) {
    cy.get(Tasks.#filesSection)
      .contains(fileName, { includeShadowDom: true })
      .should('not.exist')
  }

  clickOnFileInTaskEditPage (fileName) {
    // pdf files are excluded, because they open in a new browser tab, which can not be reached by cypress
    if (
      fileName.includes('png') ||
      fileName.includes('jpg') ||
      fileName.includes('gif')
    ) {
      cy.get(Tasks.#filesSection).contains(fileName).click()
      cy.wait('@homework_api')
    }
  }

  seeFileInFileViewer (fileName) {
    // pdf files are excluded, because they open in a new browser tab, which can not be reached by cypress
    if (
      fileName.includes('png') ||
      fileName.includes('jpg') ||
      fileName.includes('gif')
    ) {
      cy.get(Tasks.#fileViewerSection)
        .find('img')
        .should('have.attr', 'src')
        .should('contain', fileName)
    }
  }

  clickOnFileViewer (fileName) {
    // pdf files are excluded, because they open in a new browser tab, which can not be reached by cypress
    if (
      fileName.includes('png') ||
      fileName.includes('jpg') ||
      fileName.includes('gif')
    ) {
      cy.get(Tasks.#fileViewerSection).find('a').eq(0).click()
      cy.wait('@homework_api')
    }
  }

  clickOnRenameFile (fileName) {
    cy.get(`[data-file-viewer-savename="${fileName}"]`)
      .find('button')
      .eq(1)
      .click()
  }

  enterNewFileName (newFileName) {
    cy.get(Tasks.#renameFileInput).click().focus().clear()
    cy.get(Tasks.#renameFileInput).type(newFileName, { force: true })
  }

  cancelRenameFileDialog () {
    cy.get(Tasks.#renameFileCancelButton).click()
  }

  submitRenameFileDialog () {
    cy.get(Tasks.#renameFileSubmitButton).click()
    cy.reload()
    cy.wait('@homework_api')
  }

  clickDownloadFile (fileName) {
    cy.get(`[data-file-viewer-savename="${fileName}"]`)
      .find('[data-method="download"]')
      .click()
    cy.wait('@rooms_api')
  }

  clickDownloadFileInSubmission (fileName) {
    cy.get(`[data-file-name="${fileName}"]`)
      .find('button')
      .should('be.visible')
      .click()
  }

  clickDownloadFileInGrading (fileName) {
    cy.get(Tasks.#downloadFileGradingSection)
      .first()
      .then(elm => {
        cy.get(elm)
          .contains(Tasks.#downloadFileTitle, fileName)
          .should('be.visible')
        cy.get(elm)
          .find(Tasks.#downloadFileText)
          .find('button')
          .should('be.visible')
          .click()
      })
  }

  seeFileIsSavedInDownloads (fileName) {
    cy.readFile(`cypress/downloads/${fileName}`, 'binary', {
      timeout: 15000
    }).should(buffer => expect(buffer.length).to.be.gt(100))
  }

  clickOnDeleteFile (fileName) {
    cy.get(`[data-file-viewer-savename="${fileName}"]`)
      .find('[data-method="delete"]')
      .click()
  }

  submitDeleteFileDialog () {
    cy.get(Tasks.#deleteFileSubmitButton).click()
    cy.wait(['@delete_api', '@homework_api'])
  }

  cancelDeleteFileDialog () {
    cy.get(Tasks.#deleteFileCancelButton).click()
  }

  seeDetailPageForTask (taskTitle) {
    cy.get(Tasks.#pageTitle).should('contain', taskTitle)
  }

  clickSubmissionTab () {
    cy.get(Tasks.#submissionTab)
      .click({ multiple: true })
      .wait('@alerts_api')
  }

  clickSaveSubmissionBtn () {
    cy.get(Tasks.#submissionSaveButton)
      .click()
      .wait('@homework_api')
  }

  clickSendSubmissionBtn () {
    cy.get(Tasks.#submissionSendButton)
      .click()
      .wait('@alerts_api')
  }

  seeSubmissionReceivedHint () {
    cy.get(Tasks.#hintForSubmissionReceived).should('be.visible')
  }

  clickOnToRoomBtn () {
    cy.get(Tasks.#taskSection).find('a').eq(1).click()
  }

  clickOnTabDoneTasks () {
    cy.get(Tasks.#doneTasksTab)
      .click()
      .wait('@tasks_api')
  }

  openNotGradedTasks () {
    cy.contains(Tasks.#lowertaskSectionText, 'Unbewertet')
      .click()
      .wait('@tasks_api')
  }

  seeTaskInListAsTeacher (taskTitle) {
    cy.get(Tasks.#taskOverviewTeacher).contains(taskTitle).should('be.visible')
  }

  seeTaskNotInListAsTeacher (taskTitle) {
    cy.get(Tasks.#taskOverviewTeacher).contains(taskTitle).should('not.exist')
  }

  seeTaskInListAsStudent (taskTitle) {
    cy.get(Tasks.#taskOverviewStudent)
      .should('not.have.css', 'display', 'none')
      .then(() => {
        cy.contains("[data-testid='taskTitle']", taskTitle).should('exist')
      })
  }

  seeTaskNotInListAsStudent (taskTitle) {
    cy.get(Tasks.#taskOverviewStudent).contains(taskTitle).should('not.exist')
  }

  openTaskInTaskOverview (taskTitle) {
    cy.get(Tasks.#taskTitleInList).contains(taskTitle).click()
  }

  clickSubmissionsTab () {
    cy.get(Tasks.#submissionsTab).click()
  }

  seeTickInStudentsSubmissionLine (studentLastname) {
    cy.get(Tasks.#submissionsSection)
      .contains(studentLastname)
      .parent()
      .find(Tasks.#taskSubmissionsSubmittedIcon)
      .should('be.visible')
  }

  openStudentsSubmission (studentLastname) {
    cy.get(Tasks.#submissionsSection)
      .contains(studentLastname)
      .parent()
      .find(Tasks.#taskSubmissionsOpenSubmissionIcon)
      .click()
  }

  compareSubmissionText (submissionText) {
    cy.get(Tasks.#submissionDiv).should('contain', submissionText)
  }

  clickOnGradingTab () {
    cy.get(Tasks.#taskSubmissionsGradingTabLink).click()
  }

  enterGradingPercent (gradingPercent) {
    cy.get(Tasks.#gradingPercentInput).type(gradingPercent)
  }

  clickSaveAndSendGradingBtn () {
    cy.get(Tasks.#gradingSaveAndSendBtn).click()
  }

  checkGradingForStudent (studentLastname, gradingPercent) {
    cy.get(Tasks.#submissionsSection)
      .contains(studentLastname)
      .parent()
      .should('contain', gradingPercent)
  }

  clickOnSubmissionTab () {
    cy.get(Tasks.#taskSubmissionsGradingTabLink).click()
  }

  clickOnFeedbackTab () {
    cy.get(Tasks.#taskFeedbackTabLink).click()
  }

  clickOnButtonToParentCourse () {
    cy.get(Tasks.#toCourseButton).click()
  }

  clickOnFinishedTab () {
    cy.get(Tasks.#finishedTasksTab).click()
  }

  clickOnOpenTasksTab () {
    cy.get(Tasks.#openTasksTab).click()
  }

  clickOnTaskDotMenu (taskTitle) {
    cy.get(Tasks.#finishedTasksListDiv)
      .find(Tasks.#taskTitleInList)
      .contains(taskTitle)
      .parent()
      .parent()
      .parent()
      .find(Tasks.#taskDotMenu)
      .click({ multiple: true })
  }

  clickTaskFinishInDotMenu () {
    cy.get(Tasks.#taskFinishButtonInDotMenu).click()
  }

  clickLowerTaskSectionIcon () {
    cy.get(Tasks.#lowerTaskSectionIcon).click()
  }

  taskExists (taskTitle) {
    cy.get(Tasks.#taskCardTitle)
        .then($tasks => {
          return $tasks.find(taskTitle).length
        })

    return false
  }
}
export default Tasks

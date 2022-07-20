'use strict'

class Tasks {
  static #createForm = '[id="homework-form"]'
  static #taskNameInput = '[data-testid="homework-name"]'
  static #groupSubmissionCheckbox = '[id="teamSubmissions"]'
  static #draftCheckbox = '[data-testid="private-checkbox"]'
  static #visibilityStartDateInput = '[data-testid="form-datetime-input-availableDate"]'
  static #visibilityDueDateInput = '[data-testid="form-datetime-input-dueDate"]'
  static #homeWorkDescriptionP = '[class="ck ck-editor__main"]'
  static #publicSubmissionsCheckbox = '[id="publicSubmissionsCheckbox"]'
  static #dialogConfirmButton = '[data-testid="task-publicSubmissions-dialog-confirm"]'
  static #dialogCancelButton = '[data-testid="task-publicSubmissions-dialog-cancel"]'



  seeCreateTaskPage() {
    cy.get(Tasks.#createForm)
      .get(Tasks.#taskNameInput)
      .should('be.empty')
  }

  // checkFileUploadButtonIsDisabled {
  //   cy.get(Tasks.#fileUploadButton)
  //     .should('be.empty')
  // }

  enterTaskTitle(taskTitle) {
    cy.get(Tasks.#taskNameInput).clear()
    cy.get(Tasks.#taskNameInput).type(taskTitle)
  }

  clickOnGroupSubmissionCheckbox() {
    cy.get(Tasks.#groupSubmissionCheckbox).click()
  }

  clickOnDraftCheckbox() {
    cy.get(Tasks.#draftCheckbox).click()
  }

  setVisibilityStartDate(visibilityStartDate, visibilityStartTime) {
    const today = new Date()
    let startDate
    if (visibilityStartDate === 'today') {
      startDate = today
    } else if (visibilityStartDate === 'tomorrow') {
      startDate = new Date(today)
      startDate.setDate(startDate.getDate() + 1)
    }
    let startDateText = startDate.toLocaleString('en-GB', {year:'numeric', day: '2-digit', month: '2-digit'})
    startDateText = startDateText.replace('/', '')
    cy.get(Tasks.#visibilityStartDateInput).type(`{moveToStart}${startDateText}${visibilityStartTime}`)
  }

  setVisibilityDueDate(visibilityDueDate, visibilityDueTime) {
    const today = new Date()
    let dueDate
    if (visibilityDueDate === 'today') {
      dueDate = today
    } else if (visibilityDueDate === 'tomorrow') {
      dueDate = new Date(today)
      dueDate.setDate(dueDate.getDate() + 1)
    }
    let startDueText = dueDate.toLocaleString('en-GB', {year:'numeric', day: '2-digit', month: '2-digit'})
    startDueText = startDueText.replace('/', '')
    cy.get(Tasks.#visibilityDueDateInput).type(`{moveToStart}${startDueText}${visibilityDueTime}`)
  }

  setTaskDescription(taskDescription){
    cy.get(Tasks.#homeWorkDescriptionP).find('div > p').clear()
    cy.get(Tasks.#homeWorkDescriptionP).find('div > p').type(taskDescription)
    // cy.get(Tasks.#homeWorkDescriptionP).innerHTML = ''
    // cy.get(Tasks.#homeWorkDescriptionP).type(taskDescription)
  }

  clickOnPublicSubmissionCheckbox(){
    cy.get(Tasks.#publicSubmissionsCheckbox).click()
  }

  clickCancelInConfirmationWindow() {
    cy.get(Tasks.#dialogCancelButton).click()
  }

  clickSubmitInConfirmationWindow() {
    cy.get(Tasks.#dialogConfirmButton).click()
  }
}
export default Tasks
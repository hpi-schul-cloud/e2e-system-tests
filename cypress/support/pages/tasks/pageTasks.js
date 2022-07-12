'use strict'

class Task {
  static #createForm = '[id="homework-form"]'
  static #taskNameInput = '[data-testid="homework-name"]'
  static #groupSubmissionCheckbox = '[id="teamSubmissions"]'
  static #draftCheckbox = '[data-testid="private-checkbox"]'
  static #visibilityStartDateInput = '[data-testid="form-datetime-input-availableDate"]'
  static #visibilityDueDateInput = '[data-testid="form-datetime-input-dueDate"]'
  static #homeWorkDescriptionP = '[class="ck-placeholder"]'


  seeCreateTaskPage() {
    cy.get(Task.#createForm)
      .get(Task.#taskNameInput)
      .should('be.empty')
  }

  // checkFileUploadButtonIsDisabled {
  //   cy.get(Task.#fileUploadButton)
  //     .should('be.empty')
  // }

  enterTaskTitle(taskTitle) {
    cy.get(Task.#taskNameInput).type(taskTitle)
  }

  clickOnGroupSubmissionCheckbox() {
    cy.get(Task.#groupSubmissionCheckbox).click()
  }

  clickOnDraftCheckbox() {
    cy.get(Task.#draftCheckbox).click()
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
    cy.get(Task.#visibilityStartDateInput).type(`{moveToStart}${startDateText}${visibilityStartTime}`)
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
    cy.get(Task.#visibilityDueDateInput).type(`{moveToStart}${startDueText}${visibilityDueTime}`)
  }

  setTaskDescription(taskDescription){
    cy.get(Task.#homeWorkDescriptionP)
      .type(taskDescription)
  }
}
export default Task
'use strict'

class Task {
  static #createForm = '[id="homework-form"]'
  static #taskNameInput = '[data-testid="homework-name"]'
  static #groupSubmissionCheckbox = '[id="teamSubmissions"]'
  static #draftCheckbox = '[data-testid="private-checkbox"]'
  static #visibilityStartDateInput = '[data-testid="form-datetime-input-availableDate"]'
  static #visibilityDueDateInput = '[data-testid="form-datetime-input-dueDate"]'


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



    //cy.get(Task.#visibilityStartDateInput).click()
    // cy.get(Task.#startDatePickerToday)
    //   .eq(0)
    //   .click()


    // DD.MM.YYYY 29:59  11.12.2022 29:59
    //cy.get(Task.#visibilityStartDateInput).click()
  }
}
export default Task
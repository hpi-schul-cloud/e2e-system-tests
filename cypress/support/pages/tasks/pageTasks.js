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
  static #taskDetailsTab = '[id="extended"]'
  static #taskDetailsEditButton = '[data-testid="task-details-btn-edit"]'
  static #fileUploadButton = '[class="section-upload"]'
  static #fileUploadInput = '[type="file"]'
  static #filesSection = '[class="files"]'
  static #fileViewerSection = '[class="file-viewer"]'
  static #renameFileInput = '[id="newNameInput"]'
  static #deleteModalDialog = '[class="modal fade delete-modal in"]'
  static #submitBtnModalDialog = '[class="btn btn-primary btn-submit"]'


  clickOnDeleteFile(fileName){
    cy.get(`[data-file-viewer-savename="${fileName}"]`)
      .find('[data-method="delete"]')
      .click()
  }

  submitDeleteFileDialog(){
    cy.get(Tasks.#deleteModalDialog)
      .find('[type="submit"]')
      .click()
  }

  enterNewFileName(newFileName){
    cy.get(Tasks.#renameFileInput).clear()
    cy.get(Tasks.#renameFileInput).type(newFileName, { force: true })
  }

  cancelRenameFileDialog(){
    cy.get(Tasks.#renameFileInput)
      .parent()
      .parent()
      .parent()
      .find('[type="button"]')
      .eq(0)
      .click()
  }

  submitRenameFileDialog(){
    cy.get(Tasks.#renameFileInput)
      .parent()
      .parent()
      .parent()
      .find('[type="submit"]')
      .click()
    cy.reload()
  }

  clickOnRenameFile(fileName){
    cy.get(`[data-file-viewer-savename="${fileName}"]`)
      .find('button').eq(1)
      .click()
  }

  clickOnFileInTaskEditPage(fileName){
    // pdf files are excluded, because they open in a new browser tab, which can not be reached by cypress
    if (fileName.includes('png') || fileName.includes('jpg') || fileName.includes('gif')) {
      cy.get(Tasks.#filesSection)
        .contains(fileName)
        .click()
    }
  }

  seeFileInFileViewer(fileName){
    // pdf files are excluded, because they open in a new browser tab, which can not be reached by cypress
    if (fileName.includes('png') || fileName.includes('jpg') || fileName.includes('gif')) {
      cy.get(Tasks.#fileViewerSection).contains('a')
    }
  }

  clickOnFileViewer(fileName){
    // pdf files are excluded, because they open in a new browser tab, which can not be reached by cypress
    if (fileName.includes('png') || fileName.includes('jpg') || fileName.includes('gif')) {
      cy.get(Tasks.#fileViewerSection).click({force: true})
    }
  }

  fileIsVisibleInSectionFiles(fileName){
    cy.get(Tasks.#filesSection).contains(fileName, {includeShadowDom: true})
    //cy.get(Tasks.#filesSection).find(`[data-file-name="${fileName}"]`)
  }

  seeCreateTaskPage() {
    cy.get(Tasks.#createForm)
      .get(Tasks.#taskNameInput)
      .should('be.empty')
  }

  fileUploadButtonIsDisabled() {
    cy.get(Tasks.#fileUploadButton).find('div').should('have.class', 'form-files-storage-disabled')
  }

  fileUploadButtonIsEnabled() {
    cy.get(Tasks.#fileUploadButton).find('button')
  }

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

  compareVisibilityStartDate(visibilityStartDate, visibilityStartTime) {
    const today = new Date()
    let startDate
    if (visibilityStartDate === 'today') {
      startDate = today
    } else if (visibilityStartDate === 'tomorrow') {
      startDate = new Date(today)
      startDate.setDate(startDate.getDate() + 1)
    }
    let startDateText = startDate.toLocaleString('en-GB', {year:'numeric', day: '2-digit', month: '2-digit'})
    let startDateCheckValue = startDateText.replace(/\//gm, '.') + ' ' + visibilityStartTime
    cy.get(Tasks.#visibilityStartDateInput).should('have.value', startDateCheckValue)
  }

  compareVisibilityDueDate(visibilityDueDate, visibilityDueTime) {
    const today = new Date()
    let dueDate
    if (visibilityDueDate === 'today') {
      dueDate = today
    } else if (visibilityDueDate === 'tomorrow') {
      dueDate = new Date(today)
      dueDate.setDate(dueDate.getDate() + 1)
    }
    let dueDateText = dueDate.toLocaleString('en-GB', {year:'numeric', day: '2-digit', month: '2-digit'})
    let dueDateCheckValue = dueDateText.replace(/\//gm, '.') + ' ' + visibilityDueTime
    cy.get(Tasks.#visibilityDueDateInput).should('have.value', dueDateCheckValue)
  }

  // compareVisibilityStartDate(visibilityStartDate, visibilityStartTime){

  // }

  // compareVisibilityDueDate(visibilityDueDate, visibilityDueTime){

  // }

  setTaskDescription(taskDescription){
    cy.get(Tasks.#homeWorkDescriptionP).find('div > p').clear()
    cy.get(Tasks.#homeWorkDescriptionP).find('div > p').type(taskDescription)
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

  descriptionEqualsOnDetailpage(expectedDescription) {
    cy.get(Tasks.#taskDetailsTab).should('contain', expectedDescription)
  }

  clickOnEditInTaskDetails(){
    cy.get(Tasks.#taskDetailsEditButton).click()
  }

  publicSubmissionIsEnabled(){
    cy.get(Tasks.#publicSubmissionsCheckbox).should('be.checked')
  }

  draftIsDisabled(){
    cy.get(Tasks.#draftCheckbox).should('not.be.checked')
  }

  executeFileUploadDragAndDrop(fileName){
    // mark our window object to "know" when it gets reloaded
    cy.window().then(w => w.beforeReload = true)
    // initially the new property is there
    cy.window().should('have.prop', 'beforeReload', true)
    // Upload a file includes a reload of the page
    cy.get(Tasks.#fileUploadInput)
      .attachFile(fileName)
    // after reload the property should be gone
    cy.window().should('not.have.prop', 'beforeReload')
  }
}
export default Tasks
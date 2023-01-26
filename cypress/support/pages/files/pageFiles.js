'use strict'

class Files {
  static #newFile = '[data-testid="create-new-file-btn"]'
  static #filetypeDropdown = '#file_ending_chosen'
  static #filetypeDocument = 'li.active-result:nth-child(2)'
  static #filetypeTable = 'li.active-result:nth-child(3)'
  static #filetypePresentation = 'li.active-result:nth-child(4)'
  static #filenameInputField = '#file-name'
  static #newFilenameInputField = '[data-testid="folder-rename-text-field"]'
  static #createFile = '[data-testid="btn-submit"]'
  static #downloadFile = '[data-testid="file-download-btn"]'
  static #renameFile = '[data-testid="file-edit-btn"]'
  static #saveRenameFile = '[data-testid="btn-submit"]'
  static #deleteFile = '[data-testid="file-delete-btn"]'
  static #confirmDeleteFile = '.delete-modal .btn-submit'
  static #shareFile = '[data-testid="file-share-btn"]'
  static #moveFile = '[data-testid="file-move-btn"]'
  static #filePermissionsFile = '[data-testid="file-settings-btn"]'
  static #cardTitle = '[data-testid="file-title"]'
  static #pageTitle = '[data-testid="LibreOffice Online"]'
  static #deleteDialogBoxPopupContainer = '[data-testid="modal_content"]'
  static #filesOverviewNavigationButton = '[data-testid="Meine Dateien"]'
  static #personalFilesOverviewNavigationButton = '[data-testid="persönliche Dateien"]'
  static #coursesFilesOverviewNavigationButton = '[data-testid="Kurse"]'
  static #teamsFilesOverviewNavigationButton = '[data-testid="Teams"]'
  static #sharedFilesOverviewNavigationButton = '[data-testid="geteilte Dateien"]'

  static #testAssertionData = {
    fileTypeDocument: 'Textdokument (docx)',
    createFileSubmitButtonText: 'Datei erstellen',
    saveRenameButtonText: 'Speichern',
    libraOfficeOpenTitleText: 'LibreOffice Online',
    deletePopupTextInitials: 'Bist du dir sicher, dass du ',
    deletePopupTextFinal: ' löschen möchtest?'
  }

  navigateToFilesOverview () {
    cy.get(Files.#filesOverviewNavigationButton).click()
    cy.wait('@alerts_api')
    cy.url().should('include', '/files')
  }

  navigateToPersonalFilesOverview () {
    cy.get(Files.#personalFilesOverviewNavigationButton).click()
    cy.wait('@alerts_api')
    cy.url().should('include', '/files/my')
  }

  navigateToCourseFilesOverview () {
    cy.get(Files.#coursesFilesOverviewNavigationButton).click()
    cy.wait('@alerts_api')
    cy.url().should('include', '/files/courses')
  }

  navigateToTeamsFilesOverview () {
    cy.get(Files.#teamsFilesOverviewNavigationButton).eq(1).click()
    cy.wait('@alerts_api')
    cy.url().should('include', '/files/teams')
  }

  navigateToSharedFilesOverview () {
    cy.get(Files.#sharedFilesOverviewNavigationButton).click()
    cy.wait('@alerts_api')
    cy.url().should('include', '/files/shared')
  }

  clickOnCreateNewFile () {
    cy.get(Files.#newFile).click()
  }

  selectFiletypeDocument () {
    cy.get(Files.#filetypeDropdown).click()
    cy.get(Files.#filetypeDocument)
      .contains(Files.#testAssertionData.fileTypeDocument)
      .should('be.visible')
      .click()
  }

  typeFilename (fileName) {
    cy.get(Files.#filenameInputField)
      .type(fileName)
      .should('have.value', fileName)
  }

  clickOnCreateFile () {
    cy.contains(
      Files.#createFile,
      Files.#testAssertionData.createFileSubmitButtonText
    ).click()
  }

  clickOnFileWithName (fileName) {
    cy.get(Files.#cardTitle).contains(fileName).should('be.visible').click()
  }

  clickOnRenameFile (fileName) {
    cy.get(Files.#cardTitle)
      .contains(fileName)
      .then(() => {
        cy.get(Files.#renameFile).first().click()
      })
  }

  typeNewFilename (fileName) {
    cy.get(Files.#newFilenameInputField)
      .focus()
      .type('{selectall}{backspace}')
      .should('have.value', '')
    cy.get(Files.#newFilenameInputField)
      .focus()
      .type(fileName, { force: true })
      .should('have.value', fileName)
  }

  clickOnSaveFilename () {
    cy.contains(
      Files.#saveRenameFile,
      Files.#testAssertionData.saveRenameButtonText
    ).click()
    cy.wait('@alerts_api')
  }

  clickOnDeleteFile (fileName) {
    cy.get(Files.#cardTitle)
      .contains(fileName)
      .then(() => {
        cy.get(Files.#deleteFile).first().should('be.visible').click()
        cy.get(Files.#deleteDialogBoxPopupContainer).should('be.visible')
      })
  }

  clickOnConfirmDeleteFile (fileName) {
    let deletePopUpTextInitials =
      Files.#testAssertionData.deletePopupTextInitials
    let deletePopUpTextTitle = deletePopUpTextInitials.concat(
      "'",
      fileName,
      "'",
      Files.#testAssertionData.deletePopupTextFinal
    )
    cy.get(Files.#confirmDeleteFile)
      .focus()
      .should('be.visible')
      .click()
      .wait('@alerts_api')
    cy.contains(deletePopUpTextTitle).should('not.exist')
  }

  libreOfficeOpens () {
    cy.url().should('include', '/files/file/')
    cy.wait('@alerts_api')
    cy.contains(
      Files.#pageTitle,
      Files.#testAssertionData.libraOfficeOpenTitleText
    ).should('be.visible')
  }

  fileNameIsShown (fileName) {
    cy.contains(Files.#cardTitle, fileName).should('contain', fileName)
  }

  fileNameIsNotShown (fileName) {
    cy.contains(Files.#cardTitle, fileName).should('not.exist')
  }

  //doesn't work
  enterTextIntoDocument (text) {
    cy.wait(600)
    cy.get('.leaflet-layer').type(text, { force: true })
  }

  //doesn't work
  textIsShownInDocument (text) {
    cy.intercept('/lool/*').as('loleaflet')
    cy.wait('@loleaflet')
    cy.get('iframe').should('contain', text)
  }
}
export default Files

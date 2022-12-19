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

  clickOnCreateNewFile () {
    cy.get(Files.#newFile).click()
  }

  selectFiletypeDocument () {
    cy.get(Files.#filetypeDropdown).click()
    cy.get(Files.#filetypeDocument)
      .contains('Textdokument (docx)')
      .should('be.visible')
      .click()
  }

  typeFilename (fileName) {
    cy.get(Files.#filenameInputField).type(fileName)
  }

  clickOnCreateFile () {
    cy.contains(Files.#createFile, 'Datei erstellen').click()
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
    cy.get(Files.#newFilenameInputField).clear().type(fileName)
  }

  clickOnSaveFilename () {
    cy.contains(Files.#saveRenameFile, 'Speichern').click()
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
    cy.get(Files.#confirmDeleteFile)
      .focus()
      .should('be.visible')
      .click()
      .wait('@alerts_api')
    cy.contains(
      `Bist du dir sicher, dass du ${fileName} löschen möchtest?`
    ).should('not.exist')
  }

  libreOfficeOpens () {
    cy.url().should('include', '/files/file/')
    cy.wait('@alerts_api')
    cy.contains(Files.#pageTitle, 'LibreOffice Online').should('be.visible')
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

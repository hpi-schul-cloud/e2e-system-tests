'use strict'

class Files {
  static #newFile = '.new-file'
  static #filetypeDropdown = '#file_ending_chosen'
  static #filetypeDocument = 'li.active-result:nth-child(2)'
  static #filetypeTable = 'li.active-result:nth-child(3)'
  static #filetypePresentation = 'li.active-result:nth-child(4)'
  static #filenameInputField = '#file-name'
  static #newFilenameInputField = 'input#newNameInput'
  static #createFile = '.new-file-modal .btn-submit'
  static #downloadFile = '.fa-cloud-download'
  static #renameFile = '.file-name-edit'
  static #saveRenameFile = '.rename-modal [data-testid="btn-submit"]'
  static #deleteFile = '.fa-trash-o'
  static #confirmDeleteFile = '.delete-modal .btn-submit'
  static #shareFile = '.btn-file-share'
  static #moveFile = '.btn-file-move'
  static #filePermissionsFile = '.btn-file-settings'
  static #cardTitle = 'div.card-title'
  static #pageTitle = '[id="page-title"]'

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

  typeFilename (filename) {
    cy.get(Files.#filenameInputField).type(filename)
  }

  clickOnCreateFile () {
    cy.get(Files.#createFile).click()
  }

  clickOnFileWithName (filename) {
    cy.get(Files.#cardTitle).contains(filename).should('be.visible').click()
  }

  clickOnRenameFile (fileName) {
    cy.get(Files.#cardTitle)
      .contains(fileName)
      .then(() => {
        cy.get(Files.#renameFile).first().click()
      })
  }

  typeNewFilename (filename) {
    cy.get(Files.#newFilenameInputField).invoke('val', filename)
  }

  clickOnSaveFilename () {
    cy.get(Files.#saveRenameFile).click()
  }

  clickOnDeleteFile (fileName) {
    cy.get(Files.#cardTitle)
      .contains(fileName)
      .then(() => {
        cy.get(Files.#deleteFile).first().should('be.visible').click()
        cy.get("[data-testid='modal_content']").should('be.visible') //ksmdmskdmksdmksdmksdmksmdksdmksmdk
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
    //cy.get('div#MathJax_Message').should('exist')
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

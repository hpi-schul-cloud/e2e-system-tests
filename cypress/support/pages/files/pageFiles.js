'use strict'

class Files {
    static #newFile = '.new-file'
    static #filetypeDropdown = '#file_ending_chosen'
    static #filetypeDocument = 'li.active-result:nth-child(2)'
    static #filetypeTable = 'li.active-result:nth-child(3)'
    static #filetypePresentation = 'li.active-result:nth-child(4)'
    static #filenameInputField = '#file-name'
    static #newFilenameInputField = '#newNameInput'
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
        cy.get(Files.#filetypeDocument).click()
    }

    typeFilename (filename) {
        cy.get(Files.#filenameInputField).type(filename)
    }

    clickOnCreateFile () {
        cy.get(Files.#createFile).click()
    }

    //not used atm
    clickOnFileWithName (filename) {
        cy.get(Files.#cardTitle).click()
        cy.focused().click()
    }

    clickOnRenameFile () {
        cy.get(Files.#renameFile).click()
    }

    typeNewFilename (filename) {
        cy.get(Files.#newFilenameInputField).clear()
        cy.get(Files.#newFilenameInputField).type(filename)
    }

    clickOnSaveFilename () {
        cy.get(Files.#saveRenameFile).click()
    }

    clickOnDeleteFile () {
        cy.get(Files.#deleteFile).click()
    }

    clickOnConfirmDeleteFile () {
        cy.get(Files.#confirmDeleteFile).click()
    }

    libreOfficeOpens () {
        cy.url().should('include', '/files/file/')
        cy.get(Files.#pageTitle)
        cy.contains('LibreOffice Online')
    }

    filenameIsShown (filename) {
        cy.get(Files.#cardTitle).should('contain', filename)
    }

    filenameIsNotShown (filename) {
        cy.get(Files.#cardTitle)
        cy.contains(/Neues Text-Dokument|Nicht mehr ganz so neues Text-Dokument.docx/g).should('not.exist')
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
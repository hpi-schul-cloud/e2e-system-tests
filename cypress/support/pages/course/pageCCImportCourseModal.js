class CCImportCourseModal {

    static #fileInput = '[data-testid="dialog-file-input"]';
    static #confirmButton = '[data-testid="dialog-confirm-btn"]';
    static #loadingDialog = '[data-testid="dialog-text"]';
    static fileInput = 'input[type="file"]'

    selectFixtureForImport(fixturePath) {
        cy.fixture(fixturePath, null)
            .then(fileContent => {
                cy.get(CCImportCourseModal.#fileInput).within(() => {
                    cy.get(CCImportCourseModal.fileInput).attachFile({
                        fileContent,
                        filePath: fixturePath,
                        encoding: 'utf-8',
                        lastModified: new Date().getTime()
                    });
                });
            });
    }

    startImport() {
        cy.get(CCImportCourseModal.#confirmButton).click();
        cy.get(CCImportCourseModal.#loadingDialog).should('not.exist');
    }

}

export default CCImportCourseModal;
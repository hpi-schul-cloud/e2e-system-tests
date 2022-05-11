'use strict'

class Administration {
    static #fabButton = '#fab';
    static #createUserButton = '.v-btn--router';
    static #firstName = '[data-testid="input_create-user_firstname"]';
    static #lastName = '[data-testid="input_create-user_lastname"]';
    static #email = '[data-testid="input_create-user_email"]';
    static #addButton = '[data-testid="button_create-user_submit"]';
    static #searchbar = '[data-testid="searchbar"]';
    static #editStudentButton = '[data-testid="edit_student_button"]';
    static #editTeacherButton = '[data-testid="edit_teacher_button"]';
    static #deleteButton = '.btn-delete';
    static #cancelButtonConfirmation = '.cancel-modal button.btn-close';
    static #deleteButtonCancel = '.cancel-modal button.historyback';
    static #deleteButtonConfirmation = '.delete-modal.in  button.btn-submit';
    static #tableContents =  '[data-testid="table-data-body"]';

    clickOnFAB () {
        cy.get(Administration.#fabButton).click()
        cy.get(Administration.#createUserButton).click()
    }

    fillStudentCreationForm () {
        cy.get(Administration.#firstName).type('Adam')
        cy.get(Administration.#lastName).type('Riese')
        cy.get(Administration.#email).type('adam.riese@example.com')
    }

    fillTeacherCreationForm () {
        cy.get(Administration.#firstName).type('Adam')
        cy.get(Administration.#lastName).type('Rose')
        cy.get(Administration.#email).type('adam.rose@example.com')
    }

    clickOnAddButton () {
        cy.get(Administration.#addButton).click()
    }

    enterNameForSearch () {
        cy.get(Administration.#searchbar).eq(0).type('Adam')
    }

    clickEditStudentButton () {
        cy.get(Administration.#editStudentButton).eq(0).click()
    }

    clickEditTeacherButton () {
        cy.get(Administration.#editTeacherButton).eq(0).click()
    }

    clickDeleteButton () {
        cy.get(Administration.#deleteButton).click()
    }

    clickDeleteButtonInPopup () {
        cy.get(Administration.#deleteButtonConfirmation).click()
    }

    userIsCreatedAndVisibleInTable () {
        cy.get(Administration.#tableContents);
        cy.contains('Adam')
    }

    userIsNotVisibleInTable () {
        cy.get(Administration.#tableContents);
        cy.contains('Adam').should('not.exist')
    }
}
export default Administration;

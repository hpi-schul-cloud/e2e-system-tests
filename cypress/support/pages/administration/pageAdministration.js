'use strict'

class Administration {
    static #fabButton = '#fab'
    static #createUserButton = '.v-btn--router'
    static #firstNameCreationForm = '[data-testid="input_create-user_firstname"]'
    static #lastNameCreationForm = '[data-testid="input_create-user_lastname"]'
    static #emailCreationForm = '[data-testid="input_create-user_email"]'
    static #addButton = '[data-testid="button_create-user_submit"]'
    static #searchbar = '.core > [data-testid="searchbar"]'
    static #editStudentButton = '[data-testid="edit_student_button"]'
    static #editTeacherButton = '[data-testid="edit_teacher_button"]'
    static #firstNameEditForm = "input[name='firstName']"
    static #lastNameEditForm = "input[name='lastName']"
    static #emailEditForm = "input[name='email']"
    static #submitButton = '.btn-submit'
    static #deleteButton = '.btn-delete'
    static #cancelButtonConfirmation = '.cancel-modal button.btn-close'
    static #deleteButtonCancel = '.cancel-modal button.historyback'
    static #deleteButtonConfirmation = '.delete-modal.in  button.btn-submit'
    static #tableContents =  '[data-testid="table-data-body"]'

    clickOnFAB () {
        cy.get(Administration.#fabButton).click()
        cy.get(Administration.#createUserButton).click()
    }

    fillStudentCreationForm () {
        cy.get(Administration.#firstNameCreationForm).type('Adam')
        cy.get(Administration.#lastNameCreationForm).type('Riese')
        cy.get(Administration.#emailCreationForm).type('adam.riese@example.com')
    }

    fillTeacherCreationForm () {
        cy.get(Administration.#firstNameCreationForm).type('Adam')
        cy.get(Administration.#lastNameCreationForm).type('Rose')
        cy.get(Administration.#emailCreationForm).type('adam.rose@example.com')
    }

    clickOnAddButton () {
        cy.get(Administration.#addButton).click()
    }

    enterNameForSearch () {
        cy.get(Administration.#searchbar).type('Adam')
    }

    clickEditStudentButton () {
        cy.get(Administration.#editStudentButton).eq(0).click()
    }

    clickEditTeacherButton () {
        cy.get(Administration.#editTeacherButton).eq(0).click()
    }

    changeStudentUserInformation () {
        cy.get(Administration.#firstNameEditForm).clear()
        cy.get(Administration.#firstNameEditForm).type('Alex')
        cy.get(Administration.#lastNameEditForm).clear()
        cy.get(Administration.#lastNameEditForm).type('Abramovic')
        cy.get(Administration.#emailEditForm).clear()
        cy.get(Administration.#emailEditForm).type('alex.abramovic@example')
    }

    changeTeacherUserInformation () {
        cy.get(Administration.#firstNameEditForm).clear()
        cy.get(Administration.#firstNameEditForm).type('Amber')
        cy.get(Administration.#lastNameEditForm).clear()
        cy.get(Administration.#lastNameEditForm).type('Adams Young')
        cy.get(Administration.#emailEditForm).clear()
        cy.get(Administration.#emailEditForm).type('amber.adams-young@example')
    }

    clickSaveButton () {
        cy.get(Administration.#submitButton).eq(0).click()
    }

    clickDeleteButton () {
        cy.get(Administration.#deleteButton).click()
    }

    clickDeleteButtonInPopup () {
        cy.get(Administration.#deleteButtonConfirmation).click()
    }

    createdUserIsVisibleInTable () {
        //cy.get(Administration.#searchbar).clear(Administration.#searchbar)
        cy.get(Administration.#tableContents)
        cy.contains('Adam')
    }

    editedUserIsVisibleInTable () {
        cy.get(Administration.#searchbar).clear()
        cy.get(Administration.#tableContents)
        cy.contains(/Alex|Amber/g)
    }

    createdUserIsNotVisibleInTable () {
        cy.get(Administration.#searchbar).clear()
        cy.get(Administration.#tableContents)
        cy.contains('Adam').should('not.exist')
        cy.contains('Alex').should('not.exist')
    }
}
export default Administration

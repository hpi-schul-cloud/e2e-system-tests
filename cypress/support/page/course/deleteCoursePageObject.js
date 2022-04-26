class Delete_Course {
    threeDotButton = '[type="button"]'
    editOption = '[class="btn btn-sm dropdown-toggle btn-course-dropdown"]'
    selectOption= '[class="dropdown-item btn-course-edit"]'
    deleteButton = '[data-method="DELETE"]'
    confirmDeletionPopup = '.btn-primary:nth-child(3)'

    selectTheRoom() {
        cy.get('[aria-label="Kurs unique test course name"]').click()
    }

    performDeletion() {
        cy.get(this.threeDotButton).eq(1).click()
        cy.get(this.editOption).click()
        cy.get(this.selectOption).click()
        cy.get(this.deleteButton).click()
        cy.get(this.confirmDeletionPopup).click({ force: true })
    }
}
export default Delete_Course
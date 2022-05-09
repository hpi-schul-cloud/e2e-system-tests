class Delete_Course {

    constructor() {
        this.threeDotButton = '[type="button"]'
        this.editOption = '[class="btn btn-sm dropdown-toggle btn-course-dropdown"]'
        this.selectOption = '[class="dropdown-item btn-course-edit"]'
        this.deleteButton = '[data-method="DELETE"]'
        this.confirmDeletionPopup = '.btn-primary:nth-child(3)'
    }

    selectTheRoom() {
        cy.get('[aria-label="Kurs unique test course name"]').eq(1).click()
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
class Delele_Course {
    //goToRoomOverview='.icon icon fa fa-graduation-cap'
    threeDotButton = '[type="button"]'
    editOption = '[class="dropdown-item btn-course-edit"]'
    deleteButton = '[data-method="DELETE"]'
    confirmDeletionPopup = '.btn-primary:nth-child(3)'

    slectTheCourse() {
        cy.contains('Un').click()
    }

    performDeletion() {
        cy.get(this.threeDotButton).eq(1).click()
        cy.get(this.editOption).click()
        cy.get(this.deleteButton).click()
        cy.get(this.confirmDeletionPopup).click({ force: true })

    }

}
export default Delele_Course
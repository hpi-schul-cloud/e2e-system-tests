class Delele_Course{
    createdCourseInList='[aria-label="Course unique test course name"]'
    threeDotButton='[type="button"]'
    editOption='[class="dropdown-item btn-course-edit"]'
    deleteButton='[data-method="DELETE"]'
    confirmDeletionPopup='.btn-primary:nth-child(3)'

    slectTheCourse(){
        cy.get(this.createdCourseInList).click()
    }

    performDeletion(){
    cy.get(this.threeDotButton).click()
    cy.get(this.editOption).click()
    cy.get(this.deleteButton).click()
    cy.get(this.confirmDeletionPopup).click({force:true})

    }

}
export default Delele_Course
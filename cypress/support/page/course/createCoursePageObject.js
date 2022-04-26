class Create_Course{

    createFAB='[name="fab-icon"]'
    courseTitle='[data-testid="coursename"]'
    nextButton='[id="nextSection"]'
    nextContinueButton='[data-submit-label="Kurs anlegen und Weiter"]'
    goToCourseOverviewButton='[data-testid="zur-uebersicht-btn"]'


    clickOnCreateFAB(){
        cy.get(this.createFAB).click()
    }

    fillCourseCreationForm(){
        cy.get(this.courseTitle).type('unique test course name')

    }

    clickOnNextSteps(){
        cy.get(this.nextButton).click()
        cy.get(this.nextContinueButton).click()
        cy.get(this.goToCourseOverviewButton).click()
    }

    courseIsCreatedAndVisibleOnOverviewPage(){
        cy.url().should('include','/rooms-overview')
        cy.contains('test course name')

    }
}
export default Create_Course

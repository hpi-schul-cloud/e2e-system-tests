class Create_Course {

    constructor() {
        this.createFAB = '[name="fab-icon"]'
        this.courseTitle = '[data-testid="coursename"]'
        this.nextButton = '[id="nextSection"]'
        this.nextContinueButton = '[data-submit-label="Kurs anlegen und Weiter"]'
        this.goToCourseOverviewButton = '[data-testid="zur-uebersicht-btn"]'

    }

    clickOnCreateFAB() {
        cy.get(this.createFAB).click()
    }

    fillCourseCreationForm() {
        cy.get(this.courseTitle).type('unique test course name')

    }

    clickOnNextSteps() {
        cy.get(this.nextButton).click()
        cy.get(this.nextContinueButton).click()
        cy.get(this.goToCourseOverviewButton).click()
    }

    createdCourseIsVisibleOnOverviewPage() {
        cy.url().should('include', '/rooms-overview')
        cy.contains('test course name')

    }
}
export default Create_Course


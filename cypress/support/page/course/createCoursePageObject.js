class Create_Course{

    courseOverviewnavigationButton='[data-testid="Course-Overview"]'
    createFAB='[name="fab-icon"]'
    courseTitle='[data-testid="coursename"]'
    nextButton='[id="nextSection"]'
    nextContinueButton='[data-submit-label="Create course and continue"]'
    goToCourseOverviewButton='[data-testid="zur-uebersicht-btn"]'


    goToRoomOverview(){
        cy.get(this.courseOverviewnavigationButton).click()
        cy.url().should('include','/rooms-overview/')

    }

    clickOnCreateFAB(){
        cy.get(thid.createFAB).click()
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


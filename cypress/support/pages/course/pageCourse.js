'use strict'

class Course {
  static #learningContentTab = '[data-testid="learnContent"]'
  static #toolsTab = '[data-testid="tools"]'
  static #groupsTab = '[data-testid="groups"]'
  static #toolsList = 'div.list-group'

  selectTheRoom () {
    cy.get('[aria-label="Kurs unique test course name"]').click({
      multiple: true,
      force: true
    })
  }

  goToTools () {
    cy.get(Course.#toolsTab).click()
  }

  addNewTool () {
    cy.get('[aria-label="Neues Tool hinzufügen"]').click()
  }

  createdCourseIsVisibleOnOverviewPage () {
    cy.url().should('include', '/rooms-overview')
    cy.contains('test course name')
  }

  canAddBigBlueButton () {
    cy.get(Course.#toolsList)
    cy.contains('Video-Konferenz mit BigBlueButton')
  }

  canNotAddBigBlueButton () {
    cy.get(Course.#toolsList)
    cy.contains('Video-Konferenz mit BigBlueButton').should('not.exist')
  }
}
export default Course

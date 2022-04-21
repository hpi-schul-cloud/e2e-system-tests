let mod_extsprintf = require('extsprintf')
class course {
  roomoverviewField = '[data-testid="Course-Overview"]'
  createCourseBtn = '[data-testid="add-course-button"]'
  courseNameField = '[data-testid="coursename"]'
  nextPageBtn = '[id="nextSection"]'
  courseOverviewPageBtn = '[data-testid="zur-uebersicht-btn"]'
  deleteCourseSel = '[aria-label="Kurs %s"]'
  courseTitleBtn = '[id="page-title"]'
  courseDropDownEditBtn = '[class="dropdown-item btn-course-edit"]'
  courseDeleteBtn = '[data-method="DELETE"]'
  clickDeleteBtn = '.btn-primary:nth-child(3)'

  navigateRoomOverview () {
    cy.get(this.roomoverviewField).click()
    cy.url().should('include', '/rooms-overview/')
    return this
  }

  createCourse (courseName) {
    cy.get(this.createCourseBtn).click()
    cy.get(this.courseNameField).type(courseName)
    cy.get(this.nextPageBtn).click()
    cy.get(this.nextPageBtn).click()
    cy.get(this.courseOverviewPageBtn).click()
    cy.url().should('include', '/rooms-overview')
    cy.contains(courseName)
    return this
  }

  deleteCourse (courseName) {
    cy.get(mod_extsprintf.sprintf(this.deleteCourseSel, courseName)).click()
    cy.get(this.courseTitleBtn).click()
    cy.get(this.courseDropDownEditBtn).click()
    cy.get(this.courseDeleteBtn).click()
    cy.get(this.clickDeleteBtn).click({ force: true })
    return this
  }
}
export default course

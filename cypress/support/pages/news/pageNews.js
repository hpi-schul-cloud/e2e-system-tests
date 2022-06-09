'use strict'

class News {

  static #newsTitleOnDashboard = '[data-testid="title_of_an_element"]'
  static #teamNewsTag = '[data-testid="header-of-element"]'
  static #newsTitle = '[id="page-title"]'
  static #newsText = '#main-content > div.ckcontent'

  goToSchoolNewsOnDashboard() {
    cy.visit('/news')
    cy.get(News.#newsTitleOnDashboard)
    cy.contains('Test 123').click()
    cy.url().should('include', '/news/')
  }

  goToTeamNewsOnDashboard() {
    cy.visit('/news')
    cy.get(News.#teamNewsTag).contains('test').click({ multiple: true, force: true })
    cy.url().should('include', '/news/')
  }

  readSchoolNews() {
    cy.get(News.#newsTitle)
    cy.contains('Test 123')
    cy.get(News.#newsText)
    cy.contains('456 lalala')
  }

  readTeamNews() {
    cy.get(News.#newsTitle)
    cy.contains('test')
    cy.get(News.#newsText)
    cy.contains('t')
  }
}
export default News

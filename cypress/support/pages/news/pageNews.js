'use strict'

class News {

  static #newsTitleOnDashboard = '[data-testid="container_of_element"]'
  static #teamNewsTag = '[data-testid="header-of-element"]'
  static #newsTitle =  '[data-testid="title_of_an_element"]'
  static #pageTitle = '[id="page-title"]'
  static #newsText = '.ckcontent > p:nth-child(1)'  //'#main-content > div.ckcontent'

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
    cy.get(News.#pageTitle)
    cy.contains('Test 123')
    cy.get(News.#newsText)
    cy.contains('456 lalala')
  }

  readTeamNews() {
    cy.get(News.#pageTitle)
    cy.contains('test')
    cy.get(News.#newsText)
    cy.contains('t')
  }
}
export default News

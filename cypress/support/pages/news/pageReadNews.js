'use strict'

class Read_News {
  static #newsTitleOnDashboard = '[data-testid="title_of_an_element"]'
  static #teamNewsTag = '#main-content div.tag.tag-default'
  static #newsTitle = '[id="page-title"]'
  static #newsText = '#main-content > div.ckcontent'

  goToNewsOnDashboard () {
    cy.visit('/news')
    cy.get(Read_News.#newsTitleOnDashboard)
      .eq(2)
      .click()
    cy.url().should('include', '/news/')
  }

  goToTeamNewsOnDashboard () {
    cy.visit('/news')
    cy.get(Read_News.#teamNewsTag).click()
    cy.url().should('include', '/news/')
  }

  readSchoolNews () {
    cy.get(Read_News.#newsTitle)
    cy.contains('Test 123')
    cy.get(Read_News.#newsText)
    cy.contains('456 lalala')
  }

  readTeamNews () {
    cy.get(Read_News.#newsTitle)
    cy.contains('test')
    cy.get(Read_News.#newsText)
    cy.contains('t')
  }
}
export default Read_News

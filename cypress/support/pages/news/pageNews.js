'use strict'

class News {

  static #pageTitle = '[data-testid="title_of_an_element"]'
  static #newsText = '[data-testid="body_of_element"]'

  teacherReadsNewsOnOverviewPage(titleOfNews, descriptionOfNews) {
    cy.get(News.#pageTitle).contains(titleOfNews).should('exist')
    cy.get(News.#newsText).contains(descriptionOfNews).should('exist')
  }
}
export default News
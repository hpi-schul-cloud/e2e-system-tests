'use strict'

class News {

  static #pageTitle = '[data-testid="title_of_an_element"]'
  static #newsText = '[data-testid="body_of_element"]'

  readSchoolNews() {
    cy.get(News.#pageTitle).contains('test 123')
    cy.get(News.#newsText).contains('456 lalala')
  }

  readTeamNews() {
    cy.get(News.#pageTitle).contains('Musik')
    cy.get(News.#newsText).contains('Have fun')
  }
}
export default News
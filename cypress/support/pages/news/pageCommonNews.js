'use strict'

class News_Common {

  static #newsOverviewNavigationButton = '[data-testid="Neuigkeiten"]'
  static #createNewNews = '[data-testid="create-news-btn"]'
  static #newsTitle = '[data-testid="news_title"]'
  static #newsDescription= '[contenteditable="true"]'
  static #newsDateInput= '[data-testid="news_date"]'
  static #newsTimeInput= '[data-testid="news_time"]'
  static #newsCreateButton= '[data-testid="btn_news_submit"]'
  static #seeNewsTitle = '[id="page-title"]'
  static #seeNewsDescription = '[class="ckcontent"]'

  seeCreatedSchoolNews(newsTitle,newsDesc) {
    cy.get(News_Common.#seeNewsTitle).contains(newsTitle)
    cy.get(News_Common.#seeNewsDescription).contains(newsDesc)
  }

  clickOnSchoolNewsCreationSaveButton() {
    cy.get(News_Common.#newsCreateButton).click()
  }

  seeTimeInput() {
    cy.get(News_Common.#newsTimeInput).should('be.visible')
  }

  seeDateInput() {
    cy.get(News_Common.#newsDateInput).should('be.visible')
  }

  enterNewsDescription(newsDescription) {
    cy.get(News_Common.#newsDescription).type(newsDescription)
  }

  enterNewsTitle(newsTitle) {
    cy.get(News_Common.#newsTitle).eq(1).type(newsTitle)
  }

  seeNewsCreationPage() {
    cy.url().should('include','/news/new')
  }

  clickOnAddSchoolNews() {
    cy.get(News_Common.#createNewNews).click()
  }

  navigateToNewsOverview() {
    cy.get(News_Common.#newsOverviewNavigationButton).click()
    cy.url().should('include', '/news')
  }
}
export default News_Common
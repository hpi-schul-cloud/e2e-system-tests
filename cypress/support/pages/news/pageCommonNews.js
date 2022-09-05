'use strict'

class News_Common {

  static #newsOverviewNavigationButton = '[data-testid="Neuigkeiten"]'
  static #createNewNews = '[data-testid="create-news-btn"]'
  static #newsTitleInput = '[data-testid="news_title"]'
  static #newsDescription= '[contenteditable="true"]'
  static #newsDateInput= '[data-testid="news_date"]'
  static #newsTimeInput= '[data-testid="news_time"]'
  static #newsCreateButton= '[data-testid="btn_news_submit"]'
  static #newsTitle = '[id="page-title"]'
  static #newsDescriptionVisible = '[class="ckcontent"]'
  static #newsName = '[data-testid="title_of_an_element"]'
  static #deleteNews = '[data-testid="btn-delete-news"]'
  static #deleteNewsConfirmation = '[class="btn btn-primary btn-submit"]'


  studentDoNotSeeTeamsNews(teamNewsTitle){
    cy.get(News_Common.#newsName).contains(teamNewsTitle).should('not.exist')
  }

  studentDoNotSeeSchoolNews(schoolNewsTitle){
    cy.get(News_Common.#newsName).contains(schoolNewsTitle).should('not.exist')
  }

  doNotSeeNews(newsName) {
    cy.get(News_Common.#newsName).contains(newsName).should('not.exist')
  }

  confirmDeletionOnDialogBox() {
    cy.get(News_Common.#deleteNewsConfirmation).contains('Löschen').click()
  }

  clickOnDeleteNewsButton() {
    cy.get(News_Common.#deleteNews).click()
  }

  openNewsDetailPage (newsName) {
    cy.get(News_Common.#newsName).contains(newsName).click()
  }

  seeCreatedNews(newsTitle,newsDesc) {
    cy.get(News_Common.#newsTitle).contains(newsTitle)
    cy.get(News_Common.#newsDescriptionVisible).contains(newsDesc)
  }

  clickOnCreateNewsSaveButton() {
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
    cy.get(News_Common.#newsTitleInput).eq(1).type(newsTitle)
  }

  seeNewsCreationPage() {
    cy.url().should('include','/news/new')
  }

  clickOnAddNews() {
    cy.get(News_Common.#createNewNews).click()
  }

  navigateToNewsOverview() {
    cy.get(News_Common.#newsOverviewNavigationButton).click()
    cy.url().should('include', '/news')
  }
}
export default News_Common
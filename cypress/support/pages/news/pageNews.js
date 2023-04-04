'use strict'

class News {

  static #pageTitle = '[data-testid="title_of_an_element"]'
  static #newsText = '[data-testid="body_of_element"]'
  static #newsOverviewNavigationButton = '[data-testid="Neuigkeiten"]'
  static #createNewNews = '[data-testid="create-news-btn"]'
  static #newsTitleInput = '[data-testid="news_title"]'
  static #newsDescription = '[contenteditable="true"]'
  static #newsDateInput = '[data-testid="news_date"]'
  static #newsTimeInput = '[data-testid="news_time"]'
  static #newsCreateButton = '[data-testid="btn_news_submit"]'
  static #newsTitle = '[id="page-title"]'
  static #newsDescriptionVisible = '[class="ckcontent"]'
  static #newsName = '[data-testid="title_of_an_element"]'
  static #deleteNews = '[data-testid="btn-delete-news"]'
  static #deleteNewsConfirmation = '[class="btn btn-primary btn-submit"]'
  static #titlebarNewsOverviewPage = '[id="titlebar"]'

  doNotSeeNews (newsName) {
    cy.get('span', { timeout: 20000 }).then($span => {
      if ($span.find(News.#newsName)) {
        cy.contains(newsName).should('not.exist')
      } else {
        cy.contains(
          'Keine aktuellen Einträge vorhanden.' || 'Bisher gibt es keine News.'
        ).should('exist')
      }
    })
  }

  confirmDeletionOnDialogBox () {
    cy.get(News.#deleteNewsConfirmation)
      .contains('Löschen')
        .should('exist')
      .click()
  }

  clickOnDeleteNewsButton () {
    cy.get(News.#deleteNews).click()
  }

  openNewsDetailPage (newsName) {
    cy.get(News.#newsName)
      .contains(newsName)
        .should('exist')
      .click()
  }

  seeCreatedNews (newsTitle, newsDesc) {
    cy.get(News.#newsTitle)
      .contains(newsTitle)
        .should('exist')
    cy.get(News.#newsDescriptionVisible)
      .contains(newsDesc)
        .should('exist')
  }

  clickOnCreateNewsSaveButton () {
    cy.get(News.#newsCreateButton)
      .click()
  }

  seeTimeInput () {
    cy.get(News.#newsTimeInput).should('exist')
  }

  seeDateInput () {
    cy.get(News.#newsDateInput).should('exist')
  }

  enterNewsDescription (newsDescription) {
    cy.get(News.#newsDescription, { timeout: 20000 }).type(
      newsDescription
    )
  }

  enterNewsTitle (newsTitle) {
    cy.get(News.#newsTitleInput, { timeout: 20000 })
      .eq(1)
      .type(newsTitle)
  }

  seeNewsCreationPage () {
    cy.url().should('include', '/news/new')
    cy.get(News.#newsTitleInput).should('exist')
  }

  clickOnAddNews () {
    cy.get(News.#createNewNews)
      .click()
  }

  navigateToNewsOverview () {
    cy.get(News.#newsOverviewNavigationButton)
      .click()
    cy.url()
      .should('include', '/news')
    cy.get(News.#titlebarNewsOverviewPage).should('exist')
  }

  teacherReadsNewsOnOverviewPage(titleOfNews, descriptionOfNews) {
    cy.get(News.#pageTitle).contains(titleOfNews).should('exist')
    cy.get(News.#newsText).contains(descriptionOfNews).should('exist')
  }
}
export default News

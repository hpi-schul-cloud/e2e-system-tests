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
    cy.get(News.#deleteNewsConfirmation, { timeout: 20000 })
      .contains('Löschen')
      .click().wait(3000)
  }

  clickOnDeleteNewsButton () {
    cy.get(News.#deleteNews, { timeout: 20000 }).click().wait(3000)
  }

  openNewsDetailPage (newsName) {
    cy.get(News.#newsName, { timeout: 20000 })
      .contains(newsName)
      .click().wait(3000)
  }

  seeCreatedNews (newsTitle, newsDesc) {
    cy.get(News.#newsTitle, { timeout: 20000 })
      .contains(newsTitle)
    cy.get(News.#newsDescriptionVisible)
      .contains(newsDesc, { timeout: 20000 })
  }

  clickOnCreateNewsSaveButton () {
    cy.get(News.#newsCreateButton, { timeout: 20000 })
      .click().wait(3000)
  }

  seeTimeInput () {
    cy.get(News.#newsTimeInput, { timeout: 20000 }).should('exist')
  }

  seeDateInput () {
    cy.get(News.#newsDateInput, { timeout: 20000 }).should('exist')
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
  }

  clickOnAddNews () {
    cy.get(News.#createNewNews, { timeout: 20000 })
      .click()
  }

  navigateToNewsOverview () {
    cy.get(News.#newsOverviewNavigationButton, { timeout: 20000 })
      .click()
    cy.url()
      .should('include', '/news')
  }

  teacherReadsNewsOnOverviewPage(titleOfNews, descriptionOfNews) {
    cy.get(News.#pageTitle, { timeout: 20000 }).contains(titleOfNews).should('exist')
    cy.get(News.#newsText, { timeout: 20000 }).contains(descriptionOfNews).should('exist')
  }
}
export default News

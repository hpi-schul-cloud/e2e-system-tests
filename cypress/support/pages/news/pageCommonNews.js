'use strict'

class News_Common {
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
      if ($span.find(News_Common.#newsName)) {
        cy.contains(newsName).should('not.exist')
      } else {
        cy.contains(
          'Keine aktuellen Einträge vorhanden.' || 'Bisher gibt es keine News.'
        ).should('exist')
      }
    })
  }

  confirmDeletionOnDialogBox () {
    cy.get(News_Common.#deleteNewsConfirmation)
      .contains('Löschen')
      .click()
  }

  clickOnDeleteNewsButton () {
    cy.get(News_Common.#deleteNews).click()
  }

  openNewsDetailPage (newsName) {
    cy.get(News_Common.#newsName)
      .contains(newsName)
      .click()
  }

  seeCreatedNews (newsTitle, newsDesc) {
    cy.get(News_Common.#newsTitle).then(() => {
      cy.contains(newsTitle).should('be.visible')
      cy.get(News_Common.#newsDescriptionVisible)
        .contains(newsDesc)
        .should('be.visible')
    })
  }

  clickOnCreateNewsSaveButton () {
    cy.get(News_Common.#newsCreateButton)
      .click()
      .get('[data-testid="btn-delete-news"]')
      .then($elm => {
        const newsTitle = $elm.text().trim()
        expect(newsTitle).to.match(/^$|^[a-zA-Z0-9._%+-]/)
      })
    /*.wait('@alerts_api')
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })*/
  }

  seeTimeInput () {
    cy.get(News_Common.#newsTimeInput).should('exist')
  }

  seeDateInput () {
    cy.get(News_Common.#newsDateInput).should('exist')
  }

  enterNewsDescription (newsDescription) {
    cy.get(News_Common.#newsDescription, { timeout: 20000 }).type(
      newsDescription
    )
  }

  enterNewsTitle (newsTitle) {
    cy.get(News_Common.#newsTitleInput, { timeout: 20000 })
      .eq(1)
      .type(newsTitle)
  }

  seeNewsCreationPage () {
    cy.url().should('include', '/news/new')
  }

  clickOnAddNews () {
    cy.get(News_Common.#createNewNews)
      .click()
      .then(object => {
        cy.wrap(object)
          .get("input[data-testid='news_title']")
          .then($elm => {
            const newsTitle = $elm.text().trim()
            expect(newsTitle).to.match(/^$|^[a-zA-Z0-9._%+-]/)
          })
        /*cy.wait('@alert_api')
          .its('response.statusCode')
          .should('eq', 200)*/
      })
  }

  navigateToNewsOverview () {
    cy.get(News_Common.#newsOverviewNavigationButton).click()
    cy.url().should('include', '/news')
  }
}
export default News_Common

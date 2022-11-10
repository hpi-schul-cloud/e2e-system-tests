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
    cy.get('span').then($span => {
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
    cy.get(News_Common.#newsTitle).contains(newsTitle)
    cy.get(News_Common.#newsDescriptionVisible).contains(newsDesc)
  }

  clickOnCreateNewsSaveButton () {
    /*cy.get(News_Common.#newsCreateButton)
      .click()
      .wait('@alerts_api')
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })*/
      cy.get(News_Common.#newsCreateButton)
      .click()
  }

  seeTimeInput () {
    cy.get(News_Common.#newsTimeInput).should('exist')
  }

  seeDateInput () {
    cy.get(News_Common.#newsDateInput).should('exist')
  }

  enterNewsDescription (newsDescription) {
    cy.get(News_Common.#newsDescription).type(newsDescription)
  }

  enterNewsTitle (newsTitle) {
    cy.get(News_Common.#newsTitleInput)
      .eq(1)
      .type(newsTitle)
  }

  seeNewsCreationPage () {
    cy.url().should('include', '/news/new')
  }

  clickOnAddNews () {
    /*cy.get(News_Common.#createNewNews)
      .click()
      .then(object => {
        cy.wrap(object)
          .wait(['@public_api', '@me_api', '@roles_api', '@schools_api'])
          .then(interceptions => {
            expect(interceptions[0].response.statusCode).to.equal(200)
            expect(interceptions[1].response.statusCode).to.equal(200)
            expect(interceptions[2].response.statusCode).to.equal(200)
            expect(interceptions[3].response.statusCode).to.equal(200)
          })
      })*/
      cy.get(News_Common.#createNewNews)
      .click()
      .then(object => {
        cy.wrap(object)
          .waitForNetworkIdle('@schools_api', 20000)
      })
  }

  navigateToNewsOverview () {
    cy.get(News_Common.#newsOverviewNavigationButton).click()
    cy.url().should('include', '/news')
  }
}
export default News_Common

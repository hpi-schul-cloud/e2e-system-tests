'use strict'

class Learning_Store {

  static #learningStoreMenuLink = '[data-testid="Lern-Store"]'
  static #learningStoreSearchInput = '[data-testid="learningstore-search-input"]'
  static #searchResultCard = '[data-testid="learningstore-searchresult-item"]'
  static #learningStoreContentDetailContainer = '[data-testid="lernStoreCardsContainer"]'
  static #learningStoreContentDetailToContentLink = '[data-testid="learningstore-to-content-link"]'

  navigateToLearningStoreOverview() {
    cy.visit('/content')
    cy.get(Learning_Store.#learningStoreMenuLink).click()
    cy.url().should('include', '/content')
  }

  assertLearningStoreNotVisibleInMenu() {
    cy.get(Learning_Store.#learningStoreMenuLink).should('not.exist')
  }

  assertLearningStoreVisibleInMenu() {
    cy.get(Learning_Store.#learningStoreMenuLink).should('exist')
  }

  searchInLearningStore(searchText) {
    cy.get(Learning_Store.#learningStoreSearchInput).type(searchText)
    cy.wait(5000)
  }

  assertSearchResultIsVisible() {
    cy.get(Learning_Store.#searchResultCard).should('exist')
  }

  clickOnFirstCardOfSearchResult() {
    cy.get(Learning_Store.#searchResultCard).first().click()
  }

  assertContentDetailPageIsVisible(){
    cy.get(Learning_Store.#learningStoreContentDetailContainer).should('be.visible')
  }

  openLearningStoreContent(){
    cy.get(Learning_Store.#learningStoreContentDetailToContentLink).click()
  }

}
export default Learning_Store
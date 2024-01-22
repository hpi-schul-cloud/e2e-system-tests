'use strict'

class Learning_Store {

  static #learningStoreMenuLink = '[data-testid="Lern-Store"]'
  static #learningStoreSearchInput = 'input' //must be exchanged -> data-testid
  static #searchResultCard = '[class="content-card"]'
  static #learningStoreContentDetailContainer = '[class="content-container"]' //must be exchanged -> data-testid
  static #learningStoreContentDetailToContentLink = 'a' //must be exchanged -> data-testid

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
    cy.get(Learning_Store.#searchResultCard).eq(0).click()
  }

  assertContentDetailPageIsVisible(){
    cy.get(Learning_Store.#learningStoreContentDetailContainer).should('be.visible')
  }

  openLearningStoreContent(){
    cy.get(Learning_Store.#learningStoreContentDetailToContentLink).eq(1)
  }

}
export default Learning_Store
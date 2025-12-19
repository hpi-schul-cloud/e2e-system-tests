"use strict";

class Learning_Store {
  static #learningStoreMenuLink = '[data-testid="sidebar-learningstore"]';
  static #learningStoreSearchInput = '[data-testid="learningstore-search-input"]';
  static #searchResultCard = '[data-testid="learningstore-searchresult-item"]';
  static #closeLearningStoreDetailsIcon =
    '[data-testid="learningstore-close-details-icon"]';
  static #learningStoreContentDetailToContentLink =
    '[data-testid="learningstore-to-content-link"]';

  navigateToLearningStoreOverview() {
    cy.visit("/content");
    cy.get(Learning_Store.#learningStoreMenuLink).click();
    cy.url().should("include", "/content");
  }

  assertLearningStoreNotVisibleInMenu() {
    cy.get(Learning_Store.#learningStoreMenuLink).should("not.exist");
  }

  assertLearningStoreVisibleInMenu() {
    cy.get(Learning_Store.#learningStoreMenuLink).should("exist");
  }

  searchInLearningStore(searchText) {
    cy.get(Learning_Store.#learningStoreSearchInput).type(searchText);
    cy.wait(5000);
  }

  assertSearchResultIsVisible() {
    cy.get(Learning_Store.#searchResultCard).should("exist");
  }

  clickOnFirstCardOfSearchResult() {
    cy.get(Learning_Store.#searchResultCard).first().click();
  }

  assertContentDetailPageIsVisible() {
    // there is currently no test-id in the detail page for content, but the detail page can be asserted by the visibility of the button "to content"
    cy.get(Learning_Store.#learningStoreContentDetailToContentLink).should("be.visible");
  }

  openLearningStoreContent() {
    cy.get(Learning_Store.#learningStoreContentDetailToContentLink)
      .should("exist")
      .then(($el) => {
        const clickSpy = cy.spy().as("clickSpy");

        $el.on("click", (event) => {
          event.preventDefault();
          clickSpy();
        });
      });
    cy.get(Learning_Store.#learningStoreContentDetailToContentLink).click();
    cy.get("@clickSpy").should("have.been.called").should("have.been.calledOnce");
  }

  closeLearningStoreContent() {
    cy.get(Learning_Store.#closeLearningStoreDetailsIcon).click();
  }
}
export default Learning_Store;

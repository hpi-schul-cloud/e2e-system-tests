const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Learning_Store from "../../pages/learning_store/pageLearningStore";

const learningStore = new Learning_Store();

When("I go to Learning Store overview", () => {
	learningStore.navigateToLearningStoreOverview();
});

When("I do not see Learning Store in side bar", () => {
	learningStore.assertLearningStoreNotVisibleInMenu();
});

When("I see Learning Store in side bar", () => {
	learningStore.assertLearningStoreVisibleInMenu();
});

When("I write {string} in search container and wait for search result", (searchText) => {
	learningStore.searchInLearningStore(searchText);
});

Then("I see website Learning Store with search result", () => {
	learningStore.assertSearchResultIsVisible();
});

When("I click on first card of search result", () => {
	learningStore.clickOnFirstCardOfSearchResult();
});

Then("I see card details", () => {
	learningStore.assertContentDetailPageIsVisible();
});

When("I click on button To content", () => {
	learningStore.openLearningStoreContent();
});

When("I click on icon Close Learning Store card details", () => {
	learningStore.closeLearningStoreContent();
});

const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Dashboard from "../../pages/dashboard/pageDashboard";

const dashboard = new Dashboard();

Then("I can see initials of my name", () => {
  dashboard.assertNameInitialsIsVisible();
});

When("I click on initials of my name", () => {
  dashboard.clickInitialsOfName();
});

Then("I click on language drop down menu", () => {
  dashboard.clickLanguagesDropDownMenu();
});

When("I can change language to {string}", (language) => {
  dashboard.changeLanguage(language);
});

Then("I can see title in dashboard is changed to {string}", (language) => {
  dashboard.verifyLanguageChanged(language);
});

Then("I arrive on the dashboard", () => {
  dashboard.arriveOnDashboard();
});

Then("I see my initials {string} in the dashboard", (initials) => {
  dashboard.assertNameInitialsIsVisibleWithValue(initials);
});

When("I go to dashboard", () => {
  dashboard.navigateToDashboard();
});

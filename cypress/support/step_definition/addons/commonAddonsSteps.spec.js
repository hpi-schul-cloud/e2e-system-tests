const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Addons from "../../pages/addons/pageAddons";

const addons = new Addons();

When("I go to Add-Ons overview", () => {
  addons.navigateToAddonsOverview();
});

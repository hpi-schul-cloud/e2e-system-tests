const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Addons from "../../pages/addons/pageAddons";

const addOns = new Addons();

Then("I see the Add-Ons page with the title on the top", () => {
  addOns.seeAddonsTitleOnTopOfThePage();
});

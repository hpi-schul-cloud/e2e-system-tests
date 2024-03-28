const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Addons from "../../pages/addons/pageAddons";

const addOns = new Addons();

// EXTERNAL COMMON STEP DEFINITIONS
// =========================
// External defined steps can be found here:
// -----------------------------------------
// -->\step_definition\authentication\loginStep.spec.js
// -->\stesp defined --> \step_definition\addons\commonAddonsRelatedSteps.spec.js

Then("I see the Add-Ons page with the title on the top", () => {
	addOns.seeAddonsTitleOnTopOfThePage();
});

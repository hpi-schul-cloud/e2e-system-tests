const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import News from "../../pages/news/pageNews";

const news = new News();

// EXTERNAL COMMON STEP DEFINITIONS
// =========================
// External defined steps can be found here:
// -----------------------------------------
// -->\step_definition\authentication\loginStep.spec.js
// --> \step_definition\teams\commonTeamsSteps.spec.js
// --> \step_definition\news\commonNewsSteps.spec.js

Then(
  "I can read the news {string} with description {string}",
  (titleOfNews, descriptionOfNews) => {
    news.seeNewsOnOverviewPage(titleOfNews, descriptionOfNews);
  }
);

const { Given } = require("@badeball/cypress-cucumber-preprocessor");

Given("I login as a teacher in nbc main", () => {
  cy.createSchoolAndUsersToLoginToNbc();
});

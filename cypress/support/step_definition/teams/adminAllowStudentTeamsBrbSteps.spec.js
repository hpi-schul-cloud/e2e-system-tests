const { When, Then } = require("@badeball/cypress-cucumber-preprocessor")
import Management from '../../pages/admin/pageAdministration'

const management = new Management()

// EXTERNAL COMMON STEP DEFINITIONS
// =========================
// External defined steps can be found here:
// -----------------------------------------
// -->\step_definition\authentication\loginStep.spec.js
// -->\step_definition\management\CommonManagementSteps.spec.js

// Scenario: Admin allows student to create a team on BRB

When('I click the checkbox to allow students to create a team', () => {
  management.clickAllowStudentsTeamCheckbox()
})

When('I click on Save', () => {
  management.clickSaveButtonToAllowStudentCreateTeam()
})

Then('I see checkbox is saved', () => {
  management.seeStudentTeamsAllowed()
})
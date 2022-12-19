import Management_Team from '../../pages/administration/pageTeamManagement'

const managementTeam = new Management_Team()

// EXTERNAL COMMON STEP DEFINITIONS
// =========================
// External defined steps can be found here:
// -----------------------------------------
// -->\step_definition\authentication\loginStep.spec.js
// -->\step_definition\management\CommonManagementSteps.spec.js

// Scenario: Admin allows student to create a team on BRB

When('I click the checkbox to allow students to create a team', () => {
    managementTeam.clickAllowStudentsTeamCheckbox()
})

When('I click on Save', () => {
    managementTeam.clickSaveButton()
})

Then('I see checkbox is saved', () => {
    managementTeam.seeStudentTeamsAllowed()
})
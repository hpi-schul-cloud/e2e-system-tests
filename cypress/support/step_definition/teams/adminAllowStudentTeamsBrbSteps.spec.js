import Management_Team from '../../pages/management/pageTeamManagement'

const managementTeam = new Management_Team()

// EXTERNAL COMMON STEP DEFINITIONS
// =========================
// External defined steps can be found here:
// -----------------------------------------
// -->\step_definition\management\CommonManagementSteps.spec.js

// Scenario: Admin allows student to create a team on BRB

When('I click the checkbox to allow students to create a team', () => {
    managementTeam.clickAllowStudentsTeamCheckbox()
})

When('I click on save button', () => {
    managementTeam.clickSaveButton()
})

Then('I see checkbox is saved', () => {
    managementTeam.seeStudentTeamsAllowed()
})
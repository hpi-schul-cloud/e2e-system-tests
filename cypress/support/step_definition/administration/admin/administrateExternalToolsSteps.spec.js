import Management from '../../../pages/administration/pageAdministration'
import Teams_Common from '../../../pages/teams/pageCommonTeams'

const management = new Management()
const teamCommon = new Teams_Common()

// EXTERNAL COMMON STEP DEFINITIONS
// ================================
// External defined steps can be found here:
// -----------------------------------------
// -->\step_definition\authentication\loginStep.spec.js
// --> step_definition\authentication\logoutStep.spec.js
// --> \step_definition\management\CommonManagementRelatedSteps.spec.js
// --> \step_definition\teams\commonTeamsRelatedSteps.spec.js


//Scenario: Deactivate Chat

When('I click on toggle switch to deactivate the chat', () => {
  management.clickChatToggleSwitch()
})

//Scenario: Activate Chat

When('I click on toggle switch to activate the chat', () => {
  management.clickChatToggleSwitch()
})

And ('I selected the messenger activation checkbox',()=>{
teamCommon.enableMessangerInTeamEdit()
})

And ('click on save changes',()=>{
teamCommon.clickOnSaveAfterEdit()
})
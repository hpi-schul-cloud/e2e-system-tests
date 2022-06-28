import Management from '../../../pages/management/pageManagement'
import Teams_Common from '../../../pages/teams/pageCommonTeams'

const management = new Management()
const teamCommon = new Teams_Common()

//Scenario: Deactivate Chat
//Given I am logged in as a 'admin' at 'brb'
//step defined -->\step_definition\authentication\loginStep.spec.js

//When I go to administration page
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And I go to school administration
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And I go to new school administration pag
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

When('I click on toggle switch to deactivate the chat', () => {
  management.clickChatToggleSwitch()
})

//And I click save general settings button
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//Then I log out
//step defined --> step_definition\authentication\logoutStep.spec.js

//Given I am logged in as a 'teacher' at 'brb'
//step defined --> \step_definition\authentication\loginStep.spec.js

//And I go to teams overview
//step defined --> \step_definition\teams\commonTeamsRelatedSteps.spec.js

//And I go to a team
//step defined --> \step_definition\teams\commonTeamsRelatedSteps.spec.js

//Then I can not see the chat in team
//step defined --> \step_definition\teams\commonTeamsRelatedSteps.spec.js

//And I open team settings
//step defined --> \step_definition\teams\commonTeamsRelatedSteps.spec.js

//And I choose edit team
//step defined --> \step_definition\teams\commonTeamsRelatedSteps.spec.js

//Then I can not see the checkbox for messenger in a team
//step defined --> \step_definition\teams\commonTeamsRelatedSteps.spec.js


//Scenario: Activate Chat
//Given (I am logged in as a 'admin' at 'brb')
//step defined --> \step_definition\authentication\loginStep.spec.js

//When (I go to administration page)
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And (I go to school administration)
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//When('I go to new school administration page')
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

When('I click on toggle switch to activate the chat', () => {
  management.clickChatToggleSwitch()
})

//And ('I click save general settings button')
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//Then (I log out)
//step defined--> step_definition\authentication\logoutStep.spec.js

//Given I am logged in as a 'teacher' at 'brb'
//step defined--> \step_definition\commonGlobalSteps\loginLogoutSteps.spec.js

//When I go to teams overview
//step defined --> \step_definition\teams\commonTeamsRelatedSteps.spec.js

//And I go to a team
//step defined --> \step_definition\teams\commonTeamsRelatedSteps.spec.js

//And ('I open team settings')
//step defined --> \step_definition\teams\commonTeamsRelatedSteps.spec.js

//And ('I choose edit team')
//step defined --> \step_definition\teams\commonTeamsRelatedSteps.spec.js

//Then ('I can see the checkbox for messenger in a team')
//step defined --> \step_definition\teams\commonTeamsRelatedSteps.spec.js

And ('I selected the messenger activation checkbox',()=>{
teamCommon.enableMessangerInTeamEdit()
})

And ('click on save changes',()=>{
teamCommon.clickOnSaveAfterEdit()
})

//Then ('I can see the chat in a team',()=>{
//step defined --> \step_definition\teams\commonTeamsRelatedSteps.spec.js
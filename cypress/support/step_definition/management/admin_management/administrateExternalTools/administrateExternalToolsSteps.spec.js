import Management from '../../../../pages/management/pageManagement'

const management = new Management()

//Scenario: Deactivate Chat
//Given I am logged in as a 'admin' at 'brb'
//step defined --> \step_definition\commonGlobalSteps\loginLogoutSteps.spec.js

//When I go to administration page
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And I go to school administration
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And I go to new school administration pag
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

When('I click toggle switch to deactivate the chat', () => {
  management.clickChatToggleSwitch()
})

//And I click save general settings button
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//Then I log out
//step defined --> \step_definition\commonGlobalSteps\loginLogoutSteps.spec.js

//Given I am logged in as a 'teacher' at 'brb'
//step defined --> \step_definition\commonGlobalSteps\loginLogoutSteps.spec.js

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
//step defined --> \step_definition\commonGlobalSteps\loginLogoutSteps.spec.js

//When (I go to administration page)
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And (I go to school administration)
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//When('I go to new school administration page')
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

When('I click toggle switch to activate the chat', () => {
  management.clickChatToggleSwitch()
})

//And ('I click save general settings button')
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//Then (I log out)
//step defined--> \step_definition\commonGlobalSteps\loginLogoutSteps.spec.js

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
import Addons from '../../pages/addons/pageAddons'

const addOns = new Addons()

//Scenario: to access Add-ons page as an Admin
//Given I am logged in as a 'admin' at 'nbc'
//step defined -->\step_definition\authentication\loginStep.spec.js

//When I go to AddOns overview
//stesp defined --> \step_definition\addons\commonAddonsRelatedSteps.spec.js

Then ('I see the Add-Ons page with the title on the top',()=>{
    addOns.seeAddonsTitleOnTopOfThePage()
})
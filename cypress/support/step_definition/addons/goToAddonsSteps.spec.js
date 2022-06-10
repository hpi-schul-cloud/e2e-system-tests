import Addons from '../../pages/addons/pageAddons'

const addOns = new Addons()

//Scenario: to access Add-ons page as an Admin
//Given I am logged in as a 'admin' at 'nbc'
//steps defined --> \step_definition\global_login_logout\loginLogoutSteps.spec.js

//When I go to AddOns overview
//stesp defined --> \step_definition\addons\commonAddonsRelatedSteps.spec.js

Then ('I see the Add-Ons page with the title on the top',()=>{
    addOns.seeAddonsTitleOnTopOfThePage()
})
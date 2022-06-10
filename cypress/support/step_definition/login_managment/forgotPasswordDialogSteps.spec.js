import Login_Management from '../../pages/login_management/pageLoginManagement'

const loginManagement = new Login_Management()

//Scenario: User sees password recovery dialog
//Given I am on the dBildungscloud login page as a user on BRB
//this step defined in --> \step_definition\login_managment\commonLoginManagementRelatedSteps.spec.js

//When I click on Forgot Password? link
//this step defined in --> \step_definition\login_managment\commonLoginManagementRelatedSteps.spec.js

Then('I see the Reset Password dialog with username label, email input box, info message, cancel and send reset password buttons', () => {
  loginManagement.showElementOnDialog()
})

//Scenario: Entering email or user name is mandatory
// Given I am on the dBildungscloud login page as a user on BRB
//this step defined in --> \step_definition\login_managment\commonLoginManagementRelatedSteps.spec.js

//When I click on Forgot Password? link
//this step defined in  --> \step_definition\login_managment\commonLoginManagementRelatedSteps.spec.js

When('I remove my email from the input box and submit the request', () => {
  loginManagement.submitRequestWithoutEmail()
})

Then('I still see the email input box that request is not submitted', () => {
  loginManagement.seeEmailInputOnSubmitingRequestWithoutEnteringEmail()
})
import Login_Management from '../../pages/login_managment/pageLoginManagement'

const loginManagement = new Login_Management()

//Scenario: User sees password recovery dailog

Given ('I am on the dBildungscloud login page as a user on default instance',()=>{
  loginManagement.beingOnLoginPage()
  })

When ('I click on Forgot Password? link', () =>{
  loginManagement.clickOnForgotPassword()
  })

Then ('I see the Reset Password dailog with username lable, email input box, infoMessage, cancel and send reset password buttons',() =>{
  loginManagement.showElementOnDailog()
})
import Login_Screen from '../../../pages/login_page/pageLoginScreen'

const loginScreen = new Login_Screen()

//Scenario: User sees password recovery dailog

Given ('I am on the dBildungscloud login page as a user on default instance',()=>{
  loginScreen.beingOnLoginPage()
  })

When ('I click on Forgot Password? link', () =>{
  loginScreen.clickOnForgotPassword()
  })

Then ('I see the Reset Password dailog with username lable, email input box, infoMessage, cancel and send reset password buttons',() =>{
  loginScreen.showElementOnDailog()
})
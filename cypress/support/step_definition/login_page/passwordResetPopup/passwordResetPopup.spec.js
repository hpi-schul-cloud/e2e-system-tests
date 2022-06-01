import Login_Screen from '../../../pages/login_page/pageLoginScreen'

const loginScreen = new Login_Screen()

//Scenario: User sees password recovery dailog

Given ('I am on the dBildungscloud login page as a user on default instance',()=>{
  loginScreen.beingOnLoginPage()
  })

When ('I click on Forgot Password? link', () =>{
  loginScreen.clickOnForgotPassword()
  })

Then ('I see the Reset Password dailog with lable, email input text box, cancel and send reset password elements',() =>{
  loginScreen.showElementOnDailog()
})

//Scenrio: Entering email or user name is mandatory

When ('I submit the request without entering my email',()=>{
  loginScreen.enterEmailIsMandatory()
})

Then ('I see the notification that entering email is a mandatory field',()=>{

//
})


import loginPage from '../pages/login'

const login = new loginPage()

Given('user arrives on the Schul-Cloud homepage', () => {
  login.navigate()
})

Given('I am logged in as a teacher', () => {
  login.loginAsTeacher()
})

Given('I am logged in as a student', () => {
  login.loginAsStudent()
})

Given('I am logged in as an admin', () => {
  login.loginAsAdmin()
})

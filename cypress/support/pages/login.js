class login {
  admin_username = Cypress.env('admin_username')
  teacher_username = Cypress.env('teacher_username')
  student_username = Cypress.env('student_username')
  password = Cypress.env('password')

  usernameField = '[data-testid="username"]'
  passwordField = '[data-testid="password"]'
  loginSubmitField = '[data-testid="submit-login"]'

  navigate () {
    cy.visit('/')
  }

  setUserName (username) {
    cy.get(this.usernameField).type(username, { log: true })
    return this
  }

  setPassword (password) {
    cy.get(this.passwordField).type(password, { log: true })
    return this
  }

  clickLoginButton () {
    cy.get(this.loginSubmitField).click()
  }

  loginAsTeacher () {
    this.setUserName(this.teacher_username)
    this.setPassword(this.password)
    this.clickLoginButton()
  }

  loginAsStudent () {
    this.setUserName(this.student_username)
    this.setPassword(this.password)
    this.clickLoginButton()
  }

  loginAsAdmin () {
    this.setUserName(this.admin_username)
    this.setPassword(this.password)
    this.clickLoginButton()
  }
}

export default login

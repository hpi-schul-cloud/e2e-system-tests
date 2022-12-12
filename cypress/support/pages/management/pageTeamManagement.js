'use strict'

class Management_Team {
  static #studentTeamCheckbox = '[data-testid="student_team_checkbox"]'
  static #submitButton = '[data-testid="button_save_team_administration"]'

  clickAllowStudentsTeamCheckbox () {
    cy.get(Management_Team.#studentTeamCheckbox)
      .find('input')
      .click({ force: true })
  }

  clickSaveButton () {
    cy.get(Management_Team.#submitButton)
      .eq(0)
      .click()
  }

  seeStudentTeamsAllowed () {
    cy.get(Management_Team.#studentTeamCheckbox).should('be.checked')
  }
}
export default Management_Team

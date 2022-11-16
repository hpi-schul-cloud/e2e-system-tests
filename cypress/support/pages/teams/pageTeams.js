'use strict'

class Teams {

  static #addNewTeamButton ='[data-testid="add-team-btn"]'
  static #teamTiitleName = '[data-testid="team_name"]'
  static #teamDescription = '[data-testid="description_team"]'
  static #teamChatActivateCheckBox = '[id="activateRC"]'
  static #teamVideoActivationCheckBox = '[id="activateConf"]'
  static #teamColourDropDown = '[id="selectColor"]'
  static #teamCreateButton = '[data-testid="create_team_btn"]'

  clickOnAddTeam(){
    cy.get(Teams.#addNewTeamButton).click()

    // intercept --> GET/alerts
  }

  seeTeamCreationFormPage () {
    cy.url().should('include', '/team/add')
  }






}
export default Teams
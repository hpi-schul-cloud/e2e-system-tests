'use strict'

class Team {
    static #teamContainer = '[data-testid="container_of_element"]'
    static #teamSettings = '[data-testid="team_settings"]'
    static #manageTeamMembers = '[data-testid="administrate_team_members"]'
    static #editTeam = 'i.fa-edit'
    static #deleteTeam = 'i.fa fa-trash'
    static #rocketchat = '.rocketchat'
    static #teamOptions = '.section-course'
    static #activateRCCheckbox ='#activateRC'
    static #activateConfCheckbox ='#activateConf'

    selectTeam () {
      cy.get(Team.#teamContainer).eq(0).click()
    }

    openTeamSettings () {
      cy.get(Team.#teamSettings).eq(0).click()
    }

    editTeam () {
      cy.get(Team.#editTeam).eq(0).click()
    }

    canSeeTeamChat () {
      cy.get(Team.#rocketchat)
      //cy.contains('Beginn des Gesprächs')
    }

    canNotSeeTeamChat () {
      cy.get(Team.#rocketchat).should('not.exist')
    }

    canSeeTeamChatCheckbox () {
      cy.get(Team.#teamOptions)
      cy.contains('Messenger für Team aktivieren')
      cy.get(Team.#activateRCCheckbox)
    }

    canNotSeeTeamChatCheckbox () {
      cy.get(Team.#teamOptions)
      cy.contains('Messenger für Team aktivieren').should('not.exist')
      cy.get(Team.#activateRCCheckbox).should('not.exist')
    }

    canSeeTeamVideoCheckbox () {
      cy.get(Team.#teamOptions)
      cy.contains('Videokonferenzen für Team aktivieren')
      cy.get(Team.#activateConfCheckbox)
    }

    canNotSeeTeamVideoCheckbox () {
      cy.get(Team.#teamOptions)
      cy.contains('Videokonferenzen für Team aktivieren').should('not.exist')
      cy.get(Team.#activateConfCheckbox).should('not.exist')
    }
}
export default Team
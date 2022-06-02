import Navigation from '../../../pages/common_navigation/pageNavigation'
import Team from '../../../pages/team/pageTeam'
import Administration from '../../../pages/administration/pageAdministration'
import Course from '../../../pages/course/pageCommonCourse'

const administration = new Administration()
const team = new Team()
const navigation = new Navigation()
const course = new Course()


// Scenario: Deactivate Chat

        //Given I am logged in as a 'admin' at 'brb'

        When('I go to administration page', () => {
            navigation.goToAdministration()
          })
          And('I go to school administration', () => {
            navigation.goToSchoolAdministration()
          })
          And('I go to new school administration page', () => {
            administration.clickNewAdminPageButton()
        })
        And('I click toggle switch to deactivate the chat', () => {
            administration.clickChatToggleSwitch()
        })
        And('I click save general settings button', () => {
            administration.clickSaveGeneralSettingsButton()
        })
        And('I log out', () => {
            cy.logout().click
          })
        //Given I am logged in as a 'teacher' at 'brb'

        And('I go to teams overview', () => {
            navigation.goToTeamsOverview()
          })
        And ('I go to a team', () => {
            team.selectTeam()
        })
        Then('I can not see the chat', () => {
            team.canNotSeeTeamChat()
        })
        And('I open team settings', () => {
            team.openTeamSettings()
        })
        And('I choose edit team', () => {
            team.editTeam()
        })
        Then('I can not see the checkbox for messenger', () => {
            team.canNotSeeTeamChatCheckbox()
        })

// Scenario: Activate Chat
        When('I go to administration page', () => {
            navigation.goToAdministration()
          })
          When('I go to school administration', () => {
            navigation.goToSchoolAdministration()
          })
          And('I go to new school administration page', () => {
            administration.clickNewAdminPageButton()
        })
        And('I click toggle switch to activate the chat', () => {
            administration.clickChatToggleSwitch()
        })
        And('I click save general settings button', () => {
            administration.clickSaveGeneralSettingsButton()
        })
        And('I log out', () => {
            cy.logout().click
          })
        //Given I am logged in as a 'teacher' at 'brb'
        And('I go to teams overview', () => {
            navigation.goToTeamsOverview()
          })
          And('I go to a team', () => {
            team.selectTeam()
        })
        Then('I can see the chat', () => {
            team.canSeeTeamChat()
        })
        And('I open team settings', () => {
            team.openTeamSettings()
        })
        And('I choose edit team', () => {
            team.editTeam()
        })
        Then('I can see the checkbox for messenger', () => {
            team.canSeeTeamChatCheckbox()
        })

// Scenario: Deactivate BigBlueButton

        When('I go to administration page', () => {
            navigation.goToAdministration()
          })
          When('I go to school administration', () => {
            navigation.goToSchoolAdministration()
          })
          And('I go to new school administration page', () => {
            administration.clickNewAdminPageButton()
        })
        And('I click toggle switch to activate the chat', () => {
            administration.clickChatToggleSwitch()
        })
        And('I click save general settings button', () => {
            administration.clickSaveGeneralSettingsButton()
        })
        And('I log out', () => {
            cy.logout().click
          })
        //Given I am logged in as a 'teacher' at 'brb'
        And('I go to teams overview', () => {
            navigation.goToTeamsOverview()
          })
        And('I go to room {string}', (room_name) => {
            const selectedRoom = `[aria-label='${room_name}']`
            cy.get(selectedRoom).click({
              multiple: true,
              force: true
            })
          })
        And('I go to tools tab', () => {
            course.goToTools()
          })
          And('I click add new tool button', () => {
            course.addNewTool()
          })
          Then('I can not add BigBlueButton to the room', () => {
            course.canNotAddBigBlueButton()
          })

// Scenario: Activate BigBlueButton
        When('I go to administration page', () => {
            navigation.goToAdministration()
          })
          When('I go to school administration', () => {
            navigation.goToSchoolAdministration()
          })
          And('I go to new school administration page', () => {
            administration.clickNewAdminPageButton()
        })
        And('I click toggle switch to activate the chat', () => {
            administration.clickChatToggleSwitch()
        })
        And('I click save general settings button', () => {
            administration.clickSaveGeneralSettingsButton()
        })
        And('I log out', () => {
            cy.logout().click
          })
        //Given I am logged in as a 'teacher' at 'brb'
        And('I go to teams overview', () => {
            navigation.goToTeamsOverview()
          })
          And('I go to room {string}', (room_name) => {
            const selectedRoom = `[aria-label='${room_name}']`
            cy.get(selectedRoom).click({
              multiple: true,
              force: true
            })
          })
          And('I go to tools tab', () => {
            course.goToTools()
          })
          And('I click add new tool button', () => {
            course.addNewTool()
          })
          Then('I can add BigBlueButton to the room', () => {
            course.canAddBigBlueButton()
          })
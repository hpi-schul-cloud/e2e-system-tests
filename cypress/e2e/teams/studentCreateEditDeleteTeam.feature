# Note: School api migration is blocked due to admin user can not access new school setting page (BC-7390).
@release
Feature: Team - Student managed teams (on BRB)

  As a student I want to create/edit/delete the team in Brandenburg so that I can manage the team.

  @stable_test
  Scenario: As a pre-condition admin allows student to create a team on BRB
    Given I am logged in as a 'admin1_brb' at 'brb'
    When I click on administration in menu
    When I go to team administration
    When I click the checkbox to allow students to create a team
    When I click on Save
    Then I see checkbox is saved

  @stable_test
  Scenario: Student can create, edit and delete team on BRB
    Given I am logged in as a 'student1_brb' at 'brb'
    When I go to teams overview
    When I click on button Add Team on the teams overview page
    Then I see new team creation page
    When I enter in the title 'cy test student team to test create edit delete team'
    When I enter in the description 'this is cy student team description'
    When I select the team colour black
    Then I click on button Create Team on the team creation page
    When I go to teams overview
    Then I see team title 'cy test student team to test create edit delete team' is visible
    Then I see the description 'this is cy student team description' is visible

    When I go to a team 'cy test student team to test create edit delete team'
    When I click on team settings
    When I click on edit option
    Then I see team edit page
    When I enter in the title 'edited cy test student team to test create edit delete team'
    When I enter in the description 'edited this is cy student team description'
    When I click on teams save changes button
    When I go to teams overview
    Then I see team title 'edited cy test student team to test create edit delete team' is visible
    Then I see the description 'edited this is cy student team description' is visible

    When I go to a team 'edited cy test student team to test create edit delete team'
    When I click on team settings
    When I click on delete option
    Then I see dialog box and click on delete button to confirm the deletion
    Then I do not see the team 'edited cy test student team to test create edit delete team'
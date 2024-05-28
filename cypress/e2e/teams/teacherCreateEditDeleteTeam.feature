@api_migrated
@release
Feature: Team - Create, delete and edit operations on Teams

  As a teacher I want to create/edit/delete the team so that I can manage the team.

  @stable_test
  Scenario: Creating a new team by Teacher
    Given I am logged in as a 'teacher1_brb' at 'brb'
    When I go to teams overview
    When I click on button Add Team on the teams overview page
    Then I see new team creation page
    When I enter in the title 'cy test team to test create edit delete team'
    When I enter in the description 'this is cy team description'
    When I select the team colour black
    Then I click on button Create Team on the team creation page
    When I go to teams overview
    Then I see team title 'cy test team to test create edit delete team' is visible
    Then I see the description 'this is cy team description' is visible

  @stable_test
  Scenario: Editing the newly created team by Teacher
    When I go to teams overview
    When I go to a team 'cy test team to test create edit delete team'
    When I click on team settings
    When I click on edit option
    Then I see team edit page
    When I enter in the title 'edited cy test team to test create edit delete team'
    When I enter in the description 'edited this is cy team description'
    When I click on teams save changes button
    When I go to teams overview
    Then I see team title 'edited cy test team to test create edit delete team' is visible
    Then I see the description 'edited this is cy team description' is visible

  @stable_test
  Scenario: Deleting the newly created team by Teacher
    When I go to teams overview
    When I go to a team 'edited cy test team to test create edit delete team'
    When I click on team settings
    When I click on delete option
    Then I see dialog box and click on delete button to confirm the deletion
    Then I do not see the team 'edited cy test team to test create edit delete team'
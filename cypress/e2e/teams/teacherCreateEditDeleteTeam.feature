@regression_test
@pr
@stable_test
Feature: Team - Create, delete and edit operations on Teams

  As a teacher I want to create/edit/delete the team so that I can manage the team.

  Scenario Outline: Teacher create, edit and deletes the team
    Given I am logged in as a '<teacher>' at '<namespace>'
    When I go to teams overview
    When I click on button Add Team on the teams overview page
    Then I see new team creation page
    When I enter in the title '<team_title>'
    When I enter in the description '<team_description>'
    When I select the team colour black
    Then I click on button Create Team on the team creation page
    When I go to teams overview
    Then I see team title '<team_title>' is visible
    Then I see the description '<team_description>' is visible

    # editing the newly created team by Teacher
    When I go to teams overview
    When I go to a team '<team_title>'
    When I click on team settings
    When I click on edit option
    Then I see team edit page
    When I enter in the title '<team_edited_title>'
    When I enter in the description '<team_edited_description>'
    When I click on teams save changes button
    When I go to teams overview
    Then I see team title '<team_edited_title>' is visible
    Then I see the description '<team_edited_description>' is visible

    # deleting the newly created team by Teacher
    When I go to teams overview
    When I go to a team '<team_edited_title>'
    When I click on team settings
    When I click on delete option
    Then I see dialog box and click on delete button to confirm the deletion
    Then I do not see the team '<team_edited_title>'

    @school_api_test
    @staging_test
    Examples:
      | teacher      | namespace | team_title                          | team_description              | team_edited_title                          | team_edited_description              |
      | teacher1_brb | brb       | CypressAut: Create,Edit,Delete Team | This is CRUD team description | CypressAut: Edited Create,Edit,Delete team | This is edited CRUD team description |
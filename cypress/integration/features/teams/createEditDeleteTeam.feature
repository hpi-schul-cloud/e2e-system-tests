Feature: CRUD operation on Teams

  As a teacher I want to create/edit/delete the team so that I can manage the team.

Scenario: Creating a new team by Teacher
  Given I am logged in as a 'teacher' at 'brb'
  When I go to teams overview
  When I click on add team button
  Then I see new team creation page
  When I enter the title 'this is a team'
  When I enter the description 'this is team description'
  Then I see team chat activation check box is visible
  Then team video activation check box is visible
  When I select the team color to red
  When I click on create button
  Then I am redirected to the team detail page and see team title 'this is a team news' is visible
  Then I see the description 'this is team description' is visible

Scenario: Editing the newly created team by Teacher
  Given I am logged in as a 'teacher' at 'brb'
  When I go to teams overview
  When I go to a team 'this is a team'
  When I click on three dot menu and select team edit option
  When I enter 'this is edited team title'
  When I enter 'edited description'
  When I click on save button
  Then I am redirected to the team detail page and see team title 'this is edited team title' is visible
  Then I see the description 'edited description' is visible

Scenario: Deleting the newly created team by Teacher
  Given I am logged in as a 'teacher' at 'brb'
  When I go to teams overview
  When I go to a team 'this is a team'
  When I click on three dot menu and click on delete option
  Then I see dialog box and click on delete button
  When I go to teams overview
  Then I do not see team title 'this is edited team title'
Feature: CRUD operation on Teams

  As a teacher I want to create/edit/delete the team so that I can manage the team.

Scenario: Creating a new team by Teacher
  Given I am logged in as a 'teacher' at 'brb'
  When I go to teams overview
  When I click on add team button
  Then I see new team creation page
  When I enter in the title 'this is a team'
  When I enter in the description 'this is team description'
  Then I see team chat activation check box is visible
  Then team video activation check box is visible
  When I select the team colour to red
  Then I click on create button
  When I go to teams overview
  Then I see team titled 'this is a team' is visible
  Then I see the description 'this is team description' is visible

Scenario: Editing the newly created team by Teacher
  Given I am logged in as a 'teacher' at 'brb'
  When I go to teams overview
  When I go to a team 'this is a team'
  When I click on team settings
  When I click on edit option
  Then I see team edit page
  When I enter in the title 'edit title'
  When I enter in the description 'edit description'
  When I click on teams save changes button
  When I go to teams overview
  Then I see team titled 'edit title' is visible
  Then I see the description 'edit description' is visible

Scenario: Deleting the newly created team by Teacher
  Given I am logged in as a 'teacher' at 'brb'
  When I go to teams overview
  When I go to a team 'edit title'
  When I click on team settings
  When I click on delete option
  Then I see dialog box and click on delete button to confirm the deletion
  Then I do not see the team 'edit title'
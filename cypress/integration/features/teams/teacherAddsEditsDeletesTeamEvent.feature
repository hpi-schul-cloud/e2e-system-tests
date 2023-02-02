@team @stable_test
Feature: Team - Teacher manages the team event

As a teacher I want to create/edit/delete the team event in default so that I can manage the team collaboration.

Scenario: Teacher adds, edits and deletes the team event
  Given I am logged in as a 'teacher' at 'default'
  When I go to teams overview
  When I go to a team 'Musik'
  When I go to calendar tab
  When I click on Add date
  Then I see event creation modal
  When I enter the title 'cy title'
  When I select the team event start date and time
  When I select the team event end date and time
  When I enter the description 'cy team event description cy'
  When I enter the event place 'cy TestPlace' and press enter to save the event
  #When I click on Save team event // currently there is a single 'save' button in the modal used multiple time in the DOM on different pages, so this is to be fixed (BC-3002)
  When I click on edit icon
  Then I see event creation modal
  When I re enter the title 'edit cy title'
  When I re enter the description 'edit cy team event description cy'
  When I re enter the place 'edit cy test place cy' and press the enter button to save the event
  #When I click on Save team event // currently there is a single 'save' button in the modal used multiple time in the DOM on different pages, so this is to be fixed (BC-3002)
  Then I am in calendar tab on team detail page and edited title 'edit cy title' is visible
  When I click on edit icon
  Then I see event creation modal
  When I click on Delete team event in modal
  Then I am in calendar tab on team detail page and title is NOT visible
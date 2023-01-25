@team @stable_test
Feature: Team - Teacher manages the team event

As a teacher I want to create/edit/delete the team event in default so that I can manage the team collaboration.

Scenario: Teacher adds, edits and deletes the team event via calendar
  Given I am logged in as a 'teacher' at 'default'
  When I go to teams overview
  When I go to a team 'Musik'
  When I go to calendar tab
  When I click on Add date button
  Then I see event creation modal
  When I enter the title 'cy title'
  When I select the team event start date and time
  When I select the team event end date and time
  When I enter the description 'cy team event description cy'
  When I enter the event place 'cy TestPlace' and press the enter button to save the event
  #When I click on Save team event or I hit enter button on the keyboard to save it // currently there is an issue related to save button data-testid
  Then I am in calendar tab on team detail page and title 'cy title' is visible
  When I click on edit icon
  Then I see event creation modal
  When I re enter the title 'edit cy title'
  When I re enter the description 'edit cy team event description cy'
  When I re enter the place 'edit cy test place cy' and press the enter button to save the event
  #When I click on Save team event or I hit enter button on the keyboard to save it // currently there is an issue related to save button data-testid
  Then I am in calendar tab on team detail page and edited title 'edit cy title' is visible
  When I click on edit icon
  Then I see event creation modal
  When I click on Delete team event button
  Then I am in calendar tab on team detail page and title 'edit cy title' is NOT visible
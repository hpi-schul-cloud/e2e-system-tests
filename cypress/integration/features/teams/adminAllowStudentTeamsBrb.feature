@team @stable_test
Feature: Team - Student managed teams (on BRB)

  As a admin I want to allow students to create teams in Brandenburg instance.

Scenario: Admin allows student to create a team on BRB
  Given I am logged in as a 'admin' at 'brb'
  When I go to administration page
  When I go to team administration
  When I click the checkbox to allow students to create a team
  When I click on Save button
  Then I see checkbox is saved
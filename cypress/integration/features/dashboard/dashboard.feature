Feature: To check contents on the dashboard

  As a student and a teacher I want to be see important information on the dashboard so that I can be updated start working

  Scenario: as a pre-condition teacher creates school news
    Given I am logged in as a 'teacher' at 'brb'
    When I go to news overview
    When I click on add news button
    Then I see news creation page
    And I enter school news title 'this is school news'
    And I enter school news description 'test school news description'
    And I see date input field
    And I see time input field
    And I click on Save button
    Then I see news detail page and news is created successfully

  Scenario: as a pre-condition teacher creates a new team
    Given I am logged in as a 'teacher' at 'brb'
    When I go to teams overview
    When I click on create team button
    Then I see team creation page
    And I enter team title 'this is team'
    And I enter team description 'test team description'
    And I click on create team button
    Then I see team detail page and new team 'this is team' is successfully created


  Scenario: as a pre-condition teacher creates a team news
    Given I am logged in as a 'teacher' at 'brb'
    When I go to teams overview
    And I click on team teaser 'this is team'
    When I click on news tab on the team detail page
    And I click on create news button
    Then I see news creation page
    And I enter team news title 'this is team news'
    And I enter team news description 'test team news description'
    And I see date input field
    And I see time input field
    And I click on Save button
    Then I see news detail page and news is created successfully 'this is team news'
    When I go to teams overview
    And I open team 'this is team'
    When I click on news tab on the team detail page
    Then I see team news with title 'this is team news'

  Scenario: as a pre-condition teacher adds student as team member
    Given I am logged in as a 'teacher' at 'brb'
    When I go to teams overview
    And I open team 'this is team'
    And I click on three dot menu on the team title
    And I click on manage team members option
    And I click on Add internal attendees button
    And new dialog opens
    And I click on select people drop down
    And select 'Herbert Kraft' as a team member
    And I click on add button
    And I see the student named 'Herbert Kraft' on the team members table

  Scenario: student arrives on dashboard
    Given I am logged in as a 'student' at 'brb'
    When I arrive on the dashboard
    Then I see the welcome message 'Hallo Herbert Kraft!'
    Then I see the school news with title 'this is school news'
    Then I see the team news with title 'this is team news'
    Then I can see the assigned task 'Task11'

  Scenario: teacher arrives on dashboard
    Given I am logged in as a 'teacher' at 'brb'
    When I arrive on the dashboard
    Then I see the welcome message 'Hallo Karl Herzog!'
    Then I see the school news with title 'this is school news'
    Then I see the team news with title 'this is team news'
    Then I can see the assigned task 'Task11'
    Then I can see the draft task 'Task1'

  Scenario: as a post-condition teacher deletes the school news
    Given I am logged in as a 'teacher' at 'brb'
    When I arrive on the dashboard
    And I click on team news teaser 'this is team news'
    When I ckick on delete button
    And I click agin on delete button on confirmation dialog box
    Then I am back to news overview page and team news is not longer visible on this page

  Scenario: as a post-condition teacher deletes the team and so the team news
    Given I am logged in as a 'teacher' at 'brb'
    When I arrive on the dashboard
    And I click on team news teaser 'this is school news'
    When I ckick on delete button
    And I click agin on delete button on confirmation dialog box
    Then I am back to news overview page and team news is not longer visible on this page
#@dashboard @stable_test
Feature: Dashboard - To check contents on the dashboard

  As a student and a teacher I want to see important information on the dashboard so that I can be updated start working

  Scenario: as a pre-condition teacher creates school news
    Given I am logged in as a 'teacher' at 'brb'
    When I go to news overview
    And I click on add news button
    Then I see news creation page
    And I enter news title 'Dashboard - this is a school news'
    And I enter news description 'test school news description'
    And I see date input field
    And I see time input field
    And I click on save button
    Then I see news is created successfully with title 'Dashboard - this is a school news' and with description 'test school news description'

  Scenario: as a pre-condition teacher creates a team news
    Given I am logged in as a 'teacher' at 'brb'
    When I go to teams overview
    And I go to a team 'Musik'
    When I click on news tab on the team detail page
    And I click on create news button
    Then I see news creation page
    And I enter news title 'Dashboard - this is a team news'
    And I enter news description 'test team news description'
    And I see date input field
    And I see time input field
    And I click on save button
    Then I see news is created successfully with title 'Dashboard - this is a team news' and with description 'test team news description'

  Scenario: as a pre-condition teacher adds student as team member
    Given I am logged in as a 'teacher' at 'brb'
    When I go to teams overview
    And I go to a team 'Musik'
    And I click on three dot menu on the team title
    And I click on manage team members option
    Then I see team participants overview page
    And I click on add internal attendees button
    And new dialog opens to select student 'Herbert Kraft' from the drop down list
    And I click on add user button
    Then I see the student named 'Herbert Kraft' on the team members table

  Scenario: student arrives on dashboard
    Given I am logged in as a 'student' at 'brb'
    When I arrive on the dashboard
    Then I see the welcome message 'Hallo Herbert Kraft!'
    Then I see school news with title 'Dashboard - this is a school news' and description 'test school news description'
    Then I see teams news with title 'Dashboard - this is a team news' and description 'test team news description'
    Then I can see the assigned task 'Task11'

  Scenario: teacher arrives on dashboard
    Given I am logged in as a 'teacher' at 'brb'
    When I arrive on the dashboard
    Then I see the welcome message 'Hallo Karl Herzog!'
    Then I see school news with title 'Dashboard - this is a school news' and description 'test school news description'
    Then I see teams news with title 'Dashboard - this is a team news' and description 'test team news description'
    Then I can see the assigned task 'Task11'
    Then I can see the draft task 'Task1'

  Scenario: as a post-condition teacher deletes the school news
    Given I am logged in as a 'teacher' at 'brb'
    When I arrive on the dashboard
    And I click on the news teaser 'Dashboard - this is a school news'
    When I click on delete button
    And I confirm the deletion on confirmation dialog box
    Then I do not see the news 'Dashboard - this is a school news'

  Scenario: as a post-condition teacher deletes the team news
    Given I am logged in as a 'teacher' at 'brb'
    When I arrive on the dashboard
    And I click on the news teaser 'Dashboard - this is a team news'
    When I click on delete button
    And I confirm the deletion on confirmation dialog box
    Then I do not see the news 'Dashboard - this is a team news'

  Scenario: student does not see news anymore on dashboard
    Given I am logged in as a 'student' at 'brb'
    When I arrive on the dashboard
    Then I do not see school news with title 'Dashboard - this is a school news'
    Then I do not see teams news with title 'Dashboard - this is a team news'

  Scenario: as a post-condition teacher deletes the student as a  team member
    Given I am logged in as a 'teacher' at 'brb'
    When I go to teams overview
    And I go to a team 'Musik'
    And I click on three dot menu on the team title
    And I click on manage team members option
    Then I see team participants overview page
    When I select the student 'Herbert Kraft' and click on delete icon
    Then I see 'Herbert Kraft' is not visible on the table

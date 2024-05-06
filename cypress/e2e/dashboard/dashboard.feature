@release
Feature: Dashboard - To check contents on the dashboard

  As a student and a teacher I want to see important information on the dashboard so that I can be updated start working

  @stable_test
  Scenario: as a pre-condition student logs in to create students account
    Given I am logged in as a 'student1_brb' at 'brb'

  @stable_test
  Scenario: as a pre-condition teacher creates school news
    Given I am logged in as a 'teacher1_brb' at 'brb'
    When I go to news overview
    And I click on add news button
    Then I see news creation page
    And I enter news title 'CypressAut Dashboard - school news'
    And I enter news description 'test school news description'
    And I see date input field
    And I see time input field
    And I click on save button
    Then I see news is created successfully with title 'CypressAut Dashboard - school news' and with description 'test school news description'

  @stable_test
  Scenario: as a pre-condition teacher creates a team
    When I go to teams overview
    When I click on button Add Team on the teams overview page
    Then I see new team creation page
    When I enter in the title 'CypressAut - News Team'
    When I click on button Create Team on the team creation page

  @stable_test
  Scenario: as a pre-condition teacher creates a team news
    When I go to teams overview
    When I go to a team 'CypressAut - News Team'
    When I click on news tab on the team detail page
    And I click on create news button
    Then I see news creation page
    And I enter news title 'CypressAut Dashboard - team news'
    And I enter news description 'test team news description'
    And I see date input field
    And I see time input field
    And I click on save button
    Then I see news is created successfully with title 'CypressAut Dashboard - team news' and with description 'test team news description'

  @stable_test
  Scenario: as a pre-condition teacher adds student as team member
    When I go to teams overview
    When I go to a team 'CypressAut - News Team'
    When I click on three dot menu on the team title
    And I click on manage team members option
    Then I see team participants overview page
    And I click on add internal attendees button
    And new dialog opens to select student 'test, cypress' from the drop down list
    And I click on add user button
    Then I see the student named 'test, cypress' on the team members table

  @stable_test
  Scenario: student arrives on dashboard
    Given I am logged in as a 'student1_brb' at 'brb'
    When I arrive on the dashboard
    Then I see the welcome message 'Hallo cypress test!'
    Then I see school news with title 'CypressAut Dashboard - school news' and description 'test school news description'
    Then I see teams news with title 'CypressAut Dashboard - team news' and description 'test team news description'
    Then I can see the assigned task 'Task11'

  @stable_test
  Scenario: teacher arrives on dashboard
    Given I am logged in as a 'teacher1_brb' at 'brb'
    When I arrive on the dashboard
    Then I see the welcome message 'Hallo cypress test!'
    Then I see school news with title 'CypressAut Dashboard - school news' and description 'test school news description'
    Then I see teams news with title 'CypressAut Dashboard - team news' and description 'test team news description'
    Then I can see the assigned task 'Task11'
    Then I can see the draft task 'Task1'

  @stable_test
  Scenario: as a post-condition teacher deletes the school news
    When I arrive on the dashboard
    And I click on the news teaser 'CypressAut Dashboard - school news'
    When I click on delete button
    And I confirm the deletion on confirmation dialog box
    Then I do not see the news 'CypressAut Dashboard - school news'

  @stable_test
  Scenario: as a post-condition teacher deletes the team news
    When I arrive on the dashboard
    And I click on the news teaser 'CypressAut Dashboard - team news'
    When I click on delete button
    And I confirm the deletion on confirmation dialog box
    Then I do not see the news 'CypressAut Dashboard - team news'

  @stable_test
  Scenario: student does not see news anymore on dashboard
    Given I am logged in as a 'student1_brb' at 'brb'
    When I arrive on the dashboard
    Then I do not see school news with title 'CypressAut Dashboard - school news'
    Then I do not see teams news with title 'CypressAut Dashboard - team news'

  @stable_test
  Scenario: as a post-condition teacher deletes the student as a  team member
    Given I am logged in as a 'teacher1_brb' at 'brb'
    When I go to teams overview
    When I go to a team 'CypressAut - News Team'
    When I click on three dot menu on the team title
    And I click on manage team members option
    Then I see team participants overview page
    When I select the student 'cypress test' and click on delete icon
    Then I see 'cypress test' is not visible on the table
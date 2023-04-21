#@courses @stable_test
Feature: Course - Add substitute teacher to course

  As a teacher I want to add substitute teacher to the course.

Scenario: Adding substitute teacher to course
    Given I am logged in as a 'teacher1' at 'brb'
    When I go to rooms overview
    And I go to room 'Biologie'
    When I open course edit page
    Then I can see course edit page
    And I clear substitute teacher field
    And I add substitute teacher 'teacher2'
    And I click on save changes after editing the course details
    Then I log out
    Given I am logged in as a 'teacher2' at 'brb'
    When I go to rooms overview
    And I go to room 'Biologie'

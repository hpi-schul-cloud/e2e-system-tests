@release
Feature: Course - Add substitute teacher to course

  As a teacher I want to add substitute teacher to the course.

  @stable_test
  Scenario: Adding substitute teacher to course
    Given I am logged in as a 'teacher1_brb' at 'brb'
    When I go to rooms overview
    When I go to room 'Biologie'
    When I open page Edit course
    Then I can see page Edit course
    And I clear substitute teacher field
    And I add substitute teacher 'teacher2'
    When I click on button Save changes in page Edit course
    Given I am logged in as a 'teacher2_brb' at 'brb'
    When I go to rooms overview
    When I go to room 'Biologie'

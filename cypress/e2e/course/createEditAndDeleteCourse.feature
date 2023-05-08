@pr
@release
Feature: Course - To add and delete a course by the teacher

  As a teacher I want to create a new course and want to delete the newly created test course/room so that list of courses/rooms can be cleaned and not full with the newly created test courses/rooms.

  @stable_test
  Scenario: as a pre-condition teacher deletes undeleted tests
    Given I am logged in as a 'teacher' at 'brb'
    When I go to rooms overview
    Then I delete all courses named 'Cypress Test Creation and Deletion'
    And I do not see the course 'Cypress Test Creation and Deletion' on the room overview page
    And I delete all courses named 'Cypress Testkurs Edit'
    And I do not see the course 'Cypress Testkurs Edit' on the room overview page

  @stable_test
  Scenario: Adding a new course
    Given I am logged in as a 'teacher' at 'brb'
    When I go to rooms overview
    And I click on FAB to create the course
    And I enter the course title 'Cypress Test Creation and Deletion'
    When I click on button Next Steps
    When I click on button Next Steps
    When I click on button To Course Overview
    Then I see the course 'Cypress Test Creation and Deletion' on the room overview page

  @stable_test
  Scenario: Editing the course
    Given I am logged in as a 'teacher' at 'brb'
    When I go to rooms overview
    And I go to room 'Cypress Test Creation and Deletion'
    When I open course edit page
    Then I can see course edit page
    Then I edit the title of the room to 'Cypress Testkurs Edit' and the description
    And I click on save changes after editing the course details

  @stable_test
  Scenario: Deleting the test course/room created during executing the testing
    Given I am logged in as a 'teacher' at 'brb'
    When I go to rooms overview
    And I go to room 'Cypress Testkurs Edit'
    When I open course edit page
    When I should be able to delete the test room
    Then I do not see the course 'Cypress Testkurs Edit' on the room overview page

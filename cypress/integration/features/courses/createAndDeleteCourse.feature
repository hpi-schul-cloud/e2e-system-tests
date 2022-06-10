Feature: To add and delete a course by the teacher

  As a teacher I want to create a new course and want to delete the newly created test course/room so that list of courses/rooms can be cleaned and not full with the newly created test courses/rooms.

  Scenario: Adding a new course
    Given I am logged in as a 'teacher' at 'brb'
    When I go to rooms overview
    And I click on FAB to create the course
    And I fill out the course creation form for new course 'Cypress Testkurs'
    And I click on next steps
    Then I see the course 'Cypress Testkurs' on the room overview page

  Scenario: Deleting the test course/room created during executing the testing
    Given I am logged in as a 'teacher' at 'brb'
    When I go to rooms overview
    And I go to room 'Kurs Cypress Testkurs'
    Then I should be able to delete the test room
    Then I do not see the course 'Kurs Cypress Testkurs' on the room overview page
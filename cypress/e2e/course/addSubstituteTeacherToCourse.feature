@release
@api_migrated
@stable_test
Feature: Course - Add substitute teacher to course

  As a teacher I want to add substitute teacher to the course.

  Scenario: Pre-test: Creating user
    Given I am logged in as a 'admin1_brb' at 'brb'
    Given I am logged in as a 'teacher1_brb' at 'brb'
    Given I am logged in as a 'teacher2_brb' at 'brb'

  Scenario: Pre-test: Creating new course
    Given I am logged in as a 'admin1_brb' at 'brb'
    When I go to rooms overview
    When I click on FAB to create a new room
    When I click on new course create button in sub menu
    Then I see section one area on the course create page
    When I enter the course title 'Biologie'
    When I select room colour as red
    Then I select 'cypress teacher_1' from field teacher
    Then I see substitute teacher selection box
    Then I see button to create a course time table container
    When I click on button Next Steps after entering the room detail in section one
    Then I see section two area on the course create page
    When I click on button Next Steps after selecting room participant details
    Then I see the section three area as the finish page
    When I click on button To Course Overview on the finish page
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

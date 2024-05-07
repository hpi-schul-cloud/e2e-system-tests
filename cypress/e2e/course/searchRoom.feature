@release
@api_migrated
Feature: Course - To search for a course via search input box on the course overview page

  As a user (teacher & student) I want to search for dedicated course so that I can quickly find it.

  @stable_test
  Scenario: Pre-test: Creating user and course
    Given I am logged in as a 'admin1_brb' at 'brb'
    Given I am logged in as a 'teacher1_brb' at 'brb'
    Given I am logged in as a 'student1_brb' at 'brb'

  @stable_test
  Scenario: Pre-test: Create new course
    Given I am logged in as a 'admin1_brb' at 'brb'
    When I go to rooms overview
    When I click on FAB to create a new room
    When I click on new course create button in sub menu
    Then I see section one area on the course create page
    When I enter the course title 'Biologie'
    When I select room colour as red
    When I select 'cypress teacher_1' from field teacher
    Then I see substitute teacher selection box
    Then I see button to create a course time table container
    When I click on button Next Steps after entering the room detail in section one
    Then I see section two area on the course create page
    When I select 'cypress student_1' from field student
    When I click on button Next Steps after selecting room participant details
    Then I see the section three area as the finish page
    When I click on button To Course Overview on the finish page

  @stable_test
  Scenario: teacher is able to search for a course and find it
    Given I am logged in as a 'teacher1_brb' at 'brb'
    When I go to rooms overview
    When I enter the course name 'Biologie' into the search field
    Then I see the course 'Biologie' on the room overview page

  @stable_test
  Scenario: teacher is able to search for a course and DO NOT find it
    When I go to rooms overview
    When I enter the course name 'Cy::NotExistingMathematikCourse' into the search field
    Then I do not see the course 'Cy::NotExistingMathematikCourse' on the room overview page

  @stable_test
  Scenario: student is able to search for a course and find it
    Given I am logged in as a 'student1_brb' at 'brb'
    When I go to rooms overview
    When I enter the course name 'Biologie' into the search field
    Then I see the course 'Biologie' on the room overview page

  @stable_test
  Scenario: student is able to search for a course and DO NOT find it
    When I go to rooms overview
    When I enter the course name 'Cy::NotExistingMathematikCourse' into the search field
    Then I do not see the course 'Cy::NotExistingMathematikCourse' on the room overview page
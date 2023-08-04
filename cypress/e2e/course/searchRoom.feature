@release
Feature: Course - To search for a course via search input box on the course overview page

  As a user (teacher & student) I want to search for dedicated course so that I can quickly find it.

  @stable_test
  Scenario: teacher is able to search for a course and find it
    Given I am logged in as a 'teacher' at 'brb'
    When I go to rooms overview
    When I enter the course name 'Biologie' into the search field
    Then I see the course 'Biologie' on the room overview page

  @stable_test
  Scenario: teacher is able to search for a course and DO NOT find it
    Given I am logged in as a 'teacher' at 'brb'
    When I go to rooms overview
    When I enter the course name 'Cy::NotExistingMathematikCourse' into the search field
    Then I do not see the course 'Cy::NotExistingMathematikCourse' on the room overview page

  @stable_test
  Scenario: student is able to search for a course and find it
    Given I am logged in as a 'student' at 'brb'
    When I go to rooms overview
    When I enter the course name 'Course with subject' into the search field
    Then I see the course 'Course with subject and tasks' on the room overview page

  @stable_test
  Scenario: student is able to search for a course and DO NOT find it
    Given I am logged in as a 'student' at 'brb'
    When I go to rooms overview
    When I enter the course name 'Cy::NotExistingMathematikCourse' into the search field
    Then I do not see the course 'Cy::NotExistingMathematikCourse' on the room overview page
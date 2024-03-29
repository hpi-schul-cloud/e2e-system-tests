@release
Feature: Admin Users - To add, edit and delete new users by the admin.

  As an admin I want to create a new user so that I can administrate it

  @stable_test
  Scenario: Adding a new student
    Given I am logged in as a 'admin1_brb' at 'brb'
    When I go to administration page
    And I go to student administration
    When I click on FAB
    When I click on Add Student in opened FAB
    And I fill out the user creation form for 'Adam' 'Riese' with email 'adam.riese@example.com'
    And I click on add button to add 'student'
    Then I can see the user with email 'adam.riese@example.com' in the table

  @stable_test
  Scenario: Editing a new student
    When I go to administration page
    And I go to student administration
    And I enter 'student' email 'adam.riese@example.com' in search input field
    And I click edit student button for 'adam.riese@example.com'
    And I change username to 'Alex' 'Abramovic'
    And I change email to 'alex.abramovic@example.com'
    And I click save changes button
    Then I can see the user with email 'alex.abramovic@example.com' in the table
    Then I can not see user 'adam.riese@example.com' in the table

  @stable_test
  Scenario: Deleting a student
    When I go to administration page
    And I go to student administration
    And I enter 'student' email 'alex.abramovic@example.com' in search input field
    And I click edit student button for 'alex.abramovic@example.com'
    And I click delete user button to delete user with email 'alex.abramovic@example.com'
    And I click on delete button in pop up
    Then I can not see user 'alex.abramovic@example.com' in the table

  @stable_test
  Scenario: Adding a new teacher
    When I go to administration page
    And I go to teacher administration
    When I click on FAB
    When I click on Add Teacher in opened FAB
    And I fill out the user creation form for 'Karl' 'Müller' with email 'karl.mueller@example.com'
    And I click on add button to add 'teacher'
    Then I can see the user with email 'karl.mueller@example.com' in the table

  @stable_test
  Scenario: Editing a new teacher
    When I go to administration page
    And I go to teacher administration
    And I enter 'teacher' email 'karl.mueller@example.com' in search input field
    And I click edit teacher button for 'karl.mueller@example.com'
    And I change username to 'Theodor' 'Müller-Schmidt'
    And I change email to 't.mueschmidt@example.com'
    And I click save changes button
    Then I can see the user with email 't.mueschmidt@example.com' in the table
    Then I can not see user 'karl.mueller@example.com' in the table

  @stable_test
  Scenario: Deleting a teacher
    When I go to administration page
    And I go to teacher administration
    And I enter 'teacher' email 't.mueschmidt@example.com' in search input field
    And I click edit teacher button for 't.mueschmidt@example.com'
    And I click delete user button to delete user with email 't.mueschmidt@example.com'
    And I click on delete button in pop up
    Then I can not see user 't.mueschmidt@example.com' in the table
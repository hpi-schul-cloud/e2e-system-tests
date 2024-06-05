@release
Feature: Admin Users - To add, edit and delete new users by the admin.

  As an admin I want to create a new user so that I can administrate it

  @stable_test
  Scenario: Adding a new student, edit this student and delete this student
  # admin adds a new student
    Given I am logged in as a '<admin>' at '<namespace>'
    When I click on administration in menu
    And I go to student administration
    When I click on FAB
    When I click on Add Student in opened FAB
    And I fill out the user creation form for '<student_firstname>' '<student_lastname>' with email '<student_email>'
    And I click on add button to add '<role_to_add>'
    Then I can see the user with email '<student_email>' in the table

  # admin adds edits a student
    And I go to student administration
    And I enter '<role_to_add>' email '<student_email>' in search input field
    And I click edit student button for '<student_email>'
    And I change username to '<student_firstname_edited>' '<student_lastname_edited>'
    And I change email to '<student_email_edited>'
    And I click save changes button
    Then I can see the user with email '<student_email_edited>' in the table
    Then I can not see user '<student_email>' in the table

  # admin deletes a student
    And I go to student administration
    And I enter '<role_to_add>' email '<student_email_edited>' in search input field
    And I click edit student button for '<student_email_edited>'
    And I click delete user button to delete user with lastname '<student_lastname_edited>'
    And I click on delete button in pop up
    Then I can not see user '<student_email_edited>' in the table

    Examples:
      | namespace | admin      | role_to_add | student_firstname | student_lastname  | student_email                               | student_firstname_edited | student_lastname_edited  | student_email_edited                      |
      | brb       | admin1_brb | student     | cypress           | student_admintest | original_student_adminusers@cypress-mail.de | cypress                  | edited_student_admintest | edited_student_adminusers@cypress-mail.de |

  @unstable_test
  Scenario: Adding a new teacher
    When I click on administration in menu
    And I go to teacher administration
    When I click on FAB
    When I click on Add Teacher in opened FAB
    And I fill out the user creation form for 'Karl' 'Müller' with email 'karl.mueller@example.com'
    And I click on add button to add 'teacher'
    Then I can see the user with email 'karl.mueller@example.com' in the table

  @unstable_test
  Scenario: Editing a new teacher
    When I click on administration in menu
    And I go to teacher administration
    And I enter 'teacher' email 'karl.mueller@example.com' in search input field
    And I click edit teacher button for 'karl.mueller@example.com'
    And I change username to 'Theodor' 'Müller-Schmidt'
    And I change email to 't.mueschmidt@example.com'
    And I click save changes button
    Then I can see the user with email 't.mueschmidt@example.com' in the table
    Then I can not see user 'karl.mueller@example.com' in the table

  @unstable_test
  Scenario: Deleting a teacher
    When I click on administration in menu
    And I go to teacher administration
    And I enter 'teacher' email 't.mueschmidt@example.com' in search input field
    And I click edit teacher button for 't.mueschmidt@example.com'
    And I click delete user button to delete user with lastname 't.mueschmidt@example.com'
    And I click on delete button in pop up
    Then I can not see user 't.mueschmidt@example.com' in the table
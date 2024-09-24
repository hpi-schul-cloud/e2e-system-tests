@regression_test
@stable_test
@schedule_run
Feature: Admin Users - To add, edit and delete new users by the admin.

    As an admin I want to create a new user so that I can administrate it

    Scenario: Adding a new user, edit and delete this user
        # admin adds a new student
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I go to '<role_to_manage>' administration
        When I click on FAB
        When I click on Add User in opened FAB for '<role_to_manage>'
        And I fill out the user creation form for '<user_firstname>' '<user_lastname>' with email '<user_email>'
        And I click on add button to add '<role_to_manage>'
        And I enter '<role_to_manage>' email '<user_email>' in search input field
        Then I can see the user with email '<user_email>' in the table

        # admin adds edits a student
        # admin adds edits a student
        And I go to '<role_to_manage>' administration
        And I enter '<role_to_manage>' email '<user_email>' in search input field
        And I click edit '<role_to_manage>' button for '<user_email>'
        And I change username to '<user_firstname_edited>' '<user_lastname_edited>'
        And I change email to '<user_email_edited>'
        And I click save changes button
        And I enter '<role_to_manage>' email '<user_email_edited>' in search input field
        Then I can see the user with email '<user_email_edited>' in the table
        And I enter '<role_to_manage>' email '<user_email>' in search input field
        Then I can not see user '<user_email>' in the table

        # admin deletes a student
        # admin deletes a student
        And I go to '<role_to_manage>' administration
        And I enter '<role_to_manage>' email '<user_email_edited>' in search input field
        And I click edit '<role_to_manage>' button for '<user_email_edited>'
        And I click delete user button to delete user with lastname '<user_lastname_edited>'
        And I click on delete button in pop up
        And I enter '<role_to_manage>' email '<user_email_edited>' in search input field
        Then I can not see user '<user_email_edited>' in the table

        @school_api_test
        Examples:
            | namespace | admin      | role_to_manage | user_firstname | user_lastname     | user_email                                  | user_firstname_edited | user_lastname_edited     | user_email_edited                         |
            | brb       | admin1_brb | student        | cypress        | student_admintest | original_student_adminusers@cypress-mail.de | cypress               | edited_student_admintest | edited_student_adminusers@cypress-mail.de |
            | brb       | admin1_brb | teacher        | cypress        | teacher_admintest | original_teacher_adminusers@cypress-mail.de | cypress               | edited_teacher_admintest | edited_teacher_adminusers@cypress-mail.de |

        @staging_test
        Examples:
            | namespace | admin      | role_to_manage | user_firstname | user_lastname     | user_email                                  | user_firstname_edited | user_lastname_edited     | user_email_edited                         |
            | brb       | admin1_brb | student        | cypress        | student_admintest | original_student_adminusers@cypress-mail.de | cypress               | edited_student_admintest | edited_student_adminusers@cypress-mail.de |
            | brb       | admin1_brb | teacher        | cypress        | teacher_admintest | original_teacher_adminusers@cypress-mail.de | cypress               | edited_teacher_admintest | edited_teacher_adminusers@cypress-mail.de |
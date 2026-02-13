@regression_test
@stable_test
@schedule_run
@group-D
@pr
@pre_check_test
@prio_0_staging
Feature: Admin - To add, edit and delete new users by the admin.

    As an admin, I want to manage users by creating, editing, and removing them

    Scenario Outline: Admin adds, edits, and deletes a user

        # pre-condition: admin adds a new student and a new teacher
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I go to '<role_to_manage>' administration
        When I click on FAB to add '<role_to_manage>'
        When I click on Add User in opened FAB for '<role_to_manage>'
        When I fill out the user creation form for '<user_first_name>' '<user_last_name>' with email '<user_email>'
        When I click on add button to add '<role_to_manage>'
        When I enter '<role_to_manage>' email '<user_email>' in search input field
        Then I can see the user with email '<user_email>' in the table
        Then I see the assigned date of birth for student in the table

        # admin adds edits a student and a teacher
        When I go to '<role_to_manage>' administration
        When I enter '<role_to_manage>' email '<user_email>' in search input field
        When I click edit '<role_to_manage>' button for '<user_email>'
        When I change username to '<user_first_name_edited>' '<user_last_name_edited>'
        When I change email to '<user_email_edited>'
        When I click save changes button
        When I enter '<role_to_manage>' email '<user_email_edited>' in search input field
        Then I can see the user with email '<user_email_edited>' in the table
        When I enter '<role_to_manage>' email '<user_email>' in search input field
        Then I can not see user '<user_email>' in the table

        # admin reverts teacher user information (Note: This scenario can be further implemented)
        # When I am on the teachers management page
        # When I go to teacher edit page for '<user_first_name>' with email '<user_email>'
        # When I Change the name to '<user_first_name>' '<user_first_name_edited>'
        # When I  Change the email to '<user_email>'
        # Then I can save the changes

        # post-condition: admin deletes a student and a teacher
        # KNL user deletion asynchronously by cron, so we can't wait until cron job runs and the user gets deleted.
        # Thus, we still see the deleted user on the overview table until the cron jon is finished as per scheduled.
        When I go to '<role_to_manage>' administration
        When I enter '<role_to_manage>' email '<user_email_edited>' in search input field
        When I click edit '<role_to_manage>' button for '<user_email_edited>'
        When I click delete user button to delete user with last name '<user_last_name_edited>'
        Then I see the alert Info in the deletion pop up
        When I click on the button Delete in the pop up
        Then I see the user management overview page

        @school_api_test
        Examples:
            | namespace | admin      | role_to_manage | user_first_name | user_last_name     | user_email                                   | user_first_name_edited | user_last_name_edited     | user_email_edited                          |
            | dbc       | admin1_dbc | student        | cypress         | student_admin_test | original_student_admin_users@cypress-mail.de | cypress                | edited_student_admin_test | edited_student_admin_users@cypress-mail.de |
            | dbc       | admin1_dbc | teacher        | cypress         | teacher_admin_test | original_teacher_admin_users@cypress-mail.de | cypress                | edited_teacher_admin_test | edited_teacher_admin_users@cypress-mail.de |

        @staging_test
        Examples:
            | namespace | admin      | role_to_manage | user_first_name | user_last_name     | user_email                                   | user_first_name_edited | user_last_name_edited     | user_email_edited                          |
            | brb       | admin1_brb | student        | cypress         | student_admin_test | original_student_admin_users@cypress-mail.de | cypress                | edited_student_admin_test | edited_student_admin_users@cypress-mail.de |
            | brb       | admin1_brb | teacher        | cypress         | teacher_admin_test | original_teacher_admin_users@cypress-mail.de | cypress                | edited_teacher_admin_test | edited_teacher_admin_users@cypress-mail.de |

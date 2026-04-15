@regression_test
@stable_test
@schedule_run
@group-D
@pr
@pre_check_test
@prio_0_staging
Feature: Admin - To add, edit and delete new users by the admin.

    As an admin, I want to manage users by creating, editing, and removing them, so that I can manage user administration effectively.

    #------------------------------------------ Student user deletion via legacy page ------------------------------------------

    Scenario Outline: Admin adds, edits, and deletes a student

        # admin adds a new student
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

        # admin edits a student
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

        # admin deletes a student
        # knl user deletion asynchronously by cron, cron job runs as scheduled and the user gets deleted in the DB, but in the GUI it deletes immediate.
        When I go to '<role_to_manage>' administration
        When I enter '<role_to_manage>' email '<user_email_edited>' in search input field
        When I click edit '<role_to_manage>' button for '<user_email_edited>'
        When I click delete user button to delete user with last name '<user_last_name_edited>'
        When I click on the button Delete in the pop up
        When I enter '<role_to_manage>' email '<user_email_edited>' in search input field
        Then I can not see user '<user_email_edited>' in the table

        @school_api_test
        Examples:
            | namespace | admin      | role_to_manage | user_first_name | user_last_name     | user_email                                   | user_first_name_edited | user_last_name_edited     | user_email_edited                          |
            | dbc       | admin1_dbc | student        | cypress         | student_admin_test | original_student_admin_users@cypress-mail.de | cypress                | edited_student_admin_test | edited_student_admin_users@cypress-mail.de |

        @staging_test
        Examples:
            | namespace | admin      | role_to_manage | user_first_name | user_last_name     | user_email                                   | user_first_name_edited | user_last_name_edited     | user_email_edited                          |
            | dbc       | admin1_dbc | student        | cypress         | student_admin_test | original_student_admin_users@cypress-mail.de | cypress                | edited_student_admin_test | edited_student_admin_users@cypress-mail.de |


    #------------------------------------------ Teacher user deletion via vue page ------------------------------------------

    Scenario Outline: Admin adds, edits, and deletes a teacher

        # admin adds a new teacher
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I go to '<role_to_manage>' administration
        When I click on FAB to add '<role_to_manage>'
        When I click on Add User in opened FAB for '<role_to_manage>'
        When I fill out the user creation form for '<user_first_name>' '<user_last_name>' with email '<user_email>'
        When I click on add button to add '<role_to_manage>'
        When I enter '<role_to_manage>' email '<user_email>' in search input field
        Then I can see the user with email '<user_email>' in the table

        # admin edits a teacher
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

        # admin deletes a teacher
        # knl user deletion asynchronously by cron, cron job runs as scheduled and the user gets deleted in the DB, but in the GUI it deletes immediate.
        When I go to '<role_to_manage>' administration
        When I enter '<role_to_manage>' email '<user_email_edited>' in search input field
        When I select the checkbox '<role_to_manage>' button for '<user_email_edited>'
        When I click on the button Action
        When I click on the Option Delete
        Then I see the dialog for deleting user
        Then I see the user name '<user_first_name_edited>' '<user_last_name_edited>' in the deletion dialog
        When I click on the button Delete to confirm the deletion
        Then I see the success alert
        When I enter '<role_to_manage>' email '<user_email_edited>' in search input field
        Then I can not see user '<user_email_edited>' in the table

        @school_api_test
        Examples:
            | namespace | admin      | role_to_manage | user_first_name | user_last_name     | user_email                                   | user_first_name_edited | user_last_name_edited     | user_email_edited                          |
            | dbc       | admin1_dbc | teacher        | cypress         | teacher_admin_test | original_teacher_admin_users@cypress-mail.de | cypress                | edited_teacher_admin_test | edited_teacher_admin_users@cypress-mail.de |

        @staging_test
        Examples:
            | namespace | admin      | role_to_manage | user_first_name | user_last_name     | user_email                                   | user_first_name_edited | user_last_name_edited     | user_email_edited                          |
            | dbc       | admin1_dbc | teacher        | cypress         | teacher_admin_test | original_teacher_admin_users@cypress-mail.de | cypress                | edited_teacher_admin_test | edited_teacher_admin_users@cypress-mail.de |

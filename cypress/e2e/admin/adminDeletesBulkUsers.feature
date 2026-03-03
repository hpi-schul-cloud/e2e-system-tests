@regression_test
@stable_test
@schedule_run
@group-D
@prio_0_staging
Feature: Admin - To add and delete new users by the admin in bulk

    As an admin, I want to manage users by creating and removing them in bulk, so that I can manage user administration effectively.

    Scenario Outline: Admin adds and deletes users in bulk

        # admin adds multiple users
        Given I am logged in as a '<admin>' at '<namespace>'
        Given multiple users '<number_of_users>' added by the admin '<role_to_manage>'

        # admin deletes multiple users in a bulk
        # knl user deletion asynchronously by cron, cron job runs as scheduled and the user gets deleted in the DB, but in the GUI it deletes immediate.
        When I go to '<role_to_manage>' administration
        When I enter '<role_to_manage>' email '<search_email_suffix>' in search input field
        When I select the checkbox to select all rows in the user overview table
        When I click on the button Action
        When I click on the Option Delete
        Then I see the dialog for deleting user
        Then I see all selected users '<number_of_users>' in the deletion dialog with the user first name, last name
        When I click on the button Delete to confirm the deletion
        Then I see the success alert
        When I enter '<role_to_manage>' email '<search_email_suffix>' in search input field
        Then I can not see user '<search_email_suffix>' in the table

        @school_api_test
        Examples:
            | namespace | admin      | role_to_manage | number_of_users | search_email_suffix                          |
            | dbc       | admin1_dbc | student        | 3               | original_student_admin_users@cypress-mail.de |

        @staging_test
        Examples:
            | namespace | admin      | role_to_manage | number_of_users | search_email_suffix                          |
            | dbc       | admin1_dbc | student        | 3               | original_student_admin_users@cypress-mail.de |

@regression_test
@stable_test
Feature: Admin creates, manually register and deletes students

    As an admin, I want to perform the 4 CRUD operations and manual reegistration on students

    Scenario: Admin creates a student and perform manual registration, inckuding pre condition.

        # pre-condition: admin logs in to create their account in a school
        Given I am logged in as a '<admin>' at '<namespace>'

        # Admin adds a new student
        When I click on administration in menu
        When I go to '<role_to_manage>' administration
        When I click on FAB
        When I click on Add User in opened FAB for '<role_to_manage>'
        When I fill out the user creation form for '<user_firstname>' '<user_lastname>' with email '<user_email>'
        When I click on add button to add '<role_to_manage>'
        When I enter '<role_to_manage>' email '<user_email>' in search input field
        Then I can see the user with email '<user_email>' in the table

        # Admin manually registers the student
        When I am on the students management page
        When I select student '<user_firstname>' with email '<user_email>'
        When I click on the button Actions
        When I click on the option Manual Registration
        Then I see the page Manual Registration
        When I clear the default assigned password
        Then I enter the initial password
        When I click on the button Apply data
        When I click on the checkbox to confirm the consent
        When I click on the button Register users
        Then I see the page download access data with info table
        Then I click on the button Abbrechen
        Then I click on the button Trotzdem abbrechen on the confirmation modal
        Then I navigate to the students management page
        Then I logout from the application

        # Newly manual registered student does the first login
        When I visit the url for first login
        When I enter the email assigned during user creation
        When I enter the password
        When I click on the button Login
        Then I see the first login page section 1
        When I click on the button Next in section 1
        Then I see the section 2
        When I click on the button Next in section 2
        Then I see the section 3
        Then I set a new password
        Then I re enter the new password
        When I click on the button Next in section 3
        Then I click on the button Get started now in section 4
        Then I see the dashboard
        Then I logout from the application

        # Admin deletes a student
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I go to '<role_to_manage>' administration
        When I enter '<role_to_manage>' email '<user_email>' in search input field
        When I click edit '<role_to_manage>' button for '<user_email>'
        When I click delete user button to delete user with lastname '<user_lastname>'
        When I click on delete button in pop up
        When I enter '<role_to_manage>' email '<user_email>' in search input field
        Then I can not see user '<user_email>' in the table

        @school_api_test
        Examples:
            | namespace | admin      | role_to_manage | user_firstname | user_lastname     | user_email                                  |
            | nbc       | admin1_nbc | student        | cypress        | student_admintest | original_student_adminusers@cypress-mail.de |

        @staging_test
        Examples:
            | namespace | admin      | role_to_manage | user_firstname | user_lastname     | user_email                                  |
            | nbc       | admin1_nbc | student        | cypress        | student_admintest | original_student_adminusers@cypress-mail.de |

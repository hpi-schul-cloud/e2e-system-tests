@regression_test
@stable_test
@schedule_run
@group-D
@prio_0_dev
Feature: Admin - Student registration with registration link send by admin

    As a student, I want to register in SVS using a link sent by the admin

    Scenario Outline: Admin adds a new student and registers them via registration link

        # pre-condition: admin logs in to create their account in a school
        Given I am logged in as a '<admin>' at '<namespace>'

        # admin creates a new student
        When I click on administration in menu
        When I go to '<role_to_manage>' administration
        When I click on FAB to add '<role_to_manage>'
        When I click on Add User in opened FAB for '<role_to_manage>'
        When I fill out the user creation form for '<user_first_name>' '<user_last_name>' with email '<user_email>'
        When I click on add button to add '<role_to_manage>'
        When I enter '<role_to_manage>' email '<user_email>' in search input field
        Then I can see the user with email '<user_email>' in the table

        # admin generates the registration link to proceed with student registration
        When I enter '<role_to_manage>' email '<user_email>' in search input field
        When I click edit '<role_to_manage>' button for '<user_email>'
        Then I click on the button Generate Personal Registration Link for student

        # student performs registration via the generated link with PIN
        Then I visit to the generated registration link
        When I choose the language for the registration process
        Then I click on the button Next to proceed to the age selection
        When I select the age over 16 years for registration
        Then I click on the button Next to proceed to the personal data information page
        Then I see my first name '<user_first_name>'
        Then I see my last name '<user_last_name>'
        When I click on the button Next to proceed to the next step
        When I accept the privacy and terms of use consents
        Then I click on the button Next to proceed to the registration pin step
        When I request a new registration pin
        Then I retrieve the registration pin to enter it into the form for '<namespace>'
        Then I click on the button Send and Get Started to successfully complete the registration process
        Then I see the page user data summary

        # newly registered student does the first login
        When I visit the login page
        When I enter the email assigned during user creation
        When I enter the initial generated password
        When I click on the button Login
        Then I see the first login page section 1
        When I click on the button Next in section 1
        Then I see the section 2
        When I click on the button Next in section 2
        Then I see the section 3
        Then I set a new password
        Then I re enter the new password
        When I click on the button Next to proceed
        Then I click on the button Get started now in section 4
        Then I see the dashboard

        # post-condition: admin deletes the newly added student
        # KNL user deletion asynchronously by cron, so cron job runs as scheduled and the user gets deleted in the DB, In the GUI it deletes immidate.
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I go to '<role_to_manage>' administration
        When I enter '<role_to_manage>' email '<user_email>' in search input field
        When I click edit '<role_to_manage>' button for '<user_email>'
        When I click delete user button to delete user with last name '<user_last_name>'
        When I click on the button Delete in the pop up
        When I enter '<role_to_manage>' email '<user_email>' in search input field
        Then I can not see user '<user_email>' in the table

        # @staging_test
        # this feature is not executable on staging as we do not access the API calls on staging.

        @school_api_test
        Examples:
            | namespace | admin      | role_to_manage | user_first_name | user_last_name     | user_email                                   |
            | brb       | admin1_brb | student        | cypress         | student_admin_test | original_student_admin_users@cypress-mail.de |


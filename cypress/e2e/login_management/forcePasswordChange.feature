@regression_test
@stable_test
Feature: Force Password Change - user must set a new password during login

    As a user, I have to set a new password during login

    Scenario: Admin updates the password for the users, they set a new password during login.

        # pre-condition: admin logs in to create their account in a school
        Given I am logged in as a '<admin>' at '<namespace>'

        # admin creates a new student and teacher
        When I click on administration in menu
        When I go to '<role_to_manage>' administration
        When I click on FAB
        When I click on Add User in opened FAB for '<role_to_manage>'
        When I fill out the user creation form for '<user_firstname>' '<user_lastname>' with email '<user_email>'
        When I click on add button to add '<role_to_manage>'
        When I enter '<role_to_manage>' email '<user_email>' in search input field
        Then I can see the user with email '<user_email>' in the table

        # admin changes the password for the student and teacher
        When I enter '<role_to_manage>' email '<user_email>' in search input field
        When I click edit '<role_to_manage>' button for '<user_email>'
        When I click on the button Change password
        Then I see the pop-up window
        Then I enter a new password in the pop-up window
        Then I click on the button Save
        Then I see the success message

        # Student and teacher do the first login and set a new password
        When I visit the url for first login
        When I enter the email assigned during user creation
        When I enter the password
        When I click on the button Login
        Then I see the first login page section 1
        Then I see my assigned Email
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

        # Admin deletes a student and teacher
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
            | brb       | admin1_brb | student        | cypress        | student_admintest | original_student_adminusers@cypress-mail.de |
            | brb       | admin1_brb | teacher        | cypress        | teacher_admintest | original_teacher_adminusers@cypress-mail.de |

        @staging_test
        Examples:
            | namespace | admin      | role_to_manage | user_firstname | user_lastname     | user_email                                  |
            | brb       | admin1_brb | student        | cypress        | student_admintest | original_student_adminusers@cypress-mail.de |
            | brb       | admin1_brb | teacher        | cypress        | teacher_admintest | original_teacher_adminusers@cypress-mail.de |
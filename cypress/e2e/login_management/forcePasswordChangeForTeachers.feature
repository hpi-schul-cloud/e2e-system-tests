@release
@unstable_test
Feature: Admin forces password change for teachers

    As an admin, I want to force a password change for teachers

    Scenario Outline: Setup for teacher
        Given I am logged in as '<user>' on '<env>'
        When Created teacher 'John' 'Teacher' with email 'john.teacher@mail.tld'
        And I am on the teachers management page
        And Going to teacher edit page for 'John' with email 'john.teacher@mail.tld'
        And Going to teacher registration page
        And I am registering as teacher with email 'john.teacher@mail.tld' and password 'Password1!' on '<env>'
        Then I am able to logout
        Given I am logged in as '<user>' on '<env>'
        And I am on the teachers management page
        And Going to teacher edit page for 'John' with email 'john.teacher@mail.tld'
        And I am able to set a new password
        Then Changing the password to 'Password2!'

    Examples:
        | env | user       |
        | dbc | admin1_dbc |
        | brb | admin1_brb |
        | nbc | admin1_nbc |

    Scenario Outline: Teacher must set a new password
        Given I am on the login page on '<env>'
        And I am logging with email 'john.teacher@mail.tld' and password 'Password2!'
        When I am changing my password to 'Password1!'
        Then I am on the dashboard page

    Examples:
        | env |
        | dbc |
        | brb |
        | nbc |

    Scenario Outline: Teardown for teacher
        Given I am logged in as '<user>' on '<env>'
        When I am on the teachers management page
        And Going to teacher edit page for 'John' with email 'john.teacher@mail.tld'
        Then Deleting the user

    Examples:
        | env | user       |
        | dbc | admin1_dbc |
        | brb | admin1_brb |
        | nbc | admin1_nbc |

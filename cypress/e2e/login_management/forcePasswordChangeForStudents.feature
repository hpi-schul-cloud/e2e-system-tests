@release
@stable_test
Feature: Admin forces password change for students

    As an admin, I want to force a password change for students

    Scenario Outline: Setup
        Given I am logged in as '<user>' on '<env>'
        When Created student 'John' 'Student' with email 'john.student@mail.tld'
        And Registering student 'John' with email 'john.student@mail.tld'
        And I am on the students management page
        And Going to student edit page for 'John' with email 'john.student@mail.tld'
        And I am able to set a new password
        Then Changing the password to 'Password1!'

    Examples:
        | env | user       |
        | dbc | admin1_dbc |
        | brb | admin1_brb |
        | nbc | admin1_nbc |

    Scenario Outline: Student must set a new password
        Given I am on the login page on '<env>'
        And I am logging with email 'john.student@mail.tld' and password 'Password1!'
        When I am changing my password to 'Password2!'
        Then I am on the dashboard page

    Examples:
        | env |
        | dbc |
        | brb |
        | nbc |

    Scenario Outline: Teardown
        Given I am logged in as '<user>' on '<env>'
        When I am on the students management page
        And Going to student edit page for 'John' with email 'john.student@mail.tld'
        And Deleting the user
        Then I am on the students management page

    Examples:
        | env | user       |
        | dbc | admin1_dbc |
        | brb | admin1_brb |
        | nbc | admin1_nbc |


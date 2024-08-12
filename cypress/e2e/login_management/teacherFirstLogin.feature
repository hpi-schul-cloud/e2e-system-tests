Feature: First Login - Login of new Teacher user by SVS

    As a user, I want to login the first time with username and password into SVS

    Scenario Outline: User makes a direct login with username and password
        Given I am logged in as '<user>' on '<env>'
        And Created teacher 'John' 'Teacher' with email 'john.teacher@mail.tld'
        And I am on the teachers management page
        And Going to teacher edit page for 'John' with email 'john.teacher@mail.tld'
        And Going to teacher registration page
        And I am registering as teacher with email 'john.teacher@mail.tld' and password 'Password1!' on '<env>'
        And  I am able to logout
        When I login with new teacher account '<env>'
        Then I will be able to do first steps
        Then I will be able to logout

        Examples:
            | env | user       |
            | brb | admin1_brb |
            | dbc | admin1_dbc |
            | nbc | admin1_nbc |

    Scenario Outline: Teardown
        Given I am logged in as '<user>' on '<env>'
        And I am on the teachers management page
        And Going to teacher edit page for 'John' with email 'john.teacher@mail.tld'
        When Deleting the user
        Then I am on the teachers management page
        And 'John' with email 'john.Teacher@mail.tld' was deleted

        Examples:
            | env | user       |
            | brb | admin1_brb |
            | dbc | admin1_dbc |
            | nbc | admin1_nbc |

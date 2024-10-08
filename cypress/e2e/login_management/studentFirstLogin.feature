@pr
@stable_test
Feature: First Login - Login of new student user by SVS

    As a user, I want to login the first time with username and password into SVS

    Scenario Outline: User makes a direct login with username and password
        Given I am logged in as '<user>' on '<env>'
        And Created student 'John' 'Student' with email 'john.student@mail.tld'
        And I am on the students management page
        And Registering student 'John' 'Password1!' with email 'john.student@mail.tld'
        And Going to student edit page for 'John' with email 'john.student@mail.tld'
        And  I will logout from admin account
        When I login with "john.student@mail.tld" "Password1!" account in '<env>'
        Then I will be able to do first steps "Password2!"
        And  I will be able to logout

        Examples:
            | env | user       |
            | brb | admin1_brb |
            | dbc | admin1_dbc |
            | nbc | admin1_nbc |

    Scenario Outline: Teardown
        Given I am logged in as '<user>' on '<env>'
        And I am on the students management page
        And Going to student edit page for 'John' with email 'john.student@mail.tld'
        When Deleting the user
        Then I am on the students management page

        Examples:
            | env | user       |
            | brb | admin1_brb |
            | dbc | admin1_dbc |
            | nbc | admin1_nbc |

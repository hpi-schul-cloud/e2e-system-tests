Feature: First Login - Login of new user

    As a user, I want to login with username and password into SVS

    Scenario Outline: User makes a direct login with username and password
        Given I am on the login page on '<env>'
        And  I am logging in as '<user>'
        And  I will navigate to create new student page '<env>'
        And  I will be able to create a new student
        And  I will be able to activate the student account manually
        And  I will logout from admin account
        When I will be able to login with new account '<env>'
        Then I will be able to do first steps
        Then I will be able to logout

    Examples:
        | env | user         |
        | brb | admin1_brb   |
        | dbc | admin1_dbc   |
        | nbc | admin1_nbc   |

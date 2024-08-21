@pr
@stable_test
Feature: Cloud Login - Login of users managed by SVS

    As a user, I want to login with username and password into SVS

    Scenario Outline: User makes a direct login with username and password
        Given I am on the login page on '<env>'
        When I am logging in as '<user>'
        Then I will be redirected to the dashboard
        And I will be able to logout

    Examples:
        | env | user         |
        | brb | admin1_brb   |
        | brb | teacher1_brb |
        | brb | student1_brb |
        | dbc | admin1_dbc   |
        | dbc | teacher1_dbc |
        | dbc | student1_dbc |
        | nbc | admin1_nbc   |
        | nbc | teacher1_nbc |
        | nbc | student1_nbc |

@regression_test
@stable_test
@schedule_test
@group-A
@pr
@prio_0_staging
Feature: Login Management - Login of users managed by SVS

    As a user, I want to login with username and password into SVS

    Scenario Outline: User '<user>' makes a direct login at '<namespace>' with username and password

        Given I am logged in as a '<user>' at '<namespace>'
        Then I see my initials '<initials>' in the dashboard
        When I log out
        Then I see the login form on '<namespace>'

        @staging_test
        Examples:
            | namespace | user         | initials |
            | dbc       | student1_dbc | HK       |
            | dbc       | teacher1_dbc | KH       |
            | dbc       | admin1_dbc   | KP       |
            | nbc       | student1_nbc | HK       |
            | nbc       | teacher1_nbc | KH       |
            | nbc       | admin1_nbc   | KP       |
            | dbc       | student1_dbc | HK       |
            | dbc       | teacher1_dbc | KH       |
            | dbc       | admin1_dbc   | KP       |

        @school_api_test
        Examples:
            | namespace | user         | initials |
            | dbc       | student1_dbc | cs       |
            | dbc       | teacher1_dbc | ct       |
            | dbc       | admin1_dbc   | ca       |
            | nbc       | student1_nbc | cs       |
            | nbc       | teacher1_nbc | ct       |
            | nbc       | admin1_nbc   | ca       |
            | dbc       | student1_dbc | cs       |
            | dbc       | teacher1_dbc | ct       |
            | dbc       | admin1_dbc   | ca       |

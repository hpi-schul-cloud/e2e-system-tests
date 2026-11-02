@regression_test
@stable_test
@schedule_test
@group-A
@pr
@prio_0_staging
@mikroorm_v7
Feature: Login Management - Login of users managed by SVS

    As a user, I want to login with username and password into SVS

    Scenario Outline: User '<user>' makes a direct login at '<namespace>' with username and password

        Given I am logged in as a '<user>' at '<namespace>'
        Then I see my initials '<initials>' in the dashboard
        When I remember my access token
        When I log out
        Then I see the login form on '<namespace>'
        Then my access token cookie is removed
        Then I see the login form on '<namespace>' when I open the dashboard directly
        Then the remembered access token is rejected by the API after server logout

        @staging_test
        Examples:
            | namespace | user         | initials |
            | nbc       | student1_nbc | HK       |
            | nbc       | teacher1_nbc | KH       |
            | nbc       | admin1_nbc   | KP       |
            | brb       | student1_brb | HK       |
            | brb       | teacher1_brb | KH       |
            | brb       | admin1_brb   | KP       |

        @school_api_test
        Examples:
            | namespace | user         | initials |
            | nbc       | student1_nbc | cs       |
            | nbc       | teacher1_nbc | ct       |
            | nbc       | admin1_nbc   | ca       |
            | brb       | student1_brb | cs       |
            | brb       | teacher1_brb | ct       |
            | brb       | admin1_brb   | ca       |

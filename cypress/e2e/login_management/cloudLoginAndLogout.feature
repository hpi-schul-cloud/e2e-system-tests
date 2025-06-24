@regression_test
@stable_test
@schedule_test
@group-A
@group-G
@pr
Feature: Login Management - Login of users managed by SVS

    As a user, I want to login with username and password into SVS

    Scenario Outline: User makes a direct login with username and password

        Given I am logged in as a '<student>' at '<namespace>'
        Then I log out
        Given I am logged in as a '<teacher>' at '<namespace>'
        Then I log out
        Given I am logged in as a '<admin>' at '<namespace>'
        Then I log out

        @staging_test
        Examples:
            | namespace | teacher      | admin      | student      |
            | dbc       | teacher1_dbc | admin1_dbc | student1_dbc |
            | nbc       | teacher1_nbc | admin1_nbc | student1_nbc |
            | brb       | teacher1_brb | admin1_brb | student1_brb |

        @school_api_test
        Examples:
            | namespace | teacher      | admin      | student      |
            | dbc       | teacher1_dbc | admin1_dbc | student1_dbc |
            | nbc       | teacher1_nbc | admin1_nbc | student1_nbc |
            | brb       | teacher1_brb | admin1_brb | student1_brb |

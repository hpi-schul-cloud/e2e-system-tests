@regression_test
@stable_test
@schedule_test
@group-A
@pr
Feature: Login Management - Login of users managed by SVS

    As a user, I want to login with username and password into SVS

    Scenario Outline: User makes a direct login with username and password

        Given I am logged in as a '<student>' at '<namespace>'
        Then I see my initials '<student_initials>' in the dashboard
        When I log out
        Then I see the login form on '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Then I see my initials '<teacher_initials>' in the dashboard
        When I log out
        Then I see the login form on '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'
        Then I see my initials '<admin_initials>' in the dashboard
        When I log out
        Then I see the login form on '<namespace>'

        @staging_test
        Examples:
            | namespace | teacher      | teacher_initials | admin      | admin_initials | student      | student_initials |
            | dbc       | teacher1_dbc | KH               | admin1_dbc | KP             | student1_dbc | HK               |
            | nbc       | teacher1_nbc | KH               | admin1_nbc | KP             | student1_nbc | HK               |
            | brb       | teacher1_brb | KH               | admin1_brb | KP             | student1_brb | HK               |

        @school_api_test
        Examples:
            | namespace | teacher      | teacher_initials | admin      | admin_initials | student      | student_initials |
            | dbc       | teacher1_dbc | ct               | admin1_dbc | ca             | student1_dbc | cs               |
            | nbc       | teacher1_nbc | ct               | admin1_nbc | ca             | student1_nbc | cs               |
            | brb       | teacher1_brb | ct               | admin1_brb | ca             | student1_brb | cs               |

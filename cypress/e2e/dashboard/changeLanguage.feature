@regression_test
@stable_test
@schedule_run
@group-F
@pr
@prio_0_staging
Feature: Dashboard - Change language of the user from user setting

    As a user, I want to language change from user menu for all users i.e. (Admin, Teacher, Student)

    Scenario Outline: user can change language to '<language>'

        # pre-condition: creating all users (admin, teacher and student)
        Given I am logged in as a '<admin>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'

        # admin can change language
        Given I am logged in as a '<admin>' at '<namespace>'
        Then I can see initials of my name
        When I click on initials of my name
        Then I click on language drop down menu
        When I can change language to '<language>'
        Then I can see title in dashboard is changed to '<language>'

        # teacher can change language
        Given I am logged in as a '<teacher>' at '<namespace>'
        Then I can see initials of my name
        When I click on initials of my name
        Then I click on language drop down menu
        When I can change language to '<language>'
        Then I can see title in dashboard is changed to '<language>'

        # student can change language
        Given I am logged in as a '<student>' at '<namespace>'
        Then I can see initials of my name
        When I click on initials of my name
        Then I click on language drop down menu
        When I can change language to '<language>'
        Then I can see title in dashboard is changed to '<language>'

        @school_api_test
        @staging_test
        Examples:
            | teacher      | namespace | language  | student      | admin      |
            | teacher1_dbc | dbc       | english   | student1_dbc | admin1_dbc |
            | teacher1_dbc | dbc       | spanish   | student1_dbc | admin1_dbc |
            | teacher1_dbc | dbc       | ukrainian | student1_dbc | admin1_dbc |
            | teacher1_dbc | dbc       | german    | student1_dbc | admin1_dbc |

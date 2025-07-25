@regression_test
@stable_test
@schedule_run
@group-F
@pr
Feature: Account - Change language of the user from user setting

    As a user, I want to language change from user menu for all users i.e. (Admin, Teacher, Student)

    Scenario Outline: user can change language to '<language>'
        # pre-condition: creating all users
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
            | teacher1_nbc | nbc       | english   | student1_nbc | admin1_nbc |
            | teacher1_nbc | nbc       | spanish   | student1_nbc | admin1_nbc |
            | teacher1_nbc | nbc       | ukrainian | student1_nbc | admin1_nbc |
            | teacher1_nbc | nbc       | german    | student1_nbc | admin1_nbc |

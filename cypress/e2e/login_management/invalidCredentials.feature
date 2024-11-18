@unstable_test
Feature: Login Management - Verify login functionality via wrong user data

    As a user (teacher, student or admin), I want to see how app behaves when I'll use invalid credentials.

    @unstable_test
    Scenario Outline: User uses invalid email and password
        Given I am on the '<namespace>' login page
        Then I see email field is visible and empty
        When I enter invalid email
        Then I see password field is visible and empty
        When I enter invalid password
        When I click button Submit
        Then I see error message

        @school_api_test
        @staging_test
        Examples:
            | namespace |
            | dbc       |

    @unstable_test
    Scenario Outline: User login with empty fields
        Given I am on the '<namespace>' login page
        When I click button Submit
        Then I see form validation message

        @school_api_test
        @staging_test
        Examples:
            | namespace |
            | dbc       |

    @unstable_test
    Scenario Outline: User uses invalid username and password
        Given I am on the '<namespace>' login page
        Then I see email field is visible and empty
        When I enter invalid username
        Then I see password field is visible and empty
        When I enter invalid password
        When I click button Submit
        Then I see error message

        @school_api_test
        @staging_test
        Examples:
            | namespace |
            | dbc       |
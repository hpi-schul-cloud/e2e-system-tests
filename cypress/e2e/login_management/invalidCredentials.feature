@unstable_test
Feature: Login Management - Verify login functionality via wrong user data

    As a user (teacher, student or admin), I want to see how app behaves when I'll use invalid credentials.

    Scenario: user sees the validation error on the login page, when enterting the wrong credentials

        # user uses invalid email and password
        Given I am on the '<namespace>' login page
        Then I see email field is visible and empty
        When I enter invalid email
        Then I see password field is visible and empty
        When I enter invalid password
        When I click button Submit
        Then I see error message

        #: user login with empty fields
        Given I am on the '<namespace>' login page
        When I click button Submit
        Then I see form validation message

        # user uses invalid username and password
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
            | nbc       |
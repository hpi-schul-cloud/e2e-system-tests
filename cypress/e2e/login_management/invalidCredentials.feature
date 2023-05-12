@release
Feature: Invalid Credentials - Verify login functionality via wrong user data

    As a user (teacher, student or admin), I want to see how app behaves when I'll use invalid credentials.

    @stable_test
    Scenario: User uses invalid email and password
        Given I am on the dBildungscloud login page
        Then I see Email field is visible and empty
        When I enter invalid email
        Then I see Password field is visible and empty
        When I enter invalid password
        When I click submit button
        Then I see error message

    @stable_test
    Scenario: User login with empty fields
        Given I am on the dBildungscloud login page
        When I click submit button
        Then I see form validation message

    @stable_test
    Scenario: User uses invalid username and password
        Given I am on the dBildungscloud login page
        Then I see Email field is visible and empty
        When I enter invalid username
        Then I see Password field is visible and empty
        When I enter invalid password
        When I click submit button
        Then I see error message
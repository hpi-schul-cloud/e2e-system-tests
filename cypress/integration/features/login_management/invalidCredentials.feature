@login @stable_test
Feature: Invalid Credentials - Verify login functionality via wrong user data

    As a user (teacher, student or admin), I want to see how app behaves when I'll use invalid credentials.
    Scenario: User uses invalid email and password
        Given I am on the dBildungscloud login page
        Then I will see Email field is visible and empty
        Then I will enter invalid email
        Then I will see Password field is visible and empty
        Then I will enter invalid password
        Then I will click submit button
        Then I will see error message

    Scenario: User login with empty fields
        Given I am on the dBildungscloud login page
        Then I will click submit button
        Then I will see form validation message

    Scenario: User uses invalid username and password
        Given I am on the dBildungscloud login page
        Then I will see Email field is visible and empty
        Then I will enter invalid username
        Then I will see Password field is visible and empty
        Then I will enter invalid password
        Then I will click submit button
        Then I will see error message
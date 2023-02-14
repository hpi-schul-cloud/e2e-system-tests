@login @stable_test
Feature: Password Update - Verify login functionality via password change

    As a user, I want to see how app behaves when I'll change password.

    Scenario: User change password, login and change again to old passwords.
        Given I am on the dBildungscloud login page
        Then I see Email field is visible and empty
        Then I enter email
        Then I see Password field is visible and empty
        Then I enter password
        Then I click submit button
        When I go to my account settings
        Then I see current password field is visible and empty
        Then I see new and repeat password field is visible and empty
        When I enter current password
        Then I enter new password and repeat it in the next field
        Then I click on submit button
        When I click on the initials
        Then I logout
        Given I am on the dBildungscloud login page
        Then I see Email field is visible and empty
        Then I enter email
        Then I see Password field is visible and empty
        Then I enter password
        Then I click submit button
        Then I see error message
        Then I wait for 15 seconds
        Then I see Email field is visible and empty
        Then I enter email
        Then I see Password field is visible and empty
        Then I enter new password
        Then I click submit button
        When I go to my account settings
        Then I see current password field is visible and empty
        Then I see new and repeat password field is visible and empty
        When I enter new password in user setting
        Then I enter new password in both fields in user setting
        Then I click on submit button
        When I click on the initials
        Then I logout
        Given I am on the dBildungscloud login page
        Then I see Email field is visible and empty
        Then I enter email
        Then I see Password field is visible and empty
        Then I enter password
        Then I click submit button
        When I arrive on the dashboard
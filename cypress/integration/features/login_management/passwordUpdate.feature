@login @stable_test
Feature: Password Update - Verify login functionality via password change

    As a user, I want to see how app behaves when I'll change password.

    Scenario: User change password, login and change again to old passwords.
        Given I am on the dBildungscloud login page
        Then I will see Email field is visible and empty
        Then I will enter email
        Then I will see Password field is visible and empty
        Then I will enter password
        Then I will click submit button
        When I go to my account settings
        Then I will see current password field is visible and empty
        Then I will see new and repeat password field is visible and empty
        When I enter current password
        Then I enter new password in both fields
        Then I will click on submit button
        When I click on the initials
        Then I logout
        Given I am on the dBildungscloud login page
        Then I will see Email field is visible and empty
        Then I will enter email
        Then I will see Password field is visible and empty
        Then I will enter password
        Then I will click submit button
        Then I will see error message
        Then I will wait for 15 seconds
        Then I will see Email field is visible and empty
        Then I will enter email
        Then I will see Password field is visible and empty
        Then I will enter new password
        Then I will click submit button
        When I go to my account settings
        Then I will see current password field is visible and empty
        Then I will see new and repeat password field is visible and empty
        When I enter new password in user setting
        Then I enter new password in both fields in user setting
        Then I will click on submit button
        When I click on the initials
        Then I logout
        Given I am on the dBildungscloud login page
        Then I will see Email field is visible and empty
        Then I will enter email
        Then I will see Password field is visible and empty
        Then I will enter password
        Then I will click submit button
        When I arrive on the dashboard
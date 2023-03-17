#@login @stable_test
Feature: Password Update - Verify login functionality via password change

    As a user, I want to see how app behaves when I'll change password.

    Scenario: User change password, login and change again to old passwords.
        Given I am on the dBildungscloud login page
        Then I see Email field is visible and empty
        When I enter email
        Then I see Password field is visible and empty
        When I enter password
        When I click submit button
        When I go to my account settings
        Then I see current password field is visible and empty
        Then I see new and repeat password field is visible and empty
        When I enter current password
        When I enter new password and repeat it in the next field in user settings
        When I click on save button in user settings
        Then I see success message
        When I click on the initials
        #Then I see logout option
        When I logout
        #Then I see dbildungscloud login page
        Given I am on the dBildungscloud login page
        Then I see Email field is visible and empty
        When I enter email
        Then I see Password field is visible and empty
        When I enter password
        When I click submit button
        Then I see error message
        When I wait for 15 seconds
        Then I see Email field is visible and empty
        When I enter email
        Then I see Password field is visible and empty
        When I enter new password
        When I click submit button
        When I go to my account settings
        Then I see current password field is visible and empty
        Then I see new and repeat password field is visible and empty
        When I enter new password in user setting
        When I enter old password and repeat it in the next field in user settings
        When I click on save button in user settings
        Then I see success message
        When I click on the initials
        #Then I see logout option
        When I logout
        #Then I see dbildungscloud login page
        Given I am on the dBildungscloud login page
        Then I see Email field is visible and empty
        When I enter email
        Then I see Password field is visible and empty
        When I enter password
        When I click submit button
        Then I arrive on the dashboard
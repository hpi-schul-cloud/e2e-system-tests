@release
Feature: Password Update - Verify login functionality via password change

    As a user, I want to see how app behaves when I'll change password.

    @stable_test
    Scenario Outline: User change password, login and change again to old passwords.
        Given I am on the '<namespace>' login page
        Then I see email field is visible and empty
        When I enter email
        Then I see password field is visible and empty
        When I enter password
        When I click button Submit
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
        Given I am on the '<namespace>' login page
        Then I see email field is visible and empty
        When I enter email
        Then I see password field is visible and empty
        When I enter password
        When I click button Submit
        Then I see error message
        When I wait for 15 seconds
        Then I see email field is visible and empty
        When I enter email
        Then I see password field is visible and empty
        When I enter new password
        When I click button Submit
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
        Given I am on the '<namespace>' login page
        Then I see email field is visible and empty
        When I enter email
        Then I see password field is visible and empty
        When I enter password
        When I click button Submit
        Then I arrive on the dashboard
        When I click on the initials
        When I logout

        Examples:
            | namespace |
            | dbc       |
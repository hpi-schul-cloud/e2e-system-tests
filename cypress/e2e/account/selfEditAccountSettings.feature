@regression_test
@stable_test
@schedule_run
@group-O
Feature: Account - Edit E-mail in the account setting page

    As a user I want to navigation to my account's settings page so that I can see and edit my account details (e. g. email).

    Scenario: I see my E-mail is editable as an internal user, including pre conditions
        Given I am logged in as a '<user>' at '<namespace>'

        # user changes/updates the E-mail
        When I go to my account settings
        Then I see my email is editable
        When I change my email to a new email
        When I enter my current password
        When I click on the button Save Account Settings
        Then I see the message successful

        # user can login with the changed E-mail
        When I visit the login page
        When I enter my updated email
        When I enter my current password on the login page
        When I click on the button Login
        Then I see the dashboard

        # @staging_test
        # Please do not execute this feature against STAGING environment, because after changing the E-mail user can not revert the old E-mail again.
        # The system does not allow reverting to an old or existing E-mail.

        @school_api_test
        Examples:
            | user         | namespace |
            | student1_brb | brb       |
            | teacher1_brb | brb       |
            | admin1_brb   | brb       |

# E-mail is not editable by an external student user
# Note: this scenario is currently unstable

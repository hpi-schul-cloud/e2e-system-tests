@regression_test
@stable_test
Feature: Account - Edit e-mail in the account setting page on dBC

    As a user I want to navigation to my account's settings page so that I can see and edit my account details (e. g. email).

    Scenario: I see my e-mail is editable as an internal user, including pre conditions
        Given I am logged in as a '<user>' at '<namespace>'

        # user changes/updates the e-mail id
        When I go to my account settings
        Then I see my email is editable
        When I change my email to a new email
        When I enter my current password
        When I click on the button Save Account Settings
        Then I see the message successful

        @staging_test
        # Please do not execute this feature against STAGING environment, because after changing the e-mail user can not revert the old e-mail again.
        # The system does not allow reverting to an old or existing e-mail.

        @school_api_test
        Examples:
            | user         | namespace |
            | student1_dbc | dbc       |
            | teacher1_dbc | dbc       |
            | admin1_dbc   | dbc       |

    @unstable_test
    Scenario: I see my e-mail is not editable as an external student user
        Given I am logged in as a 'student_extern_dbc' at 'dbc'
        When I go to my account settings
        Then I see my email is not editable


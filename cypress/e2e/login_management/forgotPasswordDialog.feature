@regression_test
@stable_test
Feature: Login Management - Forgot Password Dialog Visibility Checks

    As a user (teacher or student or admin), I want to see password recovery dialog box visible to me so that I can recover my password in case needed.


    Scenario: All elements in I see the forgot password dialog is visible
        Given I am on the '<namespace>' login page
        When I click on Forgot Password
        Then I see the forgot password dialog is visible
        Then I see the title of the dialog is visible
        Then I see the username label is visible
        Then I see the email input field is visible
        Then I see the info message is visible
        Then I see the submit button is visible
        Then I see the cancel button is visible
        When I clear email section and submit the request
        Then I still see the email input box that request is not submitted

        @school_api_test
        Examples:
            | namespace |
            | dbc       |
            | nbc       |
            | brb       |

        @staging_test
        Examples:
            | namespace |
            | dbc       |
            | nbc       |
            | brb       |
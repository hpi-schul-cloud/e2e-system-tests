@regression_test
@stable_test
@schedule_run
@group-A
@prio_0_staging
Feature: Login Management - Forgot Password Dialog Visibility Checks

    As a user, I want to see password recovery dialog box visible to me so that I can recover my password in case needed.


    Scenario Outline: All elements of the Password Reset dialog are available

        Given I am on the '<namespace>' login page
        When I click on Forgot Password
        Then I see the dialog Password Reset
        Then I see the Title on the dialog
        Then I see the label Username on the dialog
        Then I see the input field to enter an Email
        Then I see the Information on the dialog
        Then I see the button Submit on the dialog
        Then I see the button Cancel on the dialog
        When I submit the request without the Email
        Then I still see the input field Email so request is not submitted

        @school_api_test
        @staging_test
        Examples:
            | namespace |
            | dbc       |
            | dbc       |
            | nbc       |

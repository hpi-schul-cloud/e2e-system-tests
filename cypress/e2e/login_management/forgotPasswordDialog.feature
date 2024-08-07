@unstable_test
Feature: Forget Password - Visibility of dBildungscloud Password Reset dialog

  As a user (teacher or student or admin), I want to see password recovery dialog box visible to me so that I can recover my password in case needed.

  @unstable_test
  Scenario Outline: User sees password recovery dialog
    Given I am on the '<namespace>' login page
    When I click on Forgot Password
    Then I see the Reset Password dialog

    @school_api_test
    @staging_test
    Examples:
      | namespace |
      | dbc       |

  @unstable_test
  Scenario Outline: Entering email or user name is mandatory
    Given I am on the '<namespace>' login page
    When I click on Forgot Password
    When I clear email section and submit the request
    Then I still see the email input box that request is not submitted

    @school_api_test
    @staging_test
    Examples:
      | namespace |
      | dbc       |
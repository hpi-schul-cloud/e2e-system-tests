@release
Feature: Forget Password - Visibility of dBildungscloud Password Reset dialog

  As a user (teacher or student or admin), I want to see password recovery dialog box visible to me so that I can recover my password in case needed.

  @stable_test
  Scenario: User sees password recovery dialog
    Given I am on the dBildungscloud login page
    When I click on Forgot Password
    Then I see the Reset Password dialog

  @stable_test
  Scenario: Entering email or user name is mandatory
    Given I am on the dBildungscloud login page
    When I click on Forgot Password
    When I clear email section and submit the request
    Then I still see the email input box that request is not submitted
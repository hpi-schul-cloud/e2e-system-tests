Feature: Visibility of dBildungscloud Password Reset dialog

  As a user (teacher or student or admin), I want to see password recovery dialog visible to me so that I can recover my password in case needed.

  Scenario: User sees password recovery dialog
    Given I am on the dBildungscloud login page as a user on BRB
    When I click on Forgot Password? link
    Then I see the Reset Password dialog with username label, email input box, info message, cancel and send reset password buttons

  Scenario: Entering email or user name is mandatory
    Given I am on the dBildungscloud login page as a user on BRB
    When I click on Forgot Password? link
    When I remove my email from the input box and submit the request
    Then I still see the email input box that request is not submitted
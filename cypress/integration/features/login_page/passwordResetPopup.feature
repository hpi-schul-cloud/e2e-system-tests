Feature: Visibility of dBildungscloud Password Reset pop-up

  As a user (teacher or student or admin), I want to see password recovery popup is visible to me so that I can reset my password in case needed.

  Scenario: User sees password recovery dailog
    Given I am on the dBildungscloud login page as a user on default instance
    When I click on Forgot Password? link
    Then I see the Reset Password dailog with lable, email input text box, cancel and send reset password elements

  Scenario: Entering email or user name is mandatory
    When I submit the request without entering my email
    Then I see the notification that entering email is a mandatory field


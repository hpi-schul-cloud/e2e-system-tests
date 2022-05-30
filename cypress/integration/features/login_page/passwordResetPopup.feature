Feature: Visibility of dBildungscloud Password Reset pop-up

    As a user (teacher or student or admin), I want to see password recovery popup is visible to me so that I can reset my password in case needed.

Scenario: User sees password recovery pop up
    Given I am on the dBildungscloud login page as a teacher at default
    When I click on Forgot Password? link
    Then I see the Reset Password pop up message with lable, email input text box, cancel and send reset password button.
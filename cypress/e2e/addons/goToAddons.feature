@release
Feature: Addons - To go to addons page on NBC

  As an admin I want to navigation to the addons page on NBC so that I can access it.

  @stable_test
  Scenario: to access Add-ons page as an Admin
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to Add-Ons overview
    Then I see the Add-Ons page with the title on the top
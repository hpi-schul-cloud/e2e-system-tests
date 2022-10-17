Feature: To go to addons page on NBC

  As an admin I want to navigation to the addons page on NBC so that I can access it.

  Scenario: to access Add-ons page as an Admin
    Given I am logged in as a 'admin' at 'nbc'
    When I go to Add-Ons overview
    Then I see the Add-Ons page with the title on the top
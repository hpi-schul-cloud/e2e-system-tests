@api_migrated
@stable_test
@release
Feature: Addons - To go to addons page on NBC

  As an admin I want to navigation to the addons page on NBC so that I can access it.

  Scenario: to access Add-ons page as an <user>
    Given I am logged in as a '<user>' at '<namespace>'
    When I go to Add-Ons overview
    Then I see the Add-Ons page with the title on the top

    @non_staging_test
    @staging_test
    Examples:
      | user         | namespace |
      | admin1_nbc   | nbc       |
      | teacher1_nbc | nbc       |
      | student1_nbc | nbc       |
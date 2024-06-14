@api_migrated
@stable_test
@release
Feature: Addons - To go to addons page on NBC

  As an admin I want to navigation to the addons page on NBC so that I can access it.


  Scenario Outline: to access Add-ons page as an admin, teacher and student
    # pre-condition: creating all users
    Given I am logged in as a '<admin>' at '<namespace>'
    Given I am logged in as a '<teacher>' at '<namespace>'
    Given I am logged in as a '<student>' at '<namespace>'

    # admin access Add-ons page
    Given I am logged in as a '<admin>' at '<namespace>'
    When I go to Add-Ons overview
    Then I see the Add-Ons page with the title on the top

    # teacher access Add-ons page
    Given I am logged in as a '<teacher>' at '<namespace>'
    When I go to Add-Ons overview
    Then I see the Add-Ons page with the title on the top

    # student access Add-ons page
    Given I am logged in as a '<student>' at '<namespace>'
    When I go to Add-Ons overview
    Then I see the Add-Ons page with the title on the top

    @school_api_test
    @staging_test
    Examples:
      | admin      | teacher      | student      | namespace |
      | admin1_nbc | teacher1_nbc | student1_nbc | nbc       |
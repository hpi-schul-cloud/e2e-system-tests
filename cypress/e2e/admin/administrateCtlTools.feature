@release
Feature: Admin CTL Tools - To administrate school external tools

  As an admin I want to administrate the school external tools used in the school

  @stable_test
  Scenario: Admin sees the school external tools usage
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to administration page
    When I go to school administration
    When I click on external tools panel



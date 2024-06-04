# @release
Feature: Admin CTL Tools - To add, edit and delete CTL tools by the admin

  As an admin I want to administrate the CTL tools used in the school

  @unstable_test
  Scenario: As an admin I can see the usage of external tools in courses and boards during deletion.
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I click on administration in menu
    When I go to school administration
    When I click on external tools panel
    Then I see the external tools table
    Then I see at least one external tool
    When I click on delete external tool button
    Then I see the external tool deletion dialog title
    Then I see the external tool deletion dialog information text
    When I click on cancel external tool deletion button
    Then I see the external tools table
    Then I see at least one external tool




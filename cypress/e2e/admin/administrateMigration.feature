@unstable_test
Feature: Admin Users - To administrate the Migration process.

  As an Admin I want to re-/start, stop and make the migration mandatory.

  @unstable_test
  Scenario: Admin starts the migration and the School Number is added
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I click on administration in menu
    When I navigate to new school admin page via sub menu
    When I click on general settings panel
    Then I can see the school number
    When I click on account migration panel
    Then I see button Start migration is enabled
    Then I can see the migration information text
    Then I see the email form with correct recipient
    Then I see the information link href is blog.niedersachsen.cloud/umzug
    When I click on the start migration button
    When I click on agree migration button
    Then I see the migration is active field
    Then I see the end migration button
    Then I see the migration mandatory switch is not checked

  @unstable_test
  Scenario: Admin toggles ldap sync for school in migration
    Then I see the sync during migration switch is visible and not checked
    When I toggle the sync during migration switch
    Then I see the sync during migration switch is checked

  @unstable_test
  Scenario: Admin toggles migration mandatory switch
    Then I see the migration mandatory switch is not checked
    When I toggle the migration mandatory switch
    Then I see the migration mandatory switch is checked

  @unstable_test
  Scenario: Admin stops the migration
    When I click on end migration button
    Then I see the end of migration information title
    Then I see the end of migration information text
    Then I see the end migration information link href is blog.niedersachsen.cloud/umzug
    Then I see the end migration confirmation checkbox is unchecked
    Then I see the abort button for end of migration conformation
    Then I can see the end migration confirmation button is disabled
    When I click on the end migration confirmation checkbox
    Then I see the end migration confirmation button is enabled
    When I click on the end migration confirmation button
    Then I see button Start migration is enabled

  @unstable_test
  Scenario: Admin restarts the migration
    When I click on the start migration button
    When I click on agree migration button
    Then I see the migration is active field
    Then I see the end migration button
    Then I see the migration mandatory switch is not checked
    Then I see the sync during migration switch is checked

  # reset migration data
  @unstable_test
  Scenario: Reset migration
    When I click on end migration button
    When I click on the end migration confirmation checkbox
    Then I see the end migration confirmation button is enabled
    When I click on the end migration confirmation button
    Then I see button Start migration is enabled

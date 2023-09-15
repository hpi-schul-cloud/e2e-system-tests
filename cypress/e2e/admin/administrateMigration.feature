@release
Feature: Admin Users - To administrate the Migration process.

  As an Admin I want to start, finish and make the migration mandatory.

  Background:
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to administration page
    When I go to school administration

  Scenario: Admin starts the migration and the School Number is added
    Then I can see the school number
    Then I see button Start migration is enabled
    Then I can see the migration information text
    Then I see the email form with correct recipient
    Then I see the information link href is blog.niedersachsen.cloud/umzug
    When I click on the start migration button
    When I click on agree migration button
    Then I see the migration is active field
    Then I see the end migration button
    Then I see the migration mandatory switch is not checked

  Scenario: Admin toggles ldap sync for school in migration
    Then I see the sync during migration switch is visible and not checked
    When I toggle the sync during migration switch
    Then I see the sync during migration switch is checked

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
    Then I see the timestamp when the migration is finished
Feature: Admin Users - To administrate the Migration process.

  As an Admin I want to start, finish and make the migration mandatory.

  Background:
    Given I am logged in as a 'admin' at 'nbc'
    When I go to administration page
    When I go to school administration

  Scenario: Admin starts the migration and the School Number is added
    When I can see the school number
    Then I can click on the start migration button
    Then I can see the migration information text
    Then I can write an email to a pre-defined receiver
    Then I can click on the information link that opens a new tab
    When I click on the start migration button
    When I click on agree migration button
    Then I see the migration is active field
    Then I see the end migration button


  Scenario: Admin ends the migration
    When I click on end migration button
    When I click on the end migration confirmation checkbox
    When I click on the end migration confirmation button

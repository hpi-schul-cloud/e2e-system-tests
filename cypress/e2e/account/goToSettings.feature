# Note: School api migration is blocked due to school api users login issue in dbc.
@release
Feature: Account - To go to account settings page on dbc

  As a user I want to navigation to my account's settings page so that I can see my account details (e. g. email).

  @stable_test
  Scenario: I see my e-mail is editable as an internal student user
    Given I am logged in as a 'student1_dbc' at 'dbc'
    When I go to my account settings
    Then I see my email is editable

  @unstable_test
  Scenario: I see my e-mail is not editable as an external student user
    Given I am logged in as a 'student_extern_dbc' at 'dbc'
    When I go to my account settings
    Then I see my email is not editable
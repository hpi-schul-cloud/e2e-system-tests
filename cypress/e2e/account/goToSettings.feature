@release
@stable_test
Feature: Account - To go to account settings page

  As a user I want to navigation to my account's settings page so that I can see my account details (e. g. email).

  Scenario: I see my e-mail is editable as an internal user
    Given I am logged in as a '<user>' at '<namespace>'
    When I go to my account settings
    Then I see my email is editable

    @school_api_test
    @staging_test
    Examples:
      | user         | namespace |
      | student1_dbc | dbc       |

  @unstable_test
  Scenario: I see my e-mail is not editable as an external student user
    Given I am logged in as a 'student_extern_dbc' at 'dbc'
    When I go to my account settings
    Then I see my email is not editable
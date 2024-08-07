[← Back to documentation](../README.md)

# Tags

This document explains the tagging system used in your project for Cypress and Cucumber tests.

---

In our Cypress and Cucumber setup, tags are used to categorize and selectively run tests. They can be applied at various levels, including `Feature`, `Scenario`, `Scenario Outline`, and `Examples`. Tags applied at a higher level are inherited by all child elements, unless overridden by more specific tags.

## Tag Hierarchy and Inheritance

Tags applied at the `Feature` level are inherited by all scenarios within that feature. For example, if a `Feature` is tagged with `@release`, all scenarios under that feature are also considered part of the release unless explicitly marked otherwise. This hierarchy allows for efficient and consistent application of test conditions across multiple tests.

## Examples

### @release and @stable_test

```cucumber
@release
Feature: Account Management

  @stable_test
  Scenario: Edit email as an internal user
    Given I am logged in as an internal user at the organization
    When I navigate to the account settings page
    Then I should see that my email address is editable
```

_Explanation_:

- The `@release` tag at the `Feature` level indicates that all scenarios in this feature are part of the release test suite.
- The `@stable_test` tag on the specific scenario indicates that this test is reliable and expected to pass in all environments.

### @unstable_test

```cucumber
@unstable_test
Feature: Add-ons Management

  Scenario Outline: Access Add-ons page
    Given I am logged in as a '<user_role>' in the '<namespace>'
    When I navigate to the Add-ons page
    Then I should see the Add-ons interface

    Examples:
      | user_role | namespace |
      | admin     | main      |
      | teacher   | main      |
      | student   | main      |
```

_Explanation_:

- The `@unstable_test` tag applied at the `Feature` level marks the entire feature as potentially unstable. This is useful for tracking tests that may fail intermittently due to environmental or other issues.

### @school_api_test and @staging_test

```cucumber
@release
@stable_test
Feature: User Management

  Scenario: Admin adds, edits, and deletes a user
    Given I am logged in as an admin
    When I add a new user with specific details
    Then the user should be visible in the user list
    When I edit the user's details
    Then the updated information should be displayed
    When I delete the user
    Then the user should no longer appear in the user list

  @school_api_test
  Examples: School API Environment
    | namespace | admin  | user_role | user_email               | new_user_email          |
    | school    | admin1 | student   | student@school.com | updated_student@school.com |

  @staging_test
  Examples: Staging Environment
    | namespace | admin  | user_role | user_email               | new_user_email          |
    | staging   | admin2 | teacher   | teacher@staging.com | updated_teacher@staging.com |
```

_Explanation_:

- The `@release` and `@stable_test` tags are applied at the `Feature` level, indicating that all scenarios are part of stable, release-ready tests.
- The `@school_api_test` and `@staging_test` tags are applied to specific examples to denote testing in different environments, demonstrating selective tagging at the `Examples` level.

### @pr

```cucumber
@pr
Feature: Critical Paths

  Scenario: Verify homepage loads correctly
    Given the application is deployed
    When I navigate to the homepage
    Then the homepage should load all critical components without errors
```

_Explanation_:

- The `@pr` tag indicates that this scenario is crucial for CI/CD pipelines, specifically for validating changes made in Pull Requests. This tag helps ensure that core functionalities are not broken by new code.

## Summary

This documentation provides an overview of tag usage and hierarchy in our testing framework. Tags applied at higher levels, such as `Feature`, affect all nested scenarios unless more specific tags are applied. This hierarchical tagging system allows for efficient test management and selective execution, tailored to different environments and testing needs.

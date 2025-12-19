[← Back to README](../README.md)

## Local Test Execution Guideline

This document explains how to **run Cypress-Cucumber tests locally** using a consistent structure, environment variables, and tagging. It ensures local test runs are isolated, easy to configure, and maintainable — without cluttering feature files with redundant local data.

---

### Tag-Based Test Execution

To run tests locally, use the following tag in the target scenarios:

```gherkin
@localhost_test
```

These tag:

- Filter relevant test cases for local runs
- Ensure environment and user context is set correctly
- Prevent unintended remote executions

### Example Table Usage

There are two categories of example tables:

1. Dev/Staging Examples
   Tags: `@school_api_test, @staging_test`
   - Target deployed test environments (e.g., brb, staging)
   - Use real test data and environments - Common in CI pipelines

2. Local Test Example
   Tag: `@localhost_test`
   - Intended only for local development/debugging
   - Must use `namespace = localhost`

> ⚠️ _Avoid adding `@localhost_test` example tables to every feature file.
> Most test runs target dev or staging environments. Adding local test data everywhere would make the test suite harder to maintain. Instead, use local examples only in a designated feature file for debugging purpose._

### Local Credentials

For running tests locally, credentials for local users are already defined in `stagingTemplate.env.json`.

Steps:

1. Use the `_LH` naming convention for local users:

   ```json
   "TEACHER_1_LH_EMAIL": "xxxxx",
   "TEACHER_1_LH_PASSWORD": "xxxxx",
   "TEACHER_2_LH_EMAIL": "xxxxx",
   "TEACHER_2_LH_PASSWORD": "xxxxx",
   "STUDENT_1_LH_EMAIL": "xxxxx",
   "STUDENT_1_LH_PASSWORD": "xxxxx",
   "STUDENT_2_LH_EMAIL": "xxxxx",
   "STUDENT_2_LH_PASSWORD": "xxxxx",
   "ADMIN_1_LH_EMAIL": "xxxxx",
   "ADMIN_1_LH_PASSWORD": "xxxxx"
   ```

2. These users are referenced in the @localhost_test example table.
3. Ensure that all corresponding test examples set namespace = localhost.

### Set Namespace to localhost

The `namespace` column in your example table must be set to `localhost` for local tests to work:

```gherkin
| namespace |
| localhost |
```

Without this, the local auth logic and routing will not apply, causing tests to fail.

### Local Testing Example (Reference)

Here's a properly structured reference example for local tests:

```gherkin
@localhost_test
Examples:
    | teacher_1   | teacher_2   | namespace | search_term | search_result        | contact_option | contact_subject                     | contact_email    | link_trainings                | feedback_message                |
    | teacher1_lh | teacher2_lh | localhost | archivieren | Aufgaben archivieren | Aufgaben       | Dies ist ein Test! Bitte ignorieren | test@example.com | https://ecampus.lisum.de/home | Feedback erfolgreich versendet! |
```

### Running Tests Locally

Use this script in `package.json` to run test via localhost in GUI mode:

```js
cy: gui: stable: regression_test: school_api_test: localhost;
```

For headless mode, use this script:

```js
cy: headless: stable: regression_test: school_api_test: localhost;
```

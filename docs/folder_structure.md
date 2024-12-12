[← Back to README](../README.md)

## Framework Structure

This document outlines the directory layout of the project and the purpose of each folder and file. Understanding this structure will help you navigate and manage the project effectively.

---

### Project Directory Layout

```text
(root)
|
|---- .github (containing github workflows)
|   |____ automatic-trigger.yml
|   |____ manual-trigger.yml
|   |____ scheduled-trigger.yml
|---- .vscode (setting for VS code extensions)
|---- env_variables
|   |____ template.env.json (credentials & environment variables - rename the file as mentioned above)
|---- cypress
|   |___ downloads
|   |___ fixtures
|   |___ e2e (containing feature files)
|   |___ screenshots
|   |___ support
|   |    |___ custom_commands (used in our tests)
|   |    |___ pages (containing methods)
|   |    |___ step_definitions (step hooks for feature files)
|   |    |___ command.js
|   |    |___ e2e.js
|   |___ videos
|---- docs
|     |___ branch_activation.md
      |___ folder_structure.md
      |___ executing_tests.md
      |___ setup.md
      |___ tags.md
|---- env_variables
|     |___ devTemplate.env.json
      |___ stagingTemplate.env.json
|---- reports (containing html report & assets)
|---- logs(contains logs of the test run)
|---- node_modules
|---- scripts
|   |____ aggregate-json-files.sh (Aggregate all json files into one json file in CI)
|   |____ runSchoolApi.js (script for school API)
|---- .editorconfig
|---- .gitattributes
|---- .prettierignore
|---- .prettierrc
|---- .gitignore
|---- reporter.js (for generating html reports)
|---- cypress.config.json (cypress related settings)
|---- LICENSE
|---- package-lock.json
|---- package.json
|---- README.md
```

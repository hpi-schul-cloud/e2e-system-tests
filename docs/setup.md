[← Back to README](../README.md)

## Setup Guide

This document provides comprehensive instructions for setting up the project environment.

---

1.  **Prerequisites**
    <br>
    - Install [Node v20](https://nodejs.org/dist/)
    - Install [Git](https://git-scm.com/downloads)
    - Install browsers (recommended Google Chrome) [Chrome Browser](https://support.google.com/chrome/answer/95346?hl=en&co=GENIE.Platform%3DDesktop)
    - Install IDE of your choice e.g. [VS code](https://code.visualstudio.com/download)
    - Install [Github Desktop App](https://desktop.github.com/) (Optional)
    - Install VS code extensions: - [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete) - [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
      <br>

2.  **Clone the Repository**
    Clone the project repository and navigate to the project directory:
    <br>

    ```txt
       git clone <repository-url>
       cd <repository-folder>
    ```

        <br>

3.  **Setting Up Environment Variables for the Testing User Credentials and URLs**
    <br>

        <h5>Setting Up Environment Variables for Dev Environment/Cluster:</h5>
        - Duplicate the file [devTemplate.env.json](../env_variables/devTemplate.env.json) and rename the duplicated file to `local.env.json` inside the `env_variables` folder.
        - Include the required development namespace URLs for BRB/DBC/NBC.
        - Test user data on development clusters are created using the school API.
        - To retrieve the API keys for all three namespaces, navigate to 1Password (1PW).
        - Contact QA team for the necessary 1Password links.

        <h5>Setting Up Environment Variables for Staging Environment/Cluster:</h5>
        - Duplicate the file [stagingTemplate.env.json](../env_variables/stagingTemplate.env.json) and rename the duplicated file to `staging.env.json` in the `env_variables` folder.
        - Include the required staging namespace URLs for BRB/DBC/NBC.
        - Test data on the staging environment are fetched from the seed data on the server.
        - Add the environment-specific credentials to `staging.env.json` from 1Password (1PW).
        - Ensure all instances are included, as 1Password contains different vaults for each namespace with testing credentials.
        - Contact QA team for the necessary 1Password links.

<br>

4. **Installing Dependencies**

   Use `npm ci` for a clean and consistent installation of project dependencies:
   <br>

   ```txt
   npm ci
   ```

   For more details on the difference between npm ci and npm install, refer to the [NPM Documentation](https://docs.npmjs.com/cli/v10/commands/npm-ci)
   <br>

5. **Running Cypress Tests**
   For details on running Cypress tests, including options and configurations, refer to the [Executing Tests Guide](executing_tests_guide.md)

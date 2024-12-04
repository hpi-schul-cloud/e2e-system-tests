[← Back to README](../README.md)

## Setup Guide

This document provides comprehensive instructions for setting up the project environment.

---

1. **Prerequisites**
   <br>

   - Install [Node v18](https://nodejs.org/dist/)
   - Install [Git](https://git-scm.com/downloads)
   - Install browsers (recommended Microsoft Edge) [Edge Browser](https://www.microsoft.com/de-de/edge/download?form=MA13FJ)
   - Install IDE of your choice e.g. [VS code](https://code.visualstudio.com/download)
   - Install [Github Desktop App](https://desktop.github.com/) (Optional)
   - Install VS code extensions: - [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete) - [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
     <br>

2. **Clone the Repository**
   Clone the project repository and navigate to the project directory:
   <br>

   ```txt
      git clone <repository-url>
      cd <repository-folder>
   ```

   <br>

3. **Setting Up Environment Variables for Testing User Credentials and URLs**
   <br>

   - Duplicate [devClusterTemplate.env.json](../env_variables/devClusterTemplate.env.json) file and rename the duplicated file to `local.env.json` in the env_variables folder.
     - Test data on development clusters are created using school API.
   - Duplicate [stagingTemplate.env.json](../env_variables/stagingTemplate.env.json) file and rename the duplicated file to `staging.env.json` in the env_variables folder.
     - Test data on the staging environment is fetched from the seed data on the server.
   - Add your credentials and environment-specific variables to `local.env.json` and `staging.env.json` from 1Password including api keys.
     - Remember to add all instances, as in 1Password, we have different vaults available for each namespace.
     - Contact the QA team for the required 1Password links.
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
   For details on running Cypress tests, including options and configurations, refer to the [Running Tests Guide](running_tests_guide.md)

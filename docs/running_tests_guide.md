[← Back to README](../README.md)

## Running Tests Guide

This guide provides instructions on how to execute tests using Cypress, including script naming conventions.

---

1. **Script Naming Convention**

   Scripts in package.json follow a specific naming convention:
   <br>

   ```txt
   cy:{mode}:{stability}:{type}:{environment}:{execution}


   mode: gui (headed) or headless
   stability: stable or unstable
   type: smoke or regression
   environment: staging or school_api_test
   execution: local or ci
   ```

   Example: `npm run cy:gui:stable:regression:staging:local`
   <br>

2. **Examples**

   - **Run all stable regression tests in GUI mode locally:**
     <br>

     ```txt
     npm run cy:gui:stable:regression:local
     ```

    <br>

   - **Run all unstable tests in headless mode for CI:**
     <br>

     ```txt
     npm run cy:headless:unstable:smoke:ci
     ```

    <br>

   - **Run specific scenario tagged with @only:**
     <br>
     ```txt
     npm run cy:gui:only:local
     ```

3. **Running Tests Locally**
   To run tests locally:

   - **Ensure Environment Configuration:** Verify that local.env.json contains the correct credentials and api keys.
   - **Select and Run Tests:** Choose the appropriate script based on your test requirements.

### Additional Example Commands

- **Run all stable tests in headless mode locally:**
  <br>

  ```txt
  npm run cy:headless:stable:local
  ```

- **Run tests for a specific environment in GUI mode (e.g., staging):**
  <br>

  ```txt
  npm run cy:gui:stable:regression:staging:local
  ```

- **Run tests in headless mode CI environment:**
  <br>

  ```txt
  npm run cy:headless:stable:regression:school_api_test:ci
  ```

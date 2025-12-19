[← Back to README](../README.md)

## Branch Activation Process

To use e2e tests in other repositories, you must follow a branch activation process. This process is critical for ensuring that tests run smoothly, and that branches remain active during development.

---

### Extending Activation Time

For each unique Pull Request (PR), you can extend the namespace's activation time by adding a specific label to the PR. This method ensures that the namespace remains active with every new push to the branch associated with the PR.

#### Steps to Extend Activation Time

1. **Navigate to the PR**
   - Go to the Pull Request for which you want to extend the activation time.

2. **Apply the Label**
   - Add the label `auto-extend-activation-time` to the PR. This label initiates a new rollout and extends the activation time for the namespace.

3. **Automatic Extension**
   - Once the label is applied, the activation time for the namespace will be automatically extended with each new push to the branch associated with this PR.

### Important Notes

- **One-Time Label Application**: If you have multiple PRs from the same branch across various repositories, you only need to apply this label once for each PR.
- **Effectiveness**: This method is effective for managing PRs and keeping namespaces active throughout the development process.

### Additional Information

For more details on branch activation and extending activation times, refer to the [dof_app_deploy repository](https://github.com/hpi-schul-cloud/dof_app_deploy#extend-activation-time-by-adding-a-label-to-your-pr).

If you encounter any issues or need further assistance, please contact the team for support.

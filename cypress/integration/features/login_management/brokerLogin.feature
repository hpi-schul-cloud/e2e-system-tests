@login @stable_test
Feature: Broker Login - Verify brokered dBildungscloud login via OIDC provider

  As an external student, I want to use my external account (OIDCMOCK) as an identity provider to log in to the dBildungscloud.

  Scenario: User sees external identity provider button (OIDCMOCK).
    Given I am on the dBildungscloud login page
    Then I see Login via Keycloak button
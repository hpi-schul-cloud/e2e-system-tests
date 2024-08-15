@pr
@stable_test
Feature: Ldap Login - Login of users managed by SVS

    As a user, I want to login with username and password into SVS

    Scenario Outline: User makes a direct login with ldap username and password
        Given I am on the login page on '<env>'
        When I am logging in with ldap as '<user>' on '<env>'
        Then I will be redirected to the dashboard
        And I will be able to logout with redirect on '<env>'

    Examples:
        | env | user         |
        | brb | student_ldap_brb   |
        | dbc | student_ldap_dbc   |
        | nbc | student_ldap_nbc   |
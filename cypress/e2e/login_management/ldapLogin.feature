@regression_test
@stable_test
#@unstable_test
Feature: Ldap Login - Login of users not managed by SVS

    As a user, I want to login with LDAP username and password into SVS

    Scenario: User makes a direct login with ldap username and password
        Given I am on the '<namespace>' login page
        When I am logging in with ldap as '<user>' on '<namespace>'
        Then I see the dashboard
        Then I logout from the application

        #@school_api_test
        #This feature can not be executed using the school api, as we do not create LDAP external user using this api.

        @staging_test
        #Login credentials need to be clarified in order to execute this test. LDAP school is also to be selected.
        Examples:
            | namespace | user             |
            | brb       | student_ldap_brb |
            | dbc       | student_ldap_dbc |
            | nbc       | student_ldap_nbc |
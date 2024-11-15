@unstable_test
Feature: Ldap Login - Login of users not managed by SVS

    As a user, I want to login with LDAP username and password into SVS

    Scenario: User makes a direct login with ldap username and password
        Given I am on the '<namespace>' login page
        When I click on the option button for the login via LDAP
        When I select the LDAP school '<ldap_school_name>'
        When I enter LDAP user name for '<user>' on '<namespace>'
        When I enter LDAP password '<user>' on '<namespace>'
        When I click on the button LDAP login on '<namespace>'
        Then I see the dashboard
        Then I logout from the application

        #@school_api_test
        #This feature can not be executed using the school api, as we do not create LDAP external user using this api.

        @staging_test
        #Login credentials need to be clarified in order to execute this test. LDAP school is also not available on staging dropdown.
        Examples:
            | namespace | user             | ldap_school_name |
            | brb       | student_ldap_brb | School One 0     |
            | dbc       | student_ldap_dbc | School One 0     |
            | nbc       | student_ldap_nbc | School One 0     |
            | brb       | teacher_ldap_brb | School One 0     |
            | dbc       | teacher_ldap_dbc | School One 0     |
            | nbc       | teacher_ldap_nbc | School One 0     |
            | brb       | admin_ldap_brb   | School One 0     |
            | dbc       | admin_ldap_dbc   | School One 0     |
            | nbc       | admin_ldap_nbc   | School One 0     |
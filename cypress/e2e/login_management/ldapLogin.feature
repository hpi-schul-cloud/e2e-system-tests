@stable_test
@regression_test
@prio_0_staging
Feature: Login Management - Login of users not managed by SVS (LDAP users)

    As a user, I want to login with LDAP username and password into SVS so that I can access my account

    Scenario Outline: User makes a direct login with ldap username and password
        Given I am on the '<namespace>' login page
        When I click on the option button for the login via LDAP
        When I select the LDAP school '<ldap_school_name>'
        When I enter LDAP user name for '<username>' on '<namespace>'
        When I enter LDAP password '<username>' on '<namespace>'
        When I click on the button LDAP login on '<namespace>'
        Then I see the dashboard
        Then I see my initials '<initials>' in the dashboard
        When I logout from the application
        Then I see the login form on '<namespace>'

        #@school_api_test
        # this feature can not be executed using the school api, as we do not create LDAP external user using this api.

        @staging_test
        # this test is only executed for BRB teachers and students
        Examples:
            | namespace | username         | ldap_school_name                                    | initials |
            | brb       | student_ldap_brb | Carl Friedrich Gauß Grundschule (Inkl.), Hirschheim | AS       |
            | brb       | teacher_ldap_brb | Carl Friedrich Gauß Grundschule (Inkl.), Hirschheim | AB       |

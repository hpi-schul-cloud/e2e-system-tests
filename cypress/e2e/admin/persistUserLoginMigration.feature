@regression_test
@mikroorm_v7
Feature: Admin - User login migration state is persisted

    As an admin, I want the state of the user login migration and the related school data to be stored correctly, so that the migration can be started, made mandatory, ended and started again.

    Scenario Outline: Admin starts, makes mandatory, ends and restarts the user login migration

        # pre-condition: admin logs in and the school has an official school number
        Given I am logged in as a '<admin>' at '<namespace>'
        When the school of the admin has an official school number
        Then I see no user login migration and the original school features via API

        # admin starts the migration
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I watch the user login migration requests
        When I click on account migration panel
        Then I see button Start migration is enabled
        When I click on the start migration button
        When I click on agree migration button
        Then the user login migration request 'start' was successful
        Then I see a running user login migration which is 'optional' via API
        When I reload the page and open the account migration panel
        Then I see the migration is active field
        Then I see the migration mandatory switch is not checked

        # admin makes the migration mandatory and optional again
        When I watch the user login migration requests
        When I check the migration mandatory switch
        Then the user login migration request 'mandatory' was successful
        Then I see a running user login migration which is 'mandatory' via API
        When I reload the page and open the account migration panel
        Then I see the migration mandatory switch is checked
        When I watch the user login migration requests
        When I uncheck the migration mandatory switch
        Then the user login migration request 'mandatory' was successful
        Then I see a running user login migration which is 'optional' via API
        When I reload the page and open the account migration panel
        Then I see the migration mandatory switch is not checked
        When I watch the user login migration requests
        When I check the migration mandatory switch
        Then the user login migration request 'mandatory' was successful
        Then I see a running user login migration which is 'mandatory' via API
        When I remember the user login migration

        # admin ends the migration without migrated users, so it is reverted completely
        When I watch the user login migration requests
        When I click on end migration button
        When I click on the end migration confirmation checkbox
        When I click on the end migration confirmation button
        Then the user login migration request 'close' was successful
        Then I see no user login migration and the original school features via API
        When I reload the page and open the account migration panel
        Then I see button Start migration is enabled

        # admin starts the migration again, it does not contain data of the previous migration
        When I watch the user login migration requests
        When I click on the start migration button
        When I click on agree migration button
        Then the user login migration request 'start' was successful
        Then I see a new user login migration via API
        Then I see a running user login migration which is 'optional' via API

        # post-condition: admin ends the migration and users can still log in
        When I watch the user login migration requests
        When I click on end migration button
        When I click on the end migration confirmation checkbox
        When I click on the end migration confirmation button
        Then the user login migration request 'close' was successful
        Then I see no user login migration and the original school features via API
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I arrive on the dashboard
        Given I am logged in as a '<admin>' at '<namespace>'
        Then I see no user login migration and the original school features via API

        @school_api_test
        Examples:
            | namespace | admin      | teacher      |
            | nbc       | admin1_nbc | teacher1_nbc |

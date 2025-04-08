# Note: To set this test to stable, the school needs a official school number
@unstable_test
Feature: Admin - To administrate the Migration process

    As an admin I want to (re-)starts, stop the migration and make it mandatory.

    Scenario: Admin (re-)starts, stops the migration
        # admin starts migration
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        Then I see the school number
        When I click on account migration panel
        Then I see button Start migration is enabled
        Then I see the migration information text
        Then I see the email form with correct recipient
        Then I see the information link href is blog.niedersachsen.cloud/umzug
        Then I see the migration school number information text
        When I click on the start migration button
        When I click on agree migration button
        Then I see the migration is active field
        Then I see the end migration button
        Then I see the migration wizard button

        # admin toggles migration mandatory switch
        Then I see the migration mandatory switch is not checked
        When I check the migration mandatory switch
        Then I see the migration mandatory switch is checked
        # admin toggles ldap sync for school in migration switch
        Then I see the sync during migration switch is visible and not checked
        When I check the sync during migration switch
        Then I see the sync during migration switch is checked
        # admin toggles show outdated users switch
        Then I see the show outdated users switch is visible and not checked
        When I check the show outdated users switch
        Then I see the show outdated users switch is checked

        # admin stops the migration
        When I click on end migration button
        Then I see the end of migration information title
        Then I see the end of migration information text
        Then I see the end migration information link href is blog.niedersachsen.cloud/umzug
        Then I see the end migration confirmation checkbox is unchecked
        Then I see the abort button for end of migration conformation
        Then I see the end migration confirmation button is disabled
        When I click on the end migration confirmation checkbox
        Then I see the end migration confirmation button is enabled
        When I click on the end migration confirmation button
        Then I see button Start migration is enabled

        # admin restarts the migration
        When I click on the start migration button
        When I click on agree migration button
        Then I see the migration is active field
        Then I see the end migration button
        Then I see the migration mandatory switch is not checked
        Then I see the sync during migration switch is checked

        # admin resets migration
        When I uncheck the sync during migration switch
        Then I see the sync during migration switch is visible and not checked
        When I uncheck the show outdated users switch
        Then I see the show outdated users switch is visible and not checked
        When I click on end migration button
        When I click on the end migration confirmation checkbox
        Then I see the end migration confirmation button is enabled
        When I click on the end migration confirmation button
        Then I see button Start migration is enabled

        @staging_test
        Examples:
            | admin      | namespace |
            | admin1_nbc | nbc       |

        @school_api_test
        Examples:
            | admin      | namespace |
            | admin1_nbc | nbc       |

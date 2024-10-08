@unstable_test
Feature: Admin External Tools - To administrate school settings by the admin.

    As an admin I want to administrate the external tools used in the school so that I can manage it

    This test is commented out at the moment and needs to be adapted

    # Note: This feature file will be refactored/re-written.

    @unstable_test
    Scenario: Deactivate Chat in Team
        Given I am logged in as a 'admin1_brb' at 'brb'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        When I click on toggle switch to deactivate the chat
        When I click save general settings button
        Then I log out
        Given I am logged in as a 'teacher1_brb' at 'brb'
        When I go to teams overview
        When I go to a team
        Then I can not see the chat in team
        Then I open team settings
        Then I choose edit team
        Then I can not see the checkbox for messenger in a team

    @unstable_test
    Scenario: Activate Chat in Team
        Given I am logged in as a 'admin1_brb' at 'brb'
        When I click on administration in menu
        And I navigate to new school admin page via sub menu
        When I click on general settings panel
        When I click on toggle switch to activate the chat
        When I click save general settings button
        Then I log out
        Given I am logged in as a 'teacher1_brb' at 'brb'
        When I go to teams overview
        When I go to a team
        When I open team settings
        When I choose edit team
        Then I can see the checkbox for messenger in a team
        When I selected the messenger activation checkbox
        When I click on save changes
        Then I can see the chat in team
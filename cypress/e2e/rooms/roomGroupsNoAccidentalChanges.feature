@unstable_test
@room_grouping
@group-F

# Requires FEATURE_ROOM_GROUPING_ENABLED=true. Move to @stable_test/@regression_test once the flag is enabled on the test environments.

Feature: Rooms - Browsing grouped rooms never changes the saved arrangement

    As a user, I want to look around, open menus and dialogs and select rooms without anything being saved unless I confirm it.

    Scenario Outline: Only confirmed actions write to the server

        Given I am logged in as a '<teacher1>' at '<namespace>'
        Given a room named 'CypressAut Group Room A' exists
        When I go to rooms overview
        Given a room group named 'CypressAut Informatik' exists
        When I watch for changes to the room arrangement
        When I scroll through the rooms overview
        When I open and close the menu of room group 'CypressAut Informatik'
        When I open and cancel the move dialog of room 'CypressAut Group Room A'
        When I click on Add group on the rooms overview
        When I cancel the group name dialog
        When I start selecting rooms from the rooms menu
        When I select and deselect the room 'CypressAut Group Room A'
        When I leave the room selection
        When I reload the rooms overview
        Then no change to the room arrangement was sent

        # post-condition
        When I choose 'delete' in the menu of room group 'CypressAut Informatik'
        When I confirm the delete group dialog
        Then I delete all rooms whose names start with 'CypressAut Group Room'

        @localhost_test
        Examples:
            | teacher1    | namespace |
            | teacher1_lh | localhost |

        @school_api_test
        @staging_test
        Examples:
            | teacher1     | namespace |
            | teacher1_nbc | nbc       |

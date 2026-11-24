@unstable_test
@room_grouping
@group-F

# Requires FEATURE_ROOM_GROUPING_ENABLED=true. Move to @stable_test/@regression_test once the flag is enabled on the test environments.

Feature: Rooms - Assign, move and order rooms and room groups

    As a user, I want to assign rooms to groups, move them between groups and change the order of groups and rooms.

    Scenario Outline: Assign, move and reorder with drag and drop and menus (SVSDEV-530 to SVSDEV-534)

        Given I am logged in as a '<teacher1>' at '<namespace>'
        Given a room named 'CypressAut Group Room A' exists
        Given a room named 'CypressAut Group Room B' exists
        When I go to rooms overview
        Given a room group named 'CypressAut Informatik' exists
        Given a room group named 'CypressAut Deutsch' exists

        # SVSDEV-530: assign by context menu and by drag and drop
        When I move the room 'CypressAut Group Room A' to section 'CypressAut Informatik' using the room menu
        Then I see the room 'CypressAut Group Room A' in section 'CypressAut Informatik'
        Then I do not see the room 'CypressAut Group Room A' in section 'Ungrouped'
        When I drag the room 'CypressAut Group Room B' into section 'CypressAut Informatik'
        Then I see the room 'CypressAut Group Room B' in section 'CypressAut Informatik'
        Then I do not see the room 'CypressAut Group Room B' in section 'Ungrouped'
        Then I see the room group 'CypressAut Informatik' shows '2' rooms

        # SVSDEV-533: reorder within the group (menu and drag and drop)
        Then I see the room 'CypressAut Group Room A' at position '0' in section 'CypressAut Informatik'
        When I choose 'move-later' in the menu of room 'CypressAut Group Room A'
        Then I see the room 'CypressAut Group Room A' at position '1' in section 'CypressAut Informatik'
        When I drag the room 'CypressAut Group Room A' onto the room 'CypressAut Group Room B'
        Then I see the room 'CypressAut Group Room A' at position '0' in section 'CypressAut Informatik'

        # SVSDEV-531: move between groups (drag and drop and menu) and back to ungrouped
        When I drag the room 'CypressAut Group Room A' into section 'CypressAut Deutsch'
        Then I see the room 'CypressAut Group Room A' in section 'CypressAut Deutsch'
        Then I do not see the room 'CypressAut Group Room A' in section 'CypressAut Informatik'
        Then I see the room 'CypressAut Group Room A' exactly once on the rooms overview
        When I move the room 'CypressAut Group Room B' to section 'CypressAut Deutsch' using the room menu
        Then I see the room group 'CypressAut Informatik' is empty
        When I move the room 'CypressAut Group Room B' to section 'Ungrouped' using the room menu
        Then I see the room 'CypressAut Group Room B' in section 'Ungrouped'
        Then I do not see the room 'CypressAut Group Room B' in section 'CypressAut Deutsch'

        # SVSDEV-532: reorder groups (menu and drag handle)
        Then I see the room group 'CypressAut Informatik' at group position '0'
        When I choose 'move-down' in the menu of room group 'CypressAut Informatik'
        Then I see the room group 'CypressAut Deutsch' at group position '0'
        Then I see the room group 'CypressAut Informatik' at group position '1'
        When I drag the room group 'CypressAut Informatik' onto the room group 'CypressAut Deutsch'
        Then I see the room group 'CypressAut Informatik' at group position '0'
        Then I see the ungrouped rooms above all groups

        # SVSDEV-534: collapse and expand
        When I toggle the room group 'CypressAut Deutsch'
        Then I see the room group 'CypressAut Deutsch' is collapsed
        # a collapsed group accepts a dropped room, appends it and stays collapsed
        When I drag the room 'CypressAut Group Room B' onto the collapsed room group 'CypressAut Deutsch'
        Then I see the room group 'CypressAut Deutsch' is collapsed
        Then I see the room group 'CypressAut Deutsch' shows '2' rooms
        When I toggle the room group 'CypressAut Deutsch'
        Then I see the room group 'CypressAut Deutsch' is expanded
        Then I see the room 'CypressAut Group Room A' at position '0' in section 'CypressAut Deutsch'
        Then I see the room 'CypressAut Group Room B' at position '1' in section 'CypressAut Deutsch'
        Then I do not see an error alert on the rooms overview

        # post-condition
        When I choose 'delete' in the menu of room group 'CypressAut Informatik'
        When I confirm the delete group dialog
        When I choose 'delete' in the menu of room group 'CypressAut Deutsch'
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

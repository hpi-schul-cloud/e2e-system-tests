@unstable_test
@room_grouping
@group-F

# Requires FEATURE_ROOM_GROUPING_ENABLED=true. Move to @stable_test/@regression_test once the flag is enabled on the test environments.

Feature: Rooms - Organise many rooms efficiently and undo changes

    As a user with many rooms, I want guidance, bulk moves, collapse all and undo so that organising my rooms is quick and safe.

    Scenario Outline: First-run hint, bulk move, collapse all and undo

        Given I am logged in as a '<teacher1>' at '<namespace>'
        Given a room named 'CypressAut Group Room A' exists
        Given a room named 'CypressAut Group Room B' exists
        When I go to rooms overview

        # guidance while no group exists
        Then I see the hint to start grouping rooms
        When I add a group from the hint to start grouping rooms
        When I enter the group name 'CypressAut Informatik'
        When I confirm the group name dialog
        Then I see the room group 'CypressAut Informatik'
        Then I do not see the hint to start grouping rooms
        Given a room group named 'CypressAut Deutsch' exists

        # move several rooms at once
        When I start selecting rooms from the rooms menu
        When I select the room 'CypressAut Group Room A'
        When I select the room 'CypressAut Group Room B'
        Then I see '2' selected rooms
        When I move the selected rooms to section 'CypressAut Informatik'
        Then I do not see the room selection
        Then I see the room 'CypressAut Group Room A' in section 'CypressAut Informatik'
        Then I see the room 'CypressAut Group Room B' in section 'CypressAut Informatik'

        # undo a move
        When I move the room 'CypressAut Group Room A' to section 'CypressAut Deutsch' using the room menu
        Then I see the room 'CypressAut Group Room A' in section 'CypressAut Deutsch'
        When I undo the last change on the rooms overview
        Then I see the room 'CypressAut Group Room A' in section 'CypressAut Informatik'
        Then I do not see the room 'CypressAut Group Room A' in section 'CypressAut Deutsch'

        # collapse and expand all
        When I collapse all room groups from the rooms menu
        Then I see the room group 'CypressAut Informatik' is collapsed
        Then I see the room group 'CypressAut Deutsch' is collapsed
        When I expand all room groups from the rooms menu
        Then I see the room group 'CypressAut Informatik' is expanded

        # undo a delete restores the group and its rooms
        When I choose 'delete' in the menu of room group 'CypressAut Informatik'
        When I confirm the delete group dialog
        Then I do not see the room group 'CypressAut Informatik'
        When I undo the last change on the rooms overview
        Then I see the room group 'CypressAut Informatik' at group position '0'
        Then I see the room 'CypressAut Group Room A' in section 'CypressAut Informatik'
        Then I see the room 'CypressAut Group Room B' in section 'CypressAut Informatik'
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

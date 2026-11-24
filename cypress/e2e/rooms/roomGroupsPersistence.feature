@unstable_test
@room_grouping
@group-F

# Requires FEATURE_ROOM_GROUPING_ENABLED=true. Move to @stable_test/@regression_test once the flag is enabled on the test environments.

Feature: Rooms - Room groups are saved on the server

    As a user, I want my group structure to be saved so that I see the same organization after reloading, after logging in again and on other devices.

    Scenario Outline: Group structure survives reload and a new login (SVSDEV-535)

        Given I am logged in as a '<teacher1>' at '<namespace>'
        Given a room named 'CypressAut Group Room A' exists
        Given a room named 'CypressAut Group Room B' exists
        When I go to rooms overview
        Given a room group named 'CypressAut Informatik' exists
        Given a room group named 'CypressAut Deutsch' exists
        When I move the room 'CypressAut Group Room A' to section 'CypressAut Deutsch' using the room menu
        When I move the room 'CypressAut Group Room B' to section 'CypressAut Deutsch' using the room menu
        When I choose 'move-later' in the menu of room 'CypressAut Group Room A'
        When I choose 'move-down' in the menu of room group 'CypressAut Informatik'
        When I toggle the room group 'CypressAut Informatik'
        Then I see the room group 'CypressAut Informatik' is collapsed

        # AC 1, 2: saved automatically and restored after reload
        When I reload the rooms overview
        Then I see the room group 'CypressAut Deutsch' at group position '0'
        Then I see the room group 'CypressAut Informatik' at group position '1'
        Then I see the room group 'CypressAut Informatik' is collapsed
        Then I see the room 'CypressAut Group Room B' at position '0' in section 'CypressAut Deutsch'
        Then I see the room 'CypressAut Group Room A' at position '1' in section 'CypressAut Deutsch'

        # AC 3 to 7: restored after logging in again
        When I log out
        Given I am logged in as a '<teacher1>' at '<namespace>'
        When I go to rooms overview
        Then I see the room group 'CypressAut Deutsch' at group position '0'
        Then I see the room group 'CypressAut Informatik' at group position '1'
        Then I see the room group 'CypressAut Informatik' is collapsed
        Then I see the room 'CypressAut Group Room B' at position '0' in section 'CypressAut Deutsch'
        Then I see the room 'CypressAut Group Room A' at position '1' in section 'CypressAut Deutsch'

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

    Scenario Outline: A change from another device is detected instead of being overwritten (SVSDEV-535 AC 8, 9)

        Given I am logged in as a '<teacher1>' at '<namespace>'
        When I go to rooms overview
        Given a room group named 'CypressAut Device A' exists
        When on another device the room group 'CypressAut Device A' is renamed to 'CypressAut Device B'
        When I toggle the room group 'CypressAut Device A'
        Then I see a notice that the room groups were changed in the meantime
        Then I see the room group 'CypressAut Device B'
        Then I do not see the room group 'CypressAut Device A'
        Then I see the room group 'CypressAut Device B' is expanded
        When I toggle the room group 'CypressAut Device B'
        Then I see the room group 'CypressAut Device B' is collapsed
        When I reload the rooms overview
        Then I see the room group 'CypressAut Device B' is collapsed

        # post-condition
        When I choose 'delete' in the menu of room group 'CypressAut Device B'
        When I confirm the delete group dialog

        @localhost_test
        Examples:
            | teacher1    | namespace |
            | teacher1_lh | localhost |

        @school_api_test
        @staging_test
        Examples:
            | teacher1     | namespace |
            | teacher1_nbc | nbc       |

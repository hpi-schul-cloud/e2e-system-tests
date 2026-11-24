@unstable_test
@room_grouping
@group-F

# Requires FEATURE_ROOM_GROUPING_ENABLED=true. Move to @stable_test/@regression_test once the flag is enabled on the test environments.

Feature: Rooms - Create, rename and delete personal room groups

    As a user, I want to create, rename and delete groups on the rooms overview so that I can organize my rooms logically.

    Scenario Outline: Create, validate, rename and delete room groups (SVSDEV-60, SVSDEV-528, SVSDEV-529)

        Given I am logged in as a '<teacher1>' at '<namespace>'
        Given a room named 'CypressAut Group Room A' exists
        When I go to rooms overview

        # SVSDEV-60: name is required, at most 100 characters, unique; empty groups are allowed
        When I click on Add group on the rooms overview
        When I enter the group name '   '
        Then I cannot confirm the group name dialog
        When I enter a group name with '101' characters
        Then I see an error for the group name
        When I enter a group name with '100' characters
        When I confirm the group name dialog
        Then the group name dialog is closed
        Then I see a room group with '100' characters
        Given a room group named 'CypressAut Informatik' exists
        When I click on Add group on the rooms overview
        When I enter the group name 'cypressaut informatik'
        When I confirm the group name dialog
        Then I see an error for the group name
        When I cancel the group name dialog
        Then I see the room group 'CypressAut Informatik' is empty
        Then I see the ungrouped rooms above all groups
        Then I see the room 'CypressAut Group Room A' in section 'Ungrouped'

        # SVSDEV-528: rename with the same rules
        When I choose 'rename' in the menu of room group 'CypressAut Informatik'
        When I enter the group name 'CypressAut Deutsch'
        When I confirm the group name dialog
        Then I see the room group 'CypressAut Deutsch'
        Then I do not see the room group 'CypressAut Informatik'

        # SVSDEV-529: confirmation, cancel, rooms return to ungrouped, do-not-ask-again, restore
        When I move the room 'CypressAut Group Room A' to section 'CypressAut Deutsch' using the room menu
        Then I see the room 'CypressAut Group Room A' in section 'CypressAut Deutsch'
        When I choose 'delete' in the menu of room group 'CypressAut Deutsch'
        Then I see the dialog to delete a room group
        When I cancel the delete group dialog
        Then I see the room group 'CypressAut Deutsch'
        When I choose 'delete' in the menu of room group 'CypressAut Deutsch'
        When I check do not ask again in the delete group dialog
        When I confirm the delete group dialog
        Then I do not see the room group 'CypressAut Deutsch'
        Then I see the room 'CypressAut Group Room A' in section 'Ungrouped'
        Then I see the room 'CypressAut Group Room A' exactly once on the rooms overview
        When I choose 'delete' in the menu of the room group with '100' characters
        Then I do not see the dialog to delete a room group
        Then I do not see a room group with '100' characters
        When I restore the confirmation for deleting room groups
        Given a room group named 'CypressAut Temp' exists
        When I choose 'delete' in the menu of room group 'CypressAut Temp'
        Then I see the dialog to delete a room group
        When I confirm the delete group dialog
        Then I do not see an error alert on the rooms overview

        # post-condition
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

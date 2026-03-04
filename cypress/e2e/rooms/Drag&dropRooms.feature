@regression_test
@stable_test
@schedule_run
@group-F
@prio_0_staging
Feature: Rooms - Drag and Drop Rooms on the Rooms Overview Page

    As a teacher, I want to drag and drop rooms on the rooms overview page so that I can organize my rooms effectively.

    Scenario Outline: Drag and drop a room to a new position on the rooms overview page

        # pre-condition: creating teacher accounts
        Given I am logged in as a '<teacher1>' at '<namespace>'
        Given a room named '<room_one>' exists
        Given a room named '<room_two>' exists

        # teacher drags and drops the room one from the position one to the second position (left to right)
        When I go to rooms overview
        When I drag and drop the room one '<room_one>' from position '0' to position '1'
        Then I do not see error alrert
        Then I see the room '<room_one>' at position '1'
        Then I see the room '<room_two>' at position '0'

        # teacher drags and drops the room one from the position two to the first position back (right to left)
        When I go to rooms overview
        When I drag and drop the room one '<room_one>' from position '1' to position '0'
        Then I do not see error alrert
        Then I see the room '<room_one>' at position '0'
        Then I see the room '<room_two>' at position '1'

        # post-condition: rooms are deleted
        Given the room '<room_one>' at position '0' is deleted
        Given the room '<room_two>' at position '0' is deleted

        @school_api_test
        @staging_test
        Examples:
            | teacher1     | namespace | room_one               | room_two               |
            | teacher1_dbc | dbc       | CypressAut Room Name-1 | CypressAut Room Name-2 |

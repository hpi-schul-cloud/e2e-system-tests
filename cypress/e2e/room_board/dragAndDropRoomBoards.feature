@regression_test
@stable_test
@schedule_run
@group-F
@prio_0_staging
Feature: Room Board - Drag and Drop Boards on the Rooms Overview Page

    As a teacher, I want to drag and drop boards on the rooms overview page so that I can organize my boards effectively.

    Scenario Outline: Drag and drop a board to a new position in the rooms detail page

        # pre-condition: creating teacher accounts
        Given I am logged in as a '<teacher1>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title_one>' exists in the room
        Given I navigate to the room detail page via Breadcrumb
        Given a multi-column board named '<board_title_two>' exists in the room

        # teacher drags and drops the board one from the position one to the second position (left to right)
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I drag and drop the board one '<board_title_one>' from position '0' to position '1'
        Then I do not see error alrert
        Then I see the board '<board_title_one>' at position '1'
        Then I see the board '<board_title_two>' at position '0'

        # teacher drags and drops the board one from the position two to the first position back (right to left)
        When I drag and drop the board one '<board_title_one>' from position '1' to position '0'
        Then I do not see error alrert
        Then I see the board '<board_title_one>' at position '0'
        Then I see the board '<board_title_two>' at position '1'

        # post-condition: rooms are deleted
        Given the room '<room_name>' at position '0' is deleted

        @school_api_test
        @staging_test
        Examples:
            | teacher1     | namespace | room_name              | board_title_one          | board_title_two          |
            | teacher1_dbc | dbc       | CypressAut Room Name-1 | CypressAut Board Title-1 | CypressAut Board Title-2 |

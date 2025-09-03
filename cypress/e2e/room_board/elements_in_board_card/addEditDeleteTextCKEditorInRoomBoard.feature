@regression_test
@stable_test
@schedule_run
@group-B
Feature: Room Board - Add, edit and delete element Text in the room board

    As a teacher, I want to add, edit, and delete an element Text on the room board, so that I can manage and update important notes efficiently.

    Scenario: Add, edit and delete element Text in the room the room board, including pre & post conditions

        # pre-condition: creating accounts
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: room, board and card are existing
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card

        # teacher adds element Text in the multi-column room board
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        Then I see the dialog Add Element in the card
        When I click on the button Close in the dialog Add Element
        Then I do not see the dialog Add Element in the card
        Then I enter the text '<example_text>' in the element Text with the visible inline CKEditor toolbar
        When I click outside of the card to save it
        Then I see the element Text '<example_text>' in the card

        # student can see the element Text in the multi-column board
        # note: this scenario can not be defined as adding a student into the room is not yet implemented.

        # teacher edits the element Text in the multi-column board
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        Then I re enter the text '<edit_example_text>' in the element Text
        When I click outside of the card to save it
        Then I see the element Text '<edit_example_text>' in the card

        # teacher deletes the element Text in the multi-column board
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I remove the text '<edit_example_text>' in the element Text
        When I click outside of the card to save it
        Then I do not see the element Text in the card

        # student can not see the element Text in the multi-column board
        # note: this scenario can not be defined as adding a student into the room is not yet implemented.

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | teacher      | namespace | room_name         | board_title    | example_text         | edit_example_text         |
            | teacher1_dbc | dbc       | Cypress Room Name | Board Cy Title | Cypress example text | Cypress edit example text |

        @staging_test
        Examples:
            | teacher      | namespace | room_name         | board_title    | example_text         | edit_example_text         |
            | teacher1_dbc | dbc       | Cypress Room Name | Board Cy Title | Cypress example text | Cypress edit example text |

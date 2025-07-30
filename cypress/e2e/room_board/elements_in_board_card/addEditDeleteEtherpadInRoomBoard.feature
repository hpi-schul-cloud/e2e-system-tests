@regression_test
@stable_test
@schedule_run
@group-L
Feature: Room Board - Add, edit and delete element Etherpad in the room board

    As a teacher, I want to add, edit, and delete an element Etherpad on the room board, so that I can manage and update important notes efficiently.

    Scenario Outline: Add, edit and delete element Etherpad in the room the room board, including pre & post conditions

        # pre-condition: creating accounts
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: room, board and card are existing
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card

        # teacher adds element Etherpad in the multi-column room board
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        Then I see the dialog Add Element in the card
        When I select 'collaborative-text-editor' from the element selection dialog box
        When I click outside of the card to save it
        Then I see the element Etherpad in the card
        Then I verify the element Etherpad is clickable

        # student can see the element Etherpad in the multi-column board
        # note: this scenario can not be defined as adding a student into the room is not yet implemented.

        # teacher deletes the element Etherpad in the multi-column board
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on the three-dot in the element Etherpad
        When I click on the option Delete in the three-dot menu
        Then I see the dialog Confirm deletion
        When I click on the button Delete in the confirmation dialog
        Then I do not see the element Etherpad

        # student can not see the element Etherpad in the multi-column board
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

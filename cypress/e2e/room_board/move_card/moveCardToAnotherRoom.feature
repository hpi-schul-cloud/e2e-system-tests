@regression_test
@stable_test
@schedule_run
@group-E
@prio_0_dev
Feature: Room Board - Move a card from one room to another room

    As a teacher,
    I want to move a card from a board in one room to a board in another room
    so that I can reuse the same card content in a different room.

    Scenario Outline: Move a card from a source room to a target room within the same school

        # pre-condition: teacher account and source room, board, and card exist
        # teacher has 'owner' rights in both rooms
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room named '<room_name_source>' exists
        Given a multi-column board named '<board_title_source>' exists in the room
        Given the multi-column board has a column with a card titled '<card_title>'
        Given link element is added in the card
        Given etherpad is added in the card
        Given the card has a folder named '<file_folder>'
        Given the card contains image '<image_file>' element

        # pre-condition: target room and target board exist
        Given a room named '<room_name_target>' exists
        Given a multi-column board named '<board_title_target>' exists in the room
        Given the multi-column board has a column with a card titled '<card_title>'

        # teacher moves the card from source board to target board / room
        When I go to rooms overview
        When I click on button Open to go to room '<room_name_source>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        Then I see the page board details
        When I click outside of the card to save it
        When I click on the three dot on the card
        When I click on the option 'export' on the card
        Then I see the title in the share modal
        When I select the room '<room_name_target>' from the room list in the move modal
        When I select the board '<board_title_target>' from the board list in the move modal
        When I select the column '<column_name>' from the column list in the move modal
        When I click on the button Confirm in the share modal
        Then I see the alert message
        Then I see the page board details
        Then I do not see the card titled '<card_title>' on the source board

        # teacher checks the moved card in the target board / room
        When I go to rooms overview
        When I click on button Open to go to room '<room_name_target>' at position '1'
        Then I see the detail page of room '<room_name_target>'
        When I click on the button Open on multi-column board in the room detail page
        Then I see the page board details
        Then I see the card titled '<card_title>' on the target board
        Then I see the element Link in the target card
        Then I see element Etherpad in the target card
        Then I see element Folder in the target card
        Then I see element Image in the target card

        # post-condition: rooms created by the teacher are deleted
        Given the room '<room_name_target>' at position '1' is deleted
        Given the room '<room_name_source>' at position '0' is deleted

        @school_api_test
        @staging_test
        Examples:
            | teacher      | namespace | room_name_source       | room_name_target       | board_title_source   | board_title_target   | card_title             | file_folder       | image_file      | column_name |
            | teacher1_brb | brb       | CypressAut Room Name-1 | CypressAut Room Name-2 | CypressAut Board Src | CypressAut Board Tgt | CypressAut Source Card | Cypress Card Docs | example_jpg.jpg | Abschnitt 1 |

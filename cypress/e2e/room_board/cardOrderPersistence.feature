@regression_test
@mikroorm_v7
Feature: Room Board - Card order is persisted after reload
    As a teacher,
    I want the order of cards in a board column to be kept after reloading the page
    so that my board structure stays as I arranged it.

    Scenario Outline: Card inserted above and card moved by keyboard keep their position after reload

        # pre-condition: teacher account, room, board and card exist
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card titled '<existing_card_title>'

        # teacher adds a new card above the existing card
        Then I see the page board details
        When I click on the three dot on the card
        When I click on the option 'add' on the card
        When I enter card title '<new_card_title>' in the card title field
        When I click outside of the card to save it
        Then I see card '<new_card_title>' is inserted above card '<existing_card_title>'

        # assertion: insert position is persisted
        When I reload the board page and wait for the cards
        Then I see card '<new_card_title>' is inserted above card '<existing_card_title>'

        # teacher moves the new card below the existing card using the keyboard
        When I move the card at column 0 row 0 down using the keyboard
        Then I see card '<existing_card_title>' is inserted above card '<new_card_title>'

        # assertion: moved position is persisted
        When I reload the board page and wait for the cards
        Then I see card '<existing_card_title>' is inserted above card '<new_card_title>'

        # post-condition: room created by the teacher is deleted
        Given the room '<room_name>' at position '0' is deleted

        @school_api_test
        Examples:
            | teacher      | namespace | room_name                       | board_title                    | existing_card_title             | new_card_title              |
            | teacher1_brb | brb       | CypressAut Room Card Order      | CypressAut Board Card Order    | CypressAut Card Order Existing  | CypressAut Card Order New   |

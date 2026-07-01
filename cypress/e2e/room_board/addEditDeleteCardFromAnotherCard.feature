@regression_test
@stable_test
@schedule_run
@group-E
@prio_0_staging
Feature: Room Board - Add, edit, and delete a card from the three dots menu in the card
    As a teacher,
    I want to add, edit, and delete a card from the three dots menu in the card
    so that I can manage the card content efficiently.

    Scenario Outline: Add, edit, and delete a card from the three dots menu in the card

        # pre-condition: teacher account and source room, board, and card exist
        # teacher has 'owner' rights in the room
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card titled '<existing_card_title>'

        # teacher adds a new card from the existing card three dots menu
        Then I see the page board details
        When I click on the three dot on the card
        When I click on the option 'add' on the card
        When I enter card title '<new_card_title>' in the card title field
        When I click outside of the card to save it
        Then I see a card titled '<new_card_title>'

        # assertion: new card is inserted above the existing card
        Then I see card '<new_card_title>' is inserted above card '<existing_card_title>'

        # teacher edits the newly added card from the three dots menu
        When I click on the three dot on the card
        When I click on the option 'edit' on the card
        When I enter card title '<edited_new_card_title>' in the card title field
        When I click outside of the card to save it
        Then I see a card titled '<edited_new_card_title>'

        # assertion: edited card is displayed with the new title
        Then I see a card titled '<edited_new_card_title>'

        # teacher deletes the edited card from the three dots menu
        When I click on the three dot on the card
        When I click on the option 'delete' on the card
        Then I see the dialog Confirm deletion
        When I click on the button Delete in the confirmation dialog
        Then I do not see a card titled '<edited_new_card_title>'

        #assertion: teacher sees old existing card is still present
        Then I see a card titled '<existing_card_title>'

        # post-condition: room created by the teacher is deleted
        Given the room '<room_name>' at position '0' is deleted

        @school_api_test
        @staging_test
        Examples:
            | teacher      | namespace | room_name                     | board_title                     | existing_card_title            | new_card_title                  | edited_new_card_title            |
            | teacher1_dbc | dbc       | CypressAut Room Name Add Card | CypressAut Board Add Card Above | CypressAut Existing Card Title | CypressAut New Card Title Above | CypressAut Edited New Card Title |

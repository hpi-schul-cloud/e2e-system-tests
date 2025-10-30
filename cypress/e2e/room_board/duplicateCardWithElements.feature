@regression_test
@stable_test
@schedule_run
@group-D
@prio_0_dev
Feature: Room Board - Copying a card with contents

    As a teacher,
    I want to duplicate a card along with some contents within the same room board,
    so that I can easily create a similar card without rebuilding its materials from scratch.

    Scenario Outline: Content editor duplicates a card with contents on the same board

        # pre-condition: creating accounts, room, board, and a card with various elements
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card
        Given link element is added in the card
        Given etherpad is added in the card
        Given the card has a folder named '<file_folder>'
        Given the card contains image '<image_file>' element
        Given more cards are in the column

        # teacher duplicates a card on the room board page and its always below the original card
        Then I see the page board details
        When I click outside of the card to save it
        When I click on the three dot on the card
        When I click on the option Duplicate on the first card
        Then I see a duplicated card below the original first card
        Then I see element Link in the duplicated card
        Then I see element Etherpad in the duplicated card
        Then I see element Folder in the duplicated card
        Then I see element Image in the duplicated card
        Then I see that after duplicating the first card, the previously added second card has moved to the third position in the column

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | namespace | teacher      | room_name                   | file_folder       | image_file      | board_title       |
            | dbc       | teacher1_dbc | CypressAuto Room - Card Dup | Cypress Card Docs | example_jpg.jpg | CypressAuto Board |

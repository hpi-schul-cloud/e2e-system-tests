@regression_test
@stable_test
@group-A
@schedule_run
Feature: Board Import - To start the import of a board from a link

    As a teacher, I want to start the import of a board from a link so that I get a copy of the board.

    Scenario Outline: Teacher starts a board import in a room

        # pre-condition: teacher logs in
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given the board import API is available

        # pre-condition: teacher creates a new room
        When I go to rooms overview
        When I click on FAB to create new room
        Then I see room creation page
        When I enter the room name '<room_name>'
        When I click on the button Save room
        Then I see the detail page of room '<room_name>'

        # teacher starts the import
        When I click on the button to import a board in the room
        Then I see the dialog to import a board
        When I enter the link '<link>' in the board import dialog
        When I click on the button Import in the board import dialog

        # the import worker processes the import job
        Then I see the board import job has the status 'finished' within 90 seconds

        # teacher reloads the room page and sees the imported board
        When I click on the button Close in the board import dialog
        When I reload the page
        Then I see the board '<board_title>' at position '0'
        When I click on the board '<board_title>' in the room
        Then I see the page board details
        Then I see my room board is named '<board_title>'
        Then I see a column with title '<first_column>' at position '0'
        Then I see a column with title '<third_column>' at position '2'
        Then I see a card titled '<card_title>'
        Then I see a rich text element with pattern '<card_text>' at position '2' '0'
        Then I see the element Link on the card
        Then I see the URL '<card_link>' in the element Link

        # post-condition: teacher deletes room
        When I click on the breadcrumb to navigate to the room detail page
        When I click on three dot menu in room page
        When I select the three dot menu action 'delete'
        Then I see confirmation modal for deleting the room
        When I click on delete button in confirmation modal
        Then I do not see '<room_name>' on room overview page

        @school_api_test
        Examples:
            | teacher      | namespace | room_name            | link                                                                                                             | board_title   | first_column | third_column | card_title | card_text                | card_link       |
            | teacher1_nbc | nbc       | CypressAut Room Name | https://www.taskcards.de/#/board/793bed21-a8ac-4a26-910e-2c3305ac6c0d?token=0599256f-0bd0-498b-b231-1899dd79a644 | Test Pinboard | Green        | Red          | Foobar     | Picture + colors changed | https://fwu.de/ |

@regression_test
@stable_test
Feature: Room - Upload and download different files types in the Room Board

    As a teacher, I want to upload and download files on the room board so that I can easily share and access different file types (e.g., documents, images).

    Scenario: Upload & download different file in the room board, including pre & post conditions

        # pre-condition: creating accounts
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: room, board and card are existing
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card

        # teacher uploads files in the multi-column room board
        When I click on the three dot on the card
        When I click on the option edit in the three dot menu on the card
        When I click on plus icon to add content into card
        Then I see the dialog box to select element for the card
        When I click on the button Close on the element selection dialogue box
        Then I do not see the element selection dialogue box
        When I click on plus icon to add content into card
        Then I see the dialog box to select element for the card
        When I select 'file' from the element selection dialog box
        # tbd


        # student can see the file in the multi-column board
        # note: this scenario can not be defined as adding the student to the room feature is not yet implementred.

        # post-condition: delete the room
        Given I navigate to the room detail page from the board page
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | teacher      | namespace | room_name         | board_title    | file_type_1 | file_type_2 |
            | teacher1_dbc | dbc       | Cypress Room Name | Board Cy Title |             |             |

        @staging_test
        Examples:
            | teacher      | namespace | room_name         | board_title    |
            | teacher1_dbc | dbc       | Cypress Room Name | Board Cy Title |
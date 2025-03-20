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

        # teacher uploads file in the multi-column room board
        When I click on the three dot on the card
        When I click on the option edit in the three dot menu on the card
        When I click on plus icon to add content into card
        Then I see the dialog box to select element for the card
        When I click on the button Close on the element selection dialogue box
        Then I do not see the element selection dialogue box
        When I click on plus icon to add content into card
        Then I see the dialog box to select element for the card
        When I select 'file' from the element selection dialog box
        When I upload a file '<image_file_name>'
        Then I click outside of the card to save it
        When I click on the three dot on the card
        When I click on the option edit in the three dot menu on the card
        Then I enter caption text '<image_caption_text>'
        When I click on the three dot on the card
        When I click on the option edit in the three dot menu on the card
        Then I enter alternative text '<alternative_text>'
        Then I see the image file is in the card
        When I click on the thumbnail image in the card
        Then I see the image from the card in fullscreen

        # student can see the file in the multi-column board
        # note: this scenario can not be defined as adding the student to the room feature is not yet implementred.

        # teacher downloads the image file and closes the fullscreen image window
        When I click on the icon download file on the fullscreen image
        Then file '<image_file_name>' is saved in folder downloads
        When I click on the icon Close on the fullscreen image
        Then I see the image file is in the card

        # teacher deletes image file in the multi-column room board
        When I click on the three dot on the card
        When I click on the option edit in the three dot menu on the card
        When I click on the three-dot menu in the File element
        When I click on the option Delete in the three-dot menu
        Then I see the dialog delete confirmation
        When I click on the button Delete in the confirmation dialog
        Then I do not see the element File

        # student can not see the file in the multi-column board
        # note: this scenario can not be defined as adding the student to the room feature is not yet implementred.

        # post-condition: delete the room
        Given I navigate to the room detail page from the board page
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | teacher      | namespace | room_name         | board_title    | image_file_name | image_caption_text | alternative_text  |
            | teacher1_nbc | nbc       | Cypress Room Name | Board Cy Title | example_jpg.jpg | CY image test file | CY image alt text |

        @staging_test
        Examples:
            | teacher      | namespace | room_name         | board_title    | image_file_name | image_caption_text | alternative_text  |
            | teacher1_dbc | dbc       | Cypress Room Name | Board Cy Title | example_jpg.jpg | CY image test file | CY image alt text |
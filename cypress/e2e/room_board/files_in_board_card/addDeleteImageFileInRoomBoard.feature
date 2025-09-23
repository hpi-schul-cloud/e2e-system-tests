@regression_test
@stable_test
@schedule_run
@group-A
@prio_0_staging
Feature: Room Board - Upload, download and delete image file type in the Room Board

    As a teacher, I want to upload, download and delete image file in the room board so that I can easily share and manage the board contents.

    Scenario Outline: Upload, download and delete image file in the room board

        # pre-condition: creating accounts
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: room, board and card are existing
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card

        # teacher uploads image file in the multi-column room board
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        Then I see the dialog Add Element in the card
        When I click on the button Close in the dialog Add Element
        Then I do not see the dialog Add Element in the card
        When I click on icon Plus to add content into card
        Then I see the dialog Add Element in the card
        When I select 'file' from the element selection dialog box
        When I upload a file '<image_file_name>'
        When I click outside of the card to save it
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I enter text in the textbox Caption '<image_caption_text>'
        When I click outside of the card to save it
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I enter text in the textbox Alternative Text  '<alternative_text>'
        When I click outside of the card to save it
        Then I see the file type Image in the card
        When I click on the thumbnail Image in the card
        Then I see the image in a lightbox

        # student can see the image file in the multi-column board
        # NOTE: this scenario can not be defined as adding a student into the room is not yet implemented.

        # teacher downloads the image file and closes the fullscreen image window
        When I click on icon Download in the fullscreen image
        Then file '<image_file_name>' is saved in folder downloads
        When I click on the icon Close on the fullscreen image
        Then I see the file type Image in the card

        # teacher deletes the element File with image in the multi-column room board
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on the three dot in the element File
        When I click on the option Delete in the three dot menu
        Then I see the dialog Confirm deletion
        When I click on the button Delete in the confirmation dialog
        Then I do not see the element File

        # student can not see the image file in the multi-column board
        # NOTE: this scenario can not be defined as adding a student into the room is not yet implemented.

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        @staging_test
        Examples:
            | teacher      | namespace | room_name            | board_title            | image_file_name | image_caption_text         | alternative_text          |
            | teacher1_dbc | dbc       | CypressAut Room Name | CypressAut Board Title | example_jpg.jpg | CypressAut image test file | CypressAut image alt text |

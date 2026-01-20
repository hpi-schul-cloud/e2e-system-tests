@regression_test
@stable_test
@schedule_run
@group-A
@prio_0_staging
Feature: Room Board - Upload, download and delete image file type in the Room Board

    As a teacher, I want to upload, download and delete image file in the room board so that I can easily share and manage the board contents.

    Scenario Outline: Upload, download and delete image file in the room board

        # pre-condition: creating accounts
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: room, board and card are existing
        Given a room named '<room_name>' with a multi-column board named '<board_title>' exists
        Given the multi-column board has a column with a card
        Given multi column board is published to not to be in a draft mode
        Given '<student_name>' added in the room '<room_name>' at position '0' with role '<role_name_student>' and default read permission

        # teacher uploads image file with caption and alternative text in the multi-column room board
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
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
        When I enter text in the textbox Caption '<image_caption_text>'
        When I enter text in the textbox Alternative Text '<alternative_text>'
        When I click outside of the card to save it
        Then I see the file type Image in the card

        # teacher edits caption and alternative text of the image file in the multi-column room board
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I clear '<caption_field>' from the file
        When I enter text in the textbox Caption '<image_caption_text_rename>'
        When I clear '<alternative_text_field>' from the file
        When I enter text in the textbox Alternative Text '<alternative_text_rename>'
        When I click outside of the card to save it
        Then I see the file type Image in the card

        # teacher removes the image filename, verifies validation message and renames filename in the multi-column room board
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on the three dot in the element File
        When I clear '<file_name_field>' from the file
        Then I see a validation error message '<error_message>' below the name field for file card
        When I enter name '<image_file_name_rename>' for file in card
        When I click outside of the card to save it
        Then I see the file type Image in the card

        # student can see the image file in the multi-column board
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        Then I see the file type Image in the card
        When I click on the thumbnail Image in the card
        Then I see the image in a lightbox

        # teacher previews the image, downloads the image file and closes the fullscreen image window
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        When I click on the thumbnail Image in the card
        Then I see the image in a lightbox
        When I click on icon Download in the fullscreen image
        Then file '<image_file_name_rename>' is saved in folder downloads
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
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        Then I do not see the element File

        # post-condition: delete the room
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given the room '<room_name>' at position '0' is deleted

        @school_api_test
        @staging_test
        Examples:
            | teacher      | student      | namespace | student_name | role_name_student | room_name            | board_title            | image_file_name | image_caption_text         | alternative_text          | image_caption_text_rename          | alternative_text_rename           | error_message               | image_file_name_rename | file_name_field | caption_field | alternative_text_field |
            | teacher1_dbc | student1_dbc | dbc       | student_1    | Lernend           | CypressAut Room Name | CypressAut Board Title | example_jpg.jpg | CypressAut image test file | CypressAut image alt text | CypressAut image test file renamed | CypressAut image alt text renamed | Bitte fülle dieses Feld aus | example_jpg_rename.jpg | Name            | Caption       | Alttext                |

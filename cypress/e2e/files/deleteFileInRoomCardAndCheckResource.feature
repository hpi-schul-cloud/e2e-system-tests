@regression_test
@stable_test
@schedule_run
@group-A
@prio_0-staging
Feature: Files - Delete image file in room board and check file resource

    As a teacher delete an image file in the room board and check if the file resource is not available anymore so that I can manage files in the board.

    Scenario Outline: Upload and delete image file in the room board and check file resource

        # pre-condition: creating account
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: room, board and card are existing
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card

        # pre-condition: teacher uploads image file in the multi-column room board
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        When I select 'file' from the element selection dialog box
        When I upload a file '<image_file_name>'
        When I click outside of the card to save it
        Then I see the file type Image in the card

        # teacher copies the image file path and closes the fullscreen window
        When I copy the file path of the image file '<image_file_name>' from the card
        Then I see that image resource is available '<image_file_name>'

        # teacher deletes the element file with image in the multi-column room board and verifies deletion
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on the three dot in the element File
        When I click on the option Delete in the three dot menu
        Then I see the dialog Confirm deletion
        When I click on the button Delete in the confirmation dialog
        Then I do not see the element File
        Then I see that image resource is not available '<image_file_name>'

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        @staging_test
        Examples:
            | teacher      | namespace | room_name                     | board_title                         | image_file_name |
            | teacher1_dbc | dbc       | CypressAut File Deletion Room | CypressAut File Deletion Test Board | example_jpg.jpg |

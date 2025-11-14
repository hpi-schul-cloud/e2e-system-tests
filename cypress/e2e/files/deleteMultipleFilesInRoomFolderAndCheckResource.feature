@regression_test
@stable_test
@schedule_run
@group-B
@prio_0_staging
Feature: Files - Delete multiple files in folder and check file resource

    As a content editor, I want to delete multiple files from a folder in a room board and verify they are no longer available

    Scenario Outline:  Content editor is able to delete multiple files from folder in a board

        # pre-condition: creating teacher accounts and room with board
        Given I am logged in as a '<content_editor>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card

        # pre-condition: content editor creates a folder element in the card
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        When I select 'file-folder' from the element selection dialog box
        When I click on the page outside of the column
        Then I see a folder with name '<folder_name>' in the card

        # pre-condition: content editor opens folder
        When I click on the folder '<folder_name>' in the card
        Then I see page Folder content for '<folder_name>'

        # content editor uploads files
        When I click on button Add file
        When I upload multiple files '<image1_file_name>, <image2_file_name>' to file folder
        Then I see files '<image1_file_name>, <image2_file_name>' in file list

        # content editor copies path of images
        When I copy the file path of the image file '<image1_file_name>' from folder
        Then I see that image resource is available '<image1_file_name>'
        When I copy the file path of the image file '<image2_file_name>' from folder
        Then I see that image resource is available '<image2_file_name>'

        # content editor deletes multiple files using action button in header of list
        When I check the checkbox in the table header for all elements
        When I click on button Action in the header of the list
        When I select the three dot menu action 'delete'
        When I click on button Approve in modal
        Then I do not see files '<image1_file_name>, <image2_file_name>' in file list
        Then I see that image resource is not available '<image1_file_name>'
        Then I see that image resource is not available '<image2_file_name>'

        # post-condition: delete the room
        Given the room named '<room_name>' at position '0' is deleted

        @school_api_test
        @staging_test
        Examples:
            | namespace | content_editor | room_name              | board_title             | folder_name        | image1_file_name | image2_file_name  |
            | dbc       | teacher1_dbc   | CypressAut Folder Room | CypressAut Folder Board | Unbenannter Ordner | example_jpg.jpg  | testboard_jpg.jpg |

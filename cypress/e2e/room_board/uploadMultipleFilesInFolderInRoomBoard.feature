@regression_test
@stable_test
Feature: Room Board - Upload multiple files in folder in board

As a content editor I want to upload multiple files to a folder in a room board

Scenario Outline:  Content editor is able to upload multiple files to folder in a board
        # pre-condition: creating accounts and room with board
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
        Then I see a folder with name '<folder_name>' in the card

        # pre-condition: content editor opens folder
        When I click on the folder '<folder_name>' in the card
        Then I see page Folder content for '<folder_name>'

        # editor uploads multiple files
        #When I upload a file '<file_name>' to file folder
        #Then I see success message
        #Then I do not see success message after 5 seconds
        #Then I see file list of folder '<folder_name>' with columns 'checkbox, preview, filename, creation_date, file_size, three-dot-menu'
        #Then I see file '<file_name>' with file size '<file_size>'and creation date today in file list

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | namespace | content_editor | room_name              | board_title             | folder_name         |
            | dbc       | teacher1_dbc   | CypressAut Folder Room | CypressAut Folder Board | Unbenannter Ordner  |

        # @staging_test
        # Examples:
        #     | namespace | content_editor      | room_name               | board_title             | folder_name         |
        #     | brb       | teacher1_brb        | CypressAut Folder Board | CypressAut Folder Board | Unbenannter Ordner  |

@regression_test
@stable_test
Feature: Room Board - Create, edit and delete folder in board, including file handling inside the folder (in progress)

As a content editor I want to create a file folder in a room board

Scenario Outline:  Content editor is able to create, edit and delete a folder in a board
        # pre-condition: creating accounts and room with board
        Given I am logged in as a '<content_editor>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card

        # content editor creates a folder element in the card
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        When I select 'file-folder' from the element selection dialog box
        Then I see a folder with name '<folder_name>' in the card

        # content editor opens folder
        When I click on the folder '<folder_name>' in the card
        Then I see page Folder content for '<folder_name>'
        Then I see message Empty folder
        #Then I see page Folder content does not contain files - will be implemented when files can be displayed in folders
        Then I see breadcrumb with 'Räume, <room_name>, <board_title>'
        Then I see button Add file

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

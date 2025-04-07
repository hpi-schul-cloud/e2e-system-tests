@regression_test
@stable_test
Feature: Create, edit and delete folder in board, including file handling inside the folder (in progress)

As a teacher I want to create a file folder in a room board

Scenario Outline:  Teacher is able to create, edit and delete a folder in a board
        # pre-condition: creating accounts and room with board
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card

        # teacher creates a whiteboard element in the card and draws on it
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        When I select 'file-folder' from the element selection dialog box
        Then I should see a folder with name '<folder_name>' in the card

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | namespace | teacher      | room_name               | board_title             | folder_name         |
            | dbc       | teacher1_dbc | CypressAut Folder Board | CypressAut Folder Board | Unbenannter Ordner  |

        @staging_test
        Examples:
            | namespace | teacher      | room_name               | board_title             | folder_name         |
            | brb       | teacher1_brb | CypressAut Folder Board | CypressAut Folder Board | Unbenannter Ordner  |

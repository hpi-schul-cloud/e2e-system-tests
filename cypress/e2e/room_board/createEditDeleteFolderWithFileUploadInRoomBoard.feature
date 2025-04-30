@regression_test
@stable_test
Feature: Room Board - Create, edit and delete folder in board, including file handling inside the folder

    As a content editor I want to create a file folder in a room board so that I can manage the files in the room.

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
        Then I see breadcrumb with 'Räume, <room_name>, <board_title>'
        Then I see button Add file

        # editor uploads file
        When I click on button Add file
        When I upload a file '<file_name>' to file folder
        Then I see message Upload progress
        Then I see file '<file_name>' with file size '<file_size>' in file list
        Then I see today as creation date of file '<file_name>'

        # editor uploads second file
        When I click on button Add file
        When I upload a file '<file_name_2>' to file folder
        Then I see message Upload progress
        Then I see file '<file_name_2>' with file size '<file_size_2>' in file list
        Then I see links to change order for 'Name, Erstellt, Größe'
        When I click on table header link 'Name'
        Then I see '<file_name_2>' and '<file_name>' on the first two positions
        When I click on table header link 'Name'
        Then I see '<file_name>' and '<file_name_2>' on the first two positions
        When I click on table header link 'Größe'
        Then I see '<file_name_2>' and '<file_name>' on the first two positions
        When I click on table header link 'Erstellt'
        Then I see '<file_name>' and '<file_name_2>' on the first two positions
        When I click on table header link 'Erstellt'
        Then I see '<file_name_2>' and '<file_name>' on the first two positions
        When I click on table header link 'Name'
        Then I see '<file_name_2>' and '<file_name>' on the first two positions
        When I click on table header link 'Name'
        Then I see '<file_name>' and '<file_name_2>' on the first two positions

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | namespace | content_editor | room_name              | board_title             | folder_name        | file_name                | file_size | file_name_2                | file_size_2 |
            | dbc       | teacher1_dbc   | CypressAut Folder Room | CypressAut Folder Board | Unbenannter Ordner | sample_video_1mb_mp4.mp4 | 1,83 MB   | sample_audio_0.4mb_mp3.mp3 | 433,52 KB   |


# @staging_test
# Examples:
#     | namespace | content_editor      | room_name               | board_title             | folder_name         |
#     | brb       | teacher1_brb        | CypressAut Folder Board | CypressAut Folder Board | Unbenannter Ordner  |

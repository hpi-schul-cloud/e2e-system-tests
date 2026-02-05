@unstable_test
# @regression_test
# @group-B
# @prio_0_staging
# Marking it as unstable due to BC-11009
Feature: Room Board - Create, edit and delete folder in board, including file handling inside the folder

    As a content editor, I want to create a file folder in a room board so that I can manage the files in the room.

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
        When I enter name '<folder_name_edited>' for file folder in card
        When I click on the page outside of the column
        Then I see a folder with name '<folder_name_edited>' in the card

        # editor removes folder name and name is reset to previous folder name
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I clear folder name in card
        Then I see a validation error message '<error_message>' below the name field for file folder
        When I click on the page outside of the column
        Then I see a folder with name '<folder_name_edited>' in the card

        # editor renames folder on room page
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I enter name '<folder_name_renamed>' for file folder in card
        When I click on the page outside of the column
        Then I see a folder with name '<folder_name_renamed>' in the card

        # content editor opens folder
        When I click on the folder '<folder_name_renamed>' in the card
        Then I see page Folder content for '<folder_name_renamed>'
        Then I see message Empty folder
        Then I see breadcrumb with 'Räume, <room_name>, <board_title>'
        Then I see sidebar item 'rooms' is highlighted
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
        Then I see links to change order for 'Name, Zuletzt, Größe'
        When I click on table header link 'Name'
        Then I see '<file_name_2>' and '<file_name>' on the first two positions
        When I click on table header link 'Name'
        Then I see '<file_name>' and '<file_name_2>' on the first two positions
        When I click on table header link 'Größe'
        Then I see '<file_name_2>' and '<file_name>' on the first two positions
        When I click on table header link 'Zuletzt'
        Then I see '<file_name>' and '<file_name_2>' on the first two positions
        When I click on table header link 'Zuletzt'
        Then I see '<file_name_2>' and '<file_name>' on the first two positions
        When I click on table header link 'Name'
        Then I see '<file_name_2>' and '<file_name>' on the first two positions
        When I click on table header link 'Name'
        Then I see '<file_name>' and '<file_name_2>' on the first two positions

        # editor downloads second file
        When I click on three dot menu in row of file '<file_name>'
        When I select the three dot menu action 'download'
        Then file '<file_name>' is saved in folder downloads

        # editor renames first file
        When I click on three dot menu in row of file '<file_name>'
        When I select the three dot menu action 'rename'
        Then I see modal Rename file
        When I enter '<file_name_renamed_without_suffix>' in input field New name
        When I click on button Approve in modal
        Then I see file '<file_name_renamed>' with file size '<file_size>' in file list

        # editor downloads renamed first file
        When I click on three dot menu in row of file '<file_name_renamed>'
        When I select the three dot menu action 'download'
        Then file '<file_name_renamed>' is saved in folder downloads

        # editor deletes second file using action menu in row
        When I click on three dot menu in row of file '<file_name_2>'
        When I select the three dot menu action 'delete'
        Then I see confirmation modal for deleting the file
        When I click on button Approve in modal for deletion
        Then I do not see files '<file_name_2>' in file list

        # editor deletes first file using header action menu, so no file is in the list anymore
        When I check the checkbox of file '<file_name_renamed>'
        Then I see fab button Action at the top of the list
        When I click on button Action in the header of the list
        When I select the three dot menu action 'delete'
        When I click on button Approve in modal for deletion
        Then I see page Folder content for '<folder_name_renamed>'
        Then I see message Empty folder

        # editor deletes folder on folder page
        When I click on the three dot menu button next to the folder title
        When I select the three dot menu action 'delete'
        Then I see confirmation modal for deleting the file folder
        When I click on delete button in confirmation modal
        Then I see my room board is named '<board_title>'
        Then I do not see a folder element on board

        # post-condition: delete the room
        Given the room '<room_name>' at position '0' is deleted

        @school_api_test
        Examples:
            | namespace | content_editor | room_name              | board_title             | folder_name_edited          | file_name                | file_name_renamed        | file_name_renamed_without_suffix | file_size | file_name_2                | file_size_2 | error_message               | folder_name_renamed            |
            | dbc       | teacher1_dbc   | CypressAut Folder Room | CypressAut Folder Board | CypressAut Test File Folder | sample_video_1mb_mp4.mp4 | sample_video_renamed.mp4 | sample_video_renamed             | 1,83 MB   | sample_audio_0.4mb_mp3.mp3 | 433,52 KB   | Bitte fülle dieses Feld aus | CypressAut File Folder Renamed |

        @staging_test
        Examples:
            | namespace | content_editor | room_name              | board_title             | folder_name_edited          | file_name                | file_name_renamed        | file_name_renamed_without_suffix | file_size | file_name_2                | file_size_2 | error_message               | folder_name_renamed            |
            | dbc       | teacher1_dbc   | CypressAut Folder Room | CypressAut Folder Board | CypressAut Test File Folder | sample_video_1mb_mp4.mp4 | sample_video_renamed.mp4 | sample_video_renamed             | 1,83 MB   | sample_audio_0.4mb_mp3.mp3 | 433,52 KB   | Bitte fülle dieses Feld aus | CypressAut File Folder Renamed |

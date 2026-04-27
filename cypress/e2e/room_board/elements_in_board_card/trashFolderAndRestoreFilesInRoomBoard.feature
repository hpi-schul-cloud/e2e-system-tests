@stable_test
@regression_test
# @group-B
# @prio_0_staging
Feature: Room Board - Trash for file folders and restoring deleted files

    As an authorized user, I want to see deleted files of a file folder in the corresponding trash and be able to restore them.


    Scenario Outline: Trash and restore deleted files in file folder

        # Precondition: Room with board and file folder, user with edit rights
        Given I am logged in as a '<content_editor>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card
        Given the card has a folder named '<folder_name>'
        Given the folder '<folder_name>' contains files '<file_name>, <file_name_2>'

        # Delete file and check trash
        When I click on three dot menu in row of file '<file_name_2>'
        When I select the three dot menu action 'delete'
        Then I see confirmation modal for deleting the file
        When I click on button Approve in modal for deletion
        Then I do not see files '<file_name_2>' in file list

        # When I delete file '<file_name>' via three dot menu
        # Then I see a link 'Papierkorb' below the file table
        # When I click on the link 'Papierkorb'
        # Then I see the trash page with heading 'Papierkorb: <folder_name_edited>'
        # Then I see a breadcrumb showing the path to the trash
        # Then I see an info message 'Dateien werden 7 Tage nach Verschieben in den Papierkorb automatisch gelöscht.'
        # Then I see file '<file_name>' with column 'gelöscht am' and the deletion date
        # Then I do not see file '<file_name_2>' in the trash

        # # Restore file
        # When I select file '<file_name>' in the trash
        # When I click on the action 'Wiederherstellen' in the three dot menu
        # Then I see file '<file_name>' restored in the file folder

        # # MultiSelect restore
        # When I delete file '<file_name_2>' via three dot menu
        # When I select all files in the trash
        # When I click on the action 'Wiederherstellen' in the header
        # Then I see all files restored in the file folder

        # # Check wording in delete flow
        # When I open the three dot menu for a file
        # Then I see the action 'In Papierkorb verschieben'
        # When I click on the action 'In Papierkorb verschieben'
        # Then I see the dialog 'Datei <file_name> wirklich in den Papierkorb verschieben?'
        # When I confirm the dialog
        # Then I see file '<file_name>' in the trash

        @school_api_test
        Examples:
            | namespace | content_editor | room_name              | board_title             | folder_name                 | file_name                | file_name_2                |
            | dbc       | teacher1_dbc   | CypressAut Folder Room | CypressAut Folder Board | CypressAut Test File Folder | sample_video_1mb_mp4.mp4 | sample_audio_0.4mb_mp3.mp3 |

        @staging_test
        Examples:
            | namespace | content_editor | room_name              | board_title             | folder_name                 | file_name                | file_name_2                |
            | dbc       | teacher1_dbc   | CypressAut Folder Room | CypressAut Folder Board | CypressAut Test File Folder | sample_video_1mb_mp4.mp4 | sample_audio_0.4mb_mp3.mp3 |

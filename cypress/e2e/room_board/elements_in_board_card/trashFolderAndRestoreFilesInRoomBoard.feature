@stable_test
@regression_test
@group-A
@prio_0_staging
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

        # Move file to trash bin and check trash bin
        When I click on three dot menu in row of file '<file_name_2>'
        When I select the three dot menu action 'delete'
        Then I see confirmation modal for deleting the file
        When I click on button Approve in modal for deletion
        Then I do not see files '<file_name_2>' in file list

        # open trash bin
        When I click on the link Show trash bin
        # waiting because sometimes the file is not immediately moved to trash and the test fails because of that, waiting for 1 second should be enough
        When I wait '1' seconds and reload
        Then I see the trash bin page for folder '<folder_name>'
        Then I see breadcrumb with '<board_title>, <folder_name>, Papierkorb'
        Then I see an info message "Dateien werden 7 Tage nach dem Verschieben in den Papierkorb automatisch gelöscht."
        Then I see file '<file_name_2>' with file size '<file_size_2>' in file list
        Then I see today as deletion date of file '<file_name_2>'

        # Recycling of file
        When I click on three dot menu in row of file '<file_name_2>'
        When I select the three dot menu action 'restore'
        Then I see the trash bin page for folder '<folder_name>'
        Then I do not see files '<file_name_2>' in file list
        Then I see message Empty folder

        # See the restored file back in the folder
        When I click on breadcrumb element '<folder_name>'
        Then I see page Folder content for '<folder_name>'
        Then I see file '<file_name_2>' with file size '<file_size_2>' in file list

        # Add some more files and move multiple
        When I click on button Add file
        When I upload a file '<file_name_3>' to file folder
        When I upload a file '<file_name_4>' to file folder
        Then I see files '<file_name>, <file_name_2>, <file_name_3>, <file_name_4>' in file list
        When I check the checkbox of file '<file_name>'
        When I check the checkbox of file '<file_name_3>'
        When I check the checkbox of file '<file_name_4>'
        When I click on button Action in the header of the list
        When I select the three dot menu action 'delete'
        When I click on button Approve in modal for deletion
        Then I do not see files '<file_name>, <file_name_3>, <file_name_4>' in file list

        # Check and Restore multiple files
        When I click on the link Show trash bin
        # waiting because sometimes the file is not immediately moved to trash and the test fails because of that, waiting for 1 second should be enough
        When I wait '1' seconds and reload
        Then I see files '<file_name>, <file_name_3>, <file_name_4>' in file list
        When I check the checkbox of file '<file_name_3>'
        When I check the checkbox of file '<file_name_4>'
        When I click on button Action in the header of the list
        When I select the three dot menu action 'restore'
        Then I see the trash bin page for folder '<folder_name>'
        Then I do not see files '<file_name_3>, <file_name_4>' in file list
        Then I see files '<file_name>' in file list

        # See the restored files back in the folder
        When I click on breadcrumb element '<folder_name>'
        Then I see files '<file_name_2>, <file_name_3>, <file_name_4>' in file list

        #Post-condition: delete the room
        Given the room '<room_name>' at position '0' is deleted

        @school_api_test
        Examples:
            | namespace | content_editor | room_name              | board_title             | folder_name                 | file_name                | file_size | file_name_2                | file_size_2 | file_name_3     | file_name_4      |
            | dbc       | teacher1_dbc   | CypressAut Folder Room | CypressAut Folder Board | CypressAut Test File Folder | sample_video_1mb_mp4.mp4 | 1,83 MB   | sample_audio_0.4mb_mp3.mp3 | 433,52 KB   | example_jpg.jpg | sample-docx.docx |

        @staging_test
        Examples:
            | namespace | content_editor | room_name              | board_title             | folder_name                 | file_name                | file_size | file_name_2                | file_size_2 | file_name_3     | file_name_4      |
            | dbc       | teacher1_dbc   | CypressAut Folder Room | CypressAut Folder Board | CypressAut Test File Folder | sample_video_1mb_mp4.mp4 | 1,83 MB   | sample_audio_0.4mb_mp3.mp3 | 433,52 KB   | example_jpg.jpg | sample-docx.docx |

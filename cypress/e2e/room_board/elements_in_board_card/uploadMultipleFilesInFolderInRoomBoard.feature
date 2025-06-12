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
        When I click on the page outside of the column
        Then I see a folder with name '<standard_folder_name>' in the card

        # pre-condition: content editor opens folder
        When I click on the folder '<standard_folder_name>' in the card
        Then I see page Folder content for '<standard_folder_name>'

        # content editor uploads files
        When I click on button Add file
        When I upload multiple files '<video_file_name>, <audio_file_name>, <image_file_name>' to file folder
        Then I see files '<video_file_name>, <audio_file_name>, <image_file_name>' in file list
        Then I see state of table header checkbox is 'unchecked'

        # content editor opens image in lightbox
        When I click on the name of file '<image_file_name>' in file list
        Then I see the image in a lightbox
        When I click on icon Download in the fullscreen image
        Then file '<image_file_name>' is saved in folder downloads
        When I click on the icon Close on the fullscreen image
        Then I see page Folder content for '<standard_folder_name>'

        #editor opens audio in audio player
        When I click on the name of file '<audio_file_name>' in file list
        Then I see audio player
        When I click on icon Download in the fullscreen image
        Then file '<audio_file_name>' is saved in folder downloads
        When I click on the icon Close on the fullscreen image
        Then I see page Folder content for '<standard_folder_name>'

        # content editor opens video in video player
        When I click on the name of file '<video_file_name>' in file list
        Then I see video player
        When I click on icon Download in the fullscreen image
        Then file '<video_file_name>' is saved in folder downloads
        When I click on the icon Close on the fullscreen image
        Then I see page Folder content for '<standard_folder_name>'

        # content editor checks file / multiple files
        When I check the checkbox of file '<audio_file_name>'
        Then I see displayed number of checked files is '1'
        Then I see fab button Action at the top of the list
        When I uncheck the checkbox of file '<audio_file_name>'
        Then I do not see fab button Action at the top of the list
        When I check the checkbox of file '<video_file_name>'
        When I check the checkbox of file '<audio_file_name>'
        When I check the checkbox of file '<image_file_name>'
        Then I see displayed number of checked files is '3'
        Then I see state of table header checkbox is 'checked'
        When I uncheck the checkbox of file '<audio_file_name>'
        Then I see state of table header checkbox is 'mixed'
        Then I see displayed number of checked files is '2'
        Then I see fab button Action at the top of the list

        # content editor downloads multiple files
        When I click on button Action in the header of the list
        When I select the three dot menu action 'download'
        Then zip file for folder '<standard_folder_name>' with date of today is saved in folder downloads

        # content editor checks / unchecks all files
        When I check the checkbox in the table header for all elements
        Then I see checkboxes of files '<video_file_name>, <audio_file_name>, <image_file_name>' are checked
        When I uncheck the checkbox in the table header for all elements
        Then I see checkboxes of files '<video_file_name>, <audio_file_name>, <image_file_name>' are unchecked

        # content editor searches for files and uses check all checkbox
        When I enter '<search_request>' to the table search field
        Then I see files '<audio_file_name>' in file list
        Then I do not see files '<video_file_name>, <image_file_name>' in file list
        When I check the checkbox in the table header for all elements
        When I clear table search field
        Then I see displayed number of checked files is '1'
        Then I see checkboxes of files '<audio_file_name>' are checked
        Then I see checkboxes of files '<video_file_name>, <image_file_name>' are unchecked

        # content editor deletes multiple files using action button in header of list
        When I check the checkbox in the table header for all elements
        When I uncheck the checkbox of file '<audio_file_name>'
        Then I see fab button Action at the top of the list
        When I click on button Action in the header of the list
        When I select the three dot menu action 'delete'
        When I click on button Approve in modal
        Then I do not see files '<video_file_name>, <image_file_name>' in file list
        Then I see files '<audio_file_name>' in file list
        Then I see checkboxes of files '<audio_file_name>' are unchecked
        Then I see state of table header checkbox is 'unchecked'

        # content editor renames folder on folder page
        When I click on the three dot menu button next to the folder title
        When I select the three dot menu action 'rename'
        Then I see modal Rename folder
        When I enter '<folder_name_edited>' in input field New name
        When I click on button Approve in modal
        Then I see page Folder content for '<folder_name_edited>'

        # content editor removes folder name and name is resetted to standard folder name
        When I click on the three dot menu button next to the folder title
        When I select the three dot menu action 'rename'
        When I clear input field New name
        When I click on button Approve in modal
        Then I see page Folder content for '<standard_folder_name>'

        # content editor deletes folder on board page
        When I click on breadcrumb element '<board_title>'
        Then I see a folder with name '<standard_folder_name>' in the card
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on the three dot menu of the folder in card
        When I select the three dot menu action 'delete'
        Then I see confirmation modal for deleting the file folder
        When I click on button Approve in modal
        Then I see my room board is named '<board_title>'
        Then I do not see a folder element on board

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | namespace | content_editor | reader       | room_name              | board_title             | standard_folder_name | folder_name_edited | video_file_name          | audio_file_name            | image_file_name | search_request |
            | dbc       | teacher1_dbc   | teacher2_dbc | CypressAut Folder Room | CypressAut Folder Board | Unbenannter Ordner   | Cypress Test Files | sample_video_1mb_mp4.mp4 | sample_audio_0.4mb_mp3.mp3 | example_jpg.jpg | sample_audio   |

# @staging_test
# Examples:
#     | namespace | content_editor      | room_name               | board_title             | folder_name         |
#     | brb       | teacher1_brb        | CypressAut Folder Board | CypressAut Folder Board | Unbenannter Ordner  |

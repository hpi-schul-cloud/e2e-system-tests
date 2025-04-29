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

        # editor uploads files
        When I upload multiple files '<file_name>, <file_name_2>, <file_name_3>' to file folder
        Then I see files '<file_name>, <file_name_2>, <file_name_3>' in file list

        # editor checks file / multiple files
         When I check the checkbox of file '<file_name_2>'
        # Then I see number of checked files is 1
        # Then I see fab button Action at the top of the list
        When I uncheck the checkbox of file '<file_name_2>'
        # Then I do not see fab button Action at the top of the list
        # When I check the checkbox of file '<file_name>'
        # When I check the checkbox of file '<file_name_2>'
        # When I check the checkbox of file '<file_name_3>'
        # Then I see number of checked files is 3
        # When I uncheck the checkbox of files '<file_name_2>'
        # Then I see number of checked files is 2
        # Then I see fab button Action at the top of the list

        # # editor checks / unchecks all files
        When I check the checkbox in the table header for all elements
        Then I see checkboxes of files '<file_name>, <file_name_2>, <file_name_3>' are checked
        When I uncheck the checkbox in the table header for all elements
        Then I see checkboxes of files '<file_name>, <file_name_2>, <file_name_3>' are unchecked

        # # editor searches for files and uses check all checkbox
        When I enter '<search_request_2>' to the table search field
        Then I see files '<file_name_2>' in file list
        Then I do not see files '<file_name>, <file_name_1>' in file list
        When I check the checkbox in the table header for all elements
        When I clear table search field
        # Then I see number of checked files is 1
        Then I see checkboxes of files '<file_name_2>' are checked
        Then I see checkboxes of files '<file_name>, <file_name_3>' are unchecked

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | namespace | content_editor | reader       | room_name               | board_title             | folder_name         | file_name                | file_name_2                | file_name_3     | search_request_2 |
            | dbc       | teacher1_dbc   | teacher2_dbc | CypressAut Folder Board | CypressAut Folder Board | Unbenannter Ordner  | sample_video_1mb_mp4.mp4 | sample_audio_0.4mb_mp3.mp3 | example_jpg.jpg | sample_audio     |



        # @staging_test
        # Examples:
        #     | namespace | content_editor      | room_name               | board_title             | folder_name         |
        #     | brb       | teacher1_brb        | CypressAut Folder Board | CypressAut Folder Board | Unbenannter Ordner  |

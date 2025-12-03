@regression_test
@stable_test
@group-B
@prio_0_staging
Feature: Room Board - Create, edit and delete blank collabora Text file in file folder from create document modal in room board

    As a User, I want to create a blank collabora text file from create document modal in room board, edit and delete it in a file folder in room board

    Scenario Outline:  User is able to create a blank collabora text file in the file folder, edit and delete it in file folder in a room board

        # pre-condition: creating teacher account and room with board
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card
        Given the card has a folder named '<folder_name>'

        # teacher creates a blank collabora docx text file in the file folder from create document modal and edits the file
        When I click on the folder '<folder_name>' in the card
        When I click on button Add file
        When I click the button Create document in file folder
        Then I see the dialog box for create document in file folder
        When I select document type '<document_type_docx>' from the dialog box create document in file folder
        When I enter filename '<docx_file_name>' in the dialog box create document in file folder
        When I click on button Create document in file folder
        Then I see collabora text editor
        When I type text '<text_1>' in collabora editor on position '200', '400'
        When I click on the button Save in Collabora editor

        # teacher deletes collabora file using action button from the file folder
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I arrive on the dashboard
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        When I click on the folder '<folder_name>' in the card
        When I check the checkbox in the table header for all elements
        When I click on button Action in the header of the list
        When I select the three dot menu action 'delete'
        When I click on button Approve in modal
        Then I do not see files '<docx_file_name>' in file list

        # post-condition: delete the room
        Given the room '<room_name>' at position '0' is deleted

        @school_api_test
        @only
        Examples:
            | namespace | teacher_1    | room_name                 | board_title                | folder_name        | document_type_docx | docx_file_name | text_1             |
            | dbc       | teacher1_dbc | CypressAut Collabora Room | CypressAut Collabora Board | Unbenannter Ordner | .docx (Text)       | collabora-docx | Collabora Teacher1 |

        @staging_test
        Examples:
            | namespace | teacher_1    | room_name                 | board_title                | folder_name        | document_type_docx | docx_file_name | text_1             |
            | dbc       | teacher1_dbc | CypressAut Collabora Room | CypressAut Collabora Board | Unbenannter Ordner | .docx (Text)       | collabora-docx | Collabora Teacher1 |

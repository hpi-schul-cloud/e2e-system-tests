@regression_test
@stable_test
@group-B
@prio_0_staging
Feature: Room Board - Add, edit, view and delete collabora spreadsheet file in file folder in room board

    As a User, I want to add, edit, view and delete collabora spreadsheet file in a file folder in room board

    Scenario Outline:  User is able to Add, edit, view and delete collabora spreadsheet file in the file folder in a room board

        # pre-condition: creating teacher accounts and room with board
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card
        Given participant '<teacher_2_name>' is added to the room '<room_name>' at position '0'

        # pre-condition: first teacher creates a file folder element in the card
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        Given the card has a folder named '<folder_name>'
        Given the folder '<folder_name>' contains files '<xlsx_file_name>'

        # first teacher opens and edits collabora spreadsheet file in collabora editor from the file folder in edit mode
        When I click on the collabora file '<xlsx_file_name>' in the file folder
        Then I see collabora text editor
        When I type text '<value_1>' in collabora editor on position '200', '100'
        When I click on the button Save in Collabora editor

        # first teacher publishes the room board
        When I arrive on the dashboard
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        Given multi column board is published to not to be in a draft mode

        # second teacher views the xlsx file in collabora editor from the file folder in view mode and cannot edit the file
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        When I click on the folder '<folder_name>' in the card
        When I click on the collabora file '<xlsx_file_name>' in the file folder
        Then I cannot type text '<value_2>' in collabora editor on position '300', '100'

        # first teacher deletes collabora file using action button from the file folder
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I arrive on the dashboard
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        When I click on the folder '<folder_name>' in the card
        When I check the checkbox in the table header for all elements
        When I click on button Action in the header of the list
        When I select the three dot menu action 'delete'
        When I click on button Approve in modal for deletion
        Then I do not see files '<xlsx_file_name>' in file list

        # post-condition: delete the room
        Given the room '<room_name>' at position '0' is deleted

        @school_api_test
        Examples:
            | namespace | teacher_1    | teacher_2    | teacher_2_name | teacher_2_role | room_name                 | board_title                | folder_name        | xlsx_file_name   | value_1            | value_2            |
            | dbc       | teacher1_dbc | teacher2_dbc | teacher_2      | editor         | CypressAut Collabora Room | CypressAut Collabora Board | Unbenannter Ordner | sample-xlsx.xlsx | Collabora Teacher1 | Collabora Teacher2 |

        @staging_test
        Examples:
            | namespace | teacher_1    | teacher_2    | teacher_2_name | teacher_2_role | room_name                 | board_title                | folder_name        | xlsx_file_name   | value_1            | value_2            |
            | dbc       | teacher1_dbc | teacher2_dbc | Hande          | editor         | CypressAut Collabora Room | CypressAut Collabora Board | Unbenannter Ordner | sample-xlsx.xlsx | Collabora Teacher1 | Collabora Teacher2 |

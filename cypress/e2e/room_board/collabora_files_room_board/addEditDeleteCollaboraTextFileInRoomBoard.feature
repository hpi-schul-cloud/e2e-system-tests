@regression_test
@stable_test
@group-V
Feature: Collabora - Add, edit and delete collabora text file in the room board

    As a teacher with edit permission I want to add collabora text file, add text content and delete the file in a room board

    Scenario Outline:  Teacher is able to add collabora files in a board

        # pre-condition: creating accounts, room with board, adding participant teacher in the room and upload docx file
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card
        Given the file '<docx_file_name>' is added to the room board
        Given participant with participant name '<teacher_2_name>' is added to the room '<room_name>'
        Given participant '<teacher_2_name>' is having room role permission '<teacher_2_role>'

        # first teacher opens the collabora text file editor in the same tab
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name>'
        When I click on the multi-column board in the room detail page
        Then I see the file type DOCX is uploaded in the card
        When I click on the collabora file '<docx_file_name>'
        Then I see collabora text editor

        # first teacher adds text content in collabora text editor, saves it and publishes the room board
        When I click on the button cursive writer in Collabora docx file
        When I type text '<text_1>' in collabora editor on position '200', '400'
        Then I click on the button save in Collabora editor
        Then I go back to the page room board
        Then I see the file type DOCX is uploaded in the card
        When I click on three dot menu in the board header
        When I click on the option Publish in three dot menu in course board
        Then I do not see the chip Draft in the course board

        # first teacher can download the text document
        When I click on the icon Download file
        Then file '<docx_file_name>' is saved in folder downloads

        # second teacher opens the text file in collabora editor in edit mode and adds text content
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name>'
        When I click on the multi-column board in the room detail page
        Then I see the file type DOCX is uploaded in the card
        When I click on the collabora file '<docx_file_name>'
        When I click on the button cursive writer in Collabora docx file
        When I type text '<text_2>' in collabora editor on position '600', '500'
        Then I click on the button save in Collabora editor
        Then I go back to the page room board
        Then I see the file type DOCX is uploaded in the card

        # first teacher can delete the collabora text document
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name>'
        When I click on the multi-column board in the room detail page
        When I click on the three dot on the card
        When I click on the option Delete in the three-dot menu
        When I click on the button Delete in the confirmation dialog
        Then I do not see the element File

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | namespace | teacher_1    | teacher_2    | teacher_2_name | teacher_2_role | room_name      | board_title     | docx_file_name   | text_1             | text_2             |
            | brb       | teacher1_brb | teacher2_brb | teacher_2      | editor         | Collabora Room | Collabora Board | sample-docx.docx | Collabora Teacher1 | Collabora Teacher2 |

#@staging_test
#Examples:
#| namespace | teacher_1    | teacher_2    | teacher_2_name | teacher_2_role | room_name      | board_title     | docx_file_name   | text_1    | text_2       |
#| brb       | teacher1_brb | teacher2_brb | Hande          | editor         | Collabora Room | Collabora Board | sample-docx.docx | Collabora | Cypress Test |



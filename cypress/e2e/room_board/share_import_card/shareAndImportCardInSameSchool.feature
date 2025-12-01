@regression_test
@stable_test
@schedule_run
@group-E
@prio_0_dev
Feature: Room Board - Share and import a card in rooms with a teacher from the same school

    As a teacher,
    I want to share a card from a board with another teacher within the same school
    so that the other teacher can import and use this card in their own room.

    Scenario Outline: Share and import a card with a Teacher within the same school

        # pre-condition: creating teacher accounts
        Given I am logged in as a '<teacher2>' at '<namespace>'
        Given I am logged in as a '<teacher1>' at '<namespace>'

        # pre-condition: source room, board, and card exist
        Given a room named '<room_name_source>' exists
        Given a multi-column board named '<board_title_source>' exists in the room
        Given the multi-column board has a column with a card
        Given link element is added in the card
        Given etherpad is added in the card
        Given the card has a folder named '<file_folder>'
        Given the card contains image '<image_file>' element

        # first teacher shares the card via the share dialog and copied URL
        Then I see the page board details
        When I click outside of the card to save it
        When I click on the three dot on the card
        When I click on the option 'share' on the card
        Then I see the Share settings dialog
        Then I see the title in the share modal
        Then I see the information box in share modal
        Then I see modal 'share' with information on '<copyright_data_protection>, <content_etherpad>, <content_whiteboard>, <external_tools_info>, <external_tools_protected_parameter_info>'
        Then I see the button Cancel in the share modal
        Then I see the checkbox Link valid for the same school is by default checked
        Then I see the checkbox Link valid for 21 days is by default checked
        When I click on the button Continue
        Then I see the Share via modal
        Then I see the result url text box in the modal
        Then I see the option Share via Email
        Then I see the option Copy link
        Then I see the option Scan QR Code
        Then I copy the card URL
        Then I see the alert message

        # pre-condition: second teacher is logged in; target room and board exist
        Given I am logged in as a '<teacher2>' at '<namespace>'
        Given a room named '<room_name_target>' exists
        Given a multi-column board named '<board_title_target>' exists in the room
        Given the multi-column board has a column with a card

        # second teacher within the same school imports the shared card
        When I open the shared URL for card
        Then I see the Dialog to import
        When I select the room '<room_name_target>' from the room list in the modal
        When I select the board '<board_title_target>' from the board list in the modal
        When I select the column '<column_name>' from the column list in the modal
        When I click on the button Confirm in the share modal
        Then I see the page board details
        Then I see the element Link in the target card
        Then I see element Etherpad in the target card
        Then I see element Folder in the target card
        Then I see element Image in the target card

        # post-condition: rooms created by both teachers are deleted
        Given I am logged in as a '<teacher2>' at '<namespace>'
        Given the room '<room_name_target>' at position '0' is deleted
        Given I am logged in as a '<teacher1>' at '<namespace>'
        Given the room '<room_name_source>' at position '0' is deleted

        @school_api_test
        @staging_test
        Examples:
            | teacher1     | teacher2     | namespace | room_name_source       | room_name_target       | board_title_source   | board_title_target   | card_title             | import_card_title        | copyright_data_protection | content_etherpad | content_whiteboard | external_tools_info | external_tools_protected_parameter_info | file_folder       | image_file      | board_title       | column_name |
            | teacher1_brb | teacher2_brb | brb       | CypressAut Room Name-1 | CypressAut Room Name-2 | CypressAut Board Src | CypressAut Board Tgt | CypressAut Source Card | CypressAut Imported Card | Copyright data protection | Content etherpad | Content whiteboard | External tools info | External tools protected parameter info | Cypress Card Docs | example_jpg.jpg | CypressAuto Board | Abschnitt 1 |


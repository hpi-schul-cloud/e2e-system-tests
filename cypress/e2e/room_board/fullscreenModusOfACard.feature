@regression_test
@stable_test
@schedule_run
@group-D
@prio_0_dev
Feature: Room Board - See card content in fullscreen lightbox

    Scenario Outline: Open card in fullscreen lightbox and switch between view and edit modes

        # Precondition: Room with board and card, user with edit or view rights
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card
        Given etherpad is added in the card
        Given the card has a folder named '<file_folder>'
        Given the card contains file '<file_1>' element
        Given the card contains file '<file_2>' element
        Given the card contains file '<file_3>' element
        Given link element is added in the card
        Given more cards are in the column


        # # Open fullscreen lightbox
        When I click on the fullscreen icon on the card
        Then a lightbox opens with the title "Vollansicht"
        Then I see etherpad in lightbox
        Then I see folder named "<file_folder>" in lightbox
        Then I see file "<file_1>" in lightbox
        Then I see file "<file_2>" in lightbox
        Then I see file "<file_3>" in lightbox
        # Then the background color '<card_bg_color>' is used as the page background




        # And I see a close icon button with size 48px
        # And I see a button "Bearbeiten" in the header if my role is 'Board-Editor'
        # And the content of the card is displayed 1:1 in the lightbox
        # And all elements '<element_1>, <element_2>', <element_3>', <element_4>', <element_5>', <element_6>' are displayed as in the one-column board layout in the correct order
        # And the background color '<card_bg_color>' is used as the page background
        # And the card itself has a white background

        # # Switch between view and edit mode via header button
        # When I click on the "Bearbeiten" button in the header (if visible)
        # Then the lightbox switches to edit mode
        # And all child elements and functions are available (e.g., add element, move element up, delete element)
        # When I click on the "Ansehen" button in the header
        # Then the lightbox switches back to view mode

        # # Switch between view and edit mode via double-click and click outside
        # When I double-click inside the card content in view mode
        # Then the lightbox switches to edit mode
        # When I click outside the card area in edit mode
        # Then the lightbox switches back to view mode

        # # Edit mode placeholders for empty card
        # Given the card '<card_title>' is empty
        # When I open the card in fullscreen edit mode
        # Then I see "Titel hinzufügen" and "Text hinzufügen" as placeholders

        # # Board-Viewer permission allows view-only fullscreen
        # Given I am logged in as a 'Board-Viewer' at '<namespace>'
        # When I open the card '<card_title>' in fullscreen
        # Then I can view the card in fullscreen
        # And I do not see the "Bearbeiten" button
        # And I cannot switch to edit mode

        # # opening element in separate tab and changing back to fullscreen tab
        # When I click on the link element '<element_6>'
        # Then link element '<element_6>' opens in separate tab
        # When I go back to original tab
        # Then fullscreen is visible
        # Then scrolling position is like before

        # # Direct link to fullscreen view
        # When I copy the URL of the current fullscreen card
        # When I open copied URL in a separate tab
        # Then the lightbox opens in fullscreen mode for card '<card_title>'

        # #Post-condition: delete the room
        # Given the room '<room_name>' at position '0' is deleted

        @school_api_test
        Examples:
            | namespace | teacher      | room_name                             | file_folder       | file_1          | file_2                   | file_3         | board_title       |
            | dbc       | teacher1_dbc | CypressAuto Room - Card in Fullscreen | Cypress Card Docs | example_jpg.jpg | sample_video_1mb_mp4.mp4 | sample-pdf.pdf | CypressAuto Board |

# | namespace | user_role    | room_name            | board_type | board_title           | card_title   | card_bg_color | element_1    | element_2     | element_3 | element_4   | element_5 | element_6 | fullscreen_url             |
# | dbc       | Board-Editor | CypressAut Card Room | one-column | CypressAut Card Board | Example Card | blue          | Text Element | Image Element | TLDraw    | File Folder | Etherpad  | Link      | /board/1/card/1/fullscreen |
# | dbc       | Board-Viewer | CypressAut Card Room | one-column | CypressAut Card Board | Example Card | red           | Text Element | Image Element | TLDraw    | File Folder | Etherpad  | Link      | /board/1/card/1/fullscreen |
# | dbc       | Board-Editor | CypressAut Card Room | one-column | CypressAut Card Board | Empty Card   | yellow        |              |               |           |             |           |           | /board/1/card/2/fullscreen |


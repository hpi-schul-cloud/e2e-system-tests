@regression_test
@stable_test
@schedule_run
@group-A
@prio_0_staging
Feature: Room Board - See card content in fullscreen lightbox

    As an editor, I want to see the content of a card in a fullscreen lightbox and be able to switch between view and edit modes, so that I can easily view and edit the card content.
    As a viewer, I want to see the content of a card in a fullscreen lightbox, but I should not have the option to edit the card content.

    Scenario Outline: Open card in fullscreen lightbox and switch between view and edit modes

        # precondition: Room with board and card, user with edit or view rights
        Given I am logged in as a '<viewer>' at '<namespace>'
        Given I am logged in as a '<editor>' at '<namespace>'
        Given a room named '<room_name>' with a multi-column board named '<board_title>' exists
        Given '<viewer_name>' added in the room '<room_name>' at position '0' with role '<role_name_student>' and default read permission

        #pre-condition for editor: creating a card with different elements in the board
        Given I go to rooms overview
        Given I click on button Open to go to room '<room_name>' at position '0'
        Given I click on the button Open on multi-column board in the room detail page
        Given the multi-column board has a column with a card
        Given the card has a folder named '<file_folder>'
        Given etherpad is added in the card
        Given the card contains file '<file_1>' element
        Given the card contains file '<file_2>' element
        Given link element is added in the card
        Given multi column board is published to not to be in a draft mode

        # open fullscreen lightbox
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        When I click on the fullscreen icon on the card
        Then a lightbox opens with the title "Vollansicht"
        Then I see etherpad in lightbox
        Then I see folder named "<file_folder>" in lightbox
        Then I see file "<file_1>" in lightbox
        Then I see file "<file_2>" in lightbox
        # then the background color '<card_bg_color>' is used as the page background - this has to be implemented later

        # switch between view and edit mode via header button
        When I click on the button Edit in the header
        Then the lightbox switches to edit mode
        Then I see folder named "<file_folder>" in lightbox
        When I click on the three dot in the first element in lightbox
        When I click on the option Delete in the three dot menu
        Then I see the dialog Confirm deletion
        When I click on the button Delete in the confirmation dialog
        Then I do not see folder named "<file_folder>" in lightbox
        Then I see etherpad in lightbox
        # after deletion lightbox is in view mode. when this is fixed the following step can be removed
        When I click on the button Edit in the header
        When I click on icon Plus in lightbox to add content into card
        Then I see the dialog Add Element in the card
        When I select 'file' from the element selection dialog box
        When I upload a file '<file_3>'
        Then I see file "<file_3>" in lightbox
        When I click on the button View in the header
        Then the lightbox switches to view mode

        # close the lightbox
        When I click on the button Close in the lightbox header
        Then the lightbox is not visible anymore
        Then I see the page board details
        Then I do not see a folder element on board

        # direct link to fullscreen view
        When I click on the fullscreen icon on the card
        Then a lightbox opens with the title "Vollansicht"
        When I copy the URL of the current fullscreen card
        When I click on the button Close in the lightbox header
        When I open copied URL
        Then a lightbox opens with the title "Vollansicht"
        Then I see etherpad in lightbox
        Then I see file "<file_1>" in lightbox
        When I click on the button Close in the lightbox header

        # open fullscreen lightbox as a viewer and check that edit button is not visible
        Given I am logged in as a '<viewer>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        Then I see the page board details
        When I click on the fullscreen icon on the card
        Then a lightbox opens with the title "Vollansicht"
        Then I do not see the edit button in the lightbox header
        Then I see etherpad in lightbox
        Then I do not see folder named "<file_folder>" in lightbox
        Then I see file "<file_1>" in lightbox
        Then I see file "<file_2>" in lightbox

        # close the lightbox
        When I click on the button Close in the lightbox header
        Then the lightbox is not visible anymore
        Then I see the page board details

        #post-condition: delete the room
        Given I am logged in as a '<editor>' at '<namespace>'
        Given the room '<room_name>' at position '0' is deleted

        @school_api_test
        Examples:
            | namespace | editor       | viewer       | viewer_name | role_name_student | room_name                             | file_folder       | file_1          | file_2                   | file_3         | board_title       |
            | nbc       | teacher1_nbc | student1_nbc | student_1   | Lernend           | CypressAuto Room - Card in Fullscreen | Cypress Card Docs | example_jpg.jpg | sample_video_1mb_mp4.mp4 | sample-pdf.pdf | CypressAuto Board |

        @staging_test
        Examples:
            | namespace | editor       | viewer       | viewer_name | role_name_student | room_name                             | file_folder       | file_1          | file_2                   | file_3         | board_title       |
            | nbc       | teacher1_nbc | student1_nbc | Kraft       | Lernend           | CypressAuto Room - Card in Fullscreen | Cypress Card Docs | example_jpg.jpg | sample_video_1mb_mp4.mp4 | sample-pdf.pdf | CypressAuto Board |


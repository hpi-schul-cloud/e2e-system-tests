@regression_test
@stable_test
@schedule_run
@group-A
Feature: Room Board - Table of contents in the fullscreen lightbox of a card

    As a teacher, I want to see a table of contents next to a card in the fullscreen lightbox, so that I can jump to the elements of the card and switch to other cards of the board.

    Scenario Outline: Open the table of contents, jump to an element and switch to another card

        # pre-condition: room with a multi-column board, a titled card with elements and a second card without title
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room named '<room_name>' with a multi-column board named '<board_title>' exists
        Given I go to rooms overview
        Given I click on button Open to go to room '<room_name>' at position '0'
        Given I click on the button Open on multi-column board in the room detail page
        Given the multi-column board has a column with a card titled '<card_title>'
        Given etherpad is added in the card
        Given link element is added in the card
        Given more cards are in the column

        # open the table of contents in the fullscreen lightbox
        When I click on the fullscreen icon on the card
        Then a lightbox opens with the title "Vollansicht"
        When I click on the button Table of contents in the lightbox header
        Then I see the table of contents in the lightbox
        Then I see the card '<card_title>' as current card in the table of contents
        Then I see the entry '<etherpad_entry>' in the table of contents
        Then I see the entry '<link_entry>' in the table of contents

        # jump to an element of the current card
        When I click on the entry '<link_entry>' in the table of contents
        Then I see the entry '<link_entry>' as current location in the table of contents

        # switch to another card, the table of contents stays open
        When I click on the card '<untitled_card_entry>' in the table of contents
        Then I see the table of contents in the lightbox
        Then I see the card '<untitled_card_entry>' as current card in the table of contents
        Then I see the empty state in the table of contents

        # close the table of contents and the lightbox
        When I click on the button Table of contents in the lightbox header
        Then I do not see the table of contents in the lightbox
        When I click on the button Close in the lightbox header
        Then the lightbox is not visible anymore

        # post-condition: delete the room
        Given the room '<room_name>' at position '0' is deleted

        @school_api_test
        Examples:
            | namespace | teacher      | room_name                                 | board_title       | card_title           | etherpad_entry | link_entry                                | untitled_card_entry |
            | nbc       | teacher1_nbc | CypressAuto Room - Card Table of Contents | CypressAuto Board | CypressAuto TOC Card | Etherpad       | main.niedersachsen.schulcloud-verbund.org | Karte               |

        @staging_test
        Examples:
            | namespace | teacher      | room_name                                 | board_title       | card_title           | etherpad_entry | link_entry                                | untitled_card_entry |
            | nbc       | teacher1_nbc | CypressAuto Room - Card Table of Contents | CypressAuto Board | CypressAuto TOC Card | Etherpad       | main.niedersachsen.schulcloud-verbund.org | Karte               |

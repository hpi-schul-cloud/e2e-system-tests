@regression_test
@stable_test
Feature: Room - Add and Remove BBB Tool in Room Boards

    As a teacher, I want to add and remove the BBB tool in the room board so that I can manage video conferences in the room.

    Scenario: Add and Remove BBB Tool from Room Board
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multicolumn board named '<edited_board_title>' exists in the room
        Given a list board named '<edited_board_title>' exists in the room

        # Teacher copies the multicolumn board
        When I click on the multicolumn board in the room detail page
        Then I see the page board details
        Then I see the chip Draft
        When I click on the three dot menu in room board
        When I click on the menu Publish
        Then I do not see the chip Draft
        When I click on the three dot menu in room board
        When I click on the option Copy
        Then I see the chip Draft
        When I click on the breadcrumb to navigate to the room detail page
        Then I see the detail page of room '<room_name>'

        # Teacher copies the list board
        When I click on the single-column board in the room detail page
        Then I see the page board details
        Then I see the chip Draft
        When I click on the three dot menu in room board
        When I click on the menu Publish
        Then I do not see the chip Draft
        When I click on the three dot menu in room board
        When I click on the option Copy
        Then I see the chip Draft
        When I click on the breadcrumb to navigate to the room detail page
        Then I see the detail page of room '<room_name>'

        # Post-condition: Delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | teacher      | namespace | room_name         | edited_board_title |
            | teacher1_nbc | nbc       | Cypress Room Name | Board Cy Title     |

        @staging_test
        Examples:
            | teacher      | namespace | room_name         | edited_board_title |
            | teacher1_brb | brb       | Cypress Room Name | Board Cy Title     |


@regression_test
@stable_test
Feature: Room - Add BBB Tool in the Room Board

    As a teacher, I want to add a BBB (BigBlueButton) Tool to the room board so that I can manage video conferencing effectively.


    Scenario: Add BBB Tool to the Room Board, including pre & post conditions

        # pre-condition: room and boards are existing
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<new_board_title>' exists in the room
        #Give column exist in the multi-column board in the toom
        #Given Card exist in the column in the multi-column board in the room

        # teacher adds BBB Tool to the multi-column board
        When I click on the multi-column board in the room detail page
        When I see the page board details
        When I click on the board settings menu
        When I select the option "Add Tool"
        When I choose the "BBB Tool" from the available tools list
        When I see the BBB Tool added to the board '<board_title>'
        When I click on the breadcrumb to navigate to the room detail page
        When I see the detail page of room '<room_name>'

        # teacher deletes the BBB Tool from the multi-column board
        When I click on the multi-column board in the room detail page
        When I see the page board details
        When I click on the board settings menu
        When I select the option "Remove Tool"
        When I confirm the deletion of the "BBB Tool"
        Then I do not see the BBB Tool in the multi-column board '<board_title>'
        When I click on the breadcrumb to navigate to the room detail page
        Then I see the detail page of room '<room_name>'

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | teacher      | namespace | room_name         | new_board_title |
            | teacher1_brb | brb       | Cypress Room Name | Board Cy Title  |

        @staging_test
        Examples:
            | teacher      | namespace | room_name         | new_board_title |
            | teacher1_brb | brb       | Cypress Room Name | Board Cy Title  |


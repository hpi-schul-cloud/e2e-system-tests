@regression_test
@stable_test
Feature: Room - Copy multi-column and single-column boards in the room

    As a teacher, I want to copy both multi-column and single-column boards in the room so that I can effectively manage its contents.

    Scenario: Copy multi-column and single-column board in the room, including pre & post conditions
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<new_board_title>' exists in the room
        Given a sinlge-column board named '<new_board_title>' exists in the room

        # Teacher copies the multi-column board
        When I click on the multi-column board in the room detail page
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
        Then I see multi-column copied board v-card on the room detail page

        # Teacher copies the single-column board
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
        Then I see single-column copied board v-card on the room detail page


        # Post-condition: Delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | teacher      | namespace | room_name         | new_board_title |
            | teacher1_brb | brb       | Cypress Room Name | Board Cy Title  |

        @staging_test
        Examples:
            | teacher      | namespace | room_name         | new_board_title |
            | teacher1_brb | brb       | Cypress Room Name | Board Cy Title  |


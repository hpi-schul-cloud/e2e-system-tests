@regression_test
@stable_test
@schedule_run
@group-K
Feature: Room Board - Copy multi-column and single-column boards in the room

    As a teacher, I want to copy both multi-column and single-column boards in the room so that I can effectively manage its contents.

    Scenario: Copy multi-column and single-column board in the room, including pre & post conditions

        # pre-condition: room and boards are existing
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        # this step is needed to navigate back to the room details page after creating multi-column board
        Given I navigate to the room detail page via Breadcrumb from the board page
        Given a single-column board named '<board_title>' exists in the room
        # this step is needed to navigate back to the room details page after creating single-column board
        Given I navigate to the room detail page via Breadcrumb from the board page

        # teacher copies the multi-column board
        When I click on the multi-column board in the room detail page
        Then I see the page board details
        Then I see the chip Draft
        When I click on the three dot menu in room board title
        When I select the three dot menu action 'publish'
        Then I do not see the chip Draft
        When I click on the three dot menu in room board title
        When I select the three dot menu action 'copy'
        Then I see the chip Draft
        When I click on the breadcrumb to navigate to the room detail page
        Then I see the detail page of room '<room_name>'
        Then I see copied multi-column board tile in the rooms details page

        # teacher copies the single-column board
        When I click on the single-column board in the room detail page
        Then I see the page board details
        Then I see the chip Draft
        When I click on the three dot menu in room board title
        When I select the three dot menu action 'publish'
        Then I do not see the chip Draft
        When I click on the three dot menu in room board title
        When I select the three dot menu action 'copy'
        Then I see the chip Draft
        When I click on the breadcrumb to navigate to the room detail page
        Then I see the detail page of room '<room_name>'
        Then I see copied single-column board tile in the room details page

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | teacher      | namespace | room_name         | board_title    |
            | teacher1_brb | brb       | Cypress Room Name | Board Cy Title |

        @staging_test
        Examples:
            | teacher      | namespace | room_name         | board_title    |
            | teacher1_brb | brb       | Cypress Room Name | Board Cy Title |


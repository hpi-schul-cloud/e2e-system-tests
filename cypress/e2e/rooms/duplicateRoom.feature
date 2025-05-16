@regression_test
@stable_test
Feature: Room - To duplicate the existing room

    As a teacher I want to duplicate an existing room, so that I can have a copy of it.

    Scenario: Teacher duplicates and deletes the room, including pre & post conditions where applicable
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: teacher creates a new room with multi and single coulmn board in it
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given a single-column board named '<board_title>' exists in the room

        # teacher is able duplicate room with multi and single coulmn board in it
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-copy'
        Then I see the Modal to confirm the duplication
        Then I see the Title in the modal
        When I click on the button Cancel
        Then I do not see the Modal to confirm the duplication
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-copy'
        When I click on the button Duplicate in the modal to confirm
        Then I see the success message Alert
        Then I see the detail page of room '<copied_room_name>'
        Then I see copied multi-column board tile in the rooms details page
        Then I see copied single-column board tile in the room details page

        # teacher is able to delete the duplicated room
        When I click on three dot menu in room page
        When I select the three dot menu action 'delete'
        Then I see confirmation modal for deleting the room
        When I click on delete button in confirmation modal
        Then I do not see '<copied_room_name>' on room overview page

        # post-condition: teacher is able to delete the first original room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | teacher      | namespace | room_name         | copied_room_name      | board_title    |
            | teacher1_brb | brb       | Cypress Room Name | Cypress Room Name (1) | Board Cy Title |

        @staging_test
        Examples:
            | teacher      | namespace | room_name         | copied_room_name      | board_title    |
            | teacher1_brb | brb       | Cypress Room Name | Cypress Room Name (1) | Board Cy Title |

@stable_test
@regression_test
@schedule_run
@group-A
@prio_0_staging
Feature: Rooms - To duplicate the existing room

    As a teacher, I want to duplicate an existing room, so that I can have a copy of it.

    Scenario Outline: Teacher duplicates and deletes the room

        # pre-condition: teacher logged in
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: teacher creates a new room with multi and single column board in it
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given multi column board is published to not to be in a draft mode
        Given the multi-column board has a column with a card
        Given link element is added in the card
        Given I navigate to the room detail page via Breadcrumb
        Given a single-column board named '<board_title>' exists in the room
        Given I navigate to the room detail page via Breadcrumb

        # teacher is able to duplicate the room with multi and single column board in it
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
        Then I see copied single-column board tile in the room details page
        Then I see copied multi-column board tile in the rooms details page
        When I click on the button Open on multi-column board in the room detail page
        Then I see the chip Draft
        Then I see the element Link on the card

        # teacher is able to delete the duplicated room
        Given I navigate to the room detail page via Breadcrumb
        When I click on three dot menu in room page
        When I select the three dot menu action 'delete'
        Then I see confirmation modal for deleting the room
        When I click on delete button in confirmation modal
        Then I do not see '<copied_room_name>' on room overview page

        # post-condition: teacher is able to delete the first original room
        Given the room named '<room_name>' at position '0' is deleted

        @school_api_test
        @staging_test
        Examples:
            | teacher      | admin      | namespace | room_name            | copied_room_name         | board_title            |
            | teacher1_brb | admin1_brb | brb       | CypressAut Room Name | CypressAut Room Name (1) | CypressAut Board Title |

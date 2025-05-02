@regression_test
@stable_test
Feature: Room - To duplicate the existing room

    As a teacher I want to duplicate an existing room, so that I can have a copy of it.

    Scenario: Teacher duplicates and deletes the room, including pre-conditions where applicable
        Given I am logged in as a '<teacher>' at '<namespace>'

        # teacher creates a new room
        When I go to room overview
        When I click on FAB to create new room
        Then I see room creation page
        When I enter the room name '<room_name>'
        When I select the colour for the room
        When I select the start date for the room
        When I select the end date for the room
        When I click on the button Save room
        Then I see the detail page of room '<room_name>'

        # teacher is able duplicate room
        When I click on three dot menu in room page
        When I select the three dot menu action 'duplicate'
        Then I see the Modal to confirm the duplication
        Then I see the Title in the modal
        When I click on the button Cancel
        Then I do not see the Modal to confirm the duplication
        When I click on three dot menu in room page
        When I select the three dot menu action 'duplicate'
        When I click on the button Duplicate in the modal
        Then I see the success message Alert
        # Note: Remaining feature is not yet implemented
        #Then I should be redirected to the duplicated room with name containing '(1)'


        # teacher is able to delete the duplicated room
        # Note: Remaining feature is not yet implemented
        #When I click on three dot menu in room page
        #When I select the three dot menu action 'delete'
        #Then I see confirmation modal for deleting the room
        #When I click on delete button in confirmation modal
        #Then the duplicated room with name suffix "(1)" should not be visible on the room overview

        # teacher is able to delete the first original room
        When I go to room overview
        When I go to room '<room_name>'
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'delete'
        Then I see confirmation modal for deleting the room
        When I click on delete button in confirmation modal
        Then I do not see '<room_name>' on room overview page

        @school_api_test
        Examples:
            | teacher      | namespace | room_name         |
            | teacher1_brb | brb       | Cypress Room Name |

        @staging_test
        Examples:
            | teacher      | namespace | room_name         |
            | teacher1_brb | brb       | Cypress Room Name |

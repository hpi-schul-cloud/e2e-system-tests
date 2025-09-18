@regression_test
@stable_test
@schedule_run
@group-A
@prio_0_staging
Feature: Rooms - To create, edit and delete room

    As a teacher I want to create, edit and delete rooms.

    Scenario Outline: Teacher creates room, edits room and deletes room, including pre-conditions where applicable
        Given I am logged in as a '<teacher>' at '<namespace>'

        # teacher creates a new room
        When I go to rooms overview
        When I click on FAB to create new room
        Then I see room creation page
        When I enter the room name '<room_name>'
        When I select the colour for the room
        When I click on the button Save room
        Then I see the detail page of room '<room_name>'

        # teacher is able to edit the room
        When I click on three dot menu in room page
        When I select the three dot menu action 'edit'
        Then I see edit page of room '<room_name>'
        When I enter the room name '<room_name_new>'
        When I click on the button Save room
        Then I see the detail page of room '<room_name_new>'

        # teacher is able to delete the room
        When I click on three dot menu in room page
        When I select the three dot menu action 'delete'
        Then I see confirmation modal for deleting the room
        When I click on delete button in confirmation modal
        Then I do not see '<room_name_new>' on room overview page

        @school_api_test
        Examples:
            | teacher      | namespace | room_name         | room_name_new         |
            | teacher1_brb | brb       | Cypress Room Name | Cypress Room Name New |

        @staging_test
        Examples:
            | teacher      | namespace | room_name         | room_name_new         |
            | teacher1_brb | brb       | Cypress Room Name | Cypress Room Name New |

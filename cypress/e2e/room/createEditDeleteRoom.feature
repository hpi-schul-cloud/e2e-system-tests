@regression_test
@stable_test
Feature: Room - To create, edit and delete room

  As a teacher I want to create, edit and delete rooms.
  Scenario Outline: Teacher creates room, edits room and deletes room
    Given I am logged in as a '<teacher>' at '<namespace>'

    # pre-condition: creating new room
    When I go to room overview
    When I click on FAB to create new room
    Then I see room creation page
    When I enter the room name '<room_name>'
    When I click on the button to save the room
    Then I see the detail page of room '<room_name>'

    # teacher is able to edit the room
    Given I am logged in as a '<teacher>' at '<namespace>'
    When I go to room overview
    When I go to room '<room_name>'
    Then I see the detail page of room '<room_name>'
    When I click on three dot menu in room page
    When I click on edit option in room menu
    Then I see edit page of room '<room_name>'
    When I enter the room name '<room_name_new>'
    When I click on the button to save the room
    Then I see the detail page of room '<room_name_new>'

    # teacher is able to delete the room
    Given I am logged in as a '<teacher>' at '<namespace>'
    When I go to room overview
    When I go to room '<room_name_new>'
    Then I see the detail page of room '<room_name_new>'
    When I click on three dot menu in room page
    When I click on delete option in room menu
    Then I see confirmation modal for deleting the room
    When I click on delete button in confirmation modal
    Then I do not see '<room_name_new>' on room overview page

    @school_api_test
    Examples:
        | teacher      | namespace         | room_name           | room_name_new         |
        | teacher1_brb | brb               | Cypress Room Name   | Cypress Room Name New |

    @staging_test
    Examples:
        | teacher      | namespace         | room_name           | room_name_new         |
        | teacher1_brb | brb               | Cypress Room Name   | Cypress Room Name New |
@unstable_test
Feature: Room - To create, edit and delete room

  As a teacher I want to create, edit and delete rooms.

  @unstable_test
  Scenario: Teacher creates room
    Given I am logged in as a '<teacher>' at '<namespace>'
    When I go to room overview
    When I click on FAB to create new room
    Then I see room creation page
    When I enter the room name '<room_name>'
    When I click on the button to save the room
    Then I see the detail page of room '<room_name>'

    Examples:
        | teacher      | namespace         | room_name           |
        | teacher1_brb | brb               | Cypress Room Name   |

@unstable_test
  Scenario: Teacher edits room
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

    Examples:
        | teacher      | namespace         | room_name           | room_name_new         |
        | teacher1_brb | brb               | Cypress Room Name   | Cypress Room Name New |

@unstable_test
  Scenario: Teacher edits room
    Given I am logged in as a '<teacher>' at '<namespace>'
    When I go to room overview
    When I go to room '<room_name_new>'
    Then I see the detail page of room '<room_name_new>'
    When I click on three dot menu in room page
    When I click on delete option in room menu
    Then I see confirmation modal for deleting the room
    When I click on delete button in confirmation modal
    Then I do not see '<room_name_new>' on room overview page

    Examples:
        | teacher      | namespace         | room_name_new         |
        | teacher1_brb | brb               | Cypress Room Name New |

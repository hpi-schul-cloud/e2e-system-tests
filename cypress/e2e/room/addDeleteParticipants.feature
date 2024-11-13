@unstable_test
Feature: Room - Add and delete participants

  As a teacher I want to add and delete participants in the room.

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
  Scenario: Teacher adds participants
    Given I am logged in as a '<teacher>' at '<namespace>'
    When I go to room overview
    When I go to room '<room_name>'
    Then I see the detail page of room '<room_name>'
    When I click on three dot menu in room page
    When I click on participants option in room menu
    Then I see the edit participants page of room '<room_name>'
    When I click on FAB to add participants
    Then I see add participants modal
    Then I see school '<school_name>' in school dropdown
    Then I see role '<role_name>' in role dropdown
    When I enter '<participant_name>' in name dropdown
    When I select the name '<participant_name>' from the dropdown
    When I click on the button to add the participant
    Then I see '<participant_name>' in the room participants list

    Examples:
        | teacher      | namespace         | room_name           |  school_name             |   role_name              |    participant_name       |
        | teacher1_brb | brb               | Cypress Room Name   |  Paul-Gerhardt-Gymnasium |   Teacher                |    Vera                   |

@unstable_test
  Scenario: Teacher deletes participants
    Given I am logged in as a '<teacher>' at '<namespace>'
    When I go to room overview
    When I go to room '<room_name>'
    Then I see the detail page of room '<room_name>'
    When I click on three dot menu in room page
    When I click on participants option in room menu
    Then I see the edit participants page of room '<room_name>'
    Then I see '<participant_name>' in the room participants list
    When I click on delete button in the participant '<participant_name>'
    Then I see the participant '<participant_name>' is deleted from the room participants list

    Examples:
        | teacher      | namespace         | room_name           |  participant_name       |
        | teacher1_brb | brb               | Cypress Room Name   |  Vera                   |
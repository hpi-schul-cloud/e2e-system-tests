@regression_test
@stable_test
@schedule_run
@group-I
Feature: Room - Add and delete participants

    As a teacher I want to add and delete participants in the room.

    Scenario: Teacher adds participants and deletes participants, including pre-conditions
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'

        # pre-condition: first teacher creating a new room
        When I go to room overview
        When I click on FAB to create new room
        Then I see room creation page
        When I enter the room name '<room_name>'
        When I click on the button Save room
        Then I see the detail page of room '<room_name>'

        # first teacher is able to add participants
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        When I click on FAB to add participants
        Then I see modal Add participants
        Then I see school '<school_name>' in dropdown School
        When I select '<role_name>' in dropdown Role
        Then I see role '<role_name>' in dropdown Role
        When I enter '<participant_name>' in dropdown Name
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I see '<participant_name>' in the room participants list

        # Newly added second teacher can see the room
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I go to room overview
        Then I see '<room_name>' on room overview page

        # first teacher is able to delete participants
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to room overview
        When I go to room '<room_name>'
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        Then I see '<participant_name>' in the room participants list
        When I click on 'remove-member' button in the participant list for participant '<participant_name>'
        When I click on delete button in confirmation modal
        Then I see the participant '<participant_name>' is removed from the room participants list

        # second teacher do not see the room
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I go to room overview
        Then I do not see '<room_name>' on room overview page

        # post-condition: first teacher deletes the room
        Given I am logged in as a '<teacher_1>' at '<namespace>'
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
            | teacher_1    | teacher_2    | namespace | room_name         | school_name           | role_name      | participant_name |
            | teacher1_brb | teacher2_brb | brb       | Cypress Room Name | cypress-test-school-1 | Lernbegleitend | teacher_2        |

        @staging_test
        Examples:
            | teacher_1    | teacher_2    | namespace | room_name         | school_name                 | role_name      | participant_name |
            | teacher1_brb | teacher2_brb | brb       | Cypress Room Name | Felix Mendelssohn-Gymnasium | Lernbegleitend | Hande            |

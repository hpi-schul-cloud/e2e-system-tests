# NOTE: This feature should only be executed in the staging environment due to the school API limitation,
# which prevents creating two separate schools in the same feature and scenario.

@regression_test
@stable_test
@group-E
@prio_0_staging

Feature: Rooms - To create and delete rooms with external teacher

    As a teacher, I want to create and delete rooms with external teacher.

    Scenario Outline: Teacher creates and deletes room with external teacher

        # pre-condition: Creating teacher accounts
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'

        # pre-condition: external teacher activates visibility in central directory in different school (Goethe-Gymnasium)
        When I go to my account settings
        Then I see the checkbox Activate visibility in the central directory is unchecked
        When I click on the checkbox Activate visibility in the central directory
        When I click on the button Save Visibility Settings
        Then I see the checkbox Activate visibility in the central directory is checked

        # first teacher creates a new room (Felix Mendelssohn-Gymnasium)
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to rooms overview
        When I click on FAB to create new room
        Then I see room creation page
        When I enter the room name '<room_name>'
        When I select the colour for the room
        When I click on the button Save room
        Then I see the detail page of room '<room_name>'

        #first teacher adds external second teacher to room
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        When I click on FAB to add participants
        Then I see speed dial options 'select-from-directory, add-external-person'
        When I click on button 'select-from-directory' from speed dial option
        Then I see modal Add participants
        When I enter '<participant_external_school>' in dropdown School
        When I select the first school from the dropdown
        Then I see school '<participant_external_school>' in dropdown School
        When I select '<role_name>' in dropdown Role
        Then I see role '<role_name>' in dropdown Role
        When I enter '<participant_name>' in dropdown Name
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I see '<participant_name>' in the room participants list

        # second teacher sees origin chip on the room overview page for externally created room
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'
        When I go to rooms overview
        Then I see room origin chip with string 'extern' for room '<room_name>' at position '0'

        # teacher is able to delete the room
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on three dot menu in room page
        When I select the three dot menu action 'delete'
        Then I see confirmation modal for deleting the room
        When I click on delete button in confirmation modal
        Then I do not see '<room_name>' on room overview page

        @staging_test
        Examples:
            | teacher_1    | teacherExt_1    | namespace | room_name             | participant_external_school | role_name      | participant_name |
            | teacher1_brb | teacherExt1_brb | brb       | CypressAut Room Name  | Goethe-Gymnasium            | Lernbegleitend | Carlo            |

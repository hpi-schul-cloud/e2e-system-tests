@unstable_test

# Note: This feature can not be currently executed using the school API, as creating two different school within the same scenario is not possible/limited.

Feature: Room - Invite Student from another school via teacher from another school

    As a room owner, when I invite a teacher from another school to a room, the teacher should be able to invite a student from their school, and the student should see the room in their room overview.

    Scenario Outline: Room Owner invites a teacher from another school, the teacher invites a student from their school, the student can access the room, including pre-conditions
        # cypress-test-school-2
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'
        # cypress-test-school-2
        Given I am logged in as a '<studentExt_1>' at '<namespace>'
        # cypress-test-school-1
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        # cypress-test-school-2
        Given I am logged in as a '<adminExt_1>' at '<namespace>'

        # pre-condition: external admin activates student visibility in the different school (cypress-test-school-2)
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        When I click the toggle switch to enable student visibility for teachers
        When I click on button Save admin settings

        # pre-condition: external teacher activates visibility in central directory in different school (cypress-test-school-2)
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'
        When I go to my account settings
        Then I see the checkbox Activate visibility in the central directory is unchecked
        When I click on the checkbox Activate visibility in the central directory
        When I click on the button Save Visibility Settings
        Then I see the checkbox Activate visibility in the central directory is checked

        # pre-condition: teacher creating a new room in the origin school (cypress-test-school-1), becoming the owner
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given a room named '<room_name>' exists

        # the owner can invite a external teacher from the different school (cypress-test-school-2) to the room
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        When I click on FAB to add participants
        Then I see modal Add participants
        When I enter '<participant_external_school>' in dropdown School
        When I select the first school from the dropdown
        Then I see school '<participant_external_school>' in dropdown School
        When I select '<role_name_teacher>' in dropdown Role
        Then I see role '<role_name_teacher>' in dropdown Role
        When I enter '<participant_external_name_teacher>' in dropdown Name
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I see '<participant_external_name_teacher>' in the room participants list

        # owner changes role for external teacher
        When I click on button Three Dot Menu to edit participant '<participant_external_name_teacher>'
        Then I see button Change role permission is visible
        When I click on button 'Change-Permission' in the sub-menu
        Then I see dialog box Change Role Permission is visible
        When I change second user role to 'admin'
        Then I see Role changed to 'admin' for second user
        Then I click on button 'Confirm' in the 'Role' action menu

        # the newly added external teacher can invite a student to the room in the different school (cypress-test-school-2)
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'
        When I go to rooms overview
        Then I see '<room_name>' on room overview page
        When I go to room '<room_name>'
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        When I click on FAB to add participants
        Then I see modal Add participants
        Then I see school '<participant_external_school>' in dropdown School
        When I select '<role_name_student>' in dropdown Role
        Then I see role '<role_name_student>' in dropdown Role
        When I enter '<participant_external_name_student>' in dropdown Name
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I see '<participant_external_name_student>' in the room participants list

        # newly added external student can see the room (cypress-test-school-2)
        Given I am logged in as a '<studentExt_1>' at '<namespace>'
        When I go to rooms overview
        Then I see '<room_name>' on room overview page

        # teacher is able to delete external student in the origin school (cypress-test-school-1)
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name>'
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        Then I see '<participant_external_name_student>' in the room participants list
        When I click on 'remove-member' button in the participant list for participant '<participant_external_name_student>'
        When I click on delete button in confirmation modal
        Then I see the participant '<participant_external_name_student>' is removed from the room participants list

        # external student does not see the room (cypress-test-school-2)
        Given I am logged in as a '<studentExt_1>' at '<namespace>'
        When I go to rooms overview
        Then I do not see '<room_name>' on room overview page

        # post-condition: teacher deletes the room in the origin school (cypress-test-school-1)
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name>'
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'delete'
        Then I see confirmation modal for deleting the room
        When I click on delete button in confirmation modal
        Then I do not see '<room_name>' on room overview page

        @school_api_test
        Examples:
            | teacher_1    | teacherExt_1    | studentExt_1    | adminExt_1    | namespace | room_name         | participant_external_school | participant_same_school | role_name_teacher | participant_external_name_teacher | role_name_student | participant_external_name_student |
            | teacher1_dbc | teacherExt1_dbc | studentExt1_dbc | adminExt1_dbc | dbc       | Cypress Room Name | cypress-test-school-2       | cypress-test-school-1   | Lernbegleitend    | cypressExt                        | Lernend           | cypress                           |

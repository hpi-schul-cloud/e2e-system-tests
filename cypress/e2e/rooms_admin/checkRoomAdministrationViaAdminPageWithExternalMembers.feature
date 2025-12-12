# NOTE: This feature should not be executed in dev instance due to the school api limitation,
# which prevents creating two separate schools in the same feature and scenario.

@regression_test
@stable_test
@prio_0_staging
@group-E
Feature: Room Administration - Able to see all rooms and the external members are shown as 'anonymized' except for "own" role from another school

    As a room administrator visualize all the rooms and the external members from different school seen as 'anonymized' except for 'own' role member.

    Scenario Outline: Room administrator sees all rooms with members from other schools are shown as 'anonymized' except 'own' role

        # pre-condition: user logins
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'
        Given I am logged in as a '<studentExt_1>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given I am logged in as a '<student_1>' at '<namespace>'
        Given I am logged in as a '<adminExt_1>' at '<namespace>'

        # pre-condition: external admin activates student visibility in the different school
        Given student visibility for teachers in school management is 'enabled'

        # pre-condition: external teacher activates visibility in central directory in different school
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'
        Given activate visibility in central directory for teacher is 'enabled'

        # pre-condition: teacher creating a new room in the origin school, becoming the owner
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given a room named '<room_name>' exists

        # owner adds student from same school and can invite a external teacher from the different school to the room
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        When I click on FAB to add participants
        Then I see speed dial options 'select-from-directory' and 'add-external-person'
        When I click on button 'select-from-directory' from speed dial option
        Then I see modal Add participants
        When I enter '<participant_same_school>' in dropdown School
        When I select the first school from the dropdown
        Then I see school '<participant_same_school>' in dropdown School
        When I select '<role_name_student>' in dropdown Role
        Then I see role '<role_name_student>' in dropdown Role
        When I enter '<participant_same_school_student>' in dropdown Name
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I see '<participant_same_school_student>' in the room participants list
        When I click on FAB to add participants
        Then I see speed dial options 'select-from-directory' and 'add-external-person'
        When I click on button 'select-from-directory' from speed dial option
        Then I see modal Add participants
        When I enter '<participant_external_school>' in dropdown School
        When I select the first school from the dropdown
        Then I see school '<participant_external_school>' in dropdown School
        When I select '<role_name_teacher>' in dropdown Role
        Then I see role '<role_name_teacher>' in dropdown Role
        When I enter '<participant_external_school_teacher>' in dropdown Name
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I see '<participant_external_school_teacher>' in the room participants list

        # owner changes role for external teacher
        When I click on button Three Dot Menu to edit participant '<participant_external_school_teacher>'
        Then I see button Change role permission is visible
        When I click on button 'Change-Permission' in the sub-menu
        Then I see dialog box Change Role Permission is visible
        When I change second user role to 'admin'
        Then I see Role changed to 'admin' for second user
        Then I click on button 'Confirm' in the 'Role' action menu

        # newly added external teacher can invite a student to the room in the different school
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'
        When I go to rooms overview
        Then I see '<room_name>' on room overview page
        When I click on button Open to go to room '<room_name>' at position '0'
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        When I click on FAB to add participants
        Then I see speed dial options 'select-from-directory' and 'add-external-person'
        When I click on button 'select-from-directory' from speed dial option
        Then I see modal Add participants
        Then I see school '<participant_external_school>' in dropdown School
        When I select '<role_name_student>' in dropdown Role
        Then I see role '<role_name_student>' in dropdown Role
        When I enter '<participant_external_school_student>' in dropdown Name
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I see '<participant_external_school_student>' in the room participants list

        # newly added external student can see the room
        Given I am logged in as a '<studentExt_1>' at '<namespace>'
        When I go to rooms overview
        Then I see '<room_name>' on room overview page

        # administrator can check the room members via room admin page
        Given I am logged in as a '<adminExt_1>' at '<namespace>'
        When I click on administration in menu
        When I navigate to rooms administration page via the submenu
        Then I see the rooms administration page
        When I click on three dot menu in the room admin page for room '<room_name>'
        When I click on manage room members in the three dot menu
        Then I see '<participant_same_school_owner>' in the admin room participants list
        Then I see '<participant_external_school_teacher>' in the admin room participants list
        Then I see '<participant_external_school_student>' in the admin room participants list
        Then I see '(anonymisiert)' in the admin room participants list
        Then I see '<participant_same_school>' in the admin room participants list

        # post-condition: external teacher deactivates visibility in central directory in different school
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'
        Given activate visibility in central directory for teacher is 'disabled'

        # post-condition: teacher deletes the room in the origin school
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'delete'
        Then I see confirmation modal for deleting the room
        When I click on delete button in confirmation modal
        Then I do not see '<room_name>' on room overview page

        @staging_test
        Examples:
            | teacher_1    | student_1    | teacherExt_1    | studentExt_1    | adminExt_1    | namespace | room_name                              | participant_external_school | participant_same_school     | role_name_teacher | participant_external_school_teacher | role_name_student | participant_external_school_student | participant_same_school_student | participant_same_school_owner |
            | teacher1_nbc | student1_nbc | teacherExt1_nbc | studentExt1_nbc | adminExt1_nbc | nbc       | CypressAut External members Room Admin | Goethe-Gymnasium            | Felix Mendelssohn-Gymnasium | Lernbegleitend    | Carlo                               | Lernend           | Alex                                | Kraft                           | Karl                          |

# @school_api_test
#Examples:
#          | teacher_1    | student_1    | teacherExt_1    | studentExt_1    | adminExt_1    | namespace | room_name            | participant_external_school | participant_same_school | role_name_teacher | participant_external_school_teacher | role_name_student | participant_external_school__student | participant_same_school_student |
#          | teacher1_dbc | student1_dbc | teacherExt1_dbc | studentExt1_dbc | adminExt1_dbc | dbc       | CypressAut Room Name | cypress-test-school-2       | cypress-test-school-1   | Lernbegleitend    | cypressExt                          | Lernend           | cypress                              | student_1                       |

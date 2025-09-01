@regression_test
@stable_test
@group-E

# Note: This feature should only be executed in the staging environment due to the school API limitation, which prevents creating two separate schools in the same faeture and scenario.

Feature: Room Administration - external members shown as 'anonymised' except for "own" role from another school

    As a room Adminstrator, I am able to see all the rooms and in the rooms the members from different school shown as 'anonymised' except member with 'own' role.

    Scenario Outline: Room Administrator can visualize all the rooms and the rooms with different school members are shown as 'anonymised' except member with 'own' role
        # Goethe-Gymnasium
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'
        # Goethe-Gymnasium
        Given I am logged in as a '<studentExt_1>' at '<namespace>'
        # Felix Mendelssohn-Gymnasium
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        # Goethe-Gymnasium
        Given I am logged in as a '<student_1>' at '<namespace>'
        # Goethe-Gymnasium
        Given I am logged in as a '<adminExt_1>' at '<namespace>'

        # pre-condition: external admin activates student visibility in the different school (Goethe-Gymnasium)
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        When I click the toggle switch to enable student visibility for teachers
        When I click on button Save admin settings

        # pre-condition: external teacher activates visibility in central directory in different school (Goethe-Gymnasium)
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'
        When I go to my account settings
        Then I see the checkbox Activate visibility in the central directory is unchecked
        When I click on the checkbox Activate visibility in the central directory
        When I click on the button Save Visibility Settings
        Then I see the checkbox Activate visibility in the central directory is checked

        # pre-condition: teacher creating a new room in the origin school (Felix Mendelssohn-Gymnasium), becoming the owner
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given a room named '<room_name>' exists

        # the owner adds student from same school and can invite a external teacher from the different school (Goethe-Gymnasium) to the room
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        When I click on FAB to add participants
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

        # the newly added external teacher can invite a student to the room in the different school (Goethe-Gymnasium)
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

        # newly added external student can see the room (Goethe-Gymnasium)
        Given I am logged in as a '<studentExt_1>' at '<namespace>'
        When I go to rooms overview
        Then I see '<room_name>' on room overview page

        # administrator can check the Room members via room admin page (Goethe-Gymnasium)
        Given I am logged in as a '<adminExt_1>' at '<namespace>'
        When I click on administration in menu
        When I navigate to rooms administration page via the submenu
        Then I see the rooms administration page
        When I click on button Three Dot Menu to edit room '<room_name>'
        When I select the three dot menu action 'manage room members'
        Then I see detail page for room '<room_name>'
        Then I see '<teacher_1>' in the room participants list
        Then I see '<participant_external_name_teacher>' in the room participants list
        Then I see '<participant_external_name_student>' in the room participants list
        Then I see '(anonymized)' in the room participants list
        Then I see '<participant_same_school>' in the room participants list

        # post-condition: external teacher deactivates visibility in central directory in different school (Goethe-Gymnasium)
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'
        When I go to my account settings
        Then I see the checkbox Activate visibility in the central directory is checked
        When I click on the checkbox Activate visibility in the central directory
        When I click on the button Save Visibility Settings
        Then I see the checkbox Activate visibility in the central directory is unchecked

        # post-condition: teacher deletes the room in the origin school (Felix Mendelssohn-Gymnasium)
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name>'
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'delete'
        Then I see confirmation modal for deleting the room
        When I click on delete button in confirmation modal
        Then I do not see '<room_name>' on room overview page

        @staging_test
        Examples:
            | teacher_1    | student_1    | teacherExt_1    | studentExt_1    | adminExt_1    | namespace | room_name         | participant_external_school | participant_same_school     | role_name_teacher | participant_external_name_teacher | role_name_student | participant_external_name_student | participant_same_school_student |
            | teacher1_nbc | student1_nbc | teacherExt1_nbc | studentExt1_nbc | adminExt1_nbc | nbc       | Cypress Room Name | Goethe-Gymnasium            | Felix Mendelssohn-Gymnasium | Lernbegleitend    | Carlo                             | Lernend           | Alex                              | Kraft                           |

# Note: This feature should only be executed in the staging environment due to the school API limitation
# @school_api_test
#Examples:
#   | teacher_1    | student_1    | teacherExt_1    | studentExt_1    | adminExt_1    | namespace | room_name         | participant_external_school | participant_same_school | role_name_teacher | participant_external_name_teacher | role_name_student | participant_external_name_student | participant_same_school_student |
#  | teacher1_brb | student1_brb | teacherExt1_brb | studentExt1_brb | adminExt1_brb | brb       | Cypress Room Name | cypress-test-school-2       | cypress-test-school-1   | Lernbegleitend    | cypressExt                        | Lernend           | cypress                           | student_1                       |


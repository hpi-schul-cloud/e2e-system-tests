@regression_test
@stable_test
@prio_0_staging
@group-E
Feature: Room Administration - Able to see all the rooms and in each room all details about same school members are visible

    As a room administrator, I am able to see all the rooms and in the rooms the members from same school details can be visualized.

    Scenario Outline: Room administrator sees all rooms with members from same school with all roles

        # pre-condition: user logins
        Given I am logged in as a '<student_1>' at '<namespace>'
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given I am logged in as a '<admin_1>' at '<namespace>'

        # pre-condition: admin activates student visibility
        Given student visibility for teachers in school management is 'enabled'

        # pre-condition: teacher creating a new room in the origin school, becoming the owner
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given a room named '<room_name>' exists

        # owner adds student from same school
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
        When I enter '<participant_same_school>' in dropdown School
        When I select the first school from the dropdown
        Then I see school '<participant_same_school>' in dropdown School
        When I select '<role_name_teacher>' in dropdown Role
        Then I see role '<role_name_teacher>' in dropdown Role
        When I enter '<participant_same_school_teacher>' in dropdown Name
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I see '<participant_same_school_teacher>' in the room participants list

        # owner changes role for teacher2
        When I click on button Three Dot Menu to edit participant '<participant_same_school_teacher>'
        Then I see button Change role permission is visible
        When I click on button 'Change-Permission' in the sub-menu
        Then I see dialog box Change Role Permission is visible
        When I change second user role to 'admin'
        Then I see Role changed to 'admin' for second user
        Then I click on button 'Confirm' in the 'Role' action menu

        # administrator can check the room members via room admin page
        Given I am logged in as a '<admin_1>' at '<namespace>'
        When I click on administration in menu
        When I navigate to rooms administration page via the submenu
        When I click on three dot menu in the room admin page for room '<room_name>'
        When I click on manage room members in the three dot menu
        Then I see the admin page Edit participants of room '<room_name>'
        Then I see '<participant_same_school_owner>' in the room members list
        Then I see '<participant_same_school_teacher>' in the room members list
        Then I see '<participant_same_school_student>' in the room members list
        Then I see '<participant_same_school>' in the room members list

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

        @school_api_test
        Examples:
            | teacher_1    | student_1    | teacher_2    | admin_1    | namespace | room_name                              | participant_same_school | role_name_teacher | role_name_student | participant_same_school_student | participant_same_school_teacher | participant_same_school_owner |
            | teacher1_dbc | student1_dbc | teacher2_dbc | admin1_dbc | dbc       | CypressAut Internal members Room Admin | cypress-test-school-1   | Lernbegleitend    | Lernend           | student_1                       | teacher_2                       | teacher_1                     |

        @staging_test
        Examples:
            | teacher_1    | student_1    | teacher_2    | admin_1    | namespace | room_name                              | participant_same_school     | role_name_teacher | role_name_student | participant_same_school_student | participant_same_school_teacher | participant_same_school_owner |
            | teacher1_dbc | student1_dbc | teacher2_dbc | admin1_dbc | dbc       | CypressAut Internal members Room Admin | Felix Mendelssohn-Gymnasium | Lernbegleitend    | Lernend           | Kraft                           | Lara                            | Karl                          |

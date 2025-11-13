@regression_test
@stable_test
@prio_0_staging
@group-E
Feature: RoomMembers Administration - Able to see rooms and manage all the room members via rooms administration page

    As a room administrator and member, I can view all rooms, see school member details, and add teacher members via the rooms administration page

    Scenario Outline: Room administrator sees all rooms with members from same school with all roles and add teacher member via rooms administration page

        # pre-condition: user logins
        Given I am logged in as a '<student_1>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given I am logged in as a '<admin_1>' at '<namespace>'

        # pre-condition: admin activates student visibility
        Given student visibility for teachers in school management is 'enabled'

        # pre-condition: teacher creating a new room in the origin school, becoming the owner
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given a room named '<room_name>' exists

        # owner add student and teacher as participants from same school
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        When I click on FAB to add participants
        Then I see modal Add participants
        When I enter '<participant_school>' in dropdown School
        When I select the first school from the dropdown
        Then I see school '<participant_school>' in dropdown School
        When I select '<role_name_student>' in dropdown Role
        Then I see role '<role_name_student>' in dropdown Role
        When I enter '<participant_student>' in dropdown Name
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I see '<participant_student>' in the room participants list
        When I click on FAB to add participants
        Then I see modal Add participants
        When I enter '<participant_school>' in dropdown School
        When I select the first school from the dropdown
        Then I see school '<participant_school>' in dropdown School
        When I select '<role_name_teacher>' in dropdown Role
        Then I see role '<role_name_teacher>' in dropdown Role
        When I enter '<participant_teacher_1>' in dropdown Name

        #participant_teacher_1 is the double role user
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I see '<participant_teacher_1>' in the room participants list

        # owner changes role for double role user (teacher1)
        When I click on button Three Dot Menu to edit participant '<participant_teacher_1>'
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
        Then I see '<participant_school_owner>' in the room members list
        Then I see '<participant_teacher_1>' in the room members list
        Then I see '<participant_student>' in the room members list

        # administrator add only teacher (teacher2) as member via room admin page
        When I click on FAB to add participants
        Then I see modal Add participants
        Then I see school '<participant_school>' in dropdown School
        Then I see role '<role_name_teacher>' in dropdown Role
        Then I do not see role '<role_name_student>' in dropdown Role
        When I enter '<participant_teacher_2>' in dropdown Name
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I see '<participant_teacher_2>' in the room members list
        When I click on button Three Dot Menu to edit participant '<participant_teacher_2>'
        When I click on remove button in the options of user '<fullname_teacher_2>'
        Then I see confirmation modal for deleting the user in room admin page
        When I click on delete button in confirmation modal in room admin page
        Then I do not see '<participant_teacher_2>' in the room members list

        # post-condition: admin deactivates student visibility
        Given student visibility for teachers in school management is 'disabled'

        # post-condition: teacher deletes the room in the origin school
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | teacher_1    | student_1    | teacher_2    | admin_1                | namespace | room_name             | participant_school    | role_name_teacher | role_name_student | participant_student | participant_teacher_1 | participant_school_owner | participant_teacher_2 | fullname_teacher_2 |
            | teacher1_dbc | student1_dbc | teacher2_dbc | admin1_double_role_dbc | dbc       | CypressAut Room Admin | cypress-test-school-1 | Lernbegleitend    | Lernend           | student_1           | admin_1               | teacher_1                | teacher_2             | cypress teacher_2  |

        @staging_test
        Examples:
            | teacher_1    | student_1    | teacher_2    | admin_1                | namespace | room_name             | participant_school          | role_name_teacher | role_name_student | participant_student | participant_teacher_1 | participant_school_owner | participant_teacher_2 | fullname_teacher_2 |
            | teacher1_dbc | student1_dbc | teacher2_dbc | admin1_double_role_dbc | dbc       | CypressAut Room Admin | Felix Mendelssohn-Gymnasium | Lernbegleitend    | Lernend           | Kraft               | watson                | Karl                     | Lara                  | Lara Hande         |

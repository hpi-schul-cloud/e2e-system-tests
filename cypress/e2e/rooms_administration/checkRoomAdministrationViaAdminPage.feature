@regression_test
@stable_test
@group-E


Feature: Room Administration - able to see all the rooms and in each room all details about same school members are visible

    As a room Adminstrator, I am able to see all the rooms and in the rooms the members from same school details can be visualized.

    Scenario Outline: Room Administrator can visualize all the rooms and the rooms with different school members are shown as 'anonymised' except member with 'own' role


        # Goethe-Gymnasium
        Given I am logged in as a '<admin_1>' at '<namespace>'

        # pre-condition: admin activates student visibility
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        When I click the toggle switch to enable student visibility for teachers
        When I click on button Save admin settings

        # Goethe-Gymnasium
        Given I am logged in as a '<student_1>' at '<namespace>'
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'


        # pre-condition: teacher creating a new room in the origin school (Goethe-Gymnasium), becoming the owner
        Given a room named '<room_name>' exists

        # the owner adds student from same school
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
        When I enter '<participant_same_school>' in dropdown School
        When I select the first school from the dropdown
        Then I see school '<participant_same_school>' in dropdown School
        When I select '<role_name_teacher>' in dropdown Role
        Then I see role '<role_name_teacher>' in dropdown Role
        When I enter '<participant_same_school_name_teacher>' in dropdown Name
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I see '<participant_same_school_name_teacher>' in the room participants list

        # owner changes role for teacher2
        When I click on button Three Dot Menu to edit participant '<participant_same_school_name_teacher>'
        Then I see button Change role permission is visible
        When I click on button 'Change-Permission' in the sub-menu
        Then I see dialog box Change Role Permission is visible
        When I change second user role to 'admin'
        Then I see Role changed to 'admin' for second user
        Then I click on button 'Confirm' in the 'Role' action menu


        # administrator can check the Room members via room admin page (Goethe-Gymnasium)
        Given I am logged in as a '<admin_1>' at '<namespace>'
        When I click on administration in menu
        When I navigate to rooms administration page via the submenu
        #Then I see the rooms administration page
        When I click on three dot menu in the room admin page for room '<room_name>'
        When I click on manage room members in the three dot menu
        Then I see the admin page Edit participants of room '<room_name>'
        Then I see 'teacher_1' in the room members list
        Then I see '<participant_same_school_name_teacher>' in the room members list
        Then I see '<participant_same_school_student>' in the room members list
        Then I see '<participant_same_school>' in the room members list

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

        # In Staging this feature is still not available so the test is only executed in School API environments
        # @staging_test
        # Examples:
        #    | teacher_1    | student_1    | teacher_2    | admin_1    | namespace | room_name         | participant_same_school | role_name_teacher | role_name_student | participant_same_school_student | participant_same_school_name_teacher |
        #     | teacher1_nbc | student1_nbc | teacher2_nbc | admin1_nbc | nbc       | Cypress Room Name | Goethe-Gymnasium        | Lernbegleitend    | Lernend           | Kraft                           | Carlo                                |

        @school_api_test
        Examples:
            | teacher_1    | student_1    | teacher_2    | admin_1    | namespace | room_name         | participant_same_school | role_name_teacher | role_name_student | participant_same_school_student | participant_same_school_name_teacher |
            | teacher1_brb | student1_brb | teacher2_brb | admin1_brb | brb       | Cypress Room Name | cypress-test-school-1   | Lernbegleitend    | Lernend           | student_1                       | teacher_2                            |

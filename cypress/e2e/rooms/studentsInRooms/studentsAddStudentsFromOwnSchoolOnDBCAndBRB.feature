@regression_test
@stable_test
@group-E
@prio_0_staging
Feature: Rooms - Students can only add students from their own classes to a room on dBC or on BRB

    As a student, I can only add students from my own class to a room.

    Scenario Outline: Teacher adds participants and deletes participants

        # pre-condition: users (admin, teacher and students) logged in
        Given I am logged in as a '<student_1>' at '<namespace>'
        Given I am logged in as a '<student_2>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin activates student visibility
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        When I click the toggle switch to enable student visibility for teachers
        When I click on button Save admin settings

        # pre-condition: teacher creating a new room
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        When I click on FAB to create new room
        Then I see room creation page
        When I enter the room name '<room_name>'
        When I click on the button Save room
        Then I see the detail page of room '<room_name>'

        # pre-condition: teacher adds student to room
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        When I click on FAB to add participants
        Then I see speed dial options 'select-from-directory, add-external-person'
        When I click on button 'select-from-directory' from speed dial option
        Then I see modal Add participants
        Then I see school '<school_name>' in dropdown School
        When I select '<role_name>' in dropdown Role
        Then I see role '<role_name>' in dropdown Role
        When I enter '<participant_name_1>' in dropdown Name
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I see '<participant_name_1>' in the room participants list

        # pre-condition: teacher changes role for student to room admin
        When I click on button Three Dot Menu to edit participant '<participant_name_1>'
        Then I see button Change role permission is visible
        When I click on button 'Change-Permission' in the sub-menu
        Then I see dialog box Change Role Permission is visible
        When I change second user role to 'admin'
        Then I see Role changed to 'admin' for second user
        Then I click on button 'Confirm' in the 'Role' action menu

        # pre-condition: student can see the room
        Given I am logged in as a '<student_1>' at '<namespace>'
        When I go to rooms overview
        Then I see '<room_name>' on room overview page

        # student can not add any student because there is no class present
        When I click on button Open to go to room '<room_name>' at position '0'
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        When I click on FAB to add participants
        Then I see speed dial options 'select-from-directory, add-external-person'
        When I click on button 'select-from-directory' from speed dial option
        Then I see modal Add participants
        Then I see school '<school_name>' in dropdown School
        When I select '<role_name>' in dropdown Role
        Then I see role '<role_name>' in dropdown Role
        When I enter '<participant_name_2>' in dropdown Name
        # "Then I dont see any results" currently implemented as "not adding the person"
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I do not see '<participant_name_2>' in the room participants list

        # teacher creates a new class with two students
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I click on administration in menu
        When I navigate to class administration page via sub menu
        When I click on the button Add class
        Then I see the create class page
        Then I see the current school year '<school_year>' is selected
        Then I see the teacher name '<fullname_teacher>' is selected
        When I click on the button More Options
        When I enter a custom Class name '<custom_class_name>'
        When I click on the checkbox Maintain school year assignment
        When I click on the button Add class on the page create class
        Then I see the teacher name '<fullname_teacher>' in the teacher dropdown
        When I select the '<fullname_student_1>' from the student selection dropdown
        When I select the '<fullname_student_2>' from the student selection dropdown
        When I click on the button Save changes on the page manage class
        Then I see the class '<custom_class_name>' has '<number_of_students>' students

        # student can add second student to room
        Given I am logged in as a '<student_1>' at '<namespace>'
        When I go to rooms overview
        Then I see '<room_name>' on room overview page
        When I click on button Open to go to room '<room_name>' at position '0'
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        When I click on FAB to add participants
        Then I see speed dial options 'select-from-directory, add-external-person'
        When I click on button 'select-from-directory' from speed dial option
        Then I see modal Add participants
        Then I see school '<school_name>' in dropdown School
        When I select '<role_name>' in dropdown Role
        Then I see role '<role_name>' in dropdown Role
        When I enter '<participant_name_2>' in dropdown Name
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I see '<participant_name_2>' in the room participants list

        # post-condition: teacher deletes the room
        Given I am logged in as a '<teacher>' at '<namespace>'
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
            | namespace | admin      | teacher      | student_1    | student_2    | room_name            | school_name           | role_name | participant_name_1 | participant_name_2 | school_year | school_year_next | custom_class_name            | number_of_students | fullname_teacher  | fullname_student_1 | fullname_student_2 |
            | brb       | admin1_brb | teacher1_brb | student1_brb | student2_brb | CypressAut Room Name | cypress-test-school-1 | Lernend   | student_1          | student_2          | 2025/26     | 2026/27          | CypressAut Class Name Manage | 2                  | cypress teacher_1 | cypress student_1  | cypress student_2  |

        @staging_test
        Examples:
            | namespace | admin      | teacher      | student_1    | student_2    | room_name            | school_name                 | role_name | participant_name_1 | participant_name_2 | school_year | school_year_next | custom_class_name            | number_of_students | fullname_teacher | fullname_student_1 | fullname_student_2 |
            | brb       | admin1_brb | teacher1_brb | student1_brb | student2_brb | CypressAut Room Name | Felix Mendelssohn-Gymnasium | Lernend   | Kraft              | Strobl             | 2025/26     | 2026/27          | CypressAut Class Name Manage | 2                  | Karl Herzog      | Herbert Kraft      | Amelia Strobl      |

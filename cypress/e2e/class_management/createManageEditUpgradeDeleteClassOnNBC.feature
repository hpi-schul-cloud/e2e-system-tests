@regression_test
@stable_test
@schedule_run
@group-E
@prio_0_staging
Feature: Class Management - To create, manage, edit, upgrade and delete class on NBC

    As a teacher I want create, manage, edit, upgrade and delete a class

    Scenario Outline: Teacher creates, manages, edits, upgrades and deletes a class
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin activates student visibility
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        When I click the toggle switch to enable student visibility for teachers
        When I click on button Save admin settings

        # teacher creates a new class
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I click on administration in menu
        When I navigate to class administration page via sub menu
        Then I see the new class administration page
        Then I see 3 tabs
        When I click on the button Add class
        Then I see the create class page
        Then I see the current school year '<school_year>' is selected
        Then I see the teacher name '<fullname_teacher>' is selected
        When I click on the button More Options
        When I enter a custom Class name '<custom_class_name>'
        When I click on the checkbox Maintain school year assignment
        When I click on the button Add class on the page create class
        Then I see the manage classes page
        Then I see the teacher name '<fullname_teacher>' in the teacher dropdown
        When I select the '<fullname_student>' from the student selection dropdown
        When I click on the button Save changes on the page manage class
        Then I see the new class administration page
        Then I see the class '<custom_class_name>' has '<number_of_students>' students

        # teacher manages class
        When I click on the manage button of class '<custom_class_name>'
        Then I see the manage classes page
        Then I see the teacher name '<fullname_teacher>' in the teacher dropdown
        Then I see the student name '<fullname_student>' in the student dropdown
        When I click on the button Save changes on the page manage class
        Then I see the new class administration page

        # teacher edits class
        When I click on the edit button of class '<custom_class_name>'
        Then I see the edit classes page
        When I enter a custom Class name '<edit_custom_class_name>'
        When I click on the checkbox Maintain school year assignment
        When I click on the button Save on the page edit class
        Then I see the new class administration page
        Then I see the class '<edit_custom_class_name>' has '<number_of_students>' students

        # teacher upgrades class
        When I click on the upgrade button of class '<edit_custom_class_name>'
        Then I see the create successor page
        When I click on the button confirm on the page create successor
        Then I see the manage classes page
        Then I see the teacher name '<fullname_teacher>' in the teacher dropdown
        Then I see the student name '<fullname_student>' in the student dropdown
        When I click on the button Save changes on the page manage class
        Then I see the new class administration page
        Then I see the disabled create successor button of the original class '<edit_custom_class_name>'

        # teacher deletes successor class on next year tab
        When I click on the next year tab
        Then I see the class '<edit_custom_class_name>' has '<number_of_students>' students
        Then I see the enabled create successor button of the original class '<edit_custom_class_name>'
        When I click on the delete button of class '<edit_custom_class_name>'
        When I click the confirmation button on the delete modal

        @staging_test
        Examples:
            | namespace | admin      | teacher      | student      | school_year | school_year_next | custom_class_name | edit_custom_class_name | number_of_students | fullname_teacher | fullname_student |
            | nbc       | admin1_nbc | teacher1_nbc | student1_nbc | 2025/26     | 2026/27          | cyClassNameManage | cyEditClassNameManage  | 1                  | Karl Herzog      | Herbert Kraft    |

        @school_api_test
        Examples:
            | namespace | admin      | teacher      | student      | school_year | school_year_next | custom_class_name | edit_custom_class_name | number_of_students | fullname_teacher  | fullname_student  |
            | nbc       | admin1_nbc | teacher1_nbc | student1_nbc | 2025/26     | 2026/27          | cyClassNameManage | cyEditClassNameManage  | 1                  | cypress teacher_1 | cypress student_1 |

@regression_test
@stable_test
@schedule_run
@group-E
@pr
@prio_0_staging
Feature:  Class Management - To create, edit and delete class on dBC or on BRB

    As a teacher, I want to create, edit, and delete classes to manage them efficiently

    Scenario Outline: Teacher creates, edits, and deletes a class

        # Note: Student list does not load sometimes on the class management page.

        # pre-condition: admin, teacher and student log in to create their account in a same school
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'

        # teacher creates a new class with custom name
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
        When I select the '<fullname_student>' from the student selection dropdown
        When I click on the button Save changes on the page manage class
        Then I see the class '<custom_class_name>' has '<number_of_students>' students

        # teacher edits the class
        When I click on the button Edit to edit the class '<custom_class_name>'
        Then I see the edit classes page
        When I enter a custom Class name '<edit_custom_class_name>'
        When I click on the checkbox Maintain school year assignment
        When I click on the button Save on the page edit class
        Then I see the class '<edit_custom_class_name>' has '<number_of_students>' students

        # post-condition: teacher deletes the class
        When I click on the delete button of class '<edit_custom_class_name>'
        When I click button Cancel on the delete modal of class administration page
        When I click on the delete button of class '<edit_custom_class_name>'
        Then I click the confirmation button on the delete modal

        @staging_test
        Examples:
            | namespace | teacher      | student      | school_year | custom_class_name          | edit_custom_class_name            | number_of_students | fullname_teacher | fullname_student |
            | dbc       | teacher1_dbc | student1_dbc | 2025/26     | CypressAut Test Class Name | CypressAut Test Class Name Edited | 1                  | Karl Herzog      | Herbert Kraft    |

        @school_api_test
        Examples:
            | namespace | teacher      | student      | school_year | custom_class_name          | edit_custom_class_name            | number_of_students | fullname_teacher  | fullname_student  |
            | dbc       | teacher1_dbc | student1_dbc | 2025/26     | CypressAut Test Class Name | CypressAut Test Class Name Edited | 1                  | cypress teacher_1 | cypress student_1 |

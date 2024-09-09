@regression_test
@stable_test
@schedule_test
Feature:  To create, edit and delete class on dBC or on BRB
    # Note: On main-BRB student list is not loading on class management page, so test doesn't execute on brb.

    As a teacher, I want to create, edit and delete class, so that I can manage the class

    Scenario: Teacher creates, edits and delete a class, including pre-conditions

        # pre-condition: admin, teacher and student log in to create their account in a same school
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'

        # Teacher creates a new class with custom name
        When I click on administration in menu
        When I click on sub menu class
        Then I see old class administration page
        When I click on the button add class
        Then I can see the create class page
        Then I see the current school year '<school_year>' is selected
        Then I see the teacher name '<fullname_teacher>' is selected
        When I click on the button More Options
        When I enter a custom Class name '<custom_class_name>'
        When I click on the checkbox Maintain school year assignment
        When I click on the button Add class
        Then I see the teacher name '<fullname_teacher>' in the teacher dropdown
        Then I select the '<fullname_student>' from the student selection dropdown
        When I click on the button Save changes
        Then I see old class administration page
        Then I see class '<custom_class_name>' on the overview
        Then I see number of student '<number_of_students>' on the overview

        # Teacher edits the class
        When I click on the button edit for the class '<custom_class_name>'
        When I enter a custom Class name '<edit_custom_class_name>'
        When I click on the checkbox Maintain school year assignment
        When I click on the button save change on the page edit class
        Then I see old class administration page
        Then I see class '<edit_custom_class_name>' on the overview

        # Teacher deletes the class
        When I click the button delete for the class '<edit_custom_class_name>'
        Then I can see the delete modal on old class administration page
        When I click the cancel button on the delete modal on old class administration page
        Then I see old class administration page
        When I click the button delete for the class '<edit_custom_class_name>'
        Then I can see the delete modal on old class administration page
        When I click on delete confirmation button on the delete modal
        Then I see old class administration page
        When I do not see the class '<edit_custom_class_name>'

        @staging_test
        Examples:
            | namespace | teacher      | student      | school_year | custom_class_name | edit_custom_class_name | number_of_students | fullname_teacher | fullname_student |
            | dbc       | teacher1_dbc | student1_dbc | 2023/24     | cyTestClassName   | cyEditClassName        | 1                  | Karl Herzog      | Herbert Kraft    |

        @school_api_test
        Examples:
            | namespace | teacher      | student      | school_year | custom_class_name | edit_custom_class_name | number_of_students | fullname_teacher  | fullname_student  |
            | dbc       | teacher1_dbc | student1_dbc | 2023/24     | cyTestClassName   | cyEditClassName        | 1                  | cypress teacher_1 | cypress student_1 |
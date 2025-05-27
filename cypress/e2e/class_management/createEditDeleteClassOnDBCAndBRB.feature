@regression_test
@stable_test
@group-D
@pr
Feature:  Class Management - To create, edit and delete class on dBC or on BRB

    As a teacher, I want to create, edit and delete class, so that I can manage the class

    Scenario: Teacher creates, edits and delete a class, including pre-conditions

        # Note: Student list does not load sometimes on the class management page.

        # pre-condition: admin, teacher and student log in to create their account in a same school
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'

        # Teacher creates a new class with custom name
        When I click on administration in menu
        When I navigate to class administration page via sub menu
        Then I see old class administration page
        When I click on the button Add class on the page class overview
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
        Then I see old class administration page
        Then I see class '<custom_class_name>' on the overview
        Then I see number of students '<number_of_students>' on the overview

        # Teacher edits the class
        When I click on the button edit to edit the class
        When I enter a custom Class name '<edit_custom_class_name>'
        When I click on the checkbox Maintain school year assignment
        When I click on the button save change on the page edit class
        Then I see old class administration page
        Then I see class '<edit_custom_class_name>' on the overview

        # Teacher deletes the class
        When I click the button delete to delete the class
        Then I can see the delete modal on old class administration page
        When I click the cancel button on the delete modal on old class administration page
        Then I see old class administration page
        When I click the button delete to delete the class
        Then I can see the delete modal on old class administration page
        When I click on delete confirmation button on the delete modal
        Then I see old class administration page
        When I do not see the class '<edit_custom_class_name>'

        @staging_test
        Examples:
            | namespace | teacher      | student      | school_year | custom_class_name | edit_custom_class_name | number_of_students | fullname_teacher | fullname_student |
            | brb       | teacher1_brb | student1_brb | 2023/24     | cyTestClassName   | cyEditClassName        | 1                  | Karl Herzog      | Herbert Kraft    |

        @school_api_test
        Examples:
            | namespace | teacher      | student      | school_year | custom_class_name | edit_custom_class_name | number_of_students | fullname_teacher  | fullname_student  |
            | dbc       | teacher1_dbc | student1_dbc | 2023/24     | cyTestClassName   | cyEditClassName        | 1                  | cypress teacher_1 | cypress student_1 |

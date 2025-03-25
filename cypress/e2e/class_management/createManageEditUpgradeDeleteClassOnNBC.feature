@regression_test
@stable_test
Feature: Class Management - To create, manage, edit, upgrade and delete class on NBC

  As a teacher I want create, manage, edit, upgrade and delete a class

  Scenario: Teacher creates, manages, edits, upgrades and deletes a class

    Given I am logged in as a '<student>' at '<namespace>'
    Given I am logged in as a '<teacher>' at '<namespace>'

    # teacher creates a new class 
    When I click on administration in menu
    When I navigate to class administration page via sub menu
    Then I see the new class administration page
    Then I see 3 tabs
    When I click on the Add class button
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
    Then I see the class '<custom_class_name>' without source
    Then I see number of students '<number_of_students>' on the overview

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
    When I click on the button save change on the page edit class
    Then I see the new class administration page
    Then I see the class '<edit_custom_class_name>' without source

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

    # teacher deletes class
    When I click on the delete button of class '<edit_custom_class_name>'
    When I click the confirmation button on the delete modal
    Then I do not see class '<edit_custom_class_name>' in the table

    # teacher deletes successor class on next year tab
    When I click on the next year tab
    Then I see the class '<edit_custom_class_name>' without source
    Then I see the enabled create successor button of the original class '<edit_custom_class_name>'
    When I click on the delete button of class '<edit_custom_class_name>'
    When I click the confirmation button on the delete modal
    Then I do not see class '<edit_custom_class_name>' in the table

    @staging_test
    Examples:
      | namespace | teacher      | student      | school_year | school_year_next | custom_class_name | edit_custom_class_name | number_of_students | fullname_teacher | fullname_student |
      | nbc       | teacher1_nbc | student1_nbc | 2024/25     | 2025/26          | cyTestClassName   | cyEditClassName        | 1                  | Karl Herzog      | Herbert Kraft    |
    
    @school_api_test
    Examples:
      | namespace | teacher      | student      | school_year | school_year_next | custom_class_name | edit_custom_class_name | number_of_students | fullname_teacher  | fullname_student  |
      | nbc       | teacher1_nbc | student1_nbc | 2024/25     | 2025/26          | cyTestClassName   | cyEditClassName        | 1                  | cypress teacher_1 | cypress student_1 |

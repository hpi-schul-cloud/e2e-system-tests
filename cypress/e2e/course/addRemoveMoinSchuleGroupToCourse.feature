@regression_test
@stable_test

Feature: Course - To add and remove a moin.schule group from a course on NBC

	As a Teacher I want to add and remove a moin.schule group from a course

	Scenario: Teacher adds and removes a moin.schule group from a course
		Given I am logged in as a '<student1>' at '<namespace>'
		Given I am logged in as a '<student2>' at '<namespace>'
		Given I am logged in as a '<teacher>' at '<namespace>'

        # teacher creates course and adds a group to it
		When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        Then I see section one area on the course create page
        When I enter the course title '<course_title>'
        Then I see teacher '<fullname_teacher>' is selected by default
		When I click on button Next Steps after entering the course detail in section one
		Then I see section two area on the course create page
        When I select the class '<group_title1>' in the class list
		When I click on button Next Steps after selecting course participant details
		Then I see the section three area as the finish page
		When I click on button To Course Overview on the finish page
		Then I see the course '<course_title>' on the course overview page

        # teacher adds a second group to course
		When I go to course '<course_title>'
		When I open page Edit course
		Then I see page Edit course
        Then I see the teacher '<listname_teacher>' is selected
		Then I see the student '<listname_student1>' is selected
		Then I see the class '<group_title1>' is selected
        When I select the class '<group_title2>'
		When I click on button Save changes in page Edit course
		Then I see the course '<course_title>' on the course overview page

        # teacher removes the second group from course
		When I open page Edit course
        Then I see the teacher '<listname_teacher>' is selected
		Then I see the student '<listname_student1>' is selected
		Then I see the student '<listname_student2>' is selected
        Then I see the class '<group_title1>' is selected
        Then I see the class '<group_title2>' is selected
        When I click on the remove icon of class '<group_title2>'
        When I click on button Save changes in page Edit course
        When I open page Edit course
        Then I see the class '<group_title1>' is selected
        Then I do not see '<group_title2>' in the class selection box
        Then I see the student '<listname_student1>' is selected
        Then I do not see '<listname_student2>' in the student selection box

        # post-condition: teacher deletes course
        Given course with name '<course_title>' is deleted

        @staging_test
        Examples:
            | namespace | teacher      | student1     | student2     | fullname_teacher | listname_teacher | listname_student1 | listname_student2 | course_title               | group_title1        | group_title2        |
            | nbc       | teacher1_nbc | student1_nbc | student2_nbc | Karl Herzog      | Herzog, Karl     | Kraft, Herbert    | Strobl, Amelia    | CypressAUT CourseWithClass | Cypress-Test-Group1 | Cypress-Test-Group2 |

        # Note: This test runs with moin.schule groups from the seed data
        @school_api_test
        Examples:
            | namespace | teacher      | student1     | student2     | fullname_teacher  | listname_student   | course_title               | course_title_edit              | group_title         | group_title2        |
            | nbc       | teacher1_nbc | student1_nbc | student2_nbc | cypress teacher_1 | teacher_1, cypress | CypressAUT CourseWithClass | CypressAUT EditCourseWithClass | Cypress-Test-Group1 | Cypress-Test-Group2 |

@stable_test
@regression_test

# NOTE: This feature is only for staging due to a limitation in the admin API: it cannot create a new course without a teacher.

Feature: Admin sees courses without assigned teachers

    As an admin I want to see which courses do not have a teacher assigned, so that I can easily manage and update course assignments

    Scenario Outline: Admin views courses without assigned teachers in class administration

        # Pre-condition: creating user and login
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'
        Given course without a teacher <course_without_teacher> exist in course management page

        # Pre-condition: admin creates a course and assigns a teacher
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        Then I see section one area on the course create page
        When I enter the course title '<course_with_teacher>'
        When I select course colour as red
        Then I select teacher '<fullname_teacher>' is selected by default
        Then I see substitute teacher selection box
        Then I see date pickers to start and end the course as per school year
        Then I see button to create a course time table container
        When I click on button Next Steps after entering the course detail in section one
        Then I see section two area on the course create page
        Then I see class selection box to select the class for the course
        Then I see student selection box to select the student for the course
        # Note: student user is not needed in this feature so this step is commented out
        # When I select the student 'cypress student_1' in the list
        When I click on button Next Steps after selecting course participant details
        Then I see the section three as the finish page
        When I click on button To Course Overview on the finish page
        # Note: this step is not applicable for the admin user
        # Then I see the course 'CypressAut Test Creation and Deletion' on the course overview page

        # Admin sees the courses with and without teacher assigned
        When I click on administration in the menu
        When I navigate to the class administration page via sub menu
        Then I see the new class administration page
        Then I see two tabs Current and Archive
        When I click on the tab Current
        Then I see the course '<course_without_teacher>'
        Then I see the course '<course_with_teacher>'
        Then I see the Alert icon with the text '<info_text>' in the column Teacher
        When I click on the toggle '<toggle_text>'
        Then I see the course '<course_without_teacher>'
        When I click on the toggle '<toggle_text>'
        Then I see the course '<course_with_teacher>'
        Then I see the course '<course_without_teacher>'

        @staging_test
        Examples:
            | admin      | namespace | course_without_teacher         | course_with_teacher         | info_text     | toggle_text                        | teacher      | fullname_teacher |
            | admin1_dbc | dbc       | cypress_course_without_teacher | cypress_course_with_teacher | not available | Only show courses without teachers | teacher1_nbc | Karl Herzog      |

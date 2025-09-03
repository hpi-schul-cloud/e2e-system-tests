@regression_test
@stable_test
@schedule_run
@group-C
@pr
Feature: Course - Teacher can add and remove BBB tool in the course with admin permission

    As a teacher I want to activate and deactivate BBB tool in the course, so that I can manage the video lectures.

    Scenario Outline: Teacher creates, edits and deletes a topic in the course, including pre-conditions

        # pre-condition: admin, teacher and student log in to create their account in a same school
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin creates a course and assign teacher to the course
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        Then I see section one area on the course create page
        When I enter the course title '<course_name>'
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
        #When I select the student 'cypress student_1' in the list
        When I click on button Next Steps after selecting course participant details
        Then I see the section three as the finish page
        When I click on button To Course Overview on the finish page
        # Note: this step is not applicable for the admin user
        #Then I see the course 'CypressAut Test Creation and Deletion' on the course overview page

        # admin enables the video conference in the school settings page
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        Then I enable the video conference
        Then I click on button Save admin settings

        # teacher can add and remove BBB tool in the course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I open page Edit course
        Then I see page Edit course
        When I click on checkbox Activate video conferences in page Edit course to enable the BBB tool
        When I click on button Save changes in page Edit course
        When I click on tab Tools
        Then I see the BBB Video Conference BigBlueButton in the course
        When I click on the BBB Video Conference BigBlueButton in the course
        Then I see the modal to start the BBB video conference
        Then I click on button Cancel in BBB dialog box
        #Teacher removes the BBB tool in the course
        When I open page Edit course
        Then I see page Edit course
        When I uncheck the checkbox to Activate video conferences in page Edit course to enable the BBB tool
        When I click on button Save changes in page Edit course
        When I click on tab Tools
        Then I do not see the the card Video Conference BigBlueButton

        # admin disables the video conference option in the school settings page and teacher can not add the bbb tool in the course
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        Then I disable the video conference
        Then I click on button Save admin settings

        # teacher can not add BBB tool in the course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I open page Edit course
        Then I see page Edit course
        Then I see the disabled check box for Activating video conferences in page Edit course

        # post-condition: teacher deletes the course
        When I go to courses overview
        When I go to course '<course_name>'
        When I open page Edit course
        When I click on the button delete course
        Then I see the modal to confirm the deletion
        When I click on the button delete on the modal to confirm the course deletion
        Then I do not see the course '<course_name>' on the course overview page

        @staging_test
        Examples:
            | namespace | admin      | teacher      | fullname_teacher | course_name                           |
            | nbc       | admin1_nbc | teacher1_nbc | Karl Herzog      | CypressAut Test Creation and Deletion |

        @pre_check_test
        @school_api_test
        Examples:
            | namespace | admin      | teacher      | fullname_teacher  | course_name                           |
            | nbc       | admin1_nbc | teacher1_nbc | cypress teacher_1 | CypressAut Test Creation and Deletion |

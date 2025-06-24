@regression_test
@stable_test
@schedule_run
@group-F
Feature: Course Management - To create, edit and delete class

    As an administrator I want create, edit and delete a class

    Scenario: Admin creates, edits and deletes a class
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin activates student visibility
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        When I click the toggle switch to enable student visibility for teachers
        When I click on button Save admin settings

        # admin creates a new course
        When I click on administration in menu
        When I navigate to course administration page via sub menu
        Then I see the new course administration page
        Then I see 2 tabs
        When I click on the Add course button
        Then I see section one area on the course create page
        When I enter the course title '<course_title>'
        When I select '<fullname_teacher>' from field teacher
        Then I see substitute teacher selection box
        Then I see date pickers to start and end the course as per school year
        Then I see button to create a course time table container
        When I click on button Next Steps after entering the course detail in section one
        Then I see section two area on the course create page
        Then I see class selection box to select the class for the course
        Then I see student selection box to select the class for the course
        When I select the student '<fullname_student>' in the list
        When I click on button Next Steps after selecting course participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page
        When I click on administration in menu
        When I navigate to course administration page via sub menu
        Then I see the course '<course_title>' on the new course administration page
        Then I see the course '<course_title>' with teacher '<fullname_teacher>'
        Then I see the course '<course_title>' without a class

        # admin edits course
        When I click on the edit button of course '<course_title>'
        Then I see page Edit course
        When I edit the title of the course to '<course_title_edited>'
        When I click on button Save changes in page Edit course
        Then I see the course '<course_title_edited>' on the new course administration page

        # admin deletes course
        When I click on the delete button of course '<course_title_edited>'
        Then I see the delete modal
        When I click the confirmation button on the delete modal
        # Note: does not work if table is empty
        # Then I do not see course '<course_title>' in course table

        @staging_test
        Examples:
            | namespace | admin      | teacher      | student      | course_title                    | course_title_edited                 | fullname_teacher | fullname_student |
            | nbc       | admin1_nbc | teacher1_nbc | student1_nbc | CypressAUT TestCourseManagement | CypressAUT TestCourseManagementEdit | Karl Herzog      | Herbert Kraft    |

        @school_api_test
        Examples:
            | namespace | admin      | teacher      | student      | course_title                    | course_title_edited                 | fullname_teacher  | fullname_student  |
            | nbc       | admin1_nbc | teacher1_nbc | student1_nbc | CypressAUT TestCourseManagement | CypressAUT TestCourseManagementEdit | cypress teacher_1 | cypress student_1 |

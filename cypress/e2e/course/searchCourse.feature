@stable_test
@schedule_run
@regression_test
@prio_0-staging
Feature: Course - To search for a course via search input box on the course overview page

    As a user (teacher & student) I want to search for dedicated course so that I can quickly find it.

    Scenario Outline: user creation, course creation, and search functionality

        # pre-condition: creating all users
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: creating new course
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        Then I see section one area on the course create page
        When I enter the course title '<created_course_name>'
        When I select course colour as red
        When I select '<fullname_teacher>' from field teacher
        Then I see substitute teacher selection box
        Then I see button to create a course time table container
        When I click on button Next Steps after entering the course detail in section one
        Then I see section two area on the course create page
        When I select '<fullname_student>' from field student
        When I click on button Next Steps after selecting course participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page

        # teacher is able to search for a course and find it
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I enter the course name '<created_course_name>' into the search field
        Then I see the course '<created_course_name>' on the course overview page

        # teacher is able to search for a course and DO NOT find it
        When I go to courses overview
        When I enter the course name '<nonexistent_course_name>' into the search field
        Then I do not see the course '<nonexistent_course_name>' on the course overview page

        # student is able to search for a course and find it
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I enter the course name '<created_course_name>' into the search field
        Then I see the course '<created_course_name>' on the course overview page

        #  student is able to search for a course and DO NOT find it
        When I go to courses overview
        When I enter the course name '<nonexistent_course_name>' into the search field
        Then I do not see the course '<nonexistent_course_name>' on the course overview page

        # post-condition: teacher deletes the course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<created_course_name>'
        When I open page Edit course
        When I click on the button delete course
        Then I see the modal to confirm the deletion
        When I click on the button delete on the modal to confirm the course deletion
        Then I do not see the course '<created_course_name>' on the course overview page

        @school_api_test
        Examples:
            | admin      | teacher      | student      | namespace | created_course_name      | nonexistent_course_name                    | fullname_teacher  | fullname_student  |
            | admin1_brb | teacher1_brb | student1_brb | brb       | CypressAut Search Course | CypressAut Not Existing Mathematics Course | cypress teacher_1 | cypress student_1 |

        @staging_test
        Examples:
            | admin      | teacher      | student      | namespace | created_course_name      | nonexistent_course_name                    | fullname_teacher | fullname_student |
            | admin1_brb | teacher1_brb | student1_brb | brb       | CypressAut Search Course | CypressAut Not Existing Mathematics Course | Karl Herzog      | Herbert Kraft    |

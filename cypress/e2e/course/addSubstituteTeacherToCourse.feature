@regression_test
@stable_test
@schedule_run
@group-Q
Feature: Course - Add substitute teacher to course

    As a teacher I want to add substitute teacher to the course.

    Scenario Outline: user creation, course creation, and adding substitute teacher to the course, including pre-conditions

        # pre-condition: creating all users and creating course
        Given I am logged in as a '<teacher1>' at '<namespace>'
        Given I am logged in as a '<teacher2>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin creates a course and assign teacher to the course
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        Then I see section one area on the course create page
        When I enter the course title '<course_name>'
        When I select course colour as red
        Then I select '<fullname_teacher>' from field teacher
        Then I see substitute teacher selection box
        Then I see button to create a course time table container
        When I click on button Next Steps after entering the course detail in section one
        Then I see section two area on the course create page
        When I click on button Next Steps after selecting course participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page

        # adding substitute teacher to course
        Given I am logged in as a '<teacher1>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I open page Edit course
        Then I see page Edit course
        When I clear substitute teacher field
        When I add substitute teacher '<substitute_teacher>'
        When I click on button Save changes in page Edit course
        Given I am logged in as a '<teacher2>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'

        # Post-condition: Teacher deletes the course
        Given I am logged in as a '<teacher1>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I open page Edit course
        When I click on the button delete course
        Then I see the modal to confirm the deletion
        When I click on the button delete on the modal to confirm the course deletion
        Then I do not see the course '<course_name>' on the course overview page

        @school_api_test
        Examples:
            | admin      | teacher1     | teacher2     | namespace | course_name                   | fullname_teacher  | substitute_teacher |
            | admin1_brb | teacher1_brb | teacher2_brb | brb       | CypressAut Sub-Teacher Course | cypress teacher_1 | teacher_2, cypress |

        @staging_test
        Examples:
            | admin      | teacher1     | teacher2     | namespace | course_name                   | fullname_teacher | substitute_teacher |
            | admin1_brb | teacher1_brb | teacher2_brb | brb       | CypressAut Sub-Teacher Course | Karl Herzog      | Hande, Lara        |


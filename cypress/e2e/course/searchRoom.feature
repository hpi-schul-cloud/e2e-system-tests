@api_migrated
@release
@stable_test
Feature: Course - To search for a course via search input box on the course overview page

  As a user (teacher & student) I want to search for dedicated course so that I can quickly find it.

  Scenario Outline: user creation, course creation, and search functionality

    # pre-condition: creating all users and creating course
    Given I am logged in as a '<teacher>' at '<namespace>'
    Given I am logged in as a '<student>' at '<namespace>'
    Given I am logged in as a '<admin>' at '<namespace>'

    # pre-condition: creating new course
    When I go to rooms overview
    When I click on FAB to create a new room
    When I click on new course create button in sub menu
    Then I see section one area on the course create page
    When I enter the course title '<created_course_name>'
    When I select room colour as red
    When I select '<fullname_teacher>' from field teacher
    Then I see substitute teacher selection box
    Then I see button to create a course time table container
    When I click on button Next Steps after entering the room detail in section one
    Then I see section two area on the course create page
    When I select '<fullname_student>' from field student
    When I click on button Next Steps after selecting room participant details
    Then I see the section three area as the finish page
    When I click on button To Course Overview on the finish page

    # teacher is able to search for a course and find it
    Given I am logged in as a '<teacher>' at '<namespace>'
    When I go to rooms overview
    When I enter the course name '<created_course_name>' into the search field
    Then I see the course '<created_course_name>' on the room overview page

    # teacher is able to search for a course and DO NOT find it
    When I go to rooms overview
    When I enter the course name '<nonexistent_course_name>' into the search field
    Then I do not see the course '<nonexistent_course_name>' on the room overview page

    # student is able to search for a course and find it
    Given I am logged in as a '<student>' at '<namespace>'
    When I go to rooms overview
    When I enter the course name '<created_course_name>' into the search field
    Then I see the course '<created_course_name>' on the room overview page

    #  student is able to search for a course and DO NOT find it
    When I go to rooms overview
    When I enter the course name '<nonexistent_course_name>' into the search field
    Then I do not see the course '<nonexistent_course_name>' on the room overview page

    @non_staging_test
    Examples:
      | admin      | teacher      | student      | namespace | created_course_name      | nonexistent_course_name         | fullname_teacher  | fullname_student  |
      | admin1_brb | teacher1_brb | student1_brb | brb       | CypressAut Search Course | Cy::NotExistingMathematikCourse | cypress teacher_1 | cypress student_1 |

    @staging_test
    Examples:
      | admin      | teacher      | student      | namespace | created_course_name      | nonexistent_course_name         | fullname_teacher | fullname_student |
      | admin1_brb | teacher1_brb | student1_brb | brb       | CypressAut Search Course | Cy::NotExistingMathematikCourse | Karl Herzog      | Herbert Kraft    |
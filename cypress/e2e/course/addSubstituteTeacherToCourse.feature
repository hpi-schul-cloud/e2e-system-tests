@api_migrated
@release
@stable_test
Feature: Course - Add substitute teacher to course

  As a teacher I want to add substitute teacher to the course.

  Scenario Outline: user creation, course creation, and adding substitute teacher to the course

    # pre-condition: creating all users and creating course
    Given I am logged in as a '<teacher1>' at '<namespace>'
    Given I am logged in as a '<teacher2>' at '<namespace>'
    Given I am logged in as a '<admin>' at '<namespace>'

    # pre-condition: creating new course
    When I go to rooms overview
    When I click on FAB to create a new room
    When I click on new course create button in sub menu
    Then I see section one area on the course create page
    When I enter the course title '<course_name>'
    When I select room colour as red
    Then I select '<fullname_teacher>' from field teacher
    Then I see substitute teacher selection box
    Then I see button to create a course time table container
    When I click on button Next Steps after entering the room detail in section one
    Then I see section two area on the course create page
    When I click on button Next Steps after selecting room participant details
    Then I see the section three area as the finish page
    When I click on button To Course Overview on the finish page

    # adding substitute teacher to course
    Given I am logged in as a '<teacher1>' at '<namespace>'
    When I go to rooms overview
    When I go to room '<course_name>'
    When I open page Edit course
    Then I can see page Edit course
    And I clear substitute teacher field
    And I add substitute teacher '<substitute_teacher>'
    When I click on button Save changes in page Edit course
    Given I am logged in as a '<teacher2>' at '<namespace>'
    When I go to rooms overview
    When I go to room '<course_name>'

    @non_staging_test
    Examples:
      | admin      | teacher1     | teacher2     | namespace | course_name                   | fullname_teacher  | substitute_teacher |
      | admin1_brb | teacher1_brb | teacher2_brb | brb       | CypressAut Sub-Teacher Course | cypress teacher_1 | teacher_2, cypress |

    @staging_test
    Examples:
      | admin      | teacher1     | teacher2     | namespace | course_name                   | fullname_teacher | substitute_teacher |
      | admin1_brb | teacher1_brb | teacher2_brb | brb       | CypressAut Sub-Teacher Course | Karl Herzog      | Hande, Lara        |


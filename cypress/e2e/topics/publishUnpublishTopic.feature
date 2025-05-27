@regression_test
@stable_test
@group-F
@pr
Feature: Topics - To publish and unpublish topic by teacher.

    As a teacher I want to publish and unpublish as draft version

    Scenario: Teacher publishes a topic in the course, student can see this course, then teacher unpublishes topic, student cannot see it

        # pre-condition: teacher and student log in to create their account in a same school
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin creates a course
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        Then I see section one area on the course create page
        When I enter the course title '<course_title>'
        Then I select teacher '<fullname_teacher>' is selected by default
        When I click on button Next Steps after entering the course detail in section one
        Then I see section two area on the course create page
        Then I see class selection box to select the class for the course
        Then I see student selection box to select the student for the course
        When I select the student '<fullname_student>' in the list
        When I click on button Next Steps after selecting course participant details
        Then I see the section three as the finish page
        When I click on button To Course Overview on the finish page

        # teacher creates topic in a course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_title>'
        When I click on FAB to create new content
        When I click on New Topic FAB
        Then I can see edit topic page '-'
        When I enter topic title '<topic_title>'
        When I click on button Add Text to topic
        Then I can see form element Text on position '0'
        When I enter title 'CypressAut Title for Text Element in Topic' into element Text in element position '0'
        When I enter description 'CypressAut this is the description of the topic. It is used for automated Cypress tests.' into element Text in element position '0'
        When I click on create button to create topic
        Then I can see edit topic page '<topic_title>'
        When I click on save button to save changes

        # student does not see topic in a course
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_title>'
        Then I can not see topic '<topic_title>' on course page

        # teacher publishs topic
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_title>'
        When I click on link Publish for first topic in content list

        # student sees topic in a course
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_title>'
        Then I can see topic '<topic_title>' on course page
        When I click on topic '<topic_title>' on course page
        Then I see topic detail page "<topic_title>"

        # teacher unpublishs topic
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_title>'
        When I click on three dot menu of topic '<topic_title>'
        When I click on option Back to draft in dot menu of first topic

        # student does not see topic in a course
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_title>'
        Then I can not see topic '<topic_title>' on course page

        # teacher deletes course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_title>'
        When I open page Edit course
        When I click on the button delete course
        #Then I see the modal to confirm the deletion
        When I click on the button delete on the modal to confirm the course deletion
        Then I do not see the course '<course_title>' on the course overview page

        @school_api_test
        Examples:
            | namespace | admin      | student      | teacher      | fullname_teacher  | fullname_student  | course_title                  | topic_title      | topic_textelement_title                    |
            | brb       | admin1_brb | student1_brb | teacher1_brb | cypress teacher_1 | cypress student_1 | CypressAut Test Publish Topic | CypressAut Topic | CypressAut Title for Text Element in Topic |

        @staging_test
        Examples:
            | namespace | admin      | student      | teacher      | fullname_teacher | fullname_student | course_title                  | topic_title      | topic_textelement_title                    |
            | brb       | admin1_brb | student1_brb | teacher1_brb | Karl Herzog      | Herbert Kraft    | CypressAut Test Publish Topic | CypressAut Topic | CypressAut Title for Text Element in Topic |

@unstable_test
Feature: Course - To show courses in a table with respective functionality

    As an administrator I want to see all courses belonging to my school.

    Scenario Outline: Admin adds a course to school
        Given I am logged in as a '<user>' at '<namespace>'
        When I click on administration in menu
        When I go to course administration page
        Then I see the new course administration page
        When I click on add course button
        Then I see section one area on the course create page
        When I enter the course title '<course_title>'
        When I select room colour as red
        Then I see teacher selection box
        Then I see substitute teacher selection box
        Then I see date pickers to start and end the course as per school year
        Then I see button to create a course time table container
        When I select the teacher '<teacher_name>' in the list
        When I click on button Next Steps after entering the room detail in section one
        Then I see section two area on the course create page
        Then I see class selection box to select the class for the room
        Then I see student selection box to select the class for the room
        When I select the student '<student_name>' in the list
        When I click on button Next Steps after selecting room participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page
        When I click on administration in menu
        When I go to course administration page
        Then I see the course '<course_title>' on the new course administration page
        Examples:
            | user         | namespace | course_title                | teacher_name | student_name  |
            | admin1_nbc   | nbc   | Cypress-Admin-Test-Course   | Karl Herzog  | Herbert Kraft |

    Scenario Outline: Admin sees all courses of his school on the new course administration page.
        Given I see the new course administration page
        # Then I can see the administration page title -> needed data-testid "admin-course-title" currently not available
        Then I see 2 tabs
        Then I see 5 columns in the table
        Then I see the course '<course_title>' without classes and with teacher '<teacher_name>'
        Then I see 3 enabled action items for course '<course_title>'
        Examples:
            | course_title               | teacher_name  |
            | Cypress-Admin-Test-Course  | Karl Herzog   |
#
    Scenario Outline: Admin edits courses
        Given I see the new course administration page
        When I click the edit button on course '<course_title>'
        Then I see page Edit course
        Then I see the course title is '<course_title>'
        When I click the cancel edit course button
        Then I see the cancel modal
        When I click the confirmation button on the cancel modal
        Then I see the new course administration page
        When I click the edit button on course '<course_title>'
        When I click on the save course changes button
        Then I see the new course administration page
    Examples:
        | course_title               |
        | Cypress-Admin-Test-Course  |
#
    Scenario Outline: Admin synchronizes a course with a group
        Given I see the new course administration page
        When I click the start synchronization button on course '<course_title>'
        Then I see title of the modal to select a synced group
        Then I see information text of the modal to select a synced group
        Then I see the group selection of the modal to select a synced group
        When I select group '<group_title>' in the group selection
        Then I see the group '<group_title>' is selected
        When I click continue button on the modal to select a synced group
        Then I see the title of the modal for synchronization confirmation
        Then I see a warning about the consequences of synchronization
        Then I see information text of the modal asking for confirmation of synchronization
        When I click the confirm button on the synchronization confirmation modal
        Then I see the new course administration page
        Then I see '<course_title>' is synchronized with '<group_title>'
        Then I do not see the start synchronize button on course '<course_title>'
        Then I see the end synchronize button on course '<course_title>'
    Examples:
        | course_title               | group_title         |
        | Cypress-Admin-Test-Course  | Cypress-Test-Group  |
#
    Scenario Outline: Admin ends synchronization of a course with a group
        Given I see the new course administration page
        When I click the end synchronization button on course '<course_title>'
        Then I see title of the confirmation modal to end the synchronization
        Then I see information text of the confirmation modal to end the synchronization of course '<course_title>' with group '<group_title>'
        When I click the confirm button on the end synchronization confirmation modal
        Then I see the new course administration page
        Then I see '<course_title>' is not synchronized
         Then I see the start synchronize button on course '<course_title>'
    Examples:
        | course_title               | group_title         |
        | Cypress-Admin-Test-Course  | Cypress-Test-Group  |
#
    Scenario Outline: Admin deletes courses
        Given I see the new course administration page
        When I click the delete button for course '<course_title>' in course table
        Then I see the delete modal
        When I click the confirmation button on the delete modal
        Then I see the new course administration page
        Then I do not see course '<course_title>' in course table
    Examples:
        |course_title               |
        |Cypress-Admin-Test-Course  |
#
    Scenario: Admin does not see the new course admin page, when the feature flag is off
        Given I am logged in as a 'admin1_dbc' at 'dbc'
        When I click on administration in menu
        When I go to legacy course administration
        Then I do not see the new course administration page

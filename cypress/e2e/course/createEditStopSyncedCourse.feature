# Note: To set this test to stable, the school needs groups from moin.schule
@unstable_test
Feature: Course Sync - To create, update and stop a synchronized course

    As a teacher I want to synchronize a course with a group

    Scenario Outline: Teacher creates, updates and stops a synchronized course
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<substitute_teacher>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin activates student visibility
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        When I click the toggle switch to enable student visibility for teachers
        When I click on button Save admin settings

        # teacher tries to create a synchronized course with a group that doesn't have a teacher
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I click on FAB to add or import courses
        Then I see the button to create a new synced course
        When I click on the button to create a new synced course
        Then I see title of the modal to select a synced group
        Then I see information text of the modal to select a synced group
        When I select group '<group_without_teacher_title>' in the group selection
        Then I see the group '<group_without_teacher_title>' is selected
        Then I see the warning text of the modal to select a synced group
        Then I see continue button of the modal to select a synced group is disabled
        When I click cancel button on the modal to select a synced group

        # teacher creates a synchronized course
        When I go to courses overview
        When I click on FAB to add or import courses
        Then I see the button to create a new synced course
        When I click on the button to create a new synced course
        When I select group '<group_title>' in the group selection
        When I click continue button on the modal to select a synced group
        Then I see the course title form contains '<group_title>'
        Then I see the teacher '<fullname_teacher>' is selected
        Then I see the teacher selection box is disabled
        Then I see the substitute teacher '<fullname_substitute_teacher>' is selected
        Then I see the substitute teacher selection box is disabled
        Then I see the start date picker has '<start_date>' selected
        Then I see the end date picker has '<end_date>' selected
        Then I see the date pickers to start and end the course are disabled
        When I click on button Next Steps after entering the course detail in section one
        Then I see section two area on the course create page
        When I click on button Next Steps after selecting course participant details
        Then I see the section three area as the finish page
        Then I see the button to create another course is not visible
        When I click on button To Course Overview on the finish page
        Then I see the course '<group_title>' on the course overview page
        When I click on administration in menu
        When I navigate to class administration page via sub menu
        Then I see the new class administration page
        Then I see group '<group_title>' is synchronized with course '<group_title>'

        # teacher edits synchronized course
        When I go to courses overview
        When I go to course '<group_title>'
        Then I see the synced chip next to the title on the course page
        When I open page Edit course
        Then I see page Edit course
        When I edit the title of the course to '<course_title_new>'
        Then I see the teacher '<lastname_teacher>' is selected
        Then I see the teacher selection box is disabled
        Then I see the substitute teacher '<lastname_substitute_teacher>' is selected
        Then I see the substitute teacher selection box is disabled
        Then I see the start date picker has '<start_date>' selected
        Then I see the end date picker has '<end_date>' selected
        Then I see the date pickers to start and end the course are disabled
        Then I see the student selection box is disabled
        Then I see the class selection box is disabled
        When I click on button Save changes in page Edit course
        Then I see the course '<course_title_new>' on the course overview page
        Then I do not see the course '<group_title>' on the course overview page

        # teacher stops course synchronization in a course
        When I go to courses overview
        When I go to course '<course_title_new>'
        When I click on the three dot menu button next to the course title
        When I click the end synchronization button
        Then I see the title of the modal to end the sync
        Then I see the information text of the modal to end the sync
        When I click the confirmation button of the modal to end the sync
        When I go to courses overview
        When I go to course '<course_title_new>'
        Then I see the course '<course_title_new>' is unsynchronized

        # post-condition: teacher deletes course
        Given course with name '<course_title_new>' is deleted

        @staging_test
        Examples:
            | namespace | admin      | teacher      | substitute_teacher | student      | course_title_new   | group_title                     | group_without_teacher_title                    | fullname_teacher | fullname_substitute_teacher | lastname_teacher | lastname_substitute_teacher | start_date | end_date   |
            | nbc       | admin1_nbc | teacher1_nbc | teacher2_nbc       | student1_nbc | CypressAUT NewSync | Cypress-Test-Group-Course-Sync1 | Cypress-Test-Group-Course-Sync-Without-Teacher | Karl Herzog      | Lara Hande                  | Herzog           | Hande                       | 01.08.2023 | 31.07.2026 |

# Note: This test runs with moin.schule groups from the seed data
# @school_api_test
# Examples:
# | namespace | admin      | teacher      | substitute_teacher | student      | course_title_new   | group_title                     | group_without_teacher_title                    | fullname_teacher  | fullname_substitute_teacher | lastname_teacher | lastname_substitute_teacher | start_date | end_date   |
# | nbc       | admin1_nbc | teacher1_nbc | teacher2_nbc       | student1_nbc | CypressAUT NewSync | Cypress-Test-Group-Course-Sync1 | Cypress-Test-Group-Course-Sync-Without-Teacher | cypress teacher_1 | cypress teacher_2           | teacher_1        | teacher_2                   | 01.08.2023 | 31.07.2026 |

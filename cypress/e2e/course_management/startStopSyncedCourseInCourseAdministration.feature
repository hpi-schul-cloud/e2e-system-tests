# Note: To set this test to stable, the school needs groups from moin.schule
@unstable_test
Feature: Course Management - To start and stop a synchronized course

    As an administrator I want synchronize a course with a group

    Scenario: Admin synchronizes a course with a group
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin activates student visibility
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        When I click the toggle switch to enable student visibility for teachers
        When I click on button Save admin settings
        # pre-condition: admin creates a new course
        When I click on administration in menu
        When I navigate to course administration page via the submenu
        Then I see the new course administration page
        When I click on the Add course button
        Then I see section one area on the course create page
        When I enter the course title '<course_title>'
        When I select '<fullname_teacher>' from field teacher
        When I click on button Next Steps after entering the course detail in section one
        When I click on button Next Steps after selecting course participant details
        When I click on button To Course Overview on the finish page
        When I click on administration in menu
        When I navigate to course administration page via the submenu
        Then I see the course '<course_title>' on the new course administration page
        Then I see the course '<course_title>' with teacher '<fullname_teacher>'
        Then I see the course '<course_title>' without a synchronized group
        Then I do not see the stop synchronize button of course '<course_title>'

        # admin starts course synchronization
        When I click the start synchronization button on course '<course_title>'
        Then I see title of the modal to select a synced group
        Then I see information text of the modal to select a synced group
        When I select group '<group_title>' in the group selection
        When I click continue button on the modal to select a synced group
        Then I see the title of the modal for synchronization confirmation
        Then I see a warning about the consequences of synchronization
        Then I see information text of the modal asking for confirmation of synchronization
        When I click the confirm button on the synchronization confirmation modal
        Then I see the course '<course_title>' is synchronized with group '<group_title>'
        Then I do not see the start synchronize button of course '<course_title>'

        # admin stops course synchronization
        When I click the stop synchronization button on course '<course_title>'
        Then I see title of the confirmation modal to end the synchronization
        Then I see information text of the confirmation modal to end the synchronization of course '<course_title>' with group '<group_title>'
        When I click the confirm button on the stop synchronization confirmation modal
        Then I see the course '<course_title>' without a synchronized group
        Then I do not see the stop synchronize button of course '<course_title>'

        # post-condition: admin deletes course
        When I click on the delete button of course '<course_title>'
        Then I see the delete modal
        When I click the confirmation button on the delete modal
        # Note: does not work if table is empty
        # Then I do not see course '<course_title>' in course table

        @staging_test
        Examples:
            | namespace | admin      | teacher      | student      | course_title               | group_title                     | fullname_teacher |
            | nbc       | admin1_nbc | teacher1_nbc | student1_nbc | CypressAUT CourseAdminSync | Cypress-Test-Group-Course-Sync1 | Karl Herzog      |

# Note: This test runs with moin.schule groups from the seed data
# @school_api_test
# Examples:
#     | namespace | admin      | teacher      | student      | course_title               | group_title                     | fullname_teacher  |
#     | nbc       | admin1_nbc | teacher1_nbc | student1_nbc | CypressAUT CourseAdminSync | Cypress-Test-Group-Course-Sync1 | cypress teacher_1 |

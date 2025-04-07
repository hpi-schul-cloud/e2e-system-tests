@regression_test
@stable_test
Feature: Class Management - To stop a synchronized course

    As an administrator I want to stop a synchronized course

    Scenario: Admin synchronizes a course with a group
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin activates student visibility
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        When I click the toggle switch to enable student visibility for teachers
        When I click on button Save admin settings
        # pre-condition: admin creates a new synced course
        When I click on administration in menu
        When I navigate to course administration page via sub menu
        Then I see the new course administration page
        When I click on the Add course button
		When I enter the course title '<course_title>'
        When I select '<fullname_teacher>' from field teacher
		When I click on button Next Steps after entering the course detail in section one
		When I click on button Next Steps after selecting course participant details
		When I click on button To Course Overview on the finish page
        When I click on administration in menu
        When I navigate to course administration page via sub menu
        Then I see the course '<course_title>' on the new course administration page
        Then I see the course '<course_title>' without a synchronized group
        When I click the start synchronization button on course '<course_title>'
        When I select group '<group_title>' in the group selection
        When I click continue button on the modal to select a synced group
        When I click the confirm button on the synchronization confirmation modal
        Then I see the course '<course_title>' is synchronized with group '<group_title>'

        # admin stops course synchronization in class administration
        When I click on administration in menu
        When I navigate to class administration page via sub menu
        Then I see the new class administration page
        Then I see group '<group_title>' is synchronized with course '<course_title>'
        When I click on the stop synchronization button of group '<group_title>'
        Then I see title of the confirmation modal to end the synchronization
        Then I see information text of the confirmation modal to end the synchronization of course '<course_title>' with group '<group_title>'
        When I click the confirm button on the stop synchronization confirmation modal
        Then I see group '<group_title>' without a synchronized course
        Then I do not see stop synchronization button of group '<group_title>'

        # post-condition: Admin deletes course
        When I click on administration in menu
        When I navigate to course administration page via sub menu
        Then I see the new course administration page
        When I click on the delete button of course '<course_title>'
        Then I see the delete modal
        When I click the confirmation button on the delete modal
        Then I do not see course '<course_title>' in course table

        @staging_test
        Examples:
            | namespace | admin      | teacher      | course_title              | group_title                     | fullname_teacher |
            | nbc       | admin1_nbc | teacher1_nbc | CypressAUT ClassAdminSync | Cypress-Test-Group-Course-Sync1 | Karl Herzog      |

        # @school_api_test
        # Examples:
        #     | namespace | admin      | teacher      | course_title              | group_title                     | fullname_teacher  |
        #     | nbc       | admin1_nbc | teacher1_nbc | CypressAUT ClassAdminSync | Cypress-Test-Group-Course-Sync1 | cypress teacher_1 |

@regression_test
@stable_test
Feature: Course Sync - To start and stop a synchronization with an existing course

    As an teacher I want synchronize a course with an existing course

    Scenario: Teacher synchronizes a course with an existing course
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin activates student visibility
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        When I click the toggle switch to enable student visibility for teachers
        When I click on button Save admin settings

        # pre-condition: teacher creates a course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        Then I see section one area on the course create page
        When I enter the course title '<course_title>'
        Then I see teacher '<fullname_teacher>' is selected by default
        When I click on button Next Steps after entering the course detail in section one
        Then I see section two area on the course create page
        When I click on button Next Steps after selecting course participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page
        Then I see the course '<course_title>' on the course overview page

        # teacher synchronizes an existing course with a group
        When I go to course '<course_title>'
        When I click on the three dot menu button next to the course title
        Then I see the start synchronization button
        When I click the start synchronization button
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
        Then I see the synced chip next to the title on the course page

        # post-condition: teacher deletes course
        Given course with name '<course_title>' is deleted

        @staging_test
        Examples:
            | namespace | admin      | teacher      | student      | course_title        | group_title                     | fullname_teacher |
            | nbc       | admin1_nbc | teacher1_nbc | student1_nbc | CypressAUT Existing | Cypress-Test-Group-Course-Sync1 | Karl Herzog      |

        # @school_api_test
        # Examples:
        #     | namespace | admin      | teacher      | student      | course_title        | group_title                     | fullname_teacher  |
        #     | nbc       | admin1_nbc | teacher1_nbc | student1_nbc | CypressAUT Existing | Cypress-Test-Group-Course-Sync1 | cypress teacher_1 |

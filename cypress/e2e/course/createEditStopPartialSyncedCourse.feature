@unstable_test
Feature: Teacher can create partially synchronized course

    As a Teacher I want to create a partially synchronized course and partially synchronize an existing course with a group

    @unstable_test
    Scenario: Pre-Condition: activate student visibility
        Given I am logged in as a 'admin1_nbc' at 'nbc'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        When I click the toggle switch to enable student visibility for teachers
        When I click on button Save admin settings
        #    Pre-Test: Admin creates a course
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        Then I see section one area on the course create page
        When I enter the course title 'Cypress Test Course'
        When I select 'Karl Herzog' from field teacher
        When I click on button Next Steps after entering the course detail in section one
        Then I see section two area on the course create page
        When I click on button Next Steps after selecting course participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page

    @unstable_test
    Scenario: Create a partially synchronized course
        Given I am logged in as a 'teacher1_nbc' at 'nbc'
        When I go to courses overview
        When I click on FAB to add or import courses
        Then I see the button to create a new synced course
        When I click on the button to create a new synced course
        Then I see title of the modal to select a synced group
        Then I see information text of the modal to select a synced group
        Then I see the group selection of the modal to select a synced group
        When I select group 'Cypress-Test-Group-Partial-Course-Sync' in the group selection
        Then I see the group 'Cypress-Test-Group-Partial-Course-Sync' is selected
        When I click continue button on the modal to select a synced group
        Then I see the course title form contains 'Cypress-Test-Group-Partial-Course-Sync'
        Then I see the teacher 'Karl Herzog' is selected
        Then I see the start date picker has '01.08.2024' selected
        Then I see the end date picker has '31.07.2025' selected
        Then I see the teacher selection box is disabled
        Then I see the substitute teacher selection box is disabled
        Then I see the date pickers to start and end the course are disabled
        When I click on button Next Steps after entering the course detail in section one
        Then I see section two area on the course create page
        Then I see the student "Herbert Kraft" is selected
        Then I see the student selection box is disabled
        Then I see the class selection box is disabled
        When I click on button Next Steps after selecting course participant details
        Then I see the section three area as the finish page
        Then I see the button to create another course is not visible
        When I click on button To Course Overview on the finish page
        Then I see the course 'Cypress-Test-Group-Partial-Course-Sync' on the course overview page
        When I go to course 'Cypress-Test-Group-Partial-Course-Sync'
        Then I see the synced chip next to the title on the course page

        #    partially synchronize an existing course with a group
        When I go to courses overview
        Then I see the course 'Cypress Test Course' on the course overview page
        When I go to course 'Cypress Test Course'
        Then I see the course 'Cypress Test Course' is unsynchronized
        When I click on the three dot menu button next to the course title
        Then I see the start synchronization button
        When I click the start synchronization button
        Then I see title of the modal to select a synced group
        Then I see information text of the modal to select a synced group
        Then I see the group selection of the modal to select a synced group
        When I select group 'Cypress-Test-Group-Partial-Course-Sync' in the group selection
        Then I see the group 'Cypress-Test-Group-Partial-Course-Sync' is selected
        When I click continue button on the modal to select a synced group
        Then I see the title of the modal for synchronization confirmation
        Then I see a warning about the consequences of synchronization
        Then I see information text of the modal asking for confirmation of synchronization
        When I click the confirm button on the synchronization confirmation modal
        Then I see the synced chip next to the title on the course page
        When I open page Edit course
        Then I see page Edit course
        Then I see the teacher 'Herzog, Karl' is selected
        Then I see the student 'Kraft, Herbert' is selected

    @unstable_test
    Scenario: Post-Condition: Admin deletes courses
        Given I am logged in as a 'admin1_nbc' at 'nbc'
        When I click on administration in menu
        When I go to course administration page
        Then I see the new course administration page
        When I click the delete button for course 'Cypress Test Course' in course table
        Then I see the delete modal
        When I click the confirmation button on the delete modal
        When I click the delete button for course 'Cypress-Test-Group-Partial-Course-Sync' in course table
        Then I see the delete modal
        When I click the confirmation button on the delete modal
        Then I do not see course 'Cypress-Test-Group-Partial-Course-Sync' in course table
        Then I do not see course 'Cypress Test Course' in course table

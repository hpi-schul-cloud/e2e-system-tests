@regression_test
@stable_test
Feature: Course Sync - To partially synchronize a course

    As a teacher I want to partially synchronize a course

    Scenario: Teacher creates a partially synchronized course
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin activates student visibility
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        When I click the toggle switch to enable student visibility for teachers
        When I click on button Save admin settings

        # teacher creates a partially synchronized course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I click on FAB to add or import courses
        Then I see the button to create a new synced course
        When I click on the button to create a new synced course
        Then I see title of the modal to select a synced group
        Then I see information text of the modal to select a synced group
        Then I see the group selection of the modal to select a synced group
        When I select group '<group_title>' in the group selection
        Then I see the group '<group_title>' is selected
        When I click continue button on the modal to select a synced group
        Then I see the course title form contains '<group_title>'
        Then I see the teacher '<fullname_teacher>' is selected
        Then I see the teacher selection box is disabled
        Then I see the substitute teacher selection box is disabled
        Then I see the start date picker has '<start_date>' selected
        Then I see the end date picker has '<end_date>' selected
        Then I see the date pickers to start and end the course are disabled
        When I click on button Next Steps after entering the course detail in section one
        Then I see section two area on the course create page
        Then I see the student '<fullname_student>' is selected
        Then I see the student selection box is disabled
        Then I see the class selection box is disabled
        When I click on button Next Steps after selecting course participant details
        Then I see the section three area as the finish page
        Then I see the button to create another course is not visible
        When I click on button To Course Overview on the finish page
        Then I see the course '<group_title>' on the course overview page
        When I go to course '<group_title>'
        Then I see the synced chip next to the title on the course page

        # post-condition: teacher deletes course
		When I open page Edit course
		When I click on the button delete course
		Then I see the modal to confirm the deletion
		When I click on the button delete on the modal to confirm the course deletion
		Then I do not see the course '<group_title>' on the course overview page

        @staging_test
        Examples:
            | namespace | admin      | teacher      | student      | group_title                            | fullname_teacher | fullname_student | lastname_teacher | lastname_student | start_date | end_date   |
            | nbc       | admin1_nbc | teacher2_nbc | student1_nbc | Cypress-Test-Group-Partial-Course-Sync | Lara Hande       | Herbert Kraft    | Hande            | Kraft            | 01.08.2025 | 31.07.2026 |

        # @school_api_test
        # Examples:
        #     | namespace | admin      | teacher      | student      | group_title                            | fullname_teacher  | fullname_student  | lastname_teacher | lastname_student | start_date | end_date   |
        #     | nbc       | admin1_nbc | teacher2_nbc | student1_nbc | Cypress-Test-Group-Partial-Course-Sync | cypress teacher_2 | cypress student_1 | teacher_2        | student_1        | 01.08.2025 | 31.07.2026 |

@unstable_test
Feature: Teacher can create, update and stop a synchronized course

    Scenario Outline: Fail to create a synchronized course with a group that doesn't have a teacher
        Given I am logged in as a '<user>' at '<namespace>'
        When I go to courses overview
        When I click on FAB to add or import courses
        Then I see the button to create a new synced course
        When I click on the button to create a new synced course
        Then I see title of the modal to select a synced group
        Then I see information text of the modal to select a synced group
        Then I see the group selection of the modal to select a synced group
        When I select group '<group_title>' in the group selection
        Then I see the group '<group_title>' is selected
        Then I see the warning text of the modal to select a synced group
        Then I see continue button of the modal to select a synced group is disabled
        When I click cancel button on the modal to select a synced group
        Examples:
            | user       | namespace | group_title                                    |
            | admin1_nbc | nbc       | Cypress-Test-Group-Course-Sync-Without-Teacher |

    Scenario Outline: Create a synchronized course
        Given I am logged in as a '<user>' at '<namespace>'
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
        Then I see the teacher '<teacher_name>' is selected
        Then I see the substitute teacher '<substitute_teacher_name>' is selected
        Then I see the start date picker has '<start_date>' selected
        Then I see the end date picker has '<end_date>' selected
        Then I see the teacher selection box is disabled
        Then I see the substitute teacher selection box is disabled
        Then I see the date pickers to start and end the course are disabled
        When I click on button Next Steps after entering the course detail in section one
        Then I see section two area on the course create page
        When I click on button Next Steps after selecting course participant details
        Then I see the section three area as the finish page
        Then I see the button to create another course is not visible
        When I click on button To Course Overview on the finish page
        Then I see the course '<group_title>' on the course overview page
        When I click on administration in menu
        When I go to new class administration page
        Then I see the new class administration page
        Then I see the group '<group_title>' is synced with course '<group_title>'
        Examples:
            | user         | namespace | group_title                     | teacher_name | substitute_teacher_name | student_name  | start_date | end_date   |
            | teacher1_nbc | nbc       | Cypress-Test-Group-Course-Sync  | Karl Herzog  | Lara Hande              | Herbert Kraft | 01.08.2024 | 31.07.2025 |
            | teacher1_nbc | nbc       | Cypress-Test-Group-Course-Sync2 | Karl Herzog  | Lara Hande              | Herbert Kraft | 01.08.2024 | 31.07.2025 |

    Scenario Outline: Synchronize course with group
        # create course
        Given I am logged in as a '<user>' at '<namespace>'
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        Then I see section one area on the course create page
        When I enter the course title '<course_title>'
        When I select course colour as red
        Then I see teacher '<teacher_name>' is selected by default
        Then I see substitute teacher selection box
        Then I see date pickers to start and end the course as per school year
        Then I see button to create a course time table container
        When I click on button Next Steps after entering the course detail in section one
        Then I see section two area on the course create page
        When I click on button Next Steps after selecting course participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page
        Then I see the course '<course_title>' on the course overview page
        #synchronize course
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
        Examples:
            | user         | namespace | course_title                 | group_title        | teacher_name | student_name  |
            | teacher1_nbc | nbc       | Cypress-Test-Existing-Course | Cypress-Test-Group | Karl Herzog  | Herbert Kraft |

    Scenario Outline: Edit a synchronized course
        When I go to courses overview
        When I go to course '<course_title>'
        Then I see the synced chip next to the title on the course page
        When I open page Edit course
        Then I see page Edit course
        Then I see the course title form contains '<course_title>'
        When I edit the title of the course to '<course_title_new>'
        Then I see the course title form contains '<course_title_new>'
        Then I see the teacher '<teacher_name>' is selected
        Then I see the substitute teacher '<substitute_teacher_name>' is selected
        Then I see the start date picker has '<start_date>' selected
        Then I see the end date picker has '<end_date>' selected
        Then I see the teacher selection box is disabled
        Then I see the substitute teacher selection box is disabled
        Then I see the student selection box is disabled
        Then I see the class selection box is disabled
        Then I see the date pickers to start and end the course are disabled
        When I click on button Save changes in page Edit course
        Then I see the course '<course_title_new>' on the course overview page
        Then I do not see the course '<course_title>' on the course overview page
        Examples:
            | course_title                   | course_title_new         | teacher_name | substitute_teacher_name | student_name   | start_date | end_date   |
            | Cypress-Test-Group-Course-Sync | Cypress-Test-Course-Sync | Herzog, Karl | Hande, Lara             | Kraft, Herbert | 01.08.2024 | 31.07.2025 |

    Scenario Outline: Stop a course synchronization in a course
        When I go to courses overview
        When I go to course '<course_title>'
        When I click on the three dot menu button next to the course title
        Then I see the end synchronization button
        When I click the end synchronization button
        Then I see the title of the modal to end the sync
        Then I see the information text of the modal to end the sync
        When I click the confirmation button of the modal to end the sync
        When I go to courses overview
        When I go to course '<course_title>'
        Then I see the course '<course_title>' is unsynchronized
        When I click on administration in menu
        When I go to new class administration page
        Then I see the new class administration page
        Then I see the group '<group_title>' has no synced course
        Examples:
            | course_title                 | group_title                    |
            | Cypress-Test-Course-Sync     | Cypress-Test-Group-Course-Sync |
            | Cypress-Test-Existing-Course | Cypress-Test-Group             |

    Scenario Outline: Stop a course synchronization in the class overview
        Given I see the new class administration page
        Then I see the group '<group_title>' is synced with course '<group_title>'
        When I click the end sync button of group '<group_title>'
        Then I see the title of the modal to end the sync
        Then I see the information text of the modal to end the sync
        When I click the confirmation button of the modal to end the sync
        Then I see the group '<group_title>' has no synced course
        When I go to courses overview
        When I go to course '<group_title>'
        Then I see the course '<group_title>' is unsynchronized
        Examples:
            | group_title                     |
            | Cypress-Test-Group-Course-Sync2 |

    Scenario Outline: Delete the course as a post condition
        When I go to courses overview
        When I go to course '<course_title>'
        When I open page Edit course
        When I click on the button delete course
        Then I see the modal to confirm the deletion
        When I click on the button delete on the modal to confirm the course deletion
        Then I do not see the course '<course_title>' on the course overview page
        Examples:
            | course_title                    |
            | Cypress-Test-Course-Sync        |
            | Cypress-Test-Group-Course-Sync2 |
            | Cypress-Test-Existing-Course    |

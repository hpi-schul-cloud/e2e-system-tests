Feature: Teacher can create, update and stop a synchronized course

@stable_test
  Scenario Outline: Try to create a synchronized course with a group that doesn't have a teacher
    Given I am logged in as a '<user>' at '<state>'
    When I go to rooms overview
    When I click on FAB to add or import courses
    Then I see the FAB to create a new synchronized course
    When I click on FAB to create a new synchronized course
    Then I see title of the modal to select a synchronized group
    Then I see information text of the modal to select a synchronized group
    Then I see group selection of the modal to select a synchronized group
    When I click on group selection
    When I enter '<group_title>' as group name in the selection and select the group
    Then I see the group '<group_title>' is selected
    Then I see the warning text of the modal to select a synced group
    Then I see continue button of the modal to select a synced group is disabled
    When I click cancel button on the modal to select a synchronized group
    Examples:
      | user       | state | group_title                                    |
      | admin1_nbc | nbc   | Cypress-Test-Group-Course-Sync-Without-Teacher |

@stable_test
  Scenario Outline: Create a synchronized course
    Given I am logged in as a '<user>' at '<state>'
    When I go to rooms overview
    When I click on FAB to add or import courses
    Then I see the FAB to create a new synchronized course
    When I click on FAB to create a new synchronized course
    Then I see title of the modal to select a synchronized group
    Then I see information text of the modal to select a synchronized group
    Then I see group selection of the modal to select a synchronized group
    When I click on group selection
    When I enter '<group_title>' as group name in the selection and select the group
    Then I see the group '<group_title>' is selected
    When I click continue button on the modal to select a synchronized group
    Then I see the course title form contains '<group_title>'
    Then I see the teacher '<teacher_name>' is selected
    Then I see the teacher selection box is disabled
    Then I see the substitute teacher selection box is disabled
    Then I see the start date picker has '<start_date>' selected
    Then I see the end date picker has '<end_date>' selected
    Then I see the date pickers to start and end the course are disabled
    When I click on button Next Steps after entering the room detail in section one
    Then I see section two area on the course create page
    Then I see the class selection box is disabled
    Then I see the student '<student_name>' is selected
    Then I see the student selection box is disabled
    When I click on button Next Steps after selecting room participant details
    Then I see the section three area as the finish page
    Then I see the button to create another course is not visible
    When I click on button To Course Overview on the finish page
    Then I see the course '<group_title>' on the room overview page
    Examples:
      | user         | state | group_title                     | teacher_name |  student_name  | start_date | end_date   |
      | teacher1_nbc | nbc   | Cypress-Test-Group-Course-Sync  | Karl Herzog  |  Herbert Kraft | 01.08.2023 | 31.07.2024 |
      | teacher1_nbc | nbc   | Cypress-Test-Group-Course-Sync2 | Karl Herzog  |  Herbert Kraft | 01.08.2023 | 31.07.2024 |

@stable_test
  Scenario Outline: Edit a synchronized course
    When I go to rooms overview
    When I go to room '<course_title>'
    Then I see the synced course chip
    When I open page Edit course
    Then I can see page Edit course
    Then I see the course title form contains '<course_title>'
    Then I see the teacher '<teacher_name>' is selected
    Then I see the teacher selection box is disabled
    Then I see the substitute teacher selection box is disabled
    Then I see the start date picker has '<start_date>' selected
    Then I see the end date picker has '<end_date>' selected
    Then I see the date pickers to start and end the course are disabled
    Then I see the class selection box is disabled
    Then I see the student '<student_name>' is selected
    Then I see the student selection box is disabled
    When I click on button Save changes in page Edit course
    Examples:
      |  course_title                   | teacher_name  | student_name   | start_date | end_date   |
      |  Cypress-Test-Group-Course-Sync | Herzog, Karl  | Kraft, Herbert | 01.08.2023 | 31.07.2024 |

@stable_test
  Scenario Outline: Stop a course synchronization in a course
    When I go to rooms overview
    When I go to room '<course_title>'
    Then I see the end synchronization button
    When I click the end synchronization button
    Then I see the title of the end sync modal
    Then I see the warning text of the end sync modal
    Then I see the information text of the end sync modal
    When I click the confirmation button on the end sync modal
    When I go to rooms overview
    When I go to room '<course_title>'
    Then I see the course '<course_title>' is unsynchronized
    Examples:
      |  course_title                   |
      |  Cypress-Test-Group-Course-Sync |

@stable_test
  Scenario Outline: Stop a course synchronization in the class overview
    When I go to administration page
    When I go to new class administration page
    Then I see the new class administration page
    Then I see the group '<group_title>' is synced with course '<group_title>'
    When I click the end sync button of group '<group_title>'
    Then I see the title of the end sync modal
    Then I see the warning text of the end sync modal
    Then I see the information text of the end sync modal
    When I click the confirmation button on the end sync modal
    Then I see the group '<group_title>' has no synced course
    Examples:
      |  group_title                     |
      |  Cypress-Test-Group-Course-Sync2 |

@stable_test
  Scenario Outline: Delete the course as a post condition
    When I go to rooms overview
    When I go to room '<course_title>'
    When I open page Edit course
    When I click on the button delete course
    Then I see the modal to confirm the deletion
    When I click on the button delete on the modal to confirm the course deletion
    Then I do not see the course '<course_title>' on the room overview page
    Examples:
      |   course_title                    |
      |   Cypress-Test-Group-Course-Sync  |
      |   Cypress-Test-Group-Course-Sync2 |

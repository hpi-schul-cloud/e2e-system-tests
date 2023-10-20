@release
Feature: Course - To add and delete a course by the teacher

  As a teacher I want to create a new course and want to delete the newly created test course/room so that list of courses/rooms can be cleaned and not full with the newly created test courses/rooms.

  @stable_test
  Scenario: as a pre-condition teacher deletes undeleted tests
    Given I am logged in as a 'teacher1_dbc' at 'default'
    When I go to rooms overview
    When I delete all courses named 'Cypress Test Creation and Deletion'
    Then I do not see the course 'Cypress Test Creation and Deletion' on the room overview page
    When I delete all courses named 'Cypress Testkurs Edit'
    Then I do not see the course 'Cypress Testkurs Edit' on the room overview page

  @stable_test
  Scenario: Create, edit and delete a course
    Given I am logged in as a 'teacher1_dbc' at 'default'
    When I go to rooms overview
    Then I see room search box on the room overview page
    When I click on FAB to create a new room
    Then I see section one area on the course create page
    When I enter the course title 'Cypress Test Creation and Deletion'
    When I select room colour as red
    Then I see teacher 'Karl Herzog' is selected by default
    Then I see substitute teacher selection box
    Then I see date pickers to start and end the course as per school year
    Then I see button to create a course time table container
    When I click on button Next Steps after entering the room detail in section one
    Then I see section two area on the course create page
    Then I see class selection box to select the class for the room
    Then I see student selection box to select the class for the room
    When I click on button Next Steps after selecting room participant details
    Then I see the section three area as the finish page
    When I click on button To Course Overview on the finish page
    Then I see the course 'Cypress Test Creation and Deletion' on the room overview page

    #Editing the course
    When I go to room 'Cypress Test Creation and Deletion'
    When I open course edit page
    Then I can see course edit page
    When I edit the title of the room to 'Cypress Testkurs Edit'
    When I edit the room description to 'cy edit this is test description'
    When I click on save changes after editing the course details
    Then I see the course 'Cypress Testkurs Edit' on the room overview page

    #Deleting the course/room created in this feature test
    When I open course edit page
    When I click on the button delete course
    Then I see the modal to confirm the deletion
    When I click on the button delete on the modal to confirm the course deletion
    Then I do not see the course 'Cypress Testkurs Edit' on the room overview page

  @only
    @stable_test
  Scenario: as a pre-condition teacher deletes undeleted tests
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I delete all courses named 'Cypress Test Creation and Deletion'
    Then I do not see the course 'Cypress Test Creation and Deletion' on the room overview page
    When I delete all courses named 'Cypress Testkurs Edit'
    Then I do not see the course 'Cypress Testkurs Edit' on the room overview page

  @only
    @stable_test
  Scenario: Create, edit and delete a course with groups of type class in nbc
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    Then I see room search box on the room overview page
    When I click on FAB to create a new room
    Then I see section one area on the course create page
    When I enter the course title 'Cypress Test Creation and Deletion'
    When I select room colour as red
    Then I see teacher 'Karl Herzog' is selected by default
    Then I see substitute teacher selection box
    Then I see date pickers to start and end the course as per school year
    Then I see button to create a course time table container
    When I click on button Next Steps after entering the room detail in section one
    Then I see section two area on the course create page
    When I click on button Next Steps after selecting room participant details
    Then I see the section three area as the finish page
    When I click on button To Course Overview on the finish page
    Then I see the course 'Cypress Test Creation and Deletion' on the room overview page

    # Editing the course
    When I go to room 'Cypress Test Creation and Deletion'
    When I open course edit page
    Then I can see course edit page
    When I edit the title of the room to 'Cypress Testkurs Edit'
    When I edit the room description to 'cy edit this is test description'

   # Add groups to course
    When I click on the selection box to add a new group with ' Cypress-Test-Group1 | moin.schule '
    When I click on the selection box to add a new group with ' Cypress-Test-Group2 | moin.schule '
    When I click on save changes after editing the course details
    Then I see the course 'Cypress Testkurs Edit' on the room overview page
    When I open course edit page
    Then I see ' Cypress-Test-Group1 | moin.schule ' in the class selection box
    Then I see 'Kraft, Herbert' in the student selection box

    # Remove one group from course
    When I click on the remove icon of group ' Cypress-Test-Group2 | moin.schule '
    When I click on save changes after editing the course details
    Then I see the course 'Cypress Testkurs Edit' on the room overview page
    When I open course edit page
    Then I see ' Cypress-Test-Group1 | moin.schule ' in the class selection box
    Then I do not see ' Cypress-Test-Group2 | moin.schule ' in the group selection box
    Then I see 'Kraft, Herbert' in the student selection box
    Then I do not see 'Strobl, Amelia' in the student selection box

    # Remove second group from course
    When I click on the remove icon of group ' Cypress-Test-Group1 | moin.schule '
    When I click on save changes after editing the course details
    Then I see the course 'Cypress Testkurs Edit' on the room overview page
    When I open course edit page
    Then I do not see ' Cypress-Test-Group1 | moin.schule ' in the group selection box
    Then I do not see ' Cypress-Test-Group2 | moin.schule ' in the group selection box
    Then I do not see 'Strobl, Amelia' in the student selection box
    Then I do not see 'Kraft, Herbert' in the student selection box
    When I click on save changes after editing the course details
    Then I see the course 'Cypress Testkurs Edit' on the room overview page


    # Deleting the course/room created in this feature test
    When I open course edit page
    When I click on the button delete course
    Then I see the modal to confirm the deletion
    When I click on the button delete on the modal to confirm the course deletion
    Then I do not see the course 'Cypress Testkurs Edit' on the room overview page


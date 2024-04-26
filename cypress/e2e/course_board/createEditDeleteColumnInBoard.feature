@release
Feature: Course Board - To create, edit and delete column in the course board

  As a teacher I want to create, edit and delete the column in the course board so that I can manage the column in the board.

  @stable_test
  Scenario Outline:  Teacher is able to create, edit and delete a column in the course board

    #Teacher creates a new course as a pre-condition ---
    Given I am logged in as a 'teacher1_dbc' at 'dbc'
    When I go to rooms overview
    When I click on FAB to add or import courses
    When I click on FAB to create a new room
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

    # Teacher adds a new Board as a pre-condition ---
    When I go to room 'Cypress Test Creation and Deletion'
    When I go to the tab contents in course detail page
    When I click on FAB to create new content
    When I click on the button FAB New Column Board
    Then I see the page Course Board detail
    When I click on the button three dot menu in course board
    When I click on the option Edit in three dot menu in course board
    Then I enter the course board title 'Board Cy Title'
    When I click on the page outside of the column
    #Then I see the course Board name 'Board Cy Title'
    Then I see the chip Draft in the course board

    # Teacher adds a new column ---
    When I click on the button Add column in the course board
    When I enter the title name 'my cypress test column' in the column
    When I click on the page outside of the column
    Then I see my column named 'my cypress test column'
    Then I click on the button with the Icon Plus to add a new card in the column

    # Teacher edits the column ---
    When I click on three dot menu in the column
    When I select the option Edit in three dot menu in the column
    Then I enter the title name 'edit cypress test column' in the column
    When I click on the page outside of the column
    Then I see my column named 'edit cypress test column'

    # Teacher deletes the column ---
    When I click on three dot menu in the column
    When I select the option Delete in three dot menu in the column
    Then I see the confirmation Modal
    When I click on the button Remove on the Modal
    Then I do not see the column

    # Teacher deletes the course as a post condition---
    When I go to rooms overview
    When I go to room 'Cypress Test Creation and Deletion'
    When I open page Edit course
    When I click on the button delete course
    Then I see the modal to confirm the deletion
    When I click on the button delete on the modal to confirm the course deletion
    Then I do not see the course 'Cypress Test Creation and Deletion' on the room overview page
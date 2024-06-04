@api_migrated
@release
Feature: Course Board - To create, edit and delete column in the course board

  As a teacher I want to create, edit and delete the column in the course board so that I can manage the column in the board.

  @stable_test
  Scenario: Teacher creates, edits, deletes a column board in the course, including pre-conditions

    # pre-condition: teacher and admin log in to create their account in a same school
    Given I am logged in as a '<teacher>' at '<namespace>'
    Given I am logged in as a '<admin>' at '<namespace>'

    # pre-condition: admin creates a course and assign teacher to the course
    When I go to rooms overview
    When I click on FAB to create a new room
    When I click on new course create button in sub menu
    Then I see section one area on the course create page
    When I enter the course title 'CypressAut Test Creation and Deletion'
    When I select room colour as red
    Then I select teacher '<fullname_teacher>' is selected by default
    Then I see substitute teacher selection box
    Then I see date pickers to start and end the course as per school year
    Then I see button to create a course time table container
    When I click on button Next Steps after entering the room detail in section one
    Then I see section two area on the course create page
    Then I see class selection box to select the class for the room
    Then I see student selection box to select the student for the room
    # Note: student user is not needed in this feature so this step is commented out
    #When I select the student '<fullname_student>' in the list
    When I click on button Next Steps after selecting room participant details
    Then I see the section three as the finish page
    When I click on button To Course Overview on the finish page
    # Note: this step is not applicable for the admin user
    #Then I see the course 'CypressAut Test Creation and Deletion' on the room overview page

    # teacher adds a new Board
    Given I am logged in as a '<teacher>' at '<namespace>'
    When I go to rooms overview
    When I go to room '<course_title>'
    When I go to the tab contents in course detail page
    When I click on FAB to create new content
    When I click on the button FAB New Column Board
    Then I see the page Course Board detail
    When I click on the button three dot menu in course board
    When I click on the option Edit in three dot menu in course board
    Then I enter the course board title '<board_title>'
    When I click on the page outside of the column
    #Then I see the course Board name 'Board Cy Title'
    Then I see the chip Draft in the course board

    # teacher adds a new column in the Board
    When I click on the button Add column in the course board
    When I enter the title name '<column_board_title>' in the column
    When I click on the page outside of the column
    Then I see my column named '<column_board_title>'
    Then I click on the button with the Icon Plus to add a new card in the column

    # teacher edits the column in the Board
    When I click on three dot menu in the column
    When I select the option Edit in three dot menu in the column
    Then I enter the title name '<edited_clumn_board_title>' in the column
    When I click on the page outside of the column
    Then I see my column named '<edited_clumn_board_title>'

    # teacher deletes the column in the Board
    When I click on three dot menu in the column
    When I select the option Delete in three dot menu in the column
    Then I see the confirmation Modal
    When I click on the button Remove on the Modal
    Then I do not see the column

    Examples:
      | namespace | teacher      | admin      | fullname_teacher  | course_title                          | board_title    | column_board_title     | edited_clumn_board_title |
      | brb       | teacher1_brb | admin1_brb | cypress teacher_1 | CypressAut Test Creation and Deletion | Board Cy Title | my cypress test column | edit cypress test column |
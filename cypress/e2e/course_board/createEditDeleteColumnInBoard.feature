@release
Feature: Course Board - To create, edit and delete column in the course board

  As a teacher I want to create, edit and delete the column in the course board so that I can manage the column in the board.

  @stable_test
  # This scenario is to create the users using api needed for this feature file.
  Scenario: Admin and teacher log in to create their account in a same school as a pre-condition
    Given I am logged in as a 'admin1_brb' at 'brb'
    Given I am logged in as a 'teacher1_brb' at 'brb'

  @stable_test
  Scenario: Admin creates a course and assign teacher to the course as a pre-condition
    Given I am logged in as a 'admin1_brb' at 'brb'
    When I go to rooms overview
    When I click on FAB to create a new room
    When I click on new course create button in sub menu
    Then I see section one area on the course create page
    When I enter the course title 'CypressAut Test Creation and Deletion'
    When I select room colour as red
    Then I select teacher 'cypress teacher_1' is selected by default
    Then I see substitute teacher selection box
    Then I see date pickers to start and end the course as per school year
    Then I see button to create a course time table container
    When I click on button Next Steps after entering the room detail in section one
    Then I see section two area on the course create page
    Then I see class selection box to select the class for the room
    Then I see student selection box to select the student for the room
    #Note: student user is not needed in this feature so this step is commented out
    #When I select the student 'cypress student_1' in the list
    When I click on button Next Steps after selecting room participant details
    Then I see the section three as the finish page
    When I click on button To Course Overview on the finish page
  #Note: Not applicable for the admin user so this step is commented out
  #Then I see the course 'CypressAut Test Creation and Deletion' on the room overview page

  @stable_test
  Scenario: Teacher adds a new Board
    Given I am logged in as a 'teacher1_brb' at 'brb'
    When I go to rooms overview
    When I go to room 'CypressAut Test Creation and Deletion'
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

  @stable_test
  Scenario: Teacher adds a new column in the Board
    When I click on the button Add column in the course board
    When I enter the title name 'my cypress test column' in the column
    When I click on the page outside of the column
    Then I see my column named 'my cypress test column'
    Then I click on the button with the Icon Plus to add a new card in the column

  @stable_test
  Scenario: Teacher edits the column in the Board
    When I click on three dot menu in the column
    When I select the option Edit in three dot menu in the column
    Then I enter the title name 'edit cypress test column' in the column
    When I click on the page outside of the column
    Then I see my column named 'edit cypress test column'

  @stable_test
  Scenario: Teacher deletes the column in the Board
    When I click on three dot menu in the column
    When I select the option Delete in three dot menu in the column
    Then I see the confirmation Modal
    When I click on the button Remove on the Modal
    Then I do not see the column
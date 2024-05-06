@release
@stable_test
@api_migrated
Feature: Teacher can add and remove BBB tool in the course in NBC with admin permission

  As a teacher I want to activate and deactivate BBB tool inside the course in NBC

  Scenario Outline: Pre-test: Creating all users
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    Given I am logged in as a 'teacher1_nbc' at 'nbc'

  Scenario: Pre-test: Creating new course
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I click on FAB to create a new room
    When I click on new course create button
    Then I see section one area on the course create page
    When I enter the course title 'Cypress Test Creation and Deletion'
    When I select room colour as red
    Then I see teacher 'cypress teacher_1' is selected by default
    Then I see substitute teacher selection box
    Then I see button to create a course time table container
    When I click on button Next Steps after entering the room detail in section one
    Then I see section two area on the course create page
    When I click on button Next Steps after selecting room participant details
    Then I see the section three area as the finish page
    When I click on button To Course Overview on the finish page
    Then I see the course 'Cypress Test Creation and Deletion' on the room overview page

  Scenario Outline: Admin enables the video conference in the school settings page
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to administration page
    When I click on manage school card
    #remove the following line if old admin page is hidden
    When I click on general settings panel
    Then I enable the video conference
    Then I click on button Save admin settings

  Scenario Outline: Teacher can add and remove BBB tool in the course in NBC
    Teacher adds the BBB tool in the course
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'Cypress Test Creation and Deletion'
    When I open page Edit course
    Then I can see page Edit course
    When I click on checkbox Activate video conferences in page Edit course to enable the BBB tool
    When I click on button Save changes in page Edit course
    When I click on tab Tools
    Then I see the BBB Video Conference BigBlueButton in NBC
    When I click on the BBB Video Conference BigBlueButton in NBC
    Then I see the modal to start the BBB video conference
    Then I click on button Cancel in BBB dialog box
    #Teacher removes the BBB tool in the course
    When I open page Edit course
    Then I can see page Edit course
    When I uncheck the checkbox to Activate video conferences in page Edit course to enable the BBB tool
    When I click on button Save changes in page Edit course
    When I click on tab Tools
    Then I do not see the the card Video Conference BigBlueButton

  Scenario Outline: Admin disables the video conference option in the school settings page and teacher can not add the bbb tool in the course
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to administration page
    When I click on manage school card
    #remove the following line if old admin page is hidden
    When I click on general settings panel
    Then I disable the video conference
    Then I click on button Save admin settings
  #Teacher can not add bbb tool in the course


  Scenario Outline: Teacher can not add the bbb tool in the course
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'Cypress Test Creation and Deletion'
    When I open page Edit course
    Then I can see page Edit course
    Then I see the disabled check box for Activating video conferences in page Edit course
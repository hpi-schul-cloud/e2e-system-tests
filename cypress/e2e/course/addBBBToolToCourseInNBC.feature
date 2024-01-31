@release
Feature: Teacher can add and remove BBB tool in the course in NBC with admin permission

  # As a teacher I want to activate and deactivate BBB tool inside the course in NBC

  @stable_test
  Scenario Outline: Admin enables the video conference option in the school settings page
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to administration page
    When I click on manage school card
    #remove the following line if old admin page is hidden
    When I click on general settings panel
    Then I enable the video conference
    Then I click on admin setting save button

  @stable_test
  Scenario Outline: Teacher can add and remove BBB tool in the course
  #Teacher adds the BBB tool in the course
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'German'
    When I open course edit page
    Then I can see course edit page
    When I click on check box Activate video conferences in course edit page to enable the BBB tool
    When I click on button Save changes in course edit page
    When I click on tab Tools
    Then I see the BBB Video Conference BigBlueButton in NBC
    When I click on the BBB Video Conference BigBlueButton in NBC
    Then I see the modal to start the BBB video conference
    Then I click on button Cancel in BBB dialog box
  #Teacher removes the BBB tool in the course
    When I open course edit page
    Then I can see course edit page
    When I uncheck the box to Activate video conferences in course edit page to enable the BBB tool
    When I click on button Save changes in course edit page
    When I click on tab Tools
    Then I do not see the the card Video Conference BigBlueButton

  @stable_test
  Scenario Outline: Admin disables the video conference option in the school settings page and teacher can not add the bbb tool in the course
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to administration page
    When I click on manage school card
    #remove the following line if old admin page is hidden
    When I click on general settings panel
    Then I disable the video conference
    Then I click on admin setting save button
  #Teacher can not add bbb tool in the course
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'German'
    When I open course edit page
    Then I can see course edit page
    Then I see the disabled check box for Activating video conferences in course
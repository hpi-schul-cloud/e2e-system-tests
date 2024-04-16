@release
Feature: Teacher can add and remove BBB tool in the course in DBC and BRB with admin permission

  As a teacher I want to activate and deactivate BBB tool inside the course in DBC and BRB

  @stable_test
  Scenario Outline: Admin enables the video conference in the school settings page
    Given I am logged in as a 'admin1_brb' at 'brb'
    When I go to administration page
    When I click on manage school card
    When I go to new school administration page
    When I click on general settings panel
    Then I enable the video conference
    Then I click on button Save admin settings

  @stable_test
  Scenario Outline: Teacher can add and remove BBB tool in the course in DBC and BRB
  #Teacher adds the BBB tool in the course
    Given I am logged in as a 'teacher1_brb' at 'brb'
    When I go to rooms overview
    When I go to room 'German'
    When I click on tab Tools old
    Then I see tab Tools in course
    When I click on button Add new tool
    Then I see list of tools for course
    When I click on the BBB Video Conference BigBlueButton in DBC and BRB
    Then I see the modal content appears for confirmation
    When I click on button Add in modal content
    Then I see the BBB Video Conference BigBlueButton added in tools tab
    When I click on the BBB Video Conference BigBlueButton in course
    Then I see the modal to start the BBB video conference in DBC and BRB
    Then I click on button Cancel in BBB modal
  #Teacher removes the BBB tool in the course
    When I click on icon Deleten on the BBB Video Conference BigBlueButton
    Then I see the modal content for confirmation of deletion
    When I click on button Delete in BBB modal
    Then I do not see the BBB Video Conference BigBlueButton in tools tab

  @stable_test
  Scenario Outline: Admin disables the video conference option in the school settings page and teacher can not add the bbb tool in the course
    Given I am logged in as a 'admin1_brb' at 'brb'
    When I go to administration page
    When I click on manage school card
    When I go to new school administration page
    When I click on general settings panel
    Then I disable the video conference
    Then I click on button Save admin settings
  #Teacher can not add bbb tool in the course
    Given I am logged in as a 'teacher1_brb' at 'brb'
    When I go to rooms overview
    When I go to room 'German'
    When I click on tab Tools old
    Then I see tab Tools in course
    When I click on button Add new tool
    Then I see list of tools for course
    Then I do not see BBB Video Conference in DBC and BRB
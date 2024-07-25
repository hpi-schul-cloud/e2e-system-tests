@unstable_test
Feature: Teacher can add and remove BBB tool in the course in DBC and BRB with admin permission

  As a teacher I want to activate and deactivate BBB tool inside the course in DBC and BRB

  @unstable_test
  Scenario Outline: Admin enables and disables the video conference option in the school settings page '<namespace>', while teachers can add and remove the video conference tool within the course
    #Admin enables the video conference in the school settings page
    Given I am logged in as a '<user_1>' at '<namespace>'
    When I click on administration in menu
    When I click on sub menu school
    #remove the following line if old admin page is hidden
    When I go to new school administration page
    When I click on general settings panel
    Then I enable the video conference
    Then I click on button Save admin settings
    #Teacher adds the BBB tool in the course
    Given I am logged in as a '<user_2>' at '<namespace>'
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
    When I click on icon Delete on the BBB Video Conference BigBlueButton
    Then I see the modal content for confirmation of deletion
    When I click on button Delete in BBB modal
    Then I do not see the BBB Video Conference BigBlueButton in tools tab
    #Admin disables the video conference option in the school settings page and teacher can not add the bbb tool in the course
    Given I am logged in as a '<user_1>' at '<namespace>'
    When I click on administration in menu
    When I click on sub menu school
    #remove the following line if old admin page is hidden
    When I go to new school administration page
    When I click on general settings panel
    Then I disable the video conference
    Then I click on button Save admin settings
    #Teacher can not add bbb tool in the course
    Given I am logged in as a '<user_2>' at '<namespace>'
    When I go to rooms overview
    When I go to room 'German'
    When I click on tab Tools old
    Then I see tab Tools in course
    When I click on button Add new tool
    Then I see list of tools for course
    Then I do not see BBB Video Conference in DBC and BRB
    Examples:
      | user_1     | user_2       | namespace |
      | admin1_brb | teacher1_brb | brb       |
      | admin1_dbc | teacher1_dbc | dbc       |
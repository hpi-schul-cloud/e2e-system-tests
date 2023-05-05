@pr
@release
Feature: Topics - To create, edit and delete topics by the teacher.

  As a teacher I want to create, edit and delete a new topic so that the student can see it

  @stable_test
  Scenario: Teacher creates topic from room
    Given I am logged in as a 'teacher1' at 'brb'
    When I go to rooms overview
    And I go to room 'Course with subject and tasks'
    And I click on FAB to create new content
    And I click on New Topic FAB
    Then I can see edit topic page '-'
    When I enter topic title 'Cy Topic Creating and Deleting Test'
    When I click on button Add Text to topic
    Then I can see form element Text on position '0'
    When I enter title 'Cy Title for Text Element in Topic' into element Text in element position '0'
    When I enter description 'Cy this is the description of the topic. It is used for automated Cypress tests.' into element Text in element position '0'
    When I click on button Add GeoGebra to topic
    When I enter title "Cy Title for GeoGebra Element in Topic" into element GeoGebra
    When I enter GeoGebra material ID 'kEBfU7AR'
    When I click on button Add Learning Material to topic
    When I enter title 'Cy Title for Learning Material Element in Topic' into element Learning Material
    Then I see second learning material button in the content area
    # currently step for adding material is excluded because this process is via new browser window
    When I click on button Add Etherpad to topic
    When I enter title 'Cy Title for Etherpad Element in Topic' into element Etherpad in element position '3'
    When I enter description for the ether pad 'this is my epad description' in element position '3'
    When I click on button Add Task to topic
    When I enter title 'Cy Title for Task Element in Topic' into element Task
    When I enter URL of the task from the another course for task id '59cce3f6c6abf042248e888d'
    When I click on create button to create topic
    Then I can see edit topic page 'Cy Topic Creating and Deleting Test'
    When I click on save button to save changes
    Then I see topic detail page "Cy Topic Creating and Deleting Test" with content elements "Cy Title for Text Element in Topic", "Cy Title for GeoGebra Element in Topic", "Cy Title for Learning Material Element in Topic", "Cy Title for Etherpad Element in Topic" and "Cy Title for Task Element in Topic"
    When I click on last breadcrump element in topbar navigation
    Then I can see content 'Cy Topic Creating and Deleting Test' on course page

  @stable_test
  Scenario: Teacher edits topic from room
    Given I am logged in as a 'teacher1' at 'brb'
    When I go to rooms overview
    And I go to room 'Course with subject and tasks'
    When I click on three dot menu of topic 'Cy Topic Creating and Deleting Test'
    When I click on Edit in dot menu of topic
    Then I can see edit topic page 'Cy Topic Creating and Deleting Test'
    When I enter topic title 'Cy Topic Creating and Deleting Test - Edited topic'
    When I click on save button to save changes
    Then I can see content 'Cy Topic Creating and Deleting Test - Edited topic' on course page
    When I click on topic 'Cy Topic Creating and Deleting Test - Edited topic' on course page
    Then I see topic detail page "Cy Topic Creating and Deleting Test - Edited topic" with content elements "Cy Title for Text Element in Topic", "Cy Title for GeoGebra Element in Topic", "Cy Title for Learning Material Element in Topic", "Cy Title for Etherpad Element in Topic" and "Cy Title for Task Element in Topic"
    When I click on icon Pen on topic page
    Then I can see edit topic page 'Cy Topic Creating and Deleting Test - Edited topic'
    When I click on settings and remove option of element '0'
    When I click on save button to save changes
    Then I can see content 'Cy Topic Creating and Deleting Test - Edited topic' on topic page
    Then I can not see content 'Cy Title for Text Element in Topic' on current page
    When I click on button Edit on topic page
    Then I can see edit topic page 'Cy Topic Creating and Deleting Test - Edited topic'
    When I click on button Add Text to topic
    Then I can see form element Text on position '4'
    When I enter title 'Cy New text element Title' into element Text in element position '4'
    When I enter description 'Cy New this is the description of the topic. It is used for automated Cypress tests.' into element Text in element position '4'
    # NOTICE: steps for later implementation are commented out
    # When I load up a file 'example_jpg.jpg' to the description of form element Text on position '4'
    # When I move Text element on position '4' to position '3'
    # Then I can see form element Text on position '3'
    # Then I can see form element Task on position '4'
    When I enter title 'Cy Title for Etherpad Element in Topic Changed' into element Etherpad in element position '2'
    When I enter description for the ether pad 'changed etherpad description' in element position '2'
    When I click on save button to save changes
    Then I see topic detail page "Cy Topic Creating and Deleting Test - Edited topic" with content elements "Cy Title for GeoGebra Element in Topic", "Cy Title for Learning Material Element in Topic", "Cy Title for Etherpad Element in Topic Changed", "Cy Title for Task Element in Topic" and "Cy New text element Title"
    # NOTICE: steps for later implementation are commented out
    # Then I see file 'example_jpg.jpg' on topic page
    # When I click on button Edit on topic page
    # Then I can see form element Text on position '3'
    # Then I can see form element Task on position '4'
    # When I click button Cancel
    # Then I see topic detail page "Cy Topic Creating and Deleting Test - Edited topic" with content elements "Cy Title for GeoGebra Element in Topic", "Cy Title for Learning Material Element in Topic", "Cy Title for Etherpad Element in Topic Changed", "Cy Title for Task Element in Topic" and "Cy New text element Title"
    When I click on last breadcrump element in topbar navigation
    Then I can see content 'Cy Topic Creating and Deleting Test - Edited topic' on course page

  @stable_test
  Scenario: Teacher deletes topic from room
    Given I am logged in as a 'teacher1' at 'brb'
    When I go to rooms overview
    When I go to room 'Course with subject and tasks'
    When I click on three dot menu of topic 'Cy Topic Creating and Deleting Test - Edited topic'
    When I click on Delete in dot menu of topic
    When I click on Cancel in confirmation window
    Then I can see content 'Cy Topic Creating and Deleting Test - Edited topic' on course page
    When I click on three dot menu of topic 'Cy Topic Creating and Deleting Test - Edited topic'
    When I click on Delete in dot menu of topic
    When I click on Delete in confirmation window
    Then I can not see content 'Cy Topic Creating and Deleting Test - Edited topic'

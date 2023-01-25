@topics @unstable_test
Feature: Topics - To create, edit and delete topics by the teacher.

  As a teacher I want to create, edit and delete a new topic so that the student can see it

  Scenario: Teacher creates topic from room
    Given I am logged in as a 'teacher1' at 'brb'
    When I go to rooms overview
    And I go to room 'Course with subject and tasks'
    And I click on FAB to create new content
    And I click on New Topic FAB
    Then I can see edit topic page '-'
    When I enter topic title 'Cy Topic Creating and Deleting Test'
    When I click on button Add Text to topic
    Then I can see form element Text
    When I enter title "Cy Title for Text Element in Topic" into element Text
    When I enter description 'Cy this is the description of the topic. It is used for automated Cypress tests.' into element Text
    When I click on button Add GeoGebra to topic
    When I enter title "Cy Title for GeoGebra Element in Topic" into element GeoGebra
    When I enter GeoGebra material ID 'kEBfU7AR'
    When I click on button Add Learning Material to topic
    When I enter title 'Cy Title for Learning Material Element in Topic' into element Learning Material
    Then I see second learning material button in the content area
    # currently step for adding material is excluded because this process is via new browser window
    When I click on button Add Etherpad to topic
    When I enter title 'Cy Title for Etherpad Element in Topic' into element Etherpad
    When I enter description for the ether pad 'this is my epad description'
    When I click on button Add Task to topic
    When I enter title 'Cy Title for Task Element in Topic' into element Task
    When I enter URL of the task from the another course 'https://brb-main.cd.dbildungscloud.dev/homework/59cce3f6c6abf042248e888d'
    When I click on create button to create topic
    Then I can see edit topic page 'Cy Topic Creating and Deleting Test'
    # When I add file to element Text
    When I click on save button to save changes
    # Then I can see room page 'Course with subject and tasks'
    # Then I see the topic card named 'this is my topic name'
    # Then I see publish button on the topic card 'this is my topic name' 


  # Steps defined in JIRA Ticket BC-2224
  #  Given I am logged in as a 'teacher' at 'brb' -DONE
  #   When I go to rooms overview -DONE
  #   And I go room 'Mathe' -DONE
  #   And I click on FAB to create new content -DONE
  #   And I click on new topic FAB -DONE
  #   Then I see new topic creation page -DONE
  #   And I enter the topic title 'this is my topic name' -DONE
  #   Then I click on add text button -DONE
  #   And I enter text content title 'my text content' -DONE
  #   And I enter description into CK Editor 'this is text description' -DONE
  #   Then I click on add GeoGebra worksheet button -DONE
  #   And I enter the title 'my GeoGebra content' -DONE
  #   And I enter test GeoGebra material ID 'kEBfU7AR'
  #   Then I click on add learning material button
  #   And I enter the title 'my learning material'
  #   And I see second learning material button in the content area
  #   Then I click on add Etherpad button
  #   And I enter the title 'my etherpad'
  #   And I enter description for the ether pad 'this is my epad description'
  #   Then I click on add task button to embed the task from another course
  #   And I enter the title 'my task from another course'
  #   And I enter the URL of the task from the another course 'https://brb-main.cd.dbildungscloud.dev/homework/59cce3f6c6abf042248e888d'
  #   Then I click on create button
  #   Then I can see room page 'Mathe' 
  #   Then I see the topic card named 'this is my topic name'
  #   Then I see publish button on the topic card 'this is my topic name' 
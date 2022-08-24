Feature: To check contents on the dashboard

  As a student and a teacher I want to be see important information on the dashboard so that I can be updated start working

  Scenario: as a pre-condition teacher creates school news
    #Given I am logged in as a 'teacher' at 'brb'
    #When I go to news overview
    #When I click on add news button
    #Then I see news creation page
    #And I enter news title 'this is a school news'
    #And I enter news description 'test school news description'
    #And I see date input field
    #And I see time input field
    #And I click on Save button
    #Then I see news is created successfully with title 'this is a school news' and with desccription 'test school news description'


  Scenario: as a pre-condition teacher creates a team news
    #Given I am logged in as a 'teacher' at 'brb'
    #When I go to teams overview
    #And I go to a team 'Musik'
    #When I click on news tab on the team detail page
    #And I click on create news button
    #Then I see news creation page
    #And I enter news title 'this is a team news'
    #And I enter news description 'test team news description'
   #And I see date input field
    #And I see time input field
    #And I click on Save button
     #Then I see news is created successfully with title 'this is a team news' and with desccription 'test team news description'

  Scenario: as a pre-condition teacher adds student as team member
    Given I am logged in as a 'teacher' at 'brb'
    When I go to teams overview
    And I go to a team 'Musik'
    And I click on three dot menu on the team title
    And I click on manage team members option
    And I click on Add internal attendees button
    And new dialog opens to select student 'Herbert Kraft' from the drop down list
    And I click on add button
    Then I see the student named 'Herbert Kraft' on the team members table

  Scenario: student arrives on dashboard
    Given I am logged in as a 'student' at 'brb'
    When I arrive on the dashboard
    Then I see the welcome message 'Hallo Herbert Kraft!'
    Then I see school news with title 'this is a school news' and description 'test school news description'
    Then I see teams news with title 'this is a team news' and description 'test team news description'
    Then I can see the assigned task 'Task11'

  Scenario: teacher arrives on dashboard
    Given I am logged in as a 'teacher' at 'brb'
    When I arrive on the dashboard
    Then I see the welcome message 'Hallo Karl Herzog!'
    Then I see school news with title 'this is a school news' and description 'test school news description'
    Then I see teams news with title 'this is a team news' and description 'test team news description'
    Then I can see the assigned task 'Task11'
    Then I can see the draft task 'Task1'

  Scenario: as a post-condition teacher deletes the school news
    Given I am logged in as a 'teacher' at 'brb'
    When I arrive on the dashboard
    And I click on team news teaser 'this is a team news'
    When I click on delete button
    And I click agin on delete button on confirmation dialog box
    Then I am back to news overview page and team news is not longer visible on this page

  Scenario: as a post-condition teacher deletes the team and so the team news
    Given I am logged in as a 'teacher' at 'brb'
    When I arrive on the dashboard
    And I click on team news teaser 'this is a school news'
    When I click on delete button
    And I click agin on delete button on confirmation dialog box
    Then I am back to news overview page and team news is not longer visible on this page

  Scenario: as a post-condition teacher deletes the student team member
    Given I am logged in as a 'teacher' at 'brb'

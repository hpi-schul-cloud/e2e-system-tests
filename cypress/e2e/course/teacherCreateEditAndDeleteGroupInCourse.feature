Feature: Teacher can create, edit and delete a group in the course

@stable_test
  Scenario: Teacher can create a group in a course
    Given I am logged in as a 'teacher1_brb' at 'brb'
    When I go to rooms overview
    When I go to room 'Mathe'
    When I click on groups tab
    Then I see create a new group button
    When I click on create a new group button
    When I see Create Course group page
    #When I type 'Cy Test Course Group' in group name field
    #When I select 'Marla Mathe' from group member field
    #When I click on create Course group button
    #Then I see group is created with name '<group_name>'



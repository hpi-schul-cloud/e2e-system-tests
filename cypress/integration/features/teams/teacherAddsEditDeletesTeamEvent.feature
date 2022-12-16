@team @stable_test
Feature: Team - Teacher manages the team event on Default

As a teacher I want to create/edit/delete the team event in default so that I can manage the team collaboration.

Scenario: Teacher adds, edits and deletes the team event via calendar
Given I am logged in as a 'teacher' at 'default'
When I go to teams overview
When I go to a team 'Musik'
When I go to calendar tab
When I click on Add date button
Then I see event creation dialog box
When I enter the title 'cy test team event cy'
When I select the from date 'pre selected date'
When I select the to date ' 'pre selected date'
When I enter the description 'cy team event description cy'
When I enter place 'cy TestPlace'
When I click on Save team event
Then I am on team detail Calendar tab and title  'cy test team event cy' is visible

When I click on edit icon for the same event 'cy test team event cy'
Then I see event creation dialog box
When I enter title 'edit cy teat team edit'
When I enter the description 'edit cy team event description cy'
When I enter place 'edit cy TestPlace'
When I click on Save team event
Then I am on team detail Calendar tab and title 'edit cy test team event cy' is visible
Then I am on the team detail Calendar tab and description 'edit cy team event description cy' is visible

When I click on edit icon for the same event 'cy test team event cy'
Then I see event creation dialog box
When I click on Delete team event button
Then I am on team detail Calendar tab and title  'edit cy test team event cy' is NOT visible
Feature: Team - Teacher manages the team event

As a teacher I want to create/edit/delete the team event in default so that I can manage the team collaboration.

Scenario: Teacher adds, edits and deletes the team event via calendar
  Given I am logged in as a 'teacher' at 'default'
  When I go to teams overview
  When I go to a team 'Musik'
  When I go to calendar tab
  When I click on Add date button
  Then I see event creation dialog form
  When I enter the title 'cy test team event cy'
  When I select the team event start date and time
  When I select the team event end date and time
  When I enter the description 'cy team event description cy'
  When I enter the event place 'cy TestPlace'
  When I click on Save team event
  Then I am in calendar tab on team detail page and title 'cy test team event cy' is visible
  When I click on edit icon
  Then I see event creation dialog form
  When I re enter the title 'edit cy teat team edit'
  When I re enter the description 'edit cy team event description cy'
  When I re enter the place 'edit cy TestPlace'
  When I click on Save team event
  Then I am in calendar tab on team detail page and edited title 'edit cy test team event cy' is visible
  Then I am in calendar tab on team detail page and edited description 'edit cy team event description cy' is visible
  When I click on edit icon
  Then I see event creation dialog form
  When I click on Delete team event button
  Then I am in calendar tab on team detail page and title 'edit cy test team event cy' is NOT visible
@team @stable_test
Feature: Team - Teacher manages the team event on Default

As a teacher I want to add video conference to the team event so that team members can colleborate via video conference.


Scenario: as a pre condition Admin enables the video conference for the team
Given I am logged in as a 'admin' at 'default'
When I go to administration page
When I click on the manage school card
Then I enable the video conference from the old school setting page
Then I click on admin setting save button

Scenario: as a pre condition Teacher enables the video for the team
Given I am logged in as a 'teacher' at 'default'
When I go to teams overview
When I go to a team 'Musik'
When I click on team settings
When I click on edit option
Then I see team edit page
When I enable the video conference check box on the teams edit page
Then I click on teams save changes button

Scenario: as a pre-condition teacher adds student as team member
Given I am logged in as a 'teacher' at 'default'
When I go to teams overview
And I go to a team 'Musik'
And I click on three dot menu on the team title
And I click on manage team members option
And I click on add internal attendees button
And new dialog opens to select student 'Herbert Kraft' from the drop down list
And I click on add user button
Then I see the student named 'Herbert Kraft' on the team members table

Scenario: Teacher adds calendar with video conference
Given I am logged in as a 'teacher' at 'default'
When I go to teams overview
And I go to a team 'Musik'
When I go to calendar tab
When I click on Add date button
Then I see event creation dialog form
When I enter the title 'cy test team event cy'
When I select the team event start date and time
When I select the team event end date and time
When I enter the description 'cy team event description cy'
When I enter the event place 'cy TestPlace'
When I enable the video conference check box on the teams edit pages
When I click on Save team event
When I go to calendar tab
Then I am in calendar tab on team detail page and title 'cy test team event cy' is visible
Then I am on the team detail Calendar tab and see start video conference button
When I click on start video conference button as a moderator teacher
Then I see the modal and start the video confernce
Then I see URL is changed to 'https://bbb-3.bbb.staging.messenger.schule/'

Scenario: Student can see the event with video confernce option
Given I am logged in as a 'student' at 'default'
When I go to teams overview
And I go to a team 'Musik'
When I go to calendar tab
Then I am in calendar tab on team detail page and title 'cy test team event cy' is visible
Then I am on the team detail Calendar tab and see start video conference button
When I click on participate to video conference button as a participanting student
Then I see URL is changed to 'https://bbb-3.bbb.staging.messenger.schule/'

Scenario: as a post-condition teacher deletes the student as a team member
Given I am logged in as a 'teacher' at 'default'
When I go to teams overview
And I go to a team 'Musik'
And I click on three dot menu on the team title
And I click on manage team members option
When I select the student 'Herbert Kraft' and click on delete icon
Then I see 'Herbert Kraft' is not visible on the table

Scenario: as a post condition Teacher deletes the event
Given I am logged in as a 'teacher' at 'default'
When I go to teams overview
And I go to a team 'Musik'
When I go to calendar tab
When I click on edit icon
Then I see event creation dialog form
When I click on Delete team event button
Then I am in calendar tab on team detail page and title 'edit cy test team event cy' is NOT visible

Scenario: as a post condition Admin disable the video conference for the team
Given I am logged in as a 'admin' at 'default'
When I go to administration page
When I click on manage school card
When I click on go to new school adminstration button
Then I disable the video conference from the old school setting page
Then I click on admin setting save button
Then I see video conference check box is unchecked

Scenario: as a post condition Teacher sees deactivated video conference check box
Given I am logged in as a 'teacher' at 'default'
When I go to teams overview
When I go to a team 'Musik'
When I click on team settings
When I click on edit option
Then I see team edit page
Then I see video conference check box is disabled
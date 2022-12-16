@team @stable_test
Feature: Team - Teacher manages the team event on Default

As a teacher I want to add video conference to the team event so that team members can colleborate via video conference.


Scenario: as a pre condition Admin enables the video conference for the team
Given I am logged in as a 'admin' at 'default'
When I go to administration page
When I click on the card manage school
When I click on go to new school adminstration button
Then I on new school admin page
Then I activate the video conference toggle
Then I click on general save button

Scenario: as a pre condition Teacher enables the video for the team
Given I am logged in as a 'teacher' at 'default'
When I go to teams overview
When I go to a team 'Musik'
When I click on team settings
When I click on edit option
Then I see team edit page
When I enable the video conference check box
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
When I click on Calendar tab
When I click on Add Date button
Then I see event creation modal
When I enter title 'cy test team event cy'
When I select start date and time
When I select end date and time
When I enter description 'cy test event description cy'
When I enter place 'cy test place cy'
When I enable video conference toggle
When I click on Add button
Then I am on the team detail Calendar tab and title  'cy test team event cy' is visible
Then I am on the team detail Calendar tab and see start video conference button
When I click on start video conference button
Then I see modal to start the call

Scenario: Student can see the event with video confernce
Given I am logged in as a 'student' at 'default'
When I go to teams overview
And I go to a team 'Musik'
When I click on Calendar tab
Then I am on the team detail Calendar tab and title  'cy test team event cy' is visible
Then I am on the team detail Calendar tab and see start video conference button
When I click on info icon on start video conference
Then I see dialog box that video is not yet started and
Then I click Ok button to close the dialog box

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
When I click on Calendar tab
Then I am on the team detail Calendar tab and title  'cy test team event cy' is visible
When I click on event edit icon
When I click on Delete button
Then I am redirected to the team detail Calendar tab and title  'cy test team event cy' is not visible

Scenario: as a post condition Admin disable the video conference for the team
Given I am logged in as a 'admin' at 'default'
When I go to administration page
When I click on manage school card
When I click on go to new school adminstration button
Then I deactivate the video conference toggle
Then I click on general save button

Scenario: as a post condition Teacher sees deactivated video conference check box
Given I am logged in as a 'teacher' at 'default'
When I go to teams overview
When I go to a team 'Musik'
When I click on team settings
When I click on edit option
Then I see team edit page
Then I see video conference check box is disabled
@team @stable_test
Feature: Team - Teacher adds video conference to the team team and student can partcipate as an internal team member

As a teacher I want to add video conference to the team event so that team members can colleborate via video conference.

Scenario: as a pre condition Admin enables the video conference option for a team event
Given I am logged in as a 'admin' at 'default'
When I go to administration page
When I click on manage school card
Then I enable the video conference on the old school setting page
Then I click on admin setting save button
Scenario: as a pre condition Teacher enables the video conference option in team edit
Given I am logged in as a 'teacher' at 'default'
When I go to teams overview
When I go to a team 'Musik'
When I click on team settings
When I click on edit option
Then I see team edit page
When I enable the video conference on the teams edit page
Then I click on teams save changes button

Scenario: as a pre-condition teacher adds student as an internal team member
Given I am logged in as a 'teacher' at 'default'
When I go to teams overview
And I go to a team 'Musik'
And I click on three dot menu on the team title
And I click on manage team members option
And I click on add internal attendees button
And new dialog opens to select student 'Herbert Kraft' from the drop down list
And I click on add user button
Then I see the student named 'Herbert Kraft' on the team members table

Scenario: Teacher adds event with video conference
Given I am logged in as a 'teacher' at 'default'
When I go to teams overview
And I go to a team 'Musik'
When I go to calendar tab
When I click on Add date
Then I see event creation modal
When I enter the title 'cy title'
When I select the team event start date and time
When I select the team event end date and time
When I enter the description 'cy team event description cy'
When I enable the video conference toggle on the modal
When I enter the event place 'cy TestPlace' and press enter to save the event
#When I click on Save team event  //currently there is a single 'save' button in the modal but used multiple time in the DOM on different pages, so this is is to be fixed
When I go to calendar tab
Then I am in calendar tab on team detail page and title 'cy title' is visible
Then I see the start video conference button
When I click on start video conference button as a moderator teacher
Then I see the modal and toggles are visible in the modal
#Then I start the team video confernce //due to multiple element issue, its blocked by BC-3085
#Then I see URL is changed to 'https://bbb-3.bbb.staging.messenger.schule/' //It would not work due to BC-3085

Scenario: Student can see and participate in video confernce
Given I am logged in as a 'student' at 'default'
When I go to teams overview
And I go to a team 'Musik'
When I go to calendar tab
Then I am in calendar tab on team detail page and title 'cy title' is visible
Then I see the information that video conference is not yet started
#Then I see the video conference participate button as student //It would not work due to BC-3085
#When I click on participate to video conference button as a participanting student //It would not work due to BC-3085
#Then I see URL is changed to 'https://bbb-3.bbb.staging.messenger.schule/' //It would not work due to BC-3085

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
Then I see event creation modal
When I click on Delete team event in modal
Then I am in calendar tab on team detail page and title 'cy title' is NOT visible

Scenario: as a post condition Admin disable the video conference for the team
Given I am logged in as a 'admin' at 'default'
When I go to administration page
When I click on manage school card
#When I click on go to new school adminstration button  // unstability on this page at the moment
Then I disable the video conference on the old school setting page
Then I click on admin setting save button

Scenario: as a post condition Teacher sees deactivated video conference check box
Given I am logged in as a 'teacher' at 'default'
When I go to teams overview
When I go to a team 'Musik'
When I click on team settings
When I click on edit option
Then I see team edit page
Then I see video conference option is disabled
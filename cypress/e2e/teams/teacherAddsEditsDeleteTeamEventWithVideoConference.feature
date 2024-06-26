# Note: School api migration is blocked due to admin user can not access new school setting page (BC-7390).
@release
Feature: Team - Teacher adds edits and deletes team event with video conference and student can participate as an internal team member

    As a teacher I want to add video conference to the team event so that team members can collaborate via video conference.

    @stable_test
    Scenario: as a pre condition Admin enables the video conference option for a team event
        Given I am logged in as a 'admin1_dbc' at 'dbc'
        When I click on administration in menu
        When I click on manage school card
        #remove the following line if old admin page is hidden
        When I go to new school administration page
        When I click on general settings panel
        Then I enable the video conference
        Then I click on button Save admin settings

    @stable_test
    Scenario: as a pre condition Teacher enables the video conference option in team edit
        Given I am logged in as a 'teacher1_dbc' at 'dbc'
        When I go to teams overview
        When I go to a team 'Musik'
        When I click on team settings
        When I click on edit option
        Then I see team edit page
        When I enable the video conference on the teams edit page
        Then I click on teams save changes button

    @stable_test
    Scenario: as a pre-condition teacher adds student as an internal team member
        When I go to teams overview
        When I go to a team 'Musik'
        When I click on three dot menu on the team title
        And I click on manage team members option
        And I click on add internal attendees button
        And new dialog opens to select student 'Kraft, Herbert' from the drop down list
        And I click on add user button
        Then I see the student named 'Herbert Kraft' on the team members table

    @stable_test
    Scenario: Teacher adds event with video conference
        When I go to teams overview
        When I go to a team 'Musik'
        When I go to calendar tab
        When I click on Add date
        Then I see event creation modal
        When I enter the title 'cy title'
        When I select the team event start date and time
        When I select the team event end date and time
        When I enter the description 'cy team event description cy'
        When I enable the video conference toggle on the modal
        When I enter the event place 'cy TestPlace'
        When I click on Save team event button
        When I go to calendar tab
        Then I am in calendar tab on team detail page and title 'cy title' is visible
        Then I see the start video conference button
        When I click on start video conference button as a moderator teacher
        Then I see the modal and toggles are visible in the modal
        Then I start the team video conference which has title 'cy title'

    @stable_test
    Scenario: Student can see and participate in video conference
        Given I am logged in as a 'student1_dbc' at 'dbc'
        When I go to teams overview
        When I go to a team 'Musik'
        When I go to calendar tab
        Then I am in calendar tab on team detail page and title 'cy title' is visible
        Then I click on participate to video conference button as a participating student

    @stable_test
    Scenario: as a post-condition teacher deletes the student as a team member
        Given I am logged in as a 'teacher1_dbc' at 'dbc'
        When I go to teams overview
        When I go to a team 'Musik'
        When I click on three dot menu on the team title
        And I click on manage team members option
        When I select the student 'Herbert Kraft' and click on delete icon
        Then I see 'Herbert Kraft' is not visible on the table

    @stable_test
    Scenario: as a post condition Teacher edits and deletes the event
        When I go to teams overview
        When I go to a team 'Musik'
        When I go to calendar tab
        When I click on edit icon
        When I re enter the title 'edit cy title'
        When I re enter the description 'edit cy team event description cy'
        When I re enter the place 'edit cy test place cy'
        When I click on button Save team event
        Then I see team event with description 'edit cy team event description cy'
        Then I see video icon for team event
        When I click on edit icon
        Then I see event creation modal
        When I click on Delete team event in modal
        Then I am in calendar tab on team detail page and title is NOT visible

    @stable_test
    Scenario: as a post condition Admin disable the video conference for the team
        Given I am logged in as a 'admin1_dbc' at 'dbc'
        When I click on administration in menu
        When I click on manage school card
        #remove the following line if old admin page is hidden
        When I go to new school administration page
        When I click on general settings panel
        Then I disable the video conference
        Then I click on button Save admin settings

    @stable_test
    Scenario: as a post condition Teacher sees deactivated video conference check box
        Given I am logged in as a 'teacher1_dbc' at 'dbc'
        When I go to teams overview
        When I go to a team 'Musik'
        When I click on team settings
        When I click on edit option
        Then I see team edit page
        Then I see video conference option is disabled

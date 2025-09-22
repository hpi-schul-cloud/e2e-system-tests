@stable_test
@regression_test
@schedule_run
@group-E
@pr
Feature: Team - Teacher adds edits and deletes team event with video conference and student can participate as an internal team member

    As a teacher I want to add video conference to the team event so that team members can collaborate via video conference.

    Scenario Outline: Teacher adds edits and deletes team event with video conference and student can participate as an internal team member
        # as a pre-condition create teacher and student
        Given I am logged in as a '<admin>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'

        # as a pre condition Admin enables the video conference option for a team event
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        Then I enable the video conference
        Then I click on button Save admin settings

        # as a pre condition Teacher creates a team and enables the video conference option in team edit
        Given I am logged in as a 'teacher1_dbc' at 'dbc'
        When I go to teams overview
        When I click on button Add Team on the teams overview page
        Then I see new team creation page
        When I enter in the title '<team_title>'
        When I click on button Create Team on the team creation page
        When I go to teams overview
        When I go to a team '<team_title>'
        When I click on team settings
        When I click on edit option
        Then I see team edit page
        When I enable the video conference on the teams edit page
        Then I click on teams save changes button

        # as a pre-condition teacher adds student as an internal team member
        When I go to teams overview
        When I go to a team '<team_title>'
        When I click on three dot menu on the team title
        When I click on manage team members option
        When I click on add internal attendees button
        When new dialog opens to select student '<student_listname>' from the drop down list
        When I click on add user button
        Then I see the student named '<student_fullname>' on the team members table

        # Teacher adds event with video conference
        When I go to teams overview
        When I go to a team '<team_title>'
        When I go to tab Calendar
        When I click on Add date
        Then I see event creation modal
        When I enter the title '<event_title>'
        When I select the team event start date and time
        When I select the team event end date and time
        When I enter the description '<event_description>'
        When I enable the video conference toggle on the modal
        When I enter the event place '<event_place>'
        When I click on Save team event button
        When I go to tab Calendar
        Then I am in calendar tab on team detail page and title '<event_title>' is visible
        Then I see the start video conference button
        When I click on start video conference button as a moderator teacher
        Then I see the modal and toggles are visible in the modal
        Then I start the team video conference which has title '<event_title>'

        # Student can see and participate in video conference
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to teams overview
        When I go to a team '<team_title>'
        When I go to tab Calendar
        Then I am in calendar tab on team detail page and title '<event_title>' is visible
        Then I click on participate to video conference button as a participating student

        # as a post-condition teacher deletes the student as a team member
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to teams overview
        When I go to a team '<team_title>'
        When I click on three dot menu on the team title
        When I click on manage team members option
        When I select the student '<student_fullname>' and click on delete icon
        Then I see '<student_fullname>' is not visible on the table

        # as a post condition Teacher edits and deletes the event
        When I go to teams overview
        When I go to a team '<team_title>'
        When I go to tab Calendar
        When I click on icon Edit event
        When I change the title to '<event_title_edited>'
        When I change the description to '<event_description_edited>'
        When I change the event place to 'edit cy test place cy'
        When I click on button Save team event changes
        Then I see team event with description '<event_description_edited>'
        Then I see video icon for team event
        When I click on icon Edit event
        Then I see event creation modal
        When I click on Delete team event in modal
        Then I am in calendar tab on team detail page and title is NOT visible

        # as a post condition Admin disable the video conference for the team
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        Then I disable the video conference
        Then I click on button Save admin settings

        # as a post condition Teacher sees deactivated video conference check box
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to teams overview
        When I go to a team '<team_title>'
        When I click on team settings
        When I click on edit option
        Then I see team edit page
        Then I see video conference option is disabled

        # deleting the newly created team by Teacher
        When I go to teams overview
        When I go to a team '<team_title>'
        When I click on team settings
        When I click on delete option
        Then I see dialog box and click on delete button to confirm the deletion
        Then I do not see the team '<event_title_edited>'

        @staging_test
        Examples:
            | admin      | teacher      | student      | namespace | student_listname | student_fullname | team_title                             | event_title        | event_description            | event_place  | event_title_edited        | event_description_edited               | event_description_edited |
            | admin1_dbc | teacher1_dbc | student1_dbc | dbc       | Kraft, Herbert   | Herbert Kraft    | CypressAut - team for video conference | CypressAut - Event | this is cy event description | Cypress Aula | CypressAut - Edited Event | this is an edited cy event description | Cypress Mensa            |

        @school_api_test
        Examples:
            | admin      | teacher      | student      | namespace | student_listname   | student_fullname  | team_title                             | event_title        | event_description            | event_place  | event_title_edited        | event_description_edited               | event_description_edited |
            | admin1_dbc | teacher1_dbc | student1_dbc | dbc       | student_1, cypress | cypress student_1 | CypressAut - team for video conference | CypressAut - Event | this is cy event description | Cypress Aula | CypressAut - Edited Event | this is an edited cy event description | Cypress Mensa            |

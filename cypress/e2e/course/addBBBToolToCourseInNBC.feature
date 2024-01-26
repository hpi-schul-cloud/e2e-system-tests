Feature: Teacher can add and remove BBB tool in the course in NBC with admin permission

  # As a teacher I want to activate and deactivate BBB tool inside the course in NBC

  Scenario Outline: Admin enables the video conference option in the school settings page
      Given I am logged in as a '<admin>' at '<state>'
      When I go to administration page
      When I click on manage school card
      Then I enable the video conference toggle on the new school setting page
      Then I click on admin setting save button

  Scenario Outline: Teacher can add and remove BBB tool in the course
  # Teacher adds the BBB tool in the course
      Given I am logged in as a '<teacher>' at '<state>'
      When I go to rooms overview
      When I go to room '<room_title>'
      When I open course edit page
      Then I can see course edit page
      When I click check box Activate video conferences for course to enable the bbb tool
      When I click on button Save changes
      When I click on tab Tools
      Then I see the card for Video Conference BigBlueButton
      When I click on the card Video Conference BigBlueButton
      Then I see the modal to start the video conference
      Then I see three toggles on the Modal
      When I click on the the button Create on the modal
  # Teacher removes the BBB tool in the course
      When I go to rooms overview
      When I go to room '<room_title>'
      When I open course edit page
      Then I can see course edit page
      When I click the check box Activate video conferences for course to disable the bbb tool
      When I click on the button Save changes
      When I click on tab Tools
      Then I do not see the the card Video Conference BigBlueButton

  Scenario Outline: Admin disables the video conference option in the school settings page and teacher can not add the bbb tool in the course
      Given I am logged in as a '<admin>' at '<namespace>'
      When I go to administration page
      When I click on manage school card
      Then I disabled the video conference toggle on the new school setting page
      Then I click on admin setting save button
      Then I logout
  # Teacher can not add bbb tool in the course
      Given I am logged in as a '<teacher>' at '<state>'
      When I go to rooms overview
      When I go to room '<room_title>'
      When I open course edit page
      Then I can see course edit page
      Then I see the disabled check box for Activating video conferences in course

  Examples:
          |  admin      |   teacher       |   namespace   |   room_title      |
          |  admin1_nbc |   teacher1_nbc  |   nbc         |   Mathematics     |
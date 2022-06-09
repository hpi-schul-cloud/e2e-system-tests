Feature: To administrate school settings by the admin.

  As an admin I want to administrate the external tools used in the school so that I can manage it

  Scenario: Deactivate Chat --> currently deactivate cht toggle is unstable so call to action is taking place for this scenario

    Given I am logged in as a 'admin' at 'brb'
    When I go to administration page
    And I go to school administration
    And I go to new school administration page
    And I click toggle switch to deactivate the chat
    And I click save general settings button
    Then I log out
    Given I am logged in as a 'teacher' at 'brb'
    And I go to teams overview
    And I go to a team
    Then I can not see the chat in team
    And I open team settings
    And I choose edit team
    Then I can not see the checkbox for messenger in a team

  Scenario: Activate Chat

    Given I am logged in as a 'admin' at 'brb'
    When I go to administration page
    And I go to school administration
    And I go to new school administration page
    And I click toggle switch to activate the chat
    And I click save general settings button
    Then I log out
    Given I am logged in as a 'teacher' at 'brb'
    When I go to teams overview
    And I go to a team
    Then I can see the chat in team
    And I open team settings
    And I choose edit team
    Then I can see the checkbox for messenger in a team

  #Scenario: Deactivate BigBlueButton --> BBB tool is not avaiable on main instance

    #Given I am logged in as a 'admin' at 'brb'
    #When I go to administration page
    #And I go to school administration
    #And I go to new school administration page
    #And I click toggle switch to deactivate video conferencing
    #And I click save general settings button
    #And I log out
    #Given I am logged in as a 'teacher' at 'brb'
    #And I go to rooms overview
    #And I go to room
    #And I go to tools tab
    #And I click add new tool button
    #Then I can not add BigBlueButton to the room

  #Scenario: Activate BigBlueButton --> BBB tool is not avaiable on main instance

    #Given I am logged in as a 'admin' at 'brb'
    #When I go to administration page
    #And I go to school administration
    #And I go to new school administration page
    #And I click toggle switch to activate video conferencing
    #And I click save general settings button
    #And I log out
    #Given I am logged in as a 'teacher' at 'brb'
    #And I go to rooms overview
    #And I go to room
    #And I go to tools tab
    #And I click add new tool button
    #Then I can add BigBlueButton to the room
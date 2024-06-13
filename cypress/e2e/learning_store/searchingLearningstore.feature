# Note: School api migration is blocked due to admin user can not access new school setting page (BC-7390).
@api_migrated
@release
Feature: Learning store - Activating and deactivating access for students

  As an admin I want to activate and deactivate students access to learning store

  @stable_test
  Scenario: Search, open and download material form learning store, including pre-conditions

    # pre-condition: admin, student and teacher log in to create their account in a same school
    Given I am logged in as a '<teacher>' at '<namespace>'
    Given I am logged in as a '<student>' at '<namespace>'
    Given I am logged in as a '<admin>' at '<namespace>'

    # Admin activates students access to Learning store
    Given I am logged in as a '<admin>' at '<namespace>'
    When I click on administration in menu
    When I go to school administration
    #Note: remove the following line if old admin page is hidden
    When I go to new school administration page
    When I click on general settings panel
    When I click the toggle switch to enable students access to learning store
    When I click on button Save admin settings
    # Teacher uses Learning store
    Given I am logged in as a '<teacher>' at '<namespace>'
    When I go to Learning Store overview
    When I write '<search_text>' in search container and wait for search result
    Then I see website Learning Store with search result
    When I click on first card of search result
    Then I see card details
    When I click on button To content
    # Student uses Learning store
    Given I am logged in as a '<student>' at '<namespace>'
    When I go to Learning Store overview
    When I write '<search_text>' in search container and wait for search result
    Then I see website Learning Store with search result
    When I click on first card of search result
    Then I see card details
    When I click on button To content
    # Admin deactivates students access to Learning store again (tests change from access to no-access)
    Given I am logged in as a '<admin>' at '<namespace>'
    When I click on administration in menu
    When I go to school administration
    #Note: remove the following line if old admin page is hidden
    When I go to new school administration page
    When I click on general settings panel
    When I click the toggle switch to disable students access to learning store
    When I click on button Save admin settings


    Examples:
      | admin      | teacher      | student      | namespace | search_text |
      | admin1_brb | teacher1_brb | student1_brb | brb       | dino        |
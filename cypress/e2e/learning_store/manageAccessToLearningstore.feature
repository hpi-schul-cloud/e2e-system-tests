# Note: School api migration is blocked due to admin user can not access new school setting page (BC-7390).
@api_migrated
@release
Feature: Learning store - Activating and deactivating access for students

        As an admin I want to activate and deactivate students access to learning store

        @stable_test
        Scenario: Admin activates and deactivates the learnstore and student can access it, including pre-conditions

                # pre-condition: admin, student log in to create their account in a same school
                Given I am logged in as a '<student>' at '<namespace>'
                Given I am logged in as a '<admin>' at '<namespace>'

                # Admin activates students access to Learning store
                When I click on administration in menu
                When I go to school administration
                #Note: remove the following line if old admin page is hidden
                When I go to new school administration page
                When I click on general settings panel
                When I click the toggle switch to enable students access to learning store
                When I click on button Save admin settings
                # Student sees link to Learning store in menu
                Given I am logged in as a '<student>' at '<namespace>'
                Then I see Learning Store in side bar
                When I go to Learning Store overview
                # Admin deactivates students access to Learning store - pre-condition to set the needed configuration
                Given I am logged in as a '<admin>' at '<namespace>'
                When I click on administration in menu
                When I go to school administration
                #Note: remove the following line if old admin page is hidden
                When I go to new school administration page
                When I click on general settings panel
                When I click the toggle switch to disable students access to learning store
                When I click on button Save admin settings
                Then I see toggle switch to enable students access to learning store is unchecked
                # Student doesn't see link to Learning store in menu
                Given I am logged in as a '<student>' at '<namespace>'
                Then I do not see Learning Store in side bar


                Examples:
                        | admin      | student      | namespace |
                        | admin1_brb | student1_brb | brb       |
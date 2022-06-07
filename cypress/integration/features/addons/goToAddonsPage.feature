Feature: To check navigation in sidebar

    As a user I want to check navigation in sidebar so that I can make sure all features are there

Scenario: Check navigation in sidebar as admin
        Given I am logged in as a 'admin' at 'brb'
        When I go to AddOns overview
        #Then I would need a final confirmation

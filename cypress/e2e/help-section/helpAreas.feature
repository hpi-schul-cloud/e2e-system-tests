@regression_test
@stable_test
@schedule_run
@group-E
@pr
@pre_check_test
@prio_0_staging
Feature: Help Section - To use the help areas in dBildungscloud

    As a user, I want to use the help areas in the sidebar so that I can find help when needed

    Scenario Outline: User can use the help area in the sidebar, search article and submit an issue and a request via contact form

        # pre-condition: teacher logs in to create its account in a same school
        Given I am logged in as a '<teacher>' at '<namespace>'

        # user sees the contents of help section
        When I click on Help Section in sidebar
        Then I see Advanced trainings with correct link '<link_trainings>' in sidebar

        # use the article search inside the help articles area
        When I click on Help articles in sidebar
        Then I see the help articles page
        When I enter '<search_term>' in search bar for help articles
        Then I see an help article containing '<search_result>'

        # submit an issue via contact form inside help area
        When I click on Contact in sidebar
        Then I see the help contact page
        When I fill out the contact form with option '<contact_option>', subject '<contact_subject>' and sender email '<contact_email>'
        When I click on button Submit to send form
        Then I see message '<feedback_message>'

        # submit a request via contact form inside help area
        When I select contact type 'wish'
        Then I see contact form to send 'wish'
        When I select request option 'Authentifizierung'
        When I enter request title '<contact_subject>'
        When I enter request role 'Lehrer', desire 'Eine Übersicht über die Aufgaben haben', benefit 'einen besseren Überblick zu haben' and request device 'iPhone 123'
        When I enter request email address '<contact_email>'
        When I click on button Submit to send request form
        Then I see message '<feedback_message>'

        @school_api_test
        @staging_test
        Examples:
            | teacher      | namespace | search_term | search_result    | contact_option | contact_subject                     | contact_email    | link_trainings                   | feedback_message                |
            | teacher1_dbc | dbc       | QR          | QR-Code Funktion | Aufgaben       | Dies ist ein Test! Bitte ignorieren | test@example.com | https://lernen.dbildungscloud.de | Feedback erfolgreich versendet! |

@regression_test
@stable_test
@schedule_run
Feature: Help Section - To use the help areas in dBildungscloud

    As a user I want to use the help areas in the header and sidebar so that I can find help when needed

    Scenario Outline: User can use the help area in the (header, sidebar), search article and submit an issue via contact form
        Given I am logged in as a '<user>' at '<namespace>'
        When I click on Help Section in sidebar
        Then I see Advanced trainings with correct link '<link_trainings>' in sidebar
        When I click on Help articles in sidebar
        Then I see the help articles page
        When I click on Contact in sidebar
        Then I see the help contact page

        # use the article search inside the help articles area
        When I click on Help articles in sidebar
        When I enter '<search_term>' in search bar for help articles
        Then I see an help article containing '<search_result>'

        # submit an issue via contact form inside help area
        When I click on Contact in sidebar
        Then I see the help contact page
        When I fill out the contact form with option '<contact_option>', subject '<contact_subject>' and sender email '<contact_email>'
        When I click on button Submit to send form
        Then I see message '<feedback_message>'

        @school_api_test
        @staging_test
        Examples:
            | user         | namespace | search_term | search_result        | contact_option | contact_subject                     | contact_email    | link_trainings                | feedback_message                |
            | teacher1_brb | brb       | archivieren | Aufgaben archivieren | Aufgaben       | Dies ist ein Test! Bitte ignorieren | test@example.com | https://ecampus.lisum.de/home | Feedback erfolgreich versendet! |
# | student1_dbc | dbc       | archivieren | Aufgaben archivieren | Aufgaben       | Dies ist ein Test! Bitte ignorieren | test@example.com | https://lernen.dbildungscloud.de                              | Feedback erfolgreich versendet! |
# | admin1_nbc   | nbc       | archivieren | Aufgaben archivieren | Aufgaben       | Dies ist ein Test! Bitte ignorieren | test@example.com | https://openelec.moodle-nds.de/course/index.php?categoryid=53 | Feedback erfolgreich versendet! |
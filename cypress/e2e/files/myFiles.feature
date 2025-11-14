@regression_test
@stable_test
@schedule_run
@group-E
@pr
@pre_check_test
@prio_0_staging
Feature: Files - To use LibreOffice for text, calc and presentation document

    As a user, I want to create, edit, and delete LibreOffice documents in my personal files

    Scenario Outline: Create a LibreOffice text document

        # pre-condition: creating user (student) account and create LibreOffice text document
        Given I am logged in as a '<user>' at '<namespace>'
        When I click on Files in menu
        Then I go to personal files overview
        When I click create a new file button
        Then I select filetype document
        When I type in '<document_title>'
        Then I click create file button
        Then LibreOffice opens
        Then I go to personal files overview
        Then I can see file with name '<document_title>'

        # edit title of LibreOffice text document
        When I click on Files in menu
        Then I can see file with name '<document_title_full>'
        Then I click rename file button of file '<document_title_full>'
        Then I can see edit file popup box of file '<document_title_full>'
        Then I enter new file name '<document_title_edited>'
        Then I click on button Save name
        Then I can see file with name '<document_title_edited>'

        # post-condition: delete a LibreOffice text document
        When I click on Files in menu
        Then I can see file with name '<document_title_edited>'
        Then I click on button Delete file '<document_title_edited>'
        Then I click on button confirm delete file on the modal
        Then I can not see file with name '<document_title_edited>'

        @school_api_test
        @staging_test
        Examples:
            | user         | namespace | document_title              | document_title_full              | document_title_edited            |
            | student1_brb | brb       | CypressAut LibraOffice Open | CypressAut LibraOffice Open.docx | CypressAut LibraOffice Edit.docx |

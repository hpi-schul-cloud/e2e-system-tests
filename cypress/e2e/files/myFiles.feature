@regression_test
@stable_test
@schedule_run
@group-E
@pr
Feature: Files Overview - To use LibreOffice for text, calc and presentation document

    As a user I want to create and edit a LibreOffice text document so that I write into it

    Scenario: Create a LibreOffice text document
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

        # Edit name of LibreOffice text document
        When I click on Files in menu
        Then I can see file with name '<document_title_full>'
        Then I click rename file button of file '<document_title_full>'
        Then I can see edit file popup box of file '<document_title_full>'
        Then I enter new file name '<document_title_edited>'
        Then I click save name button
        Then I can see file with name '<document_title_edited>'

        # Delete a LibreOffice text document
        When I click on Files in menu
        Then I can see file with name '<document_title_edited>'
        Then I click delete file button of file '<document_title_edited>'
        Then I click confirm delete file button on modal
        Then I can not see file with name '<document_title_edited>'

        @school_api_test
        @staging_test
        Examples:
            | user         | namespace | document_title       | document_title_full       | document_title_edited     |
            | student1_dbc | dbc       | Cy: LibraOffice Open | Cy: LibraOffice Open.docx | Cy: LibraOffice Edit.docx |

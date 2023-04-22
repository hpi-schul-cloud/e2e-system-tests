#@files @stable_test
Feature: Files Overview - To use LibreOffice for text, calc and presentation document

        As a user I want to create and edit a LibreOffice text document so that I write into it

Scenario: Create a LibreOffice text document
        Given I am logged in as a 'student' at 'brb'
        When I go to files overview
        Then I go to personal files overview
        When I click create a new file button
        Then I select filetype document
        When I type in 'Cy: LibraOffice Open'
        Then I click create file button
        Then LibreOffice opens
        Then I go to personal files overview
        Then I can see file with name 'Cy: LibraOffice Open'


Scenario: Edit name of LibreOffice text document
        Given I am logged in as a 'student' at 'brb'
        When I go to files overview
        Then I go to personal files overview
        Then I can see file with name 'Cy: LibraOffice Open.docx'
        Then I click rename file button of file 'Cy: LibraOffice Open.docx'
        Then I can see edit file popup box of file 'Cy: LibraOffice Open.docx'
        Then I enter new file name 'Cy: LibraOffice Edit.docx'
        Then I click save name button
        Then I can see file with name 'Cy: LibraOffice Edit.docx'

Scenario: Delete a LibreOffice text document
        Given I am logged in as a 'student' at 'brb'
        When I go to files overview
        Then I go to personal files overview
        Then I can see file with name 'Cy: LibraOffice Edit.docx'
        Then I click delete file button of file 'Cy: LibraOffice Edit.docx'
        Then I click confirm delete file button on modal
        Then I can not see file with name 'Cy: LibraOffice Edit.docx'

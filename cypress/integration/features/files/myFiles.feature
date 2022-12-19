@files @stable_test
Feature: Files Overview - To use LibreOffice for text, calc and presentation document

        As a user I want to create and edit a LibreOffice text document so that I write into it

Scenario: Create a LibreOffice text document
        Given I am logged in as a 'student' at 'brb'
        When I go to files overview
        And I go to personal files overview
        When I click create a new file button
        And I select filetype document
        When I type in 'Cy: LibraOffice Open'
        And I click create file button
        Then LibreOffice opens
        And I go to personal files overview
        Then I can see file with name 'Cy: LibraOffice Open'
        And I click delete file button of file 'Cy: LibraOffice Open.docx'
        And I click confirm delete file button of file 'Cy: LibraOffice Open.docx'
        Then I can not see file with name 'Cy: LibraOffice Open.docx'

Scenario: Edit name of LibreOffice text document
        Given I am logged in as a 'student' at 'brb'
        When I go to files overview
        And I go to personal files overview
        When I click create a new file button
        And I select filetype document
        When I type in 'Cy: LibraOffice Open'
        And I click create file button
        Then LibreOffice opens
        And I go to personal files overview
        Then I can see file with name 'Cy: LibraOffice Open'
        When I click file with 'Cy: LibraOffice Open'
        Then LibreOffice opens
        And I go to personal files overview
        And I click rename file button of file 'Cy: LibraOffice Open'
        And I enter new file name 'Cy: LibraOffice Edit.docx'
        And I click save name button
        Then I can see file with name 'Cy: LibraOffice Edit.docx'
        And I click delete file button of file 'Cy: LibraOffice Edit.docx'
        And I click confirm delete file button of file 'Cy: LibraOffice Edit.docx'
        Then I can not see file with name 'Cy: LibraOffice Edit.docx'

Scenario: Delete a LibreOffice text document
        Given I am logged in as a 'student' at 'brb'
        When I go to files overview
        And I go to personal files overview
        When I click create a new file button
        And I select filetype document
        When I type in 'Cy: LibraOffice Delete'
        And I click create file button
        Then LibreOffice opens
        And I go to personal files overview
        Then I can see file with name 'Cy: LibraOffice Delete.docx'
        And I click delete file button of file 'Cy: LibraOffice Delete.docx'
        And I click confirm delete file button of file 'Cy: LibraOffice Delete.docx'
        Then I can not see file with name 'Cy: LibraOffice Delete.docx'

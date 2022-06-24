Feature: To use LibreOffice for text, calc and presentation document

        As a user I want to create and edit a LibreOffice text document so that I write into it

Scenario: Create a LibreOffice text document
        Given I am logged in as a 'student' at 'brb'
        When I go to files overview
        And I go to personal files overview
        When I click create a new file button
        And I select filetype document
        When I type in 'Neues Text-Dokument'
        And I click create file button
        Then LibreOffice opens
        And I go to personal files overview
        Then I can see file with name 'Neues Text-Dokument'

Scenario: Edit name of LibreOffice text document
        Given I am logged in as a 'student' at 'brb'
        When I go to files overview
        And I go to personal files overview
        When I click file with 'Neues Text-Dokument'
        Then LibreOffice opens
        And I go to personal files overview
        And I click rename file button
        And I enter new file name 'Nicht mehr ganz so neues Text-Dokument.docx'
        And I click save name button
        Then I can see file with name 'Nicht mehr ganz so neues Text-Dokument.docx'

Scenario: Delete a LibreOffice text document
        Given I am logged in as a 'student' at 'brb'
        When I go to files overview
        And I go to personal files overview
        And I click delete file button
        And I click confirm delete file button
        Then I can not see file with name 'Nicht mehr ganz so neues Text-Dokument.docx'


# Can be extended to different users roles and document types
# typing inside document currently doesn't work and would check LibreOffice not dBildungscloud
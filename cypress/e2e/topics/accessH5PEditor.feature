@release 
Feature:  To access the H5P editor as a teacher. 

As a teacher, I want to access the H5P Editor for a topic in my course to create learning content

@stable_test
Scenario: Access H5P Editor for existing topic
	Given I am logged in as a 'teacher1_dbc' at 'default'
	When I go to the courses page 
	And I click on the existing course 'Mathe'
	And I click on the existing topic 'Testthema'
	And I enter click on the edit button
	And I click on the H5P button
    Then a new window with a H5P editor should open
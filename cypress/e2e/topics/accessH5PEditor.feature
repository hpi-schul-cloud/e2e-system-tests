@release
Feature:  To access the H5P editor as a teacher.

As a teacher, I want to be able to access the H5P Editor for a topic in my course to create learning content

@unstable_test
Scenario: Access H5P Editor
	Given I am logged in as a 'teacher1_dbc' at 'default'
	When I go to rooms overview
	When I go to room 'Course with subject and tasks'
	When I click on topic 'Statistic' on course page
	When I click on the button Edit on topic page
	When I click on the Add Content H5P button
	Then I can click on the Create H5P button



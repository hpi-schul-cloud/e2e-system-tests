@api_migrated
@release
@stable_test
Feature: Account - Change language of the user from user setting

	As a user, I want to language change from user menu for all users i.e. (Admin, Teacher, Student)

	Scenario Outline: Teacher can change language to '<language>'
		Given I am logged in as a '<user>' at '<namespace>'
		Then I can see initials of my name
		When I click on initials of my name
		Then I click on language drop down menu
		When I can change language to '<language>'
		Then I can see title in dashboard is changed to '<language>'

		@non_staging_test
		@staging_test
		Examples:
			| user         | namespace | language  |
			| teacher1_brb | brb       | english   |
			| teacher1_brb | brb       | spanish   |
			| teacher1_brb | brb       | ukrainian |
			| teacher1_brb | brb       | german    |
			| student1_brb | brb       | english   |
			| student1_brb | brb       | spanish   |
			| student1_brb | brb       | ukrainian |
			| student1_brb | brb       | german    |
			| admin1_brb   | brb       | english   |
			| admin1_brb   | brb       | spanish   |
			| admin1_brb   | brb       | ukrainian |
			| admin1_brb   | brb       | german    |
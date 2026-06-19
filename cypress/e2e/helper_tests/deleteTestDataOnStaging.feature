@clean_up_staging_test_data
Feature: Helper Test - Deletion of test data that are left from previous failed test runs on staging

    Run this feature file before running cypress tests on staging

    # till yet done

    # - course creation/deletion
    # - room creation/deletion
    # - news + team news creation/deletion
    # - ctl tools add/deletion

    Scenario Outline: Admin cleanup - Add course, rooms, tasks, classes, ctl tools and news

        Given I am logged in as a '<user>' at '<namespace>'

        # this one with teacher
        # Given a room named 'CypressAut 1' exists
        # When I duplicate the room for 60 times

        # this one with teacher
        # Given a course with name 'CypressAut 1' exists with 'Herbert Kraft' as student
        # When I duplicate the course 'CypressAut 1' for 100 times

        # this one with teacher/admin
        # When I create 10 school news with title 'CypressAut News' and description 'CypressAut News'
        # When I create 10 team news with title 'CypressAut News' and description 'CypressAut News' in team 'Musik'

        # this one with admin and nbc only
        # Given the school has external tool 'CY Test Tool Preferred, CY Test Tool Preferred With Param, CY Test Tool 1, CY Test Tool Required Parameters, CY Test Tool Optional Parameters, CY Test Tool OpenStreetMap, CY Test Tool Preferred'
        # Given the school has external tool 'CY '

        # this one with admin/teacher
        # Given a class name 'CypressAut' is created 10 times

        @staging_test
        Examples:
            | namespace | user       |
            | brb       | admin1_brb |
            | dbc       | admin1_dbc |
            | nbc       | admin1_nbc |

    # # | nbc       | admin1_nbc |
    # | dbc       | teacher1_dbc |

    Scenario Outline: Admin cleanup - Delete rooms in '<namespace>' ✅

        Given I am logged in as a '<user>' at '<namespace>'

        When I click on administration in menu
        When I navigate to rooms administration page via the submenu
        Then I delete all rooms whose names start with 'CypressAut'

        @staging_test
        Examples:
            | namespace | user       |
            | brb       | admin1_brb |
            | dbc       | admin1_dbc |
            | nbc       | admin1_nbc |

    Scenario Outline: Admin cleanup - Delete courses in '<namespace>' ✅

        Given I am logged in as a '<user>' at '<namespace>'

        When I click on administration in menu
        When I navigate to course administration page via the submenu
        Then I delete all courses whose names start with 'CypressAut'

        @staging_test
        Examples:
            | namespace | user       |
            | brb       | admin1_brb |
            | dbc       | admin1_dbc |
            | nbc       | admin1_nbc |

    Scenario Outline: Teacher cleanup - Delete news in '<namespace>' ✅

        Given I am logged in as a '<user>' at '<namespace>'

        When I go to news overview
        Then I delete all news whose titles start with 'CypressAut'

        @staging_test
        Examples:
            | namespace | user       |
            | brb       | admin1_brb |
            | dbc       | admin1_dbc |
            | nbc       | admin1_nbc |

    Scenario Outline: Teacher cleanup - Delete CTL Tools in '<namespace>' ✅

        Given I am logged in as a '<user>' at '<namespace>'

        Given all external tools at the school are deleted

        @staging_test
        Examples:
            | namespace | user       |
            | brb       | admin1_brb |
            | dbc       | admin1_dbc |
            | nbc       | admin1_nbc |

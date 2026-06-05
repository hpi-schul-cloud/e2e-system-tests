@clean_up_staging_test_data
Feature: Helper Test - Deletion of test data that are left from previous failed test runs on staging

    Run this feature file before running cypress tests on staging

    # Scenario Outline: Admin cleanup - Add course, rooms and news

    #     Given I am logged in as a '<user>' at '<namespace>'

    # Given a room named 'CypressAut 1' exists
    # When I duplicate the room for 60 times


    # @staging_test
    # Examples:
    #     | namespace | user         |
    #     | brb       | teacher1_brb |
    # | nbc       | admin1_nbc    |
    # | dbc       | admin1_dbc |
    # | brb       | adminExt1_brb |
    # | dbc       | adminExt1_dbc |
    # | nbc       | adminExt1_nbc |

    # Scenario Outline: Admin cleanup - Delete rooms

    #     Given I am logged in as a '<user>' at '<namespace>'

    #     When I click on administration in menu
    #     When I navigate to rooms administration page via the submenu
    #     Then I delete all rooms whose names start with 'CypressAut'

    #     @staging_test
    #     Examples:
    #         | namespace | user          |
    #         | brb       | admin1_brb    |
    #         | nbc       | admin1_nbc    |
    #         | dbc       | admin1_dbc    |
    #         | brb       | adminExt1_brb |
    #         | dbc       | adminExt1_dbc |
    #         | nbc       | adminExt1_nbc |

    Scenario Outline: Admin cleanup - Delete courses

        Given I am logged in as a '<user>' at '<namespace>'

        # When I click on administration in menu
        When I go to courses overview
        Then I delete all courses whose names start with 'CypressAut'

        @staging_test
        Examples:
            | namespace | user            |
            | brb       | teacher1_brb    |
            | brb       | teacher2_brb    |
            | brb       | teacherExt1_brb |
            | brb       | teacherExt2_brb |
            | dbc       | teacher1_dbc    |
            | dbc       | teacher2_dbc    |
            | dbc       | teacherExt1_dbc |
            | dbc       | teacherExt2_dbc |
            | nbc       | teacher1_nbc    |
            | nbc       | teacher2_nbc    |
            | nbc       | teacherExt1_nbc |
            | nbc       | teacherExt2_nbc |


# Scenario Outline: Teacher cleanup - Delete team-specific news and other artifacts

#     Given I am logged in as a '<user>' at '<namespace>'

#     When I go to news overview
#     Then I delete all news whose titles start with 'CypressAut'

#     @staging_test
#     Examples:
#         | namespace | user            |
#         | brb       | teacher1_brb    |
#         | brb       | teacher2_brb    |
#         | brb       | teacherExt1_brb |
#         | brb       | teacherExt2_brb |
#         | dbc       | teacher1_dbc    |
#         | dbc       | teacher2_dbc    |
#         | dbc       | teacherExt1_dbc |
#         | dbc       | teacherExt2_dbc |
#         | nbc       | teacher1_nbc    |
#         | nbc       | teacher2_nbc    |
#         | nbc       | teacherExt1_nbc |
#         | nbc       | teacherExt2_nbc |


@release
Feature: Course - To search for a course via search input box on the course overview page

  As a user (teacher & student) I want to search for dedicated course so that I can quickly find it.

  @stable_test
  Scenario: teacher is able to search for a course and find it at '<namespace>'
    Given I am logged in as a '<user_1>' at '<namespace>'
    When I go to rooms overview
    When I enter the course name 'Biologie' into the search field
    Then I see the course 'Biologie' on the room overview page

    @brb
    Examples:
      | user_1       | namespace |
      | teacher1_brb | brb       |

    @dbc
    Examples:
      | user_1       | namespace |
      | teacher1_dbc | default   |

    @nbc
    Examples:
      | user_1       | namespace |
      | teacher1_nbc | nbc       |

  @stable_test
  Scenario: teacher is able to search for a course and DO NOT find it at '<namespace>'
    Given I am logged in as a '<user_1>' at '<namespace>'
    When I go to rooms overview
    When I enter the course name 'Cy::NotExistingMathematikCourse' into the search field
    Then I do not see the course 'Cy::NotExistingMathematikCourse' on the room overview page

    @brb
    Examples:
      | user_1       | namespace |
      | teacher1_brb | brb       |

    @dbc
    Examples:
      | user_1       | namespace |
      | teacher1_dbc | default   |

    @nbc
    Examples:
      | user_1       | namespace |
      | teacher1_nbc | nbc       |

  @stable_test
  Scenario: student is able to search for a course and find it at '<namespace>'
    Given I am logged in as a '<user_1>' at '<namespace>'
    When I go to rooms overview
    When I enter the course name 'Course with subject' into the search field
    Then I see the course 'Course with subject and tasks' on the room overview page

    @brb
    Examples:
      | user_1       | namespace |
      | student1_brb | brb       |

    @dbc
    Examples:
      | user_1       | namespace |
      | student1_dbc | default   |

    @nbc
    Examples:
      | user_1       | namespace |
      | student1_nbc | nbc       |

  @stable_test
  Scenario: student is able to search for a course and DO NOT find it at '<namespace>'
    Given I am logged in as a '<user_1>' at '<namespace>'
    When I go to rooms overview
    When I enter the course name 'Cy::NotExistingMathematikCourse' into the search field
    Then I do not see the course 'Cy::NotExistingMathematikCourse' on the room overview page

    @brb
    Examples:
      | user_1       | namespace |
      | student1_brb | brb       |

    @dbc
    Examples:
      | user_1       | namespace |
      | student1_dbc | default   |

    @nbc
    Examples:
      | user_1       | namespace |
      | student1_nbc | nbc       |
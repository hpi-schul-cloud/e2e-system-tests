@regression_test
@mikroorm_v7
Feature: Admin - Student consents are persisted and returned unchanged

    As an admin, I want the consents of a student to be stored completely, including denied consents and empty parent consents, so that the consent status is shown correctly.

    Scenario Outline: Student consents survive a reload and an unrelated user update

        # pre-condition: admin and student log in to create their accounts in a school
        Given I am logged in as a '<admin>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'
        When I remember my own user id as student

        # admin stores denied consents as false, they must not be dropped
        Given I am logged in as a '<admin>' at '<namespace>'
        When I set the consent 'partially given' of the student in the student edit form
        Then I see the consent 'partially given' of the student with consent status 'missing' via API

        # an empty list of parent consents stays empty after an update of the user
        When I set the consent 'without parent consents' of the student in the student edit form
        Then I see the consent 'without parent consents' of the student with consent status '<status_without_parents>' via API
        When I remember the student data via API
        Given I am logged in as a '<student>' at '<namespace>'
        When I change my own language to 'en' via API
        When I change my own language to 'de' via API
        Given I am logged in as a '<admin>' at '<namespace>'
        Then I see the remembered student data unchanged via API

        # given consents of user and parents survive an update of the user
        When I set the consent 'fully given' of the student in the student edit form
        Then I see the consent 'fully given' of the student with consent status 'ok' via API
        When I remember the student data via API
        Given I am logged in as a '<student>' at '<namespace>'
        When I change my own language to 'en' via API
        When I change my own language to 'de' via API
        Given I am logged in as a '<admin>' at '<namespace>'
        Then I see the remembered student data unchanged via API

        @school_api_test
        Examples:
            | namespace | admin      | student      | status_without_parents |
            | brb       | admin1_brb | student1_brb | ok                     |

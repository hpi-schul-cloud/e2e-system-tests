
@regression_test
@stable_test
@schedule_run
@group-B
@pr
@prio_0_staging
Feature: Task - To submit a task as students group and grade it by teacher.

    As a student, I want to submit a task as group of students sp that we can work together on the task and the teacher can grade us all.

    Scenario Outline: Teacher creates, edits and deletes a task from the task overview

        # pre-condition: teacher logs in to create their account in the school
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<student1>' at '<namespace>'
        Given I am logged in as a '<student2>' at '<namespace>'
        Given I am logged in as a '<student3>' at '<namespace>'

        Given a course with name '<course_name>' exists with '<fullname_teacher>' as teacher and '<fullname_student1>' as student
        Given published task with name '<task_name>' in the course with name '<course_name>'



        @school_api_test
        Examples:
            | namespace | teacher      | fullname_teacher  | student1     | fullname_student1 | student2     | fullname_student2 | student3     | fullname_student3 | course_name       | task_name             |
            | brb       | teacher1_brb | cypress teacher_1 | student1_brb | cypress student_1 | student2_brb | cypress student_2 | student3_brb | cypress student_3 | CypressAut Course | CypressAut Group Task |

        @staging_test
        Examples:
            | namespace | teacher      | fullname_teacher | student1     | fullname_student1 | student2     | fullname_student2 | student3     | fullname_student3 | course_name       | task_name             |
            | brb       | teacher1_brb | Karl Herzog      | student1_brb | cypress student_1 | student2_brb | cypress student_2 | student3_brb | cypress student_3 | CypressAut Course | CypressAut Group Task |

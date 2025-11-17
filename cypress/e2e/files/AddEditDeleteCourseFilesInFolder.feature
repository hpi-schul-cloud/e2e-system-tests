@regression_test
@stable_test
@prio_0_staging
@group-C
Feature: Course Files - Add, delete files in a folder and rename the file folder in course files

    As a teacher, I want to add and delete files in course folder and rename the folder in course files so that I can use the file folder like the known folders in Windows

    Scenario Outline: Add, delete files in a folder and rename the file folder in course files

        # pre-condition: creating users accounts (admin, teacher and student)
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin creates a course and assign teacher and student to the course
        Given a course with name '<course_name>' exists with '<fullname_teacher>' as teacher and '<fullname_student>' as student

        # teacher creates new folder in Courses files page
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I click on Files in menu
        Then I go to course files overview
        Then I see the folder title '<course_name>' in course files
        When I click on the folder '<course_name>' in the course files
        When I click on the button Create a new folder
        Then I see the dialog for new folder creation in course files
        When I enter folder name '<folder_name>' in course files
        When I click on the button New folder creation in course files
        Then I see the new folder '<folder_name>' in the folder list

        # teacher uploads image file in the created folder in course files
        When I click on the folder '<folder_name>' in the course files
        When I upload a file '<image_file_name>' in course files
        Then I see the uploaded file '<image_file_name>' in the course folder list
        When I click on the uploaded file '<image_file_name>' in course files
        Then I can see the preview of file '<image_file_name>'
        When I close the preview by clicking on the file preview
        Then I see the uploaded file '<image_file_name>' in the course folder list

        # teacher uploads video file in the created folder in course files
        When I upload a file '<video_file_name>' in course files
        Then I see the uploaded file '<video_file_name>' in the course folder list
        #When I click on the uploaded file '<video_file_name>' in course files - commenting out as it shows blank page only in cypress
        #Then I can see the preview of file '<video_file_name>'
        #When I go back to the previous page

        # teacher uploads audio file in the created folder in course files
        When I upload a file '<audio_file_name>' in course files
        Then I see the uploaded file '<audio_file_name>' in the course folder list
        Then I see the uploaded file '<audio_file_name>' in the course folder list
        When I click on the uploaded file '<audio_file_name>' in course files
        Then I can see the preview of file '<audio_file_name>'
        When I go back to the previous page
        Then I go to course files overview
        Then I see the folder title '<course_name>' in course files
        When I click on the folder '<course_name>' in the course files
        When I click on the folder '<folder_name>' in the course files
        Then I see the uploaded file '<audio_file_name>' in the course folder list

        # student can see the uploaded files in the created folder in course files
        Given I am logged in as a '<student>' at '<namespace>'
        When I click on Files in menu
        Then I go to course files overview
        Then I see the folder title '<course_name>' in course files
        When I click on the folder '<course_name>' in the course files
        Then I see the new folder '<folder_name>' in the folder list
        When I click on the folder '<folder_name>' in the course files
        Then I see the uploaded file '<image_file_name>' in the course folder list
        Then I see the uploaded file '<video_file_name>' in the course folder list
        Then I see the uploaded file '<audio_file_name>' in the course folder list

        # teacher deletes the uploaded files present in the created folder in course files
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I click on Files in menu
        Then I go to course files overview
        When I click on the folder '<course_name>' in the course files
        When I click on the folder '<folder_name>' in the course files
        Then I can see file with name '<audio_file_name>'
        Then I click on button Delete file '<audio_file_name>'
        Then I click on button Confirm deletion file on the modal
        Then I can not see file with name '<audio_file_name>'
        Then I can see file with name '<video_file_name>'
        Then I click on button Delete file '<video_file_name>'
        Then I click on button Confirm deletion file on the modal
        Then I can not see file with name '<video_file_name>'
        Then I can see file with name '<image_file_name>'
        Then I click on button Delete file '<image_file_name>'
        Then I click on button Confirm deletion file on the modal
        Then I can not see file with name '<image_file_name>'

        # teacher edits the foldername in course files
        Then I go to course files overview
        When I click on the folder '<course_name>' in the course files
        When I click on button Edit on course folder '<folder_name>'
        When I edit folder name '<folder_name_renamed>' in course files
        Then I click on button Save name
        Then I see the new folder '<folder_name_renamed>' in the folder list

        # post-condition: teacher deletes the course folder and the course
        When I click on delete the course folder '<folder_name_renamed>' in course files
        When I click on the button Delete in coursefiles
        Given course with name '<course_name>' is deleted

        @school_api_test
        Examples:
            | teacher      | student      | fullname_teacher  | fullname_student  | namespace | admin      | course_name             | folder_name       | image_file_name | video_file_name          | audio_file_name            | folder_name_renamed       |
            | teacher1_dbc | student1_dbc | cypress teacher_1 | cypress student_1 | dbc       | admin1_dbc | CypressAut Course Files | CypressAut Folder | example_jpg.jpg | sample_video_1mb_mp4.mp4 | sample_audio_0.4mb_mp3.mp3 | CypressAut Folder Renamed |

        @staging_test
        Examples:
            | teacher      | student      | fullname_teacher | fullname_student | namespace | admin      | course_name             | folder_name       | image_file_name | video_file_name          | audio_file_name            | folder_name_renamed       |
            | teacher1_nbc | student1_nbc | Karl Herzog      | Herbert Kraft    | nbc       | admin1_nbc | CypressAut Course Files | CypressAut Folder | example_jpg.jpg | sample_video_1mb_mp4.mp4 | sample_audio_0.4mb_mp3.mp3 | CypressAut Folder Renamed |

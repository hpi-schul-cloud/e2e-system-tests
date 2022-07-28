import Lessons from '../../../pages/course/lesson/pageLessons'

const lessons = new Lessons()


//Scenario: teacher creates a new topic or lesson with content

    //Given I am logged in as a 'teacher' at 'brb'
    //step defined -->\step_definition\authentication\loginStep.spec.js

    //When I go to rooms overview
    //step defined -->\step_definition\course\commonCourseSteps.spec.js

    //And I go to room {string}
    //step defined -->\step_definition\course\commonCourseSteps.spec.js

    //And I click on FAB to create new content
    //step defined -->\step_definition\course\commonCourseSteps.spec.js

    And ('I click on new topic FAB',()=>{
      lessons.clickOnNewTopicFAB()
    })

    Then ('I see new topic creation page',()=>{
      lessons.seeNewTopicCreationPage()

    })

    And ('I enter the topic title {string}',()=>{

    })

    Then ('I click on add text button',()=>{

    })

    And ('I enter text content title {string}',()=>{

    })

    And ('I enter description into CK Editor {string}',()=>{

    })

    Then ('I click on add GeoGebra worksheet button',()=>{

    })

    And ('I enter the title {string}',()=>{

    })

    And ('I enter test GeoGebra material ID {string}',()=>{

    })

    Then ('I click on add learning material button',()=>{

    })

    And ('I enter the title {string}',()=>{

    })

    And ('I see second learning material button in the content area',()=>{

    })

    Then ('I click on add Etherpad button',()=>{

    })

    And ('I enter the title {string}',()=>{

    })

    And ('I enter description for the ether pad {string}',()=>{

    })

    Then ('I click on add task button to embed the task from another course',()=>{

    })

    And ('I enter the title {string}',()=>{

    })

    And ('I enter the URL of the task from the another course {string}',()=>{

    })

    Then ('I click on create button',()=>{

    })

    Then ('I can see room page {string}',()=>{

    })

    Then ('I see the topic card named {string}',()=>{

    })

    Then ('I see publish button on the topic card {string}',()=>{

    })

  //Scenario: teacher edits a new topic or lesson

    //Given I am logged in as a 'teacher' at 'brb'
    //step defined -->\step_definition\authentication\loginStep.spec.js

    //When I go to rooms overview
    //step defined -->\step_definition\course\commonCourseSteps.spec.js

    //And I go to room {string}
    //step defined -->\step_definition\course\commonCourseSteps.spec.js

    Then ('I see the topic card named {string}',()=>{

    })

    When ('I click on three dot menu of content {string}',()=>{

    })

    And ('I click on Edit in three dot menu',()=>{

    })

    Then ('I see the edit page for the topic {string}',()=>{

    })

    And ('I edit the title of the topic to {string}',()=>{

    })

    Then ('I click on save button',()=>{

    })

    Then ('I can see room page {string}',()=>{

    })

    Then ('I see the topic card named {string}',()=>{

    })

    Then ('I see publish button on the topic card {string}',()=>{

    })
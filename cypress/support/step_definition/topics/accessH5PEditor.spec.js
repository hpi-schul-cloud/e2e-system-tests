const { When, Then } = require("@badeball/cypress-cucumber-preprocessor")
import Topics from '../../pages/topics/pageTopics'
import Courses from '../../pages/course/pageCourses'


const topics = new Topics()
const courses = new Courses()

When('I click on the Add Content H5P button', () =>{
    topics.clickOnAddContentH5PToTopic();
})

When('I click on the button Edit on topic page', () => {
    topics.clickOnButtonEditInTopicPage()
  })

 Then('I can click on the Create H5P button', ()=>{
    topics.seeCreateH5PInTopic();
 })



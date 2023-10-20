const { When, Then } = require("@badeball/cypress-cucumber-preprocessor")
import Topics from '../../pages/topics/pageTopics'

const topics = new Topics()

When('I click on the button Edit on topic page', () => {
    topics.clickOnButtonEditInTopicPage()
})

When('I click on the Add Content H5P button', () =>{
    topics.clickOnAddContentH5PToTopic();
})

Then('I can click on the Create H5P button', ()=>{
    topics.seeCreateH5PInTopic();
})



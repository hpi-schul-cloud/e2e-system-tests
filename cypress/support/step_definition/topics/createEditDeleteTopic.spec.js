import Topics from '../../pages/topics/pageTopics'

const topics = new Topics()

// EXTERNAL COMMON STEP DEFINITIONS
// =========================
// External defined steps can be found here:
// -----------------------------------------
// -->\step_definition\authentication\loginStep.spec.js
// -->\step_definition\course\commonCourseSteps.spec.js

Then('I can see create topic page {string}', (topicTitle) => {
  topics.seeCreateTopicPage(topicTitle)
})

When ('I enter topic title {string}', (topicTitle) => {
  topics.enterTopicTitle(topicTitle)
})
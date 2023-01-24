import Topics from '../../pages/topics/pageTopics'

const topics = new Topics()

// EXTERNAL COMMON STEP DEFINITIONS
// =========================
// External defined steps can be found here:
// -----------------------------------------
// -->\step_definition\authentication\loginStep.spec.js
// -->\step_definition\course\commonCourseSteps.spec.js

Then('I can see edit topic page {string}', (topicTitle) => {
  topics.seeEditTopicPage(topicTitle)
})

When ('I enter topic title {string}', (topicTitle) => {
  topics.enterTopicTitle(topicTitle)
})

When('I click on button Add Text to topic', () => {
  topics.clickOnAddTextToTopic()
})

When('I click on button Add GeoGebra to topic', () => {
  topics.clickOnAddGeoGebraToTopic()
})

When('I click on button Add Learning Material to topic', () => {
  topics.clickOnAddLearningMaterialToTopic()
})

When('I click on button Add Etherpad to topic', () => {
  topics.clickOnAddEtherpadToTopic()
})

When('I click on button Add Task to topic', () => {
  topics.clickOnAddTaskToTopic()
})

Then('I can see form element Text', () => {
  topics.seeFormElementText()
})

When('I enter title {string} into element Text', (elementTextTitle) => {
  topics.enterTitleforElementText(elementTextTitle)
})

When('I enter description {string} into element Text', (elementTextDescription) => {
  topics.enterDescriptionforElementText(elementTextDescription)
})

When('I enter title {string} into element GeoGebra', (elementGeoGebraTitle) => {
  topics.enterTitleforElementGeoGebra(elementGeoGebraTitle)
})

When('I enter GeoGebra material ID {string}', (geoGebraMaterialID) => {
  topics.enterIDforElementGeoGebra(geoGebraMaterialID)
})

When('I enter title {string} into element Learning Material', (elementLearningMaterialTitle) => {
  topics.enterTitleforElementLearningMaterial(elementLearningMaterialTitle)
})

Then('I see second learning material button in the content area', () => {
  topics.seeAddMaterialBtnInContent()
})

When('I enter title {string} into element Etherpad', (elementEtherpadTitle) => {
  topics.enterTitleforElementEtherpad(elementEtherpadTitle)
})

When('I enter description for the ether pad {string}', (descriptionEtherpad) => {
  topics.enterDescriptionforElementEtherpad(descriptionEtherpad)
})

When('I click on create button to create topic', () => {
  topics.clickOnSubmitChangesInTopicBtn()
})

When('I click on save button to save changes', () => {
  topics.clickOnSubmitChangesInTopicBtn()
})


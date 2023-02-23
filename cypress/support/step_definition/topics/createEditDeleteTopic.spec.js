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

Then('I can see form element Text on position {string}', (elementPosition) => {
  topics.seeFormElementText(elementPosition)
})

When('I enter title {string} into element Text in element position {string}', (elementTextTitle, elementPosition) => {
  topics.enterTitleforElementText(elementTextTitle, elementPosition)
})

When('I enter description {string} into element Text in element position {string}', (elementTextDescription, elementPosition) => {
  topics.enterDescriptionforElementText(elementTextDescription, elementPosition)
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

When('I enter title {string} into element Etherpad in element position {string}', (elementEtherpadTitle, elementPosition) => {
  topics.enterTitleforElementEtherpad(elementEtherpadTitle, elementPosition)
})

When('I enter description for the ether pad {string} in element position {string}', (descriptionEtherpad, elementPosition) => {
  topics.enterDescriptionforElementEtherpad(descriptionEtherpad, elementPosition)
})

When('I enter title {string} into element Task', (elementTaskTitle) => {
  topics.enterTitleforElementTask(elementTaskTitle)
})

When('I enter URL of the task from the another course for task id {string}', (elementTaskLink) => {
  topics.enterLinkforElementTask(elementTaskLink)
})

When('I click on create button to create topic', () => {
  topics.clickOnSubmitChangesInTopicBtn()
})

When('I click on save button to save changes', () => {
  topics.clickOnSubmitChangesInTopicBtn()
})

Then('I see topic detail page {string} with content elements {string}, {string}, {string}, {string} and {string}', (topicTitle, contentTitle1, contentTitle2, contentTitle3, contentTitle4, contentTitle5) => {
  topics.seeTopicDetailPage(topicTitle, contentTitle1, contentTitle2, contentTitle3, contentTitle4, contentTitle5)
})

When('I click on last breadcrump element in topbar navigation', () => {
  topics.clickLastBreadcrumb()
})

When(`I click on icon Pen on topic page`, () => {
  topics.clickIconPen()
})

When(`I click on settings and remove option of element {string}`, (elementPosition) => {
  topics.removeElementFromTopic(elementPosition)
})

Then('I can not see content {string} on current page', (contentText) => {
  topics.contentIsNotVisibleOnCurrentPage(contentText)
})

Then('I can see content {string} on topic page', (contentText) => {
  topics.contentIsVisibleOnTopicPage(contentText)
})

When('I click on button Edit on topic page', () => {
  topics.clickOnButtonEditInTopicPage()
})


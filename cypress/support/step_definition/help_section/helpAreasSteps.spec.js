import Help from '../../pages/help_section/pageHelpSection'

const help = new Help()

// EXTERNAL COMMON STEP DEFINITIONS
// ================================
// External defined steps can be found here:
// -----------------------------------------
// -->\step_definition\authentication\loginStep.spec.js
// --> \step_definition\help_section\commonHelpSectionRelatedSteps.spec.js


//Scenario: Use the help area in the header

When('I click on the question icon in header', () => {
  help.clickQuestionIcon()
})

And('I click on help section in header', () => {
  help.clickHelpSectionInHeader()
})

Then('I can see the help articles page', () => {
  help.seeHelpArticlesPage()
})

When('I click on the question icon in header', () => {
  help.clickQuestionIcon()
})

And('I click on send request or problem in header', () => {
  help.clickSendRequestOrProblemInHeader()
})

Then('I can see the help contact page', () => {
  help.seeHelpContactPage()
})

When('I click on the question icon in header', () => {
  help.clickQuestionIcon()
})

And('I click on advanced trainings in header', () => {
  help.advancedTrainingsInHeader()
})

//Scenario: Use the help area in the sidebar

Then('I can see the help articles page', () => {
  help.seeHelpArticlesPage()
})

Then('I can see the help articles page', () => {
  help.seeHelpArticlesPage()
})


Then('I can see the help contact page', () => {
  help.seeHelpContactPage()
})

//Scenario: Use the article search inside the help articles area

Then('I can see the help articles page', () => {
  help.seeHelpArticlesPage()
})

When('I enter keyword in search bar', () => {
  help.enterKeywordInSearchbar()
})

Then('I can see an help article related to my search', () => {
  help.seeHelpArticle()
})

//Scenario: Submit an issue via contact form inside help area

Then('I can see the help contact page', () => {
  help.seeHelpContactPage()
})

When('I fill out the contact form', () => {
  help.fillOutContactForm()
})

Then('I can send it to the support', () => {
  help.sendFormToSupport()
})
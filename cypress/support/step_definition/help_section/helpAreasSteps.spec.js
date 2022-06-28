import Help from '../../pages/help_section/pageHelpSection'

const help = new Help()

//Scenario: Use the help area in the header
//Given ('I am logged in as a 'teacher' at 'brb'')
//step defined -->\step_definition\authentication\loginStep.spec.js

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
//Given ('I am logged in as a 'teacher' at 'brb'')
//step defined --> \step_definition\commonGlobalSteps\loginSteps.spec.js

//When I go to help section in sidebar
//step defined --> \step_definition\help_section\commonHelpSectionRelatedSteps.spec.js

Then('I can see the help articles page', () => {
  help.seeHelpArticlesPage()
})

//When I go to help articles in sidebar
//step defined --> \step_definition\help_section\commonHelpSectionRelatedSteps.spec.js

Then('I can see the help articles page', () => {
  help.seeHelpArticlesPage()
})

//When I go to help articles in sidebar
//step defined --> \step_definition\help_section\commonHelpSectionRelatedSteps.spec.js

Then('I can see the help contact page', () => {
  help.seeHelpContactPage()
})

//When I go to advanced trainings in sidebar
//step defined --> \step_definition\help_section\commonHelpSectionRelatedSteps.spec.js

//Then a new tab in browser opens (not to be implemented)


//Scenario: Use the article search inside the help articles area
//Given ('I am logged in as a 'teacher' at 'brb'')
//step defined --> \step_definition\commonGlobalSteps\loginSteps.spec.js

//When I go to help section in sidebar
//step defined --> \step_definition\help_section\commonHelpSectionRelatedSteps.spec.js

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
//Given ('I am logged in as a 'teacher' at 'brb'')
//step defined --> \step_definition\commonGlobalSteps\loginSteps.spec.js

//When I go to help section in sidebar
//step defined --> \step_definition\help_section\commonHelpSectionRelatedSteps.spec.js

//When I go to contact in sidebar
//step defined --> \step_definition\help_section\commonHelpSectionRelatedSteps.spec.js


Then('I can see the help contact page', () => {
  help.seeHelpContactPage()
})

When('I fill out the contact form', () => {
  help.fillOutContactForm()
})

Then('I can send it to the support', () => {
  help.sendFormToSupport()
})
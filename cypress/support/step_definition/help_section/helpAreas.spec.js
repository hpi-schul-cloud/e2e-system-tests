import Help from '../../pages/help_section/pageHelpSection'

const help = new Help()

//Scenario: Use the help area in the header

//Given ('I am logged in as a 'teacher' at 'brb'')
//step defined --> \step_definition\commonGlobalSteps\loginSteps.spec.js

When('I click on the question icon in header', () => {
  help.clickQuestionIcon()
})

And('I click on help section in header', () => {
  help.clickHelpSectionInHeader()
})

And('I click on send request or problem in header', () => {
  help.clickSendRequestOrProblemInHeader()
})

And('I click on advanced trainings in header', () => {
  help.advancedTrainingsInHeader()
})


//Scenario: Use the help area in the sidebar

//Given ('I am logged in as a 'teacher' at 'brb'')
//step defined --> \step_definition\commonGlobalSteps\loginSteps.spec.js

Then('I can see the help articles page', () => {
  help.seeHelpArticlesPage()
})

Then('I can see the help contact page', () => {
  help.seeHelpContactPage()
})


//Scenario: Use the article search inside the help articles area
//Given I am logged in as a 'teacher' at 'brb'

When('I enter keyword in search bar', () => {
  help.enterKeywordInSearchbar()
})

Then('I can see an help article related to my search', () => {
  help.seeHelpArticle()
})

//Scenario: Submit an issue via contact form inside help area
//Given I am logged in as a 'teacher' at 'brb'

When('I fill out the contact form', () => {
  help.fillOutContactForm()
})

Then('I can send it to the support', () => {
  help.sendFormToSupport()
})
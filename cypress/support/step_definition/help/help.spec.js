import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Help from '../../pages/help/pageHelp'

const selectHelp= new Help()

When('I click on the question icon in header', () => {
    selectHelp.clickQuestionIcon()
})

When('I click on help section in header', () => {
    selectHelp.clickHelpSectionInHeader()
})

When('I click on send request or problem in header', () => {
    selectHelp.clickSendRequestOrProblemInHeader()
})

When('I click on advanced trainings in header', () => {
    selectHelp.advancedTrainingsInHeader()
})

When('I enter keyword in search bar', () => {
    selectHelp.enterKeywordInSearchbar()
})

When('I fill out the contact form', () => {
    selectHelp.fillOutContactForm()
})

Then('I can see the help articles page', () => {
    selectHelp.seeHelpArticlesPage()
})

Then('I can see the help contact page', () => {
    selectHelp.seeHelpContactPage()
})

Then('I can see an help article related to my search', () => {
    selectHelp.seeHelpArticle()
})

Then('I can send it to the support', () => {
    selectHelp.sendFormToSupport()
})
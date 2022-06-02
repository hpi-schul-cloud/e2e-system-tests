import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Help from '../../pages/help/pageHelp'

const help= new Help()

When('I click on the question icon in header', () => {
    help.clickQuestionIcon()
})

When('I click on help section in header', () => {
    help.clickHelpSectionInHeader()
})

When('I click on send request or problem in header', () => {
    help.clickSendRequestOrProblemInHeader()
})

When('I click on advanced trainings in header', () => {
    help.advancedTrainingsInHeader()
})

When('I enter keyword in search bar', () => {
    help.enterKeywordInSearchbar()
})

When('I fill out the contact form', () => {
    help.fillOutContactForm()
})

Then('I can see the help articles page', () => {
    help.seeHelpArticlesPage()
})

Then('I can see the help contact page', () => {
    help.seeHelpContactPage()
})

Then('I can see an help article related to my search', () => {
    help.seeHelpArticle()
})

Then('I can send it to the support', () => {
    help.sendFormToSupport()
})
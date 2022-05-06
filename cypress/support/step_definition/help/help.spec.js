import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Help from '../../page/common/help'

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
    selectHelp.clickAdvancedTrainingsInHeader()
})

When('I click on help section in sidebar', () => {
    selectHelp.clickHelpSectionInSidebar()
})

When('I click on help articles in sidebar', () => {
    selectHelp.clickHelpArticlesInSidebar()
})

When('I click on contact in sidebar', () => {
    selectHelp.clickHelpContactInSidebar()
})

When('I click on advanced trainings in sidebar', () => {
    selectHelp.clickAdvancedTrainingsInSidebar()
})

Then('I can see the help articles page', () => {
    selectHelp.seeHelpArticlesPage()
})

Then('I can see the help contact page', () => {
    selectHelp.seeHelpContactPage()
})

//Then('a new tab in browser opens', () => {
//
//})
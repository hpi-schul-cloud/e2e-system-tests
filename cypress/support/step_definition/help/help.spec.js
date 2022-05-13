import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Help from '../../pages/help/pageHelp'
import Page_Navigation from '../../pages/common/pageNavigation'

const selectNavigation = new Page_Navigation()
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

Then('I can see the help articles page', () => {
    selectHelp.seeHelpArticlesPage()
})

Then('I can see the help contact page', () => {
    selectHelp.seeHelpContactPage()
})

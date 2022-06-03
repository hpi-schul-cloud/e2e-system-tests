import Help from '../../pages/help/pageHelp'
import Navigation from '../../pages/common_global/pageNavigation'

const help= new Help()
const navigation = new Navigation()


//Scenario: Use the help area in the header
        //Given I am logged in as a 'teacher' at 'brb'
        When('I click on the question icon in header', () => {
            help.clickQuestionIcon()
        })
        And ('I click on help section in header', () => {
            help.clickHelpSectionInHeader()
        })
        Then('I can see the help articles page', () => {
            help.seeHelpArticlesPage()
        })
        When('I click on the question icon in header', () => {
            help.clickQuestionIcon()
        })
        And ('I click on send request or problem in header', () => {
            help.clickSendRequestOrProblemInHeader()
        })
        Then('I can see the help contact page', () => {
            help.seeHelpContactPage()
        })
        When('I click on the question icon in header', () => {
            help.clickQuestionIcon()
        })
        And ('I click on advanced trainings in header', () => {
            help.advancedTrainingsInHeader()
        })


//Scenario: Use the help area in the sidebar
        //Given I am logged in as a 'teacher' at 'brb'
        When('I go to help section in sidebar', () => {
            navigation.goToHelpSection()
          })
          Then('I can see the help articles page', () => {
            help.seeHelpArticlesPage()
        })
        When('I go to help articles in sidebar', () => {
            navigation.goToHelpArticles()
          })
          Then('I can see the help articles page', () => {
            help.seeHelpArticlesPage()
        })
        When ('I go to contact in sidebar', () => {
            navigation.goToHelpContact()
          })
          Then('I can see the help contact page', () => {
            help.seeHelpContactPage()
        })
        When('I go to advanced trainings in sidebar', () => {
            navigation.goToAdvancedTrainings()
          })


//Scenario: Use the article search inside the help articles area
        //Given I am logged in as a 'teacher' at 'brb'
        When('I go to help section in sidebar', () => {
            navigation.goToHelpSection()
          })
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
        //Given I am logged in as a 'teacher' at 'brb'
        When('I go to help section in sidebar', () => {
            navigation.goToHelpSection()
          })
          When('I go to contact in sidebar', () => {
            navigation.goToHelpContact()
          })

          Then('I can see the help contact page', () => {
            help.seeHelpContactPage()
        })
        When('I fill out the contact form', () => {
            help.fillOutContactForm()
        })
        Then('I can send it to the support', () => {
            help.sendFormToSupport()
        })
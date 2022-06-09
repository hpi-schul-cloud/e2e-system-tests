import Help_Common from '../../pages/help_section/pageCommonHelpSection'

const helpCommon = new Help_Common()

When('I go to help section in sidebar', () => {
  helpCommon.navigateToHelpSection()
})

When('I go to help articles in sidebar', () => {
  helpCommon.navigateToHelpArticles()
})

When('I go to contact in sidebar', () => {
  helpCommon.navigateToHelpContact()
})

When('I go to advanced trainings in sidebar', () => {
  helpCommon.navigateToAdvancedTrainings()
})

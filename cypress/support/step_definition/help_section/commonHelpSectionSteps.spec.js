import Help from '../../pages/help_section/pageHelpSection'

const help = new Help()

When('I go to help section in sidebar', () => {
  help.navigateToHelpSection()
})

When('I go to help articles in sidebar', () => {
  help.navigateToHelpArticles()
})

When('I go to contact in sidebar', () => {
  help.navigateToHelpContact()
})

When('I go to advanced trainings in sidebar', () => {
  help.navigateToAdvancedTrainings()
})